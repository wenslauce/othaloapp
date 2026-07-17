import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Page components
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
import MediaCoverage from '@/pages/MediaCoverage';
import PageNotFound from '@/lib/PageNotFound';

const supportedLocales = [
  'en','de','pl','no','fr','es','pt','ru','ar','hi','id','fil','th','vi'
];

const localesRegex = new RegExp(`^\\/(${supportedLocales.join('|')})(\\/|$)`);

/**
 * LocaleWrapper extracts the language segment from the URL, synchronises i18next,
 * stores the selection in localStorage and renders the rest of the application's
 * route tree under the same layout. If an unsupported locale is detected, the
 * user is redirected to the default locale ("en").
 */
export default function LocaleWrapper() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Guard against invalid locale codes
    if (!supportedLocales.includes(lang)) {
      // Replace the pathname with the default locale while preserving the rest of the path and the query params
      const cleanPath = location.pathname.replace(localesRegex, '/');
      navigate({
        pathname: `/en${cleanPath === '/' ? '' : cleanPath}`,
        search: location.search
      }, { replace: true });
      return;
    }
    // Update i18next and persist the choice
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  }, [lang, location.pathname, location.search, i18n, navigate]);

  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="solutions/governments" element={<Governments />} />
        <Route path="solutions/housing-developers" element={<HousingDevelopers />} />
        <Route path="solutions/corporations" element={<Corporations />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="press" element={<MediaCoverage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
