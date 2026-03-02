import { Link } from "wouter";
import { Map, ClipboardList, Sparkles, CheckSquare, BarChart3, ChevronRight } from "lucide-react";
import Layout from "@/components/layout";

const sections = [
  { path: "/piano", icon: Map, title: "Il Piano di Battaglia", desc: "14 giorni, ora per ora. Dove andare, cosa ordinare, dove bere.", color: "bg-[#E11D48]" },
  { path: "/prep", icon: ClipboardList, title: "Prima di Partire", desc: "Trasporti, soldi, app, etichetta. Tutto quello che serve sapere.", color: "bg-slate-800" },
  { path: "/esperienze", icon: Sparkles, title: "Esperienze Folli", desc: "Go-kart, samurai, drift, speakeasy. Le cose che ci rendono leggendari.", color: "bg-[#10B981]" },
  { path: "/checklist", icon: CheckSquare, title: "Roba da Prenotare", desc: "10 cose da bloccare prima di salire sull'aereo.", color: "bg-amber-500" },
  { path: "/stats", icon: BarChart3, title: "I Numeri del Delirio", desc: "Passi, budget, grafici. Per capire quanto soffriamo.", color: "bg-indigo-500" },
];

export default function Home() {
  return (
    <Layout>
      <header className="pt-12 pb-10 px-4 bg-white border-b border-slate-200 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E11D48] to-orange-400" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight" data-testid="text-hero-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-rose-500">Japponata!</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-xl mx-auto leading-relaxed font-medium" data-testid="text-hero-subtitle">
            19 Mar &ndash; 1 Apr 2026 &bull; 3 amici &bull; 14 giorni<br />
            Tokyo &rarr; Nikko &rarr; Hakone &rarr; Kyoto &rarr; Osaka &rarr; Nara
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-slate-100 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600">{"\u26E9\uFE0F"} Templi</span>
            <span className="bg-slate-100 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600">{"\u{1F37B}"} Cocktail</span>
            <span className="bg-slate-100 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600">{"\u{1F35C}"} Street food</span>
            <span className="bg-slate-100 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600">{"\u{1F4B0}"} ~3k&ndash;4k EUR</span>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 pb-24 space-y-4">
        {sections.map(s => {
          const Icon = s.icon;
          return (
            <Link key={s.path} href={s.path}>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 active:scale-[0.98] transition-transform cursor-pointer hover:shadow-md" data-testid={`card-nav-${s.path.slice(1)}`}>
                <div className={`${s.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-base font-extrabold text-slate-900 leading-tight">{s.title}</h3>
                  <p className="text-sm text-slate-500 mt-0.5 leading-snug">{s.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
              </div>
            </Link>
          );
        })}
      </main>

      <footer className="bg-slate-900 py-10 text-center mb-16 md:mb-0" data-testid="footer">
        <p className="text-slate-400 text-sm font-medium">Fatto con birre, ansia e troppo tempo libero &bull; 2026</p>
      </footer>
    </Layout>
  );
}
