import { GoogleLogo } from '@/components/auth/google-logo';
import GoogleSignIn from '@/components/auth/google-sign-in';
import { SignUpForm } from '@/components/auth/sign-up-form';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <h1 className="text-2xl font-semibold">Create your account</h1>
      <GoogleSignIn buttonText="Sign up with Google" />

      <div className="w-full">
        <div className="flex items-center gap-2.5">
          <hr className="flex-grow border-t border-slate-200" />
          <p className="text-sm text-gray-500">Or</p>
          <hr className="flex-grow border-t border-slate-200" />
        </div>
      </div>

      <div className="w-full min-w-[300px] md:min-w-[350px] lg:min-w-[400px]">
        <SignUpForm />
      </div>

      <div className="w-full text-xs text-center">
        <p className=" text-gray-500">
          Already have an account?{' '}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
