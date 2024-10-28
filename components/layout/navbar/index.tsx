import { ModeToggle } from '@/components/mode-toggle';
import CartModal from 'components/cart/modal';
import Divider from 'components/divider';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import { NavigationMenuComp } from './navigation-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('main-menu');

  return (
    <nav className="sticky top-0 z-50 bg-neutral-50 dark:bg-neutral-900 flex flex-col justify-between p-4 lg:px-6">
      <div className="relative flex items-center justify-between">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <LogoSquare />
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {SITE_NAME}
              </div>
            </Link>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="flex justify-end gap-x-4 md:w-1/3">
            <Suspense fallback={null}>
              <ModeToggle />
            </Suspense>
            <CartModal />
          </div>
        </div>
      </div>
     
      {/* NavigationMenu */}
      <div className="flex justify-center mt-4">
        {menu.length ? (
          <div className="hidden text-sm md:block">
            <Suspense fallback={null}>
              <NavigationMenuComp menu={menu} />
            </Suspense>
          </div>
        ) : null}
      </div>
      <Divider className='mt-4'/>
    </nav>
  );
}
