import { Link, useLocation } from "wouter";
import {
  Map,
  ClipboardList,
  Sparkles,
  CheckSquare,
  BarChart3,
  Home,
  Moon,
  Sun,
  Download,
  RefreshCw,
  WifiOff,
  X,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { usePwa } from "@/hooks/use-pwa";

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
  const { canInstall, isOnline, isStandalone, promptInstall } = usePwa();

  return (
    <nav
      className="sticky top-0 z-50 border-b border-primary/20 bg-background/92 backdrop-blur-md"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      data-testid="nav-main"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" data-testid="link-home-logo">
            <span className="text-lg" role="img" aria-label="Japan flag">&#x1F1EF;&#x1F1F5;</span>
            <span className="font-fraunces italic text-lg font-bold tracking-tight text-foreground sm:text-xl">
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
            {!isStandalone && canInstall && (
              <button
                type="button"
                onClick={() => {
                  void promptInstall();
                }}
                className="inline-flex h-8 items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary/15"
                data-testid="button-install-pwa"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Installa</span>
              </button>
            )}
            {!isOnline && (
              <span className="inline-flex h-8 items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                <WifiOff className="h-3.5 w-3.5" />
                <span>Offline</span>
              </span>
            )}
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
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md md:hidden"
      data-testid="nav-bottom"
    >
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-1">
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
              <span className={`mt-0.5 text-[9px] tracking-[0.18em] uppercase ${isActive ? "font-bold" : "font-medium"}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}

function PwaBanner() {
  const {
    canInstall,
    dismissNeedRefresh,
    dismissOfflineReady,
    needRefresh,
    offlineReady,
    promptInstall,
    updateServiceWorker,
  } = usePwa();

  if (!canInstall && !needRefresh && !offlineReady) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-50 px-3 md:hidden">
      <div className="pointer-events-auto mx-auto max-w-lg rounded-2xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur">
        {canInstall && (
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
              <Download className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">Installa l'app sul telefono</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Aprila a schermo pieno, piu veloce da lanciare e pronta anche con rete ballerina.
              </p>
              <button
                type="button"
                onClick={() => {
                  void promptInstall();
                }}
                className="mt-3 inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground"
              >
                Installa ora
              </button>
            </div>
          </div>
        )}

        {offlineReady && (
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
              <Download className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">Pronta offline</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Le schermate principali sono ora salvate sul telefono.
              </p>
            </div>
            <button type="button" onClick={dismissOfflineReady} className="text-muted-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {needRefresh && (
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
              <RefreshCw className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">Aggiornamento disponibile</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                C'e una versione nuova pronta. Aggiorna e riparti subito.
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => updateServiceWorker(true)}
                  className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground"
                >
                  Aggiorna
                </button>
                <button
                  type="button"
                  onClick={dismissNeedRefresh}
                  className="inline-flex h-9 items-center rounded-full border border-border px-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Dopo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100svh] bg-background text-foreground antialiased selection:bg-primary/25">
      <TopNav />
      <PwaBanner />
      <div className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">{children}</div>
      <BottomNav />
    </div>
  );
}
