import { Link, useLocation } from "wouter";
import { Map, ClipboardList, Sparkles, CheckSquare, BarChart3, Home, Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

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
  const { dark, toggle } = useDarkMode();

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-primary bg-background/92 backdrop-blur-md" data-testid="nav-main">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" data-testid="link-home-logo">
            <span className="text-lg" role="img" aria-label="Japan flag">&#x1F1EF;&#x1F1F5;</span>
            <span className="font-fraunces italic text-xl font-bold tracking-tight text-foreground">
              Japponata<span className="text-primary not-italic">!</span>
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <div className="hidden md:flex items-center">
              {navItems.slice(1).map(item => {
                const isActive = location === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </div>
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark mode"
              aria-pressed={dark}
              className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              data-testid="button-dark-mode"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function BottomNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md md:hidden" data-testid="nav-bottom">
      <div className="flex justify-around items-center h-16 px-1 max-w-lg mx-auto">
        {navItems.map(item => {
          const isActive = location === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative flex flex-col items-center justify-center min-w-[3.5rem] pt-2 pb-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`nav-bottom-${item.label.toLowerCase()}`}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary" />
              )}
              <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : "stroke-[1.5]"}`} />
              <span className={`text-[9px] mt-0.5 tracking-wider uppercase ${isActive ? "font-bold" : "font-medium"}`}>{item.label}</span>
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
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/25">
      <TopNav />
      {children}
      <BottomNav />
    </div>
  );
}
