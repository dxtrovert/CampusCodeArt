import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SiteHeader from './components/layout/SiteHeader.jsx';
import useSmoothScroll from './hooks/useSmoothScroll.js';

const LandingPage = lazy(() => import('./pages/Landing/LandingPage.jsx'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage.jsx'));
const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage.jsx'));

export default function App() {
  useSmoothScroll();

  return (
    <>
      <SiteHeader />
      <Suspense fallback={<main className="route-loading" aria-live="polite">Loading CampusCode...</main>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
