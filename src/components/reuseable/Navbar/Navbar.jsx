import logo from '../../../../public/assets/logo.svg';
import ring from '../../../../public/assets/ring.svg';
import sun from '../../../../public/assets/icons/sun.svg';
import cart from '../../../../public/assets/shopping-cart.svg';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Navbar() {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src={logo} width="139" height="26" alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <LanguageSwitcher />

          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={ring} width="24" height="24" alt="" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={sun} width="24" height="24" alt="" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={cart} width="24" height="24" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
