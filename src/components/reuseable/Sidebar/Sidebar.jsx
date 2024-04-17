import trending from '../../../../public/assets/icons/trending.svg';
import newRelease from '../../../../public/assets/icons/newRelease.svg';
import favourite from '../../../../public/assets/icons/favourite.svg';
import commingSoon from '../../../../public/assets/icons/commingSoon.svg';
import watchLater from '../../../../public/assets/icons/watchLater.svg';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';

async function Sidebar({ lang }) {
  const dict = await getDictionary(lang);

  return (
    <ul className="space-y-2">
      <li>
        <Link
          className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
          href="#"
        >
          <Image src={trending} width="24" height="24" alt="" />
          <span>{dict.sidebar.trending}</span>
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          href="#"
        >
          <Image src={newRelease} width="24" height="24" alt="" />
          <span>{dict.sidebar.newRelease}</span>
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          href="#"
        >
          <Image src={commingSoon} width="24" height="24" alt="" />
          <span>{dict.sidebar.commingSoon}</span>
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          href="#"
        >
          <Image src={favourite} width="24" height="24" alt="" />
          <span>{dict.sidebar.favourites}</span>
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          href="#"
        >
          <Image src={watchLater} width="24" height="24" alt="" />
          <span>{dict.sidebar.watchLater}</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
