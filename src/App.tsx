import { BrowserRouter, useLocation, useRoutes } from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';
import { AppRoutes } from './router';
import ScrollToTop from './components/feature/ScrollToTop';
import CallNowButton from './components/feature/CallNowButton';
import PageLoader from './components/performance/PageLoader';
import { useWebVitals } from './hooks/useWebVitals';

function WebVitalsReporter() {
  useWebVitals(true);
  return null;
}

function RoutePrefetcher() {
  const location = useLocation();

  useEffect(() => {
    // Prefetch critical route components after initial load
    const timer = setTimeout(() => {
      // Prefetch commonly visited routes
      const prefetchRoutes = [
        () => import('./pages/contact/page'),
        () => import('./pages/services/page'),
        () => import('./pages/about/page'),
      ];
      prefetchRoutes.forEach(importFn => {
        // Use requestIdleCallback for non-critical prefetching
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => {
            importFn().catch(() => {
              // Silently fail prefetch - main navigation still works
            });
          }, { timeout: 2000 });
        }
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <WebVitalsReporter />
      <RoutePrefetcher />
      <ScrollToTop />
      <CallNowButton />
      <Suspense fallback={<PageLoader />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
