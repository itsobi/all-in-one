import { Header } from '@/components/header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full bg-slate-50">
        <Header />
      </div>
      <main className="w-full max-w-7xl mx-auto px-2 xl:px-0">{children}</main>
    </div>
  );
}
