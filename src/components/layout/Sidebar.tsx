
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FilePrescription, 
  FileText, 
  Settings, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

type NavItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Patients', path: '/patients', icon: Users },
  { name: 'Appointments', path: '/appointments', icon: Calendar },
  { name: 'Prescriptions', path: '/prescriptions', icon: FilePrescription },
  { name: 'Documentation', path: '/documentation', icon: FileText },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarWidth = collapsed ? 'w-16' : 'w-64';
  
  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={toggleMobileSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full z-40 bg-background border-r border-border transition-all duration-300 ease-in-out',
          sidebarWidth,
          isMobile && 'transform',
          isMobile && (mobileOpen ? 'translate-x-0' : '-translate-x-full')
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={cn(
            'py-6 flex items-center justify-between px-4 border-b border-border',
            collapsed && 'justify-center'
          )}>
            {!collapsed && (
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-primary text-primary-foreground rounded-md w-8 h-8 flex items-center justify-center font-bold">
                  M
                </div>
                <span className="font-semibold text-xl">MediSync</span>
              </Link>
            )}
            {collapsed && (
              <div className="bg-primary text-primary-foreground rounded-md w-8 h-8 flex items-center justify-center font-bold">
                M
              </div>
            )}
            
            {isMobile ? (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMobileSidebar}
                className={cn(collapsed && 'hidden')}
              >
                <X className="h-5 w-5" />
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSidebar}
                className={cn(collapsed && 'hidden')}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Nav Items */}
          <nav className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200',
                        isActive 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'hover:bg-accent',
                        collapsed && 'justify-center'
                      )}
                    >
                      <Icon className={cn('h-5 w-5', isActive && 'text-primary')} />
                      {!collapsed && <span>{item.name}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Collapse Button (Desktop only) */}
          {!isMobile && (
            <div className="border-t border-border p-4 flex justify-center">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSidebar}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                className="rounded-full"
              >
                <ChevronRight className={cn(
                  "h-5 w-5 transition-transform",
                  collapsed ? "-rotate-180" : ""
                )} />
              </Button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
