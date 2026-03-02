import { useState } from "react";
import { itineraryData, type DayData } from "@/lib/itinerary-data";
import { MapPin, Check } from "lucide-react";
import Layout from "@/components/layout";
import { SafeHtml } from "@/components/safe-html";

function getTagColor(tag: string) {
  if (["Adrenalina Pura", "Gran Finale", "Escursione Must", "Impatto"].includes(tag)) {
    return "bg-[#E11D48] text-white";
  }
  if (["Esperienza Top", "Futuro & Cocktail", "Cultura Pura"].includes(tag)) {
    return "bg-[#10B981] text-white";
  }
  if (["Nerd & Omakase", "Cervi & Templi", "Shopping & Vibe", "Templi & Bar", "Scelta Libera", "Transizione", "Partenza"].includes(tag)) {
    return "bg-amber-500 text-white";
  }
  return "bg-slate-100 text-slate-700";
}

function isCheckedRecord(value: unknown): value is Record<string, boolean> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((v) => typeof v === "boolean")
  );
}

function useCheckedItems() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem("japan-checked");
      if (!stored) return {};
      const parsed: unknown = JSON.parse(stored);
      return isCheckedRecord(parsed) ? parsed : {};
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
    <div className="relative pl-8 mt-4">
      <div className="absolute top-0 bottom-0 left-[7px] w-0.5 bg-slate-200" />
      {data.timeline.map((item, idx) => {
        const key = `d${data.day}-${idx}`;
        const isDone = !!checked[key];
        return (
          <div key={idx} className={`relative mb-10 transition-opacity ${isDone ? "opacity-50" : ""}`}>
            <div
              className={`absolute left-[-2rem] top-[6px] w-3.5 h-3.5 rounded-full border-[3px] border-[#F8FAFC] z-10 ${isDone ? "bg-[#10B981]" : "bg-[#E11D48]"}`}
              style={{ boxShadow: `0 0 0 2px ${isDone ? "#10B981" : "#E11D48"}` }}
            />
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-block px-2.5 py-0.5 bg-slate-800 text-white text-xs font-bold rounded-lg tracking-wide" data-testid={`badge-time-${idx}`}>
                  {item.time}
                </span>
                {isDone && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded">
                    <Check className="w-2.5 h-2.5" /> Fatto
                  </span>
                )}
              </div>
              <button
                onClick={() => onToggle(key)}
                role="checkbox"
                aria-checked={isDone}
                aria-label={`${item.title} - ${isDone ? "completato" : "da fare"}`}
                className={`flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                  isDone ? "bg-[#10B981] border-[#10B981] text-white" : "border-slate-300 text-transparent active:border-slate-400"
                }`}
                data-testid={`check-activity-${data.day}-${idx}`}
              >
                <Check className="w-4 h-4" />
              </button>
            </div>
            <h4 className={`text-lg font-extrabold leading-tight mb-1.5 ${isDone ? "text-slate-400 line-through" : "text-slate-900"}`} data-testid={`text-timeline-title-${idx}`}>
              {item.title}
            </h4>
            {item.image && (
              <div className="mb-3 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 object-cover"
                  loading="lazy"
                  data-testid={`img-activity-${data.day}-${idx}`}
                />
              </div>
            )}
            <SafeHtml
              html={item.detail}
              className="text-sm text-slate-600 leading-relaxed [&_b]:text-slate-900 [&_b]:font-bold [&_i]:text-[#E11D48] [&_i]:not-italic [&_i]:font-semibold"
              data-testid={`text-timeline-detail-${idx}`}
            />
            {item.maps && (
              <a
                href={item.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#E11D48] hover:text-rose-800 bg-rose-50 px-3 py-1.5 rounded-lg mt-3"
                data-testid={`link-maps-${idx}`}
              >
                <MapPin className="w-3 h-3" />
                <span>Google Maps</span>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Piano() {
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
    <Layout>
      <header className="pt-6 pb-4 px-4 bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-itinerary-heading">Il Piano di Battaglia</h1>
          <p className="mt-1 text-slate-500 text-sm">Giorno per giorno, ora per ora.</p>
        </div>
      </header>

      <div className="sticky top-14 z-40 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <div
            className="flex gap-1.5 overflow-x-auto py-3 px-4"
            style={{ scrollbarWidth: "none" }}
            data-testid="container-day-selector"
          >
            {itineraryData.map(d => {
              const progress = getDayProgress(d.day);
              const isActive = d.day === currentDay;
              return (
                <button
                  key={d.day}
                  onClick={() => setCurrentDay(d.day)}
                  className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold transition-all relative ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-500 active:bg-slate-50"
                  }`}
                  data-testid={`button-day-${d.day}`}
                >
                  <span className="block">G{d.day}</span>
                  <span className={`block text-[9px] font-medium mt-0.5 ${isActive ? "text-slate-400" : "text-slate-400"}`}>{d.date}</span>
                  {progress === 100 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">{"\u2713"}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 py-4 pb-24" data-testid="container-day-content">
        <div className="flex items-start gap-4 mb-4 pb-4 border-b border-slate-200">
          <div className="text-4xl p-3 bg-slate-50 rounded-xl border border-slate-100 flex-shrink-0" data-testid="text-day-icon">
            {data.icon}
          </div>
          <div className="min-w-0 pt-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block" data-testid="text-day-location">{data.date} &bull; {data.location}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mt-1 mb-2" data-testid="text-day-title">{data.title}</h2>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getTagColor(data.tag)}`} data-testid="badge-day-tag">
                {data.tag}
              </span>
              {getDayProgress(currentDay) > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700" data-testid="badge-day-progress">
                  <Check className="w-2.5 h-2.5" />
                  {data.timeline.filter((_, i) => checked[`d${currentDay}-${i}`]).length}/{data.timeline.length}
                </span>
              )}
            </div>
          </div>
        </div>
        <TimelineView data={data} checked={checked} onToggle={toggle} />
      </main>
    </Layout>
  );
}
