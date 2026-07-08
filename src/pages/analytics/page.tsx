import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';
import {
  getAllEvents,
  getTestStats,
  clearAnalyticsData,
  CTA_BUTTON_TEST,
  FORM_SUBMIT_TEST,
  FORM_FIELDS_TEST,
  BUTTON_STYLE_TEST,
} from '../../hooks/useABTest';

interface TestResult {
  id: string;
  name: string;
  variant: string;
  clicks: number;
  formStarts: number;
  formSubmits: number;
  conversionRate: string;
  eventsByDay: { date: string; count: number }[];
  variantBreakdown: Record<string, { clicks: number; formStarts: number; formSubmits: number }>;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function AnalyticsDashboard() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  useEffect(() => {
    const load = () => {
      const events = getAllEvents();
      setTotalEvents(events.length);
      setLastUpdated(new Date().toLocaleTimeString());

      const tests = [CTA_BUTTON_TEST, FORM_SUBMIT_TEST, FORM_FIELDS_TEST, BUTTON_STYLE_TEST];
      const stats = tests.map((test) => {
        const s = getTestStats(test.id);
        return {
          id: test.id,
          name: test.name,
          variant: s.variant || 'Not assigned',
          clicks: s.clicks,
          formStarts: s.formStarts,
          formSubmits: s.formSubmits,
          conversionRate: s.conversionRate,
          eventsByDay: s.eventsByDay.slice(-14),
          variantBreakdown: s.variantBreakdown,
        };
      });
      setResults(stats);
    };

    load();
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleClear = () => {
    clearAnalyticsData();
    setShowConfirmClear(false);
    setTotalEvents(0);
    setResults([]);
    setLastUpdated(new Date().toLocaleTimeString());
  };

  return (
    <div className="min-h-screen bg-[#1C2B2B]">
      <SeoHead
        title="A/B Testing Analytics | Broadview Solutions"
        description="Internal analytics dashboard for CTA conversion tracking and A/B test results."
        canonical="/analytics"
      />
      <Navbar />

      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">A/B Testing Analytics</h1>
              <p className="text-[#8A9BA8]">
                CTA Conversion Tracking Dashboard — Last updated: {lastUpdated}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-lg px-4 py-2">
                <span className="text-sm text-[#8A9BA8]">Total Events</span>
                <span className="text-xl font-bold text-primary ml-2">{totalEvents}</span>
              </div>
              <button
                onClick={() => setShowConfirmClear(true)}
                className="bg-red-500/20 border border-red-500/50 text-red-300 hover:bg-red-500/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                Clear Data
              </button>
            </div>
          </div>

          {showConfirmClear && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
              <p className="text-red-300 mb-4">
                Are you sure you want to clear all analytics data? This cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleClear}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  Yes, Clear All Data
                </button>
                <button
                  onClick={() => setShowConfirmClear(false)}
                  className="bg-[#1A2424] border border-[#8A9BA8]/30 text-[#C0C8CC] hover:text-white px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {results.map((r) => (
              <div
                key={r.id}
                className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-5 hover:border-primary/40 transition-colors"
              >
                <div className="text-xs text-[#8A9BA8] uppercase tracking-wider mb-1">{r.name}</div>
                <div className="text-2xl font-bold text-white mb-2">Variant {r.variant}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">{r.clicks}</span>
                  <span className="text-sm text-[#8A9BA8]">clicks</span>
                </div>
                <div className="text-sm text-[#8A9BA8] mt-1">
                  {r.formSubmits} conversions · {r.conversionRate}% rate
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Results */}
          <div className="space-y-8">
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-[#8A9BA8]/10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">{result.name}</h2>
                    <span className="text-sm text-[#8A9BA8] bg-[#1C2B2B] px-3 py-1 rounded-full">
                      Test ID: {result.id}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Variant Breakdown */}
                  <h3 className="text-sm font-semibold text-[#8A9BA8] uppercase tracking-wider mb-4">
                    Conversion by Variant
                  </h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-[#8A9BA8]/10">
                          <th className="py-3 pr-4 text-sm font-semibold text-[#C0C8CC]">Variant</th>
                          <th className="py-3 pr-4 text-sm font-semibold text-[#C0C8CC]">Clicks</th>
                          <th className="py-3 pr-4 text-sm font-semibold text-[#C0C8CC]">Form Starts</th>
                          <th className="py-3 pr-4 text-sm font-semibold text-[#C0C8CC]">Form Submits</th>
                          <th className="py-3 pr-4 text-sm font-semibold text-[#C0C8CC]">Conv. Rate</th>
                          <th className="py-3 text-sm font-semibold text-[#C0C8CC]">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(result.variantBreakdown).map(([variant, stats]) => {
                          const isWinner =
                            Object.entries(result.variantBreakdown).length > 1 &&
                            stats.formSubmits >=
                              Math.max(
                                ...Object.values(result.variantBreakdown).map((s) => s.formSubmits)
                              );
                          return (
                            <tr
                              key={variant}
                              className={`border-b border-[#8A9BA8]/5 ${
                                variant === result.variant ? 'bg-primary/5' : ''
                              }`}
                            >
                              <td className="py-3 pr-4">
                                <span className="font-semibold text-white">{variant}</span>
                                {variant === result.variant && (
                                  <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                                    You
                                  </span>
                                )}
                              </td>
                              <td className="py-3 pr-4 text-[#C0C8CC]">{stats.clicks}</td>
                              <td className="py-3 pr-4 text-[#C0C8CC]">{stats.formStarts}</td>
                              <td className="py-3 pr-4 text-[#C0C8CC]">{stats.formSubmits}</td>
                              <td className="py-3 pr-4">
                                <span className="font-semibold text-primary">
                                  {stats.formStarts > 0
                                    ? ((stats.formSubmits / stats.formStarts) * 100).toFixed(1)
                                    : '0.0'}
                                  %
                                </span>
                              </td>
                              <td className="py-3">
                                {isWinner && stats.formSubmits > 0 && (
                                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                                    Leading
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Daily Event Chart */}
                  {result.eventsByDay.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-[#8A9BA8] uppercase tracking-wider mb-4">
                        Daily Event Volume (Last 14 Days)
                      </h3>
                      <div className="flex items-end gap-1 h-32">
                        {result.eventsByDay.map((day) => {
                          const maxCount = Math.max(...result.eventsByDay.map((d) => d.count), 1);
                          const height = (day.count / maxCount) * 100;
                          return (
                            <div
                              key={day.date}
                              className="flex-1 flex flex-col items-center gap-1 min-w-0"
                            >
                              <div
                                className="w-full bg-primary/60 hover:bg-primary rounded-t transition-colors relative group"
                                style={{ height: `${Math.max(height, 4)}%` }}
                              >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-10">
                                  {day.count} events
                                </div>
                              </div>
                              <span className="text-[10px] text-[#8A9BA8] truncate w-full text-center">
                                {formatDate(day.date)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tracking Setup Guide */}
          <div className="mt-10 bg-[#1A2424] border border-[#8A9BA8]/20 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Google Analytics Integration</h2>
            <p className="text-[#C0C8CC] mb-6">
              All A/B test events are automatically pushed to the dataLayer. Add this Google Tag
              Manager snippet to your site header to send events to GA4:
            </p>
            <div className="bg-[#1C2B2B] rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-[#C0C8CC] font-mono">
                {`// In GTM, create a Custom Event trigger for:
// - event name: "cta_click"
// - event name: "form_submit"
// - event name: "form_start"

// Event parameters available:
// - ab_test_id: the test identifier
// - ab_variant: assigned variant (A, B, C, etc.)
// - ab_element_id: the CTA element identifier
// - page_path: current page URL

// Create GA4 Event tags for each event type
// Set conversion goals in GA4 for "form_submit" events`}
              </pre>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1C2B2B] rounded-lg p-4">
                <div className="text-sm font-semibold text-white mb-2">Recommended GA4 Goals</div>
                <ul className="text-sm text-[#8A9BA8] space-y-1">
                  <li>1. CTA Button Click</li>
                  <li>2. Form Submission</li>
                  <li>3. Phone Number Click</li>
                  <li>4. Page Engagement (60s+)</li>
                </ul>
              </div>
              <div className="bg-[#1C2B2B] rounded-lg p-4">
                <div className="text-sm font-semibold text-white mb-2">UTM Parameters</div>
                <p className="text-sm text-[#8A9BA8]">
                  All internal links pass UTM tracking:
                </p>
                <code className="text-xs text-primary block mt-1">
                  ?utm_source=site&utm_medium=cta&utm_campaign=free_estimate
                </code>
              </div>
              <div className="bg-[#1C2B2B] rounded-lg p-4">
                <div className="text-sm font-semibold text-white mb-2">Test Duration</div>
                <p className="text-sm text-[#8A9BA8]">
                  Run each test for 2-4 weeks minimum. Track at least 100 conversions per variant
                  before declaring a winner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}