import { Link, useLocation } from "wouter";
import { Map, ClipboardList, Sparkles, CheckSquare, BarChart3, Home } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/piano", label: "Piano", icon: Map },
  { path: "/prep", label: "Info", icon: ClipboardList },
  { path: "/esperienze", label: "Bonus", icon: Sparkles },
  { path: "/checklist", label: "Check", icon: CheckSquare },
  { path: "/stats", label: "Numeri", icon: BarChart3 },
];

function TopNav() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" data-testid="nav-main">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0" data-testid="link-home-logo">
            <span className="text-xl" role="img" aria-label="Japan flag">&#x1F1EF;&#x1F1F5;</span>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              Project <span className="text-[#E11D48]">Japan</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(1).map(item => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive ? "text-[#E11D48] bg-rose-50" : "text-slate-600 hover:text-[#E11D48] hover:bg-slate-50"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

function BottomNav() {
  const [location] = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]" data-testid="nav-bottom">
      <div className="flex justify-around items-center h-16 px-1 max-w-lg mx-auto">
        {navItems.map(item => {
          const isActive = location === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center min-w-[3.5rem] py-1 rounded-lg transition-colors ${
                isActive ? "text-[#E11D48]" : "text-slate-400"
              }`}
              data-testid={`nav-bottom-${item.label.toLowerCase()}`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : ""}`} />
              <span className={`text-[10px] mt-0.5 font-semibold ${isActive ? "font-bold" : ""}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-slate-300">
      <TopNav />
      {children}
      <BottomNav />
    </div>
  );
}
