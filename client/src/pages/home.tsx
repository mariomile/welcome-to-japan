import { useState } from "react";
import {
  itineraryData, tasksData, prepData, bonusExperiences,
  type DayData
} from "@/lib/itinerary-data";
import { MapPin, Check, BarChart3, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Link } from "wouter";

function getTagColor(tag: string) {
  if (["Adrenalina Pura", "Gran Finale", "Escursione Must", "Impatto"].includes(tag)) {
    return "bg-[#E11D48] text-white shadow-md shadow-red-200";
  }
  if (["Esperienza Top", "Cibo & Neon", "Futuro & Cocktail", "Cultura Pura"].includes(tag)) {
    return "bg-[#10B981] text-white shadow-md shadow-emerald-200";
  }
  if (["Nerd & Omakase", "Cervi & Templi", "Shopping & Vibe", "Templi & Bar", "Scelta Libera", "Transizione", "Partenza"].includes(tag)) {
    return "bg-amber-500 text-white shadow-md shadow-amber-200";
  }
  return "bg-slate-100 text-slate-700";
}

function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" data-testid="nav-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-4 h-16 items-center">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-2xl" role="img" aria-label="Japan flag">&#x1F1EF;&#x1F1F5;</span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Project <span className="text-[#E11D48]">Japan</span>
            </span>
          </div>
          <div className="flex items-center space-x-6 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            <button onClick={() => scrollTo("prep")} className="text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors whitespace-nowrap" data-testid="nav-prep">Prima di Partire</button>
            <button onClick={() => scrollTo("itinerary")} className="text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors whitespace-nowrap" data-testid="nav-sprint-log">Il Piano</button>
            <button onClick={() => scrollTo("bonus")} className="text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors whitespace-nowrap" data-testid="nav-bonus">Esperienze</button>
            <Link href="/stats" className="text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors whitespace-nowrap inline-flex items-center gap-1.5" data-testid="nav-data-viz">
              <BarChart3 className="w-3.5 h-3.5" />
              I Numeri
            </Link>
            <button onClick={() => scrollTo("checklist")} className="text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors whitespace-nowrap" data-testid="nav-sla">Checklist</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="py-20 px-4 bg-white border-b border-slate-200 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E11D48] to-orange-400" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight" data-testid="text-hero-title">
          Tre Uomini, Zero Esperienza <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-rose-500">Massima Follia</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium" data-testid="text-hero-subtitle">
          19 Marzo &ndash; 1 Aprile 2026. 3 amici. 14 giorni. Tokyo &rarr; Nikko &rarr; Hakone &rarr; Kyoto &rarr; Hiroshima (opzionale) &rarr; Osaka &rarr; Nara. Il budget lo abbiamo gi&agrave; sforato sulla carta e non ci frega niente. Chi molla paga da bere.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="bg-slate-50 border border-slate-200 px-5 py-2 rounded-lg font-semibold text-slate-700 text-sm" data-testid="badge-stamina">{"\u26E9\uFE0F"} Templi &amp; cultura</div>
          <div className="bg-slate-50 border border-slate-200 px-5 py-2 rounded-lg font-semibold text-slate-700 text-sm" data-testid="badge-hours">{"\u{1F37B}"} Cocktail bar top</div>
          <div className="bg-slate-50 border border-slate-200 px-5 py-2 rounded-lg font-semibold text-slate-700 text-sm" data-testid="badge-data">{"\u{1F35C}"} Street food fino a crollare</div>
          <div className="bg-slate-50 border border-slate-200 px-5 py-2 rounded-lg font-semibold text-slate-700 text-sm" data-testid="badge-budget">{"\u{1F4B0}"} ~2,850&ndash;4,200 EUR a testa</div>
        </div>
      </div>
    </header>
  );
}

