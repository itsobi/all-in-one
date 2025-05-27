import { NavSheet } from '@/components/auth/nav-sheet';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <nav className="w-full shadow-sm bg-slate-50 flex items-center justify-between px-4 py-4">
        {/* Left nav */}
        <div className="flex items-center gap-1">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <p className="font-semibold text-sm lg:text-base">All In One</p>
        </div>

        {/* Middle nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm">
          <Link href="#" className="hover:underline">
            How does it work?
          </Link>
          <Link href="#" className="hover:underline">
            Pricing
          </Link>
        </div>

        {/* Right nav */}
        <div>
          <NavSheet />

          <div className="hidden lg:flex items-center gap-8 text-sm">
            <Link href="/signin" className="hover:underline">
              Login
            </Link>
            <Link href="/signup" className="hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center mt-10">{children}</div>
    </div>
  );
}
