import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Toaster } from "@/components/ui/toaster";
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams, useLocation, useNavigate } from 'react-router-dom';
import LocaleWrapper from '@/components/LocaleWrapper';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Solutions from '@/pages/solutions/Solutions';
import Governments from '@/pages/solutions/Governments';
import HousingDevelopers from '@/pages/solutions/HousingDevelopers';
import Corporations from '@/pages/solutions/Corporations';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import ScrollToTop from '@/components/shared/ScrollToTop';
import BackToTop from '@/components/shared/BackToTop';
import CookiesBanner from '@/components/shared/CookiesBanner';

const NavigateWithQuery = ({ to, replace }) => {
  const location = useLocation();
  return <Navigate to={{ pathname: to, search: location.search }} replace={replace} />;
};

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  const { i18n } = useTranslation();

  const supportedLocales = ['en','de','pl','no','fr','es','pt','ru','ar','hi','id','fil','th','vi'];

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-navy">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 bg-teal rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm" />
          </div>
          <div className="w-6 h-6 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<NavigateWithQuery to="/en" replace />} />
      <Route path="/:lang/*" element={<LocaleWrapper />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Sync document language and direction
    const lang = i18n.language || 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <ScrollToTop />
            <BackToTop />
            <CookiesBanner />
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;