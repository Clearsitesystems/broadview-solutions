import { useEffect, useRef } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id?: string;
  entries?: unknown;
}

type ReportHandler = (metric: WebVitalsMetric) => void;

/**
 * Performance Observer wrapper for Core Web Vitals.
 * Reports LCP, INP, CLS, FCP, TTFB to console and optionally to analytics.
 */
export function useWebVitals(reportToAnalytics?: boolean) {
  const reportedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const report: ReportHandler = (metric) => {
      const id = `${metric.name}-${metric.id || Date.now()}`;
      if (reportedRef.current.has(id)) return;
      reportedRef.current.add(id);

      // Log to console in dev
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.log(
          `%c[WebVitals] ${metric.name}: ${Math.round(metric.value)}ms (${metric.rating})`,
          `color: ${metric.rating === 'good' ? '#22c55e' : metric.rating === 'needs-improvement' ? '#eab308' : '#ef4444'}; font-weight: bold;`
        );
      }

      // Send to analytics if enabled
      if (reportToAnalytics) {
        try {
          // Analytics beacon to Readdy removed during migration (no-op).
        } catch {
          // Silently fail - analytics are not critical
        }
      }

      // Dispatch custom event for components that need to react
      window.dispatchEvent(
        new CustomEvent('web-vitals', {
          detail: metric,
        })
      );
    };

    // CLS observer
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsEntries.push(entry);
          clsValue += (entry as any).value;
        }
      }
      const rating = clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor';
      report({
        name: 'CLS',
        value: Math.round(clsValue * 1000) / 1000,
        rating,
        entries: clsEntries,
      });
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true } as any);

    // LCP observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      const value = lastEntry.startTime;
      const rating = value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      report({
        name: 'LCP',
        value,
        rating,
        entries: entries,
      });
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true } as any);

    // FCP observer
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const firstEntry = entries[0] as any;
      if (firstEntry) {
        const value = firstEntry.startTime;
        const rating = value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
        report({
          name: 'FCP',
          value,
          rating,
          entries: entries,
        });
      }
    });
    fcpObserver.observe({ type: 'paint', buffered: true } as any);

    // INP observer (Interaction to Next Paint)
    let inpValue = 0;
    let inpEntries: PerformanceEntry[] = [];
    const inpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const e = entry as any;
        if (e.interactionId > 0) {
          inpEntries.push(entry);
          inpValue = Math.max(inpValue, e.duration);
        }
      }
      if (inpEntries.length > 0) {
        const rating = inpValue <= 200 ? 'good' : inpValue <= 500 ? 'needs-improvement' : 'poor';
        report({
          name: 'INP',
          value: inpValue,
          rating,
          entries: inpEntries,
        });
      }
    });
    inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 0 } as any);

    // TTFB from navigation timing
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        const nav = navEntries[0] as PerformanceNavigationTiming;
        const value = nav.responseStart;
        const rating = value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
        report({
          name: 'TTFB',
          value,
          rating,
        });
      }
    } catch {
      // Navigation timing not supported
    }

    return () => {
      clsObserver.disconnect();
      lcpObserver.disconnect();
      fcpObserver.disconnect();
      inpObserver.disconnect();
    };
  }, [reportToAnalytics]);

  return null;
}

/**
 * Hook to measure and log component render time
 */
export function useRenderPerf(label: string) {
  const startRef = useRef(performance.now());

  useEffect(() => {
    const end = performance.now();
    const duration = Math.round(end - startRef.current);
    if (import.meta.env.DEV && duration > 16) {
      // eslint-disable-next-line no-console
      console.log(`[Render] ${label} took ${duration}ms`);
    }
  }, [label]);
}
