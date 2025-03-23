
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useIsMobile } from '@/hooks/use-mobile';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className={cn(
        "transition-all duration-300",
        isMobile ? "ml-0" : "ml-16 md:ml-64"
      )}>
        <Header />
        <main className={cn(
          "container mx-auto p-4 md:p-6 animate-fade-in",
          className
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}
