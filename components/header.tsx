'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut } from '@/lib/auth-client';

import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function Header() {
  const router = useRouter();

  const handleSignout = async () => {
    try {
      toast.loading('Signing you out...');
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.dismiss();
            router.replace('/');
          },
        },
      });
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to sign out');
    }
  };
  return (
    <div className="flex items-center justify-between px-2 max-w-[1400px] mx-auto">
      <div>
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <CircleUserRound />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignout}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
