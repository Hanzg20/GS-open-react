'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'zh' as const, name: '中文', flag: '🇨🇳' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
          <span className="text-lg">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {languages.map((language) => (
            <MenuItem key={language.code}>
              {({ focus }) => (
                <button
                  onClick={() => setLocale(language.code)}
                  className={`${
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } ${
                    locale === language.code ? 'bg-yellow-50 font-semibold' : ''
                  } group flex w-full items-center gap-x-2 px-4 py-2 text-sm transition-colors`}
                >
                  <span className="text-lg">{language.flag}</span>
                  {language.name}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
