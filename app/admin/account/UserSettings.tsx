'use client';

import { AuthSession } from '@/lib/auth/utils';
import UpdateNameCard from './UpdateNameCard';
import UpdateEmailCard from './UpdateEmailCard';

export default function UserSettings({
  session,
}: {
  session: AuthSession['session'];
}) {
  return (
    <>
      <UpdateNameCard name={session?.user.name ?? ''} />
      <UpdateEmailCard email={session?.user.email ?? ''} />
    </>
  );
}
