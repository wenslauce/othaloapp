import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: 'gb' },
  { code: 'no', name: 'Norsk', flag: 'no' },
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'es', name: 'Español', flag: 'es' },
  { code: 'pt', name: 'Português', flag: 'pt' },
  { code: 'ar', name: 'العربية', flag: 'ae' },
  { code: 'ru', name: 'Русский', flag: 'ru' },
  { code: 'hi', name: 'हिन्दी', flag: 'in' },
  { code: 'id', name: 'Bahasa Indonesia', flag: 'id' },
  { code: 'fil', name: 'Filipino', flag: 'ph' },
  { code: 'th', name: 'ไทย', flag: 'th' },
  { code: 'vi', name: 'Tiếng Việt', flag: 'vn' },
];

export default function LanguageSwitcher({ variant = 'default', className = '' }) {
  const { i18n } = useTranslation();
  const currentLanguage = languages.find(lang => i18n.language?.startsWith(lang.code)) || languages[0];
  
  useEffect(() => {
    const code = i18n.language?.split('-')[0] || 'en';
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
  }, [i18n.language]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
  };

  const isLight = variant === 'light';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`gap-2 h-9 rounded-sm px-2 lg:px-3 transition-colors ${
            isLight 
              ? 'text-navy hover:bg-navy/5 border-navy/10' 
              : 'text-white hover:bg-white/10 border-white/20'
          } ${className}`}
        >
          <img 
            src={`https://flagcdn.com/w40/${currentLanguage.flag}.png`}
            width="20"
            alt=""
            className="rounded-[1px] shadow-sm flex-shrink-0"
          />
          <span className="uppercase text-[10px] font-bold tracking-widest hidden lg:inline">{currentLanguage.code}</span>
          <ChevronDown className="w-3 h-3 opacity-40 ml-0.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border-tech-slate rounded-sm p-1 min-w-[160px] z-[60]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center justify-between gap-3 px-3 py-2.5 cursor-pointer rounded-sm text-xs font-medium transition-colors ${
              i18n.language?.startsWith(lang.code) ? 'bg-teal/10 text-teal' : 'text-navy hover:bg-surface'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <img 
                src={`https://flagcdn.com/w40/${lang.flag}.png`}
                width="20"
                alt=""
                className="rounded-[1px] shadow-sm flex-shrink-0"
              />
              {lang.name}
            </span>
            {i18n.language?.startsWith(lang.code) && (
              <div className="w-1.5 h-1.5 bg-teal rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
