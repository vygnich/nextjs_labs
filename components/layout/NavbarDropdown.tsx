'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';

interface Props {
  isLoggedIn: boolean;
}

export function NavbarDropdown({ isLoggedIn }: Props) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" size="icon" variant="ghost">
          <img
            alt="User avatar"
            className="rounded-full"
            height={32}
            src="/placeholder.svg"
            style={{
              aspectRatio: '32/32',
              objectFit: 'cover',
            }}
            width={32}
          />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" border-app" align="end">
        {isLoggedIn ? (
          <>
            <DropdownMenuItem onClick={() => router.push('/profile')}>Профіль</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/orders')}>Замовлення</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/favorites')}>Улюблене</DropdownMenuItem>
            <DropdownMenuSeparator className="" />
            <DropdownMenuItem onClick={() => signOut()}>
              Вийти
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => router.push('/admin/dashboard')}>Dashboard</DropdownMenuItem> */}
          </>
        ) : (
          <DropdownMenuItem onClick={() => signIn(undefined, { callbackUrl: '/' })}>
            Login
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
