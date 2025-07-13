import { Suspense } from 'react';

import Loading from '@/app/(app)/loading';
import { getMessages } from '@/lib/api/adminMessage/queries';
import { checkAuth } from '@/lib/auth/utils';
import {MessagesList} from "@/components/adminMessages/MessagesList";

export const revalidate = 0;

const Feedbacks = async () => {
  await checkAuth();

  const messages = await getMessages();

  return (
    <Suspense fallback={<Loading />}>
      <MessagesList messages={messages} />
    </Suspense>
  );
};

export default async function FeedbacksPage() {
  return (
    <main>
      <div className="relative">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl my-2">Feedbacks</h1>
        </div>
        <Feedbacks />
      </div>
    </main>
  );
}
