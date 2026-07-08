import { useState, useEffect, useCallback } from 'react';

export type VariantId = string;

export interface ABTest {
  id: string;
  name: string;
  variants: VariantId[];
  weights?: number[];
}

export interface TrackedEvent {
  id: string;
  testId: string;
  variant: VariantId;
  eventType: 'cta_click' | 'form_start' | 'form_submit' | 'form_abandon' | 'page_view' | 'phone_click';
  elementId: string;
  pageUrl: string;
  timestamp: number;
  metadata?: Record<string, string | number>;
}

const STORAGE_KEY_ASSIGNMENTS = 'ab_test_assignments';
const STORAGE_KEY_EVENTS = 'ab_test_events';
const MAX_EVENTS = 5000;

function getAssignments(): Record<string, VariantId> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ASSIGNMENTS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAssignments(assignments: Record<string, VariantId>) {
  try {
    localStorage.setItem(STORAGE_KEY_ASSIGNMENTS, JSON.stringify(assignments));
  } catch {
    // Storage full or unavailable
  }
}

function getEvents(): TrackedEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_EVENTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveEvents(events: TrackedEvent[]) {
  try {
    const trimmed = events.slice(-MAX_EVENTS);
    localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(trimmed));
  } catch {
    // Storage full or unavailable
  }
}

function assignVariant(test: ABTest): VariantId {
  const assignments = getAssignments();
  if (assignments[test.id]) {
    return assignments[test.id];
  }

  const weights = test.weights ?? test.variants.map(() => 1 / test.variants.length);
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < test.variants.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      assignments[test.id] = test.variants[i];
      saveAssignments(assignments);
      return test.variants[i];
    }
  }

  return test.variants[test.variants.length - 1];
}

export function useABTest(test: ABTest) {
  const [variant, setVariant] = useState<VariantId>(test.variants[0]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const assigned = assignVariant(test);
    setVariant(assigned);
    setIsReady(true);
  }, [test.id]);

  const trackEvent = useCallback((
    eventType: TrackedEvent['eventType'],
    elementId: string,
    metadata?: Record<string, string | number>
  ) => {
    const event: TrackedEvent = {
      id: `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      testId: test.id,
      variant,
      eventType,
      elementId,
      pageUrl: window.location.pathname,
      timestamp: Date.now(),
      metadata,
    };

    const events = getEvents();
    events.push(event);
    saveEvents(events);

    // Also push to dataLayer for Google Analytics
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventType,
        ab_test_id: test.id,
        ab_variant: variant,
        ab_element_id: elementId,
        page_path: window.location.pathname,
        ...metadata,
      });
    }
  }, [test.id, variant]);

  return { variant, isReady, trackEvent };
}

export function getAllEvents(): TrackedEvent[] {
  return getEvents();
}

export function getTestStats(testId: string) {
  const events = getEvents().filter((e) => e.testId === testId);
  const assignments = getAssignments();
  const variant = assignments[testId];

  const clicks = events.filter((e) => e.eventType === 'cta_click');
  const formStarts = events.filter((e) => e.eventType === 'form_start');
  const formSubmits = events.filter((e) => e.eventType === 'form_submit');

  return {
    variant,
    totalEvents: events.length,
    clicks: clicks.length,
    formStarts: formStarts.length,
    formSubmits: formSubmits.length,
    conversionRate: formStarts.length > 0 ? (formSubmits.length / formStarts.length * 100).toFixed(1) : '0.0',
    clickRate: events.filter((e) => e.eventType === 'page_view').length > 0
      ? (clicks.length / events.filter((e) => e.eventType === 'page_view').length * 100).toFixed(1)
      : '0.0',
    eventsByDay: groupEventsByDay(events),
    variantBreakdown: groupByVariant(events),
  };
}

function groupEventsByDay(events: TrackedEvent[]) {
  const groups: Record<string, number> = {};
  events.forEach((e) => {
    const day = new Date(e.timestamp).toISOString().split('T')[0];
    groups[day] = (groups[day] || 0) + 1;
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, count }));
}

function groupByVariant(events: TrackedEvent[]) {
  const groups: Record<string, { clicks: number; formStarts: number; formSubmits: number }> = {};
  events.forEach((e) => {
    if (!groups[e.variant]) {
      groups[e.variant] = { clicks: 0, formStarts: 0, formSubmits: 0 };
    }
    if (e.eventType === 'cta_click') groups[e.variant].clicks++;
    if (e.eventType === 'form_start') groups[e.variant].formStarts++;
    if (e.eventType === 'form_submit') groups[e.variant].formSubmits++;
  });
  return groups;
}

export function clearAnalyticsData() {
  localStorage.removeItem(STORAGE_KEY_EVENTS);
  localStorage.removeItem(STORAGE_KEY_ASSIGNMENTS);
}

// Predefined tests for Broadview Solutions
export const CTA_BUTTON_TEST: ABTest = {
  id: 'cta_button_v1',
  name: 'Homepage CTA Button Copy',
  variants: ['A', 'B', 'C'],
  weights: [0.34, 0.33, 0.33],
};

export const FORM_SUBMIT_TEST: ABTest = {
  id: 'form_submit_v1',
  name: 'Contact Form Submit Button',
  variants: ['A', 'B', 'C', 'D', 'E'],
  weights: [0.2, 0.2, 0.2, 0.2, 0.2],
};

export const FORM_FIELDS_TEST: ABTest = {
  id: 'form_fields_v1',
  name: 'Contact Form Field Configuration',
  variants: ['A', 'B'],
  weights: [0.5, 0.5],
};

export const BUTTON_STYLE_TEST: ABTest = {
  id: 'button_style_v1',
  name: 'CTA Button Visual Style',
  variants: ['solid', 'gradient', 'pulse', 'large'],
  weights: [0.25, 0.25, 0.25, 0.25],
};