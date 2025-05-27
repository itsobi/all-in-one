import { GoogleLogo } from '@/components/auth/google-logo';
import Image from 'next/image';
import Link from 'next/link';
import { SignInForm } from '@/components/auth/sign-in-form';
import GoogleSignIn from '@/components/auth/google-sign-in';

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center gap-4 px-1">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <GoogleSignIn buttonText="Continue with Google" />
      <div className="w-full">
        <div className="flex items-center gap-2.5">
          <hr className="flex-grow border-t border-slate-200" />
          <p className="text-sm text-gray-500">Or</p>
          <hr className="flex-grow border-t border-slate-200" />
        </div>
      </div>

      <div className="w-full min-w-[300px] md:min-w-[350px] lg:min-w-[400px]">
        <SignInForm />
      </div>

      <div className="w-full text-xs text-center">
        <p className="text-gray-500">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>

      {/* forgot password */}
      <div className="w-full text-xs text-center">
        <Link href="/reset-password" className="text-blue-500 hover:underline">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
