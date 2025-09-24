import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  Bot, 
  Coins, 
  Zap, 
  Settings, 
  Users, 
  BarChart3,
  Menu,
  X,
  Circle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Trading', href: '/trading', icon: TrendingUp },
  { name: 'AI Lab', href: '/ai-lab', icon: Bot },
  { name: 'Advanced AI', href: '/advanced-ai', icon: BarChart3 },
  { name: 'Create Token', href: '/create-token', icon: Coins },
  { name: 'Flash Loans', href: '/flash-loans', icon: Zap },
];

const adminItems = [
  { name: 'Admin Panel', href: '/admin', icon: Settings },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Users', href: '/users', icon: Users },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden trading-card"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-64 transform transition-transform duration-300 ease-in-out trading-sidebar ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex h-full flex-col p-6">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-glow">
                <Circle className="h-6 w-6 text-white fill-current" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pump.Fun v3.0
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-8">
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Trading Platform
              </h2>
              <div className="space-y-1">
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30'
                          : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>

              <h2 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Administration
              </h2>
              <div className="space-y-1">
                {adminItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30'
                          : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="space-y-4 border-t border-border/50 pt-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-muted-foreground">Connected</span>
              </div>
              <span className="text-xs text-muted-foreground">v3.0.1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}