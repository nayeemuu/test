import 'server-only';
import { notFound } from 'next/navigation';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  bn: () => import('./bn.json').then((module) => module.default),
};

// export const getDictionary = async (locale) => dictionaries[locale]();

export const getDictionary = async (locale) => {
  if (locale === 'en' || locale === 'bn') {
    return dictionaries[locale]();
  } else return notFound();
};
