import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const supportedLocales = ['en','de','pl','no','fr','es','pt','ru','ar','hi','id','fil','th','vi'];
const localesRegex = new RegExp(`^\\/(${supportedLocales.join('|')})(\\/|$)`);

export const LocalizedLink = React.forwardRef(({ to, ...props }, ref) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] || 'en';

  let localizedTo = to;
  if (typeof to === 'string') {
    if (to.startsWith('/') && !to.startsWith('http://') && !to.startsWith('https://')) {
      const isAlreadyPrefixed = localesRegex.test(to);
      if (!isAlreadyPrefixed) {
        localizedTo = `/${currentLang}${to === '/' ? '' : to}`;
      }
    }
  } else if (typeof to === 'object' && to.pathname) {
    if (to.pathname.startsWith('/') && !to.pathname.startsWith('http://') && !to.pathname.startsWith('https://')) {
      const isAlreadyPrefixed = localesRegex.test(to.pathname);
      if (!isAlreadyPrefixed) {
        localizedTo = {
          ...to,
          pathname: `/${currentLang}${to.pathname === '/' ? '' : to.pathname}`
        };
      }
    }
  }

  return <RouterLink ref={ref} to={localizedTo} {...props} />;
});

LocalizedLink.displayName = 'LocalizedLink';

export default LocalizedLink;
