import { cache } from 'react';
import 'server-only';
import { auth } from '../auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const verifySession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/signin');
  }

  return { isAuthenticated: true, session };
});
