'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;

  if (session) {
    return (
      <div className="space-y-3">
        <p>
          Уввійдено під
          {' '}
          <span className="font-medium">{session.user?.email}</span>
        </p>
        <Button variant="destructive" onClick={() => signOut({ callbackUrl: '/' })}>
          Вийти
        </Button>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <p>Неввійдено </p>
      <Button onClick={() => signIn()}>Увійти</Button>
    </div>
  );
}
