import { Button } from '@/components/ui/button';
import {
  MenuIcon, ShirtIcon, ShoppingCartIcon,
} from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getUserAuth } from '@/lib/auth/utils';
import { NavbarDropdown } from '@/components/layout';
import { getCartsCount } from '@/lib/api/carts/queries';
import logo from '@/public/svg/logo.webp';
import Image from 'next/image';
import { UserRole } from '@/lib/types';
import { SearchInput } from '@/components/search/SearchInput';

interface Props extends PropsWithChildren {}

const links = [
  {
    href: '/products',
    label: 'Товари',
    icon: ShirtIcon,
  },
  {
    href: '/categories',
    label: 'Категорії',
    icon: ShoppingCartIcon,
  },
  {
    href: '/brands',
    label: 'Бренди',
    icon: ShoppingCartIcon,
  },
] as const;

export default async function AppLayout({ children }: Props) {
  const productsInCart = await getCartsCount();

  const { session } = await getUserAuth();

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link href="/">
                <Image width={50} height={50} src={logo} alt="Logo" />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {links.map(({ href, label }) => (
                    <li>
                      <Link
                        key={href}
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href={href}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <SearchInput />
              <div className="flex items-center gap-4">
                {(session?.user?.role === UserRole.ADMIN || session?.user?.role === UserRole.SELLER) ? (
                  <Link href="/admin/dashboard">
                    <Button>
                      Інформаційна панель
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link
                        className="relative flex h-10 w-10 items-center justify-center rounded-full text-app-secondary transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/cart"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="file: mt-4 h-6 w-6">
                        <path strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                      </svg>
                      <span
                          className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-app-secondary text-xs text-white"
                      >
                        {productsInCart}
                      </span>
                    </Link>
                    <NavbarDropdown isLoggedIn={!!session}/>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button className="lg:hidden" size="icon" variant="ghost">
                          <MenuIcon className="h-6 w-6"/>
                          <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left">
                        <div className="flex h-full flex-col justify-between p-4">
                          <nav className="grid gap-4">
                            {links.map(({ href, label, icon: Icon }) => (
                              <Link
                                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-app transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                                href={href}
                              >
                                <Icon className="h-5 w-5" />
                                {label}
                              </Link>
                            ))}
                          </nav>
                          <div className="flex gap-4">
                            <NavbarDropdown isLoggedIn={!!session} />
                            <Link
                              className="grow flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
                              href="#"
                            >
                              <ShoppingCartIcon className="h-5 w-5" />
                              Cart
                            </Link>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        {children}
      </section>
    </>
  );
}
