import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, pathnames, localePrefix } from './config';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales /* ... */ });
