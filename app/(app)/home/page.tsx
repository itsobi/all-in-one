import { verifySession } from '@/lib/dal/verifySession';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { session } = await verifySession();

  if (!session) {
    redirect('/signin');
  }

  return <div>HomePage</div>;
}
