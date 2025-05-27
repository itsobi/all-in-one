'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useState } from 'react';

const navLinks = [
  {
    label: 'How does it work?',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
];

export function NavSheet() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu className="lg:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="w-screen">
        <SheetHeader>
          <SheetTitle>
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </SheetTitle>
          <SheetDescription className="sr-only" />
        </SheetHeader>

        <div className="p-2 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:underline text-sm w-fit"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-4">
            <Link href="/signin" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Login</Button>
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" className="w-full">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
