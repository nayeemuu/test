'use client';

import Link from 'next/link';
import Image from 'next/image';

import bn from '../../../../public/assets/flag/bd.png';
import en from '../../../../public/assets/flag/en.webp';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  // console.log(pathname);

  const languages = [
    {
      code: 'en',
      language: 'English',
      flag: en,
    },
    {
      code: 'bn',
      language: 'Bangla',
      flag: bn,
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showManu, setShowManu] = useState(false);

  const handleLanguageChange = (lang) => {
    // console.log('lang = ', lang);
    let path = pathname;

    // console.log('path = ', path);
    if (pathname.startsWith(`/${selectedLanguage.code}`)) {
      path = pathname.replace(`/${selectedLanguage.code}`, `/${lang}`);
      window.location.replace(path);
    } else {
      path = `/${lang}/${path}`;
      router.push(path);
    }
    // console.log('path = ', path);
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === 'en' ? 'English' : 'Bangla',
    });
    setShowManu(false);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowManu(!showManu)}
        >
          <Image
            className="max-w-8"
            src={selectedLanguage.flag}
            alt="bangla"
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>
        {showManu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer text-black hover:bg-gray-100"
              >
                <Image
                  className="max-w-8"
                  src={entry.flag}
                  alt="bangla"
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
