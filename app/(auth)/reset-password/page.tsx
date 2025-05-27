import { SendPasswordLinkForm } from '@/components/auth/send-password-link-form';
import { ResetPasswordForm } from '@/components/auth/reset-password-form';
import Image from 'next/image';
import Link from 'next/link';

export default async function SendResetLinkPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const token = (await searchParams).token;

  return (
    <div className="flex flex-col items-center gap-4 px-1">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <h1 className="text-2xl font-semibold">Reset Password</h1>

      <div className="w-full min-w-[300px] md:min-w-[350px] lg:min-w-[400px]">
        {token ? <ResetPasswordForm token={token} /> : <SendPasswordLinkForm />}
      </div>

      <div className="w-full text-xs text-center">
        <Link href="/signin" className="text-blue-500 hover:underline">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
