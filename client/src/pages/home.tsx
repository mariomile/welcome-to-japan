import { Link } from "wouter";
import { Map, ClipboardList, Sparkles, CheckSquare, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";

const sections = [
  { path: "/piano", icon: Map, title: "Il Piano di Battaglia", desc: "15 giorni, ora per ora. Dove andare, cosa ordinare, dove bere.", accent: "text-primary" },
  { path: "/prep", icon: ClipboardList, title: "Prima di Partire", desc: "Trasporti, soldi, app, etichetta. Tutto quello che serve sapere.", accent: "text-foreground" },
  { path: "/esperienze", icon: Sparkles, title: "Esperienze Folli", desc: "Go-kart, samurai, drift, speakeasy. Le cose che ci rendono leggendari.", accent: "text-emerald-600 dark:text-emerald-400" },
  { path: "/checklist", icon: CheckSquare, title: "Roba da Prenotare", desc: "10 cose da bloccare prima di salire sull'aereo.", accent: "text-amber-600 dark:text-amber-400" },
  { path: "/stats", icon: BarChart3, title: "I Numeri del Delirio", desc: "Passi, budget, grafici. Per capire quanto soffriamo.", accent: "text-indigo-600 dark:text-indigo-400" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
};

const heroVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Home() {
  return (
    <Layout>
      <motion.header
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className="border-b border-border bg-card px-4 pb-10 pt-12 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <h1
            className="mb-3 font-fraunces italic font-bold leading-none tracking-tight text-primary"
            style={{ fontSize: "clamp(3rem, 12vw, 5.5rem)" }}
            data-testid="text-hero-title"
          >
            Japponata!
          </h1>
          <p className="mx-auto mb-1.5 font-mono text-sm tracking-wide text-muted-foreground" data-testid="text-hero-subtitle">
            19 Mar — 2 Apr 2026 · 3 amici · 15 giorni
          </p>
          <p className="mx-auto mb-6 font-mono text-xs tracking-wider text-muted-foreground/70">
            Tokyo · Nikko · Hakone · Kyoto · Osaka · Nara
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{"\u26E9\uFE0F"} Templi</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{"\u{1F37B}"} Cocktail</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{"\u{1F35C}"} Street food</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground font-mono">{"\u{1F4B0}"} ~3k–4k EUR</span>
          </div>
        </div>
      </motion.header>

      <main className="mx-auto max-w-2xl px-4 py-6 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="divide-y divide-border rounded-2xl border border-border bg-card shadow-md overflow-hidden"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div key={section.path} variants={cardVariants}>
                <Link href={section.path}>
                  <div
                    className="group flex cursor-pointer items-center gap-4 px-5 py-4 transition-colors hover:bg-accent/50 active:bg-accent/70"
                    data-testid={`card-nav-${section.path.slice(1)}`}
                  >
                    <div className="flex-shrink-0 w-1 self-stretch rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`flex-shrink-0 ${section.accent}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <h3 className="font-fraunces text-base font-semibold leading-tight text-foreground">{section.title}</h3>
                      <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{section.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </main>

      <footer className="mb-16 border-t border-border py-8 text-center md:mb-0" data-testid="footer">
        <p className="font-mono text-xs tracking-wider text-muted-foreground/50">Fatto con birre, ansia e troppo tempo libero · 2026</p>
      </footer>
    </Layout>
  );
}
