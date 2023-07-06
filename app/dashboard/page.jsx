'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    return <h1 className="text-center font-extrabold">i am at Dashboard</h1>;
  } else {
    router?.push('/dashboard/login');
  }
}
