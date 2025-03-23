
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PageTitle({ title, subtitle, children, className }: PageTitleProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-center justify-between mb-6", className)}>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      {children && <div className="mt-4 md:mt-0 flex flex-wrap gap-2">{children}</div>}
    </div>
  );
}
