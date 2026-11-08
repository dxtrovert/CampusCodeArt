import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteHeader from './components/layout/SiteHeader.jsx';
import useSmoothScroll from './hooks/useSmoothScroll.js';

const LandingPage = lazy(() => import('./pages/Landing/LandingPage.jsx'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage.jsx'));
const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage.jsx'));
const EventsPage = lazy(() => import('./pages/Dashboard/EventsPage.jsx'));
const WorkspacePage = lazy(() => import('./pages/Dashboard/WorkspacePage.jsx'));

export default function App() {
  useSmoothScroll();
  const { pathname } = useLocation();
  const isAuthPage = /^\/(login|register|dashboard|events|explore|projects|team|saved|notifications|settings|profile)\/?$/.test(pathname);

  return (
    <>
      {!isAuthPage && <SiteHeader />}
      <Suspense fallback={<main className="route-loading" aria-live="polite">Loading CampusCode...</main>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/explore" element={<EventsPage />} />
          {['projects', 'team', 'saved', 'notifications', 'settings', 'profile'].map((page) => <Route key={page} path={`/${page}`} element={<WorkspacePage page={page} />} />)}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