function PrepSection() {
  const [activeTab, setActiveTab] = useState("trasporti");
  const active = prepData.find(p => p.id === activeTab)!;

  return (
    <section id="prep" className="scroll-mt-24">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold text-slate-900" data-testid="text-prep-heading">Prima di Partire</h2>
        <p className="mt-2 text-slate-600 text-lg">Tutto quello che dobbiamo sapere e preparare PRIMA di salire sull'aereo. Chi non legge questa sezione paga da bere.</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50" style={{ scrollbarWidth: "none" }} data-testid="container-prep-tabs">
          {prepData.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 px-6 py-4 text-sm font-bold transition-all border-b-2 ${
                cat.id === activeTab
                  ? "border-[#E11D48] text-[#E11D48] bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
              data-testid={`tab-prep-${cat.id}`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>
        <div className="p-6 md:p-8" data-testid="container-prep-content">
          <div className="space-y-5">
            {active.items.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900" data-testid={`text-prep-item-${activeTab}-${idx}`}>{item.title}</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function useCheckedItems() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem("japan-checked");
      return stored ? JSON.parse(stored) : {};
    } catch { return {}; }
  });
  const toggle = (key: string) => {
    setChecked(prev => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem("japan-checked", JSON.stringify(next));
      return next;
    });
  };
  return { checked, toggle };
}

function TimelineView({ data, checked, onToggle }: { data: DayData; checked: Record<string, boolean>; onToggle: (key: string) => void }) {
  return (
    <div className="relative pl-10 mt-6">
      <div className="absolute top-0 bottom-0 left-[10px] w-0.5 bg-slate-200" />
      {data.timeline.map((item, idx) => {
        const key = `d${data.day}-${idx}`;
        const isDone = !!checked[key];
        return (
          <div key={idx} className={`relative mb-14 transition-opacity ${isDone ? "opacity-60" : ""}`}>
            <div
              className={`absolute left-[-2.5rem] top-[6px] w-4 h-4 rounded-full border-[3px] border-[#F8FAFC] z-10 ${isDone ? "bg-[#10B981]" : "bg-[#E11D48]"}`}
              style={{ boxShadow: `0 0 0 2px ${isDone ? "#10B981" : "#E11D48"}` }}
            />
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-block px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg shadow-sm tracking-wide" data-testid={`badge-time-${idx}`}>
                  {item.time}
                </span>
                {isDone && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md">
                    <Check className="w-3 h-3" /> Fatto
                  </span>
                )}
              </div>
              <button
                onClick={() => onToggle(key)}
                role="checkbox"
                aria-checked={isDone}
                aria-label={`${item.title} - ${isDone ? "completato" : "da fare"}`}
                className={`flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                  isDone
                    ? "bg-[#10B981] border-[#10B981] text-white"
                    : "border-slate-300 text-transparent hover:border-slate-400"
                }`}
                data-testid={`check-activity-${data.day}-${idx}`}
                title={isDone ? "Segna come non fatto" : "Segna come fatto"}
              >
                <Check className="w-4 h-4" />
              </button>
            </div>
            <h4 className={`text-xl font-extrabold leading-tight mb-2 ${isDone ? "text-slate-500 line-through" : "text-slate-900"}`} data-testid={`text-timeline-title-${idx}`}>
              {item.title}
            </h4>
            {item.image && (
              <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 md:h-56 object-cover"
                  loading="lazy"
                  data-testid={`img-activity-${data.day}-${idx}`}
                />
              </div>
            )}
            <div
              className="text-base text-slate-600 mb-2 leading-relaxed [&_b]:text-slate-900 [&_b]:font-bold [&_i]:text-[#E11D48] [&_i]:not-italic [&_i]:font-semibold"
              dangerouslySetInnerHTML={{ __html: item.detail }}
              data-testid={`text-timeline-detail-${idx}`}
            />
            {item.maps && (
              <a
                href={item.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#E11D48] hover:text-rose-800 transition-colors bg-rose-50 px-3 py-1.5 rounded-lg mt-4"
                data-testid={`link-maps-${idx}`}
              >
                <MapPin className="w-3 h-3" />
                <span>Naviga su Google Maps</span>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ItinerarySection() {
  const [currentDay, setCurrentDay] = useState(1);
  const data = itineraryData.find(d => d.day === currentDay)!;
  const { checked, toggle } = useCheckedItems();

  const getDayProgress = (day: number) => {
    const dayData = itineraryData.find(d => d.day === day);
    if (!dayData || dayData.timeline.length === 0) return 0;
    const total = dayData.timeline.length;
    const done = dayData.timeline.filter((_, i) => checked[`d${day}-${i}`]).length;
    return Math.round((done / total) * 100);
  };

  return (
    <section id="itinerary" className="scroll-mt-24">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold text-slate-900" data-testid="text-itinerary-heading">Il Piano di Battaglia</h2>
        <p className="mt-2 text-slate-600 text-lg">Giorno per giorno, ora per ora. Dove andare, cosa ordinare, dove bere, quanto spendere. Ogni dettaglio per non fare figuracce e non perderci (troppo).</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row min-h-[800px]">
        <div
          className="lg:w-1/4 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50 p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
          data-testid="container-day-selector"
        >
          {itineraryData.map(d => {
            const progress = getDayProgress(d.day);
            return (
              <button
                key={d.day}
                onClick={() => setCurrentDay(d.day)}
                className={`text-left lg:text-center flex-shrink-0 px-5 py-4 lg:py-3 rounded-xl border text-sm font-bold transition-all relative overflow-hidden ${
                  d.day === currentDay
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "border-slate-200 text-slate-500 hover:border-slate-300"
                }`}
                data-testid={`button-day-${d.day}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span>Giorno {d.day}</span>
                    <span className={`block text-[10px] font-medium mt-0.5 ${d.day === currentDay ? "text-slate-400" : "text-slate-400"}`}>{d.date}</span>
                  </div>
                  {progress > 0 && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      progress === 100
                        ? "bg-emerald-500 text-white"
                        : d.day === currentDay ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`} data-testid={`badge-progress-${d.day}`}>
                      {progress === 100 ? "\u2713" : `${progress}%`}
                    </span>
                  )}
                </div>
                <span className="block lg:hidden text-xs font-normal opacity-70 mt-1">{d.title}</span>
              </button>
            );
          })}
        </div>

        <div className="lg:w-3/4 p-6 md:p-10 relative bg-white" data-testid="container-day-content">
          <div className="h-full flex flex-col">
            <div className="flex items-start space-x-6 mb-8 pb-8 border-b border-slate-200">
              <div className="text-6xl p-4 bg-slate-50 rounded-2xl shadow-inner border border-slate-100 flex-shrink-0" data-testid="text-day-icon">
                {data.icon}
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block" data-testid="text-day-location">{data.date} &bull; {data.location}</span>
                <h3 className="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight" data-testid="text-day-title">{data.title}</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${getTagColor(data.tag)}`} data-testid="badge-day-tag">
                    {data.tag}
                  </span>
                  {getDayProgress(currentDay) > 0 && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700" data-testid="badge-day-progress">
                      <Check className="w-3 h-3" />
                      {data.timeline.filter((_, i) => checked[`d${currentDay}-${i}`]).length}/{data.timeline.length} completati
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-grow overflow-y-auto lg:pr-8 pb-10" style={{ scrollbarWidth: "none" }}>
              <TimelineView data={data} checked={checked} onToggle={toggle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BonusSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="bonus" className="scroll-mt-24">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold text-slate-900" data-testid="text-bonus-heading">Esperienze Folli</h2>
        <p className="mt-2 text-slate-600 text-lg">Opzionali ma consigliatissime. Le esperienze che trasformano un viaggio bello in un viaggio leggendario.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bonusExperiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            data-testid={`card-bonus-${idx}`}
          >
            {exp.image && (
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-lg font-extrabold text-slate-900">{exp.title}</h4>
                <span className="text-xs font-bold text-[#E11D48] bg-rose-50 px-2 py-1 rounded flex-shrink-0">{exp.location}</span>
              </div>
              <div className="flex gap-3 mb-3 text-xs text-slate-500 font-semibold">
                <span>{exp.cost}</span>
                <span>&bull;</span>
                <span>{exp.duration}</span>
              </div>
              {expanded === idx ? (
                <>
                  <div
                    className="text-sm text-slate-600 leading-relaxed mb-3 [&_b]:text-slate-900 [&_b]:font-bold [&_i]:text-[#E11D48] [&_i]:not-italic [&_i]:font-semibold"
                    dangerouslySetInnerHTML={{ __html: exp.detail }}
                  />
                  <div className="flex items-center gap-3">
                    <a
                      href={exp.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D48] hover:text-rose-800 bg-rose-50 px-3 py-1.5 rounded-lg"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Info
                    </a>
                    <button
                      onClick={() => setExpanded(null)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-700"
                      data-testid={`button-collapse-bonus-${idx}`}
                    >
                      <ChevronUp className="w-3 h-3" />
                      Chiudi
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setExpanded(idx)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E11D48] hover:text-rose-800"
                  data-testid={`button-expand-bonus-${idx}`}
                >
                  <ChevronDown className="w-3 h-3" />
                  Dettagli
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChecklistSection() {
  const [tasks, setTasks] = useState(tasksData.map(t => ({ ...t, status: false })));

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: !t.status } : t));
  };

  return (
    <section id="checklist" className="scroll-mt-24 pb-20">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold text-slate-900" data-testid="text-checklist-heading">Roba da Prenotare</h2>
        <p className="mt-2 text-slate-600 text-lg">Se non prenotiamo sta roba per tempo piangiamo in aeroporto. Solo le cose che contano davvero.</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {tasks.map(t => (
            <div
              key={t.id}
              onClick={() => toggleTask(t.id)}
              className={`flex flex-col sm:flex-row sm:items-center p-6 cursor-pointer hover:bg-slate-50 transition-colors ${
                t.status ? "opacity-50 line-through bg-slate-50" : ""
              }`}
              data-testid={`task-row-${t.id}`}
            >
              <div className="flex items-center mb-3 sm:mb-0">
                <div className="flex-shrink-0 mr-4 text-3xl">{t.icon}</div>
                <div className="flex-grow sm:w-96">
                  <h4 className="text-lg font-bold text-slate-900" data-testid={`text-task-title-${t.id}`}>{t.title}</h4>
                  <p className="text-sm text-[#E11D48] font-semibold mt-1" data-testid={`text-task-timeline-${t.id}`}>{t.timeline}</p>
                </div>
              </div>
              <div className="sm:ml-auto mt-2 sm:mt-0 flex justify-end">
                <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${
                  t.status ? "bg-[#10B981] border-[#10B981]" : "border-slate-300"
                }`} data-testid={`checkbox-task-${t.id}`}>
                  {t.status && <span className="text-white text-lg font-bold">&#x2713;</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-center" data-testid="footer">
      <p className="text-slate-400 font-medium">Fatto con birre, ansia e troppo tempo libero &bull; Tre maschi in Giappone &bull; 2026</p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-slate-300">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <PrepSection />
        <ItinerarySection />
        <BonusSection />
        <ChecklistSection />
      </main>
      <Footer />
    </div>
  );
}
