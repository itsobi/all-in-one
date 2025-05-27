'use client';

import { signIn } from '@/lib/authClient';
import { GoogleLogo } from './google-logo';
import { toast } from 'sonner';

export default function GoogleSignIn({ buttonText }: { buttonText: string }) {
  const handleSignIn = async () => {
    toast.loading('Signing in with google...');
    try {
      await signIn.social({
        provider: 'google',
        callbackURL: '/home',
      });
      toast.dismiss();
    } catch (error) {
      toast.dismiss();
      console.error(error);
      toast.error(error instanceof Error ? error.message : 'Failed to sign in');
    }
  };
  return (
    <button
      onClick={handleSignIn}
      className="flex items-center gap-2 border rounded-full px-12 py-2 hover:bg-slate-100 cursor-pointer"
    >
      <GoogleLogo />
      <p className="text-xs lg:text-base">{buttonText}</p>
    </button>
  );
}
