import { lazy } from 'react';
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";

const DashboardShell = lazy(() => import("../pages/dashboard/DashboardShell"));

const Home = lazy(() => import("../pages/home/page"));
const About = lazy(() => import("../pages/about/page"));
const Commercial = lazy(() => import("../pages/commercial/page"));
const Residential = lazy(() => import("../pages/residential/page"));
const Services = lazy(() => import("../pages/services/page"));
const LawnMaintenance = lazy(() => import("../pages/services/lawn-maintenance/page"));
const SeasonalCleanup = lazy(() => import("../pages/services/seasonal-cleanup/page"));
const SnowPlowing = lazy(() => import("../pages/services/snow-plowing/page"));
const CommercialLawnCare = lazy(() => import("../pages/services/commercial-lawn-care/page"));
const ResidentialLawnCare = lazy(() => import("../pages/services/residential-lawn-care/page"));
const SeasonalCleanupGoshen = lazy(() => import("../pages/services/seasonal-cleanup-goshen/page"));
const ServiceAreas = lazy(() => import("../pages/service-areas/page"));
const Blog = lazy(() => import("../pages/blog/page"));
const BlogPost = lazy(() => import("../pages/blog/[id]/page"));
const Analytics = lazy(() => import("../pages/analytics/page"));
const Contact = lazy(() => import("../pages/contact/page"));
const Testimonials = lazy(() => import("../pages/testimonials/page"));
const Team = lazy(() => import("../pages/team/page"));
const PrivacyPolicy = lazy(() => import("../pages/privacy-policy/page"));
const TermsOfService = lazy(() => import("../pages/terms-of-service/page"));
const Sitemap = lazy(() => import("../pages/sitemap/page"));

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/commercial", element: <Commercial /> },
  { path: "/residential", element: <Residential /> },
  { path: "/services", element: <Services /> },
  { path: "/services/lawn-maintenance", element: <LawnMaintenance /> },
  { path: "/services/seasonal-cleanup", element: <SeasonalCleanup /> },
  { path: "/services/snow-plowing", element: <SnowPlowing /> },
  { path: "/services/commercial-lawn-care", element: <CommercialLawnCare /> },
  { path: "/services/residential-lawn-care", element: <ResidentialLawnCare /> },
  { path: "/services/seasonal-cleanup-goshen", element: <SeasonalCleanupGoshen /> },
  { path: "/service-areas", element: <ServiceAreas /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <BlogPost /> },
  { path: "/contact", element: <Contact /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/team", element: <Team /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/sitemap", element: <Sitemap /> },
  { path: "/dashboard/*", element: <DashboardShell /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "*", element: <NotFound /> },
];

export default routes;