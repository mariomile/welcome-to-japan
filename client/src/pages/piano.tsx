import { useMemo, useState } from "react";
import { Check, FileText, MapPin, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout";
import { SafeHtml } from "@/components/safe-html";
import { itineraryData, type DayData, type TimelineEntry } from "@/lib/itinerary-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  return "bg-muted text-muted-foreground";
}

function isCheckedRecord(value: unknown): value is Record<string, boolean> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((entry) => typeof entry === "boolean")
  );
}

function useCheckedItems() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem("japan-checked");
      if (!stored) return {};
      const parsed: unknown = JSON.parse(stored);
      return isCheckedRecord(parsed) ? parsed : {};
    } catch {
      return {};
    }
  });

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem("japan-checked", JSON.stringify(next));
      return next;
    });
  };

  return { checked, toggle };
}

function isNotesRecord(value: unknown): value is Record<string, string> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((entry) => typeof entry === "string")
  );
}

function useNotes() {
  const [notes, setNotes] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem("japan-notes");
      if (!stored) return {};
      const parsed: unknown = JSON.parse(stored);
      return isNotesRecord(parsed) ? parsed : {};
    } catch {
      return {};
    }
  });

  const setNote = (key: string, value: string) => {
    setNotes((prev) => {
      const next = { ...prev };
      if (value.trim()) {
        next[key] = value;
      } else {
        delete next[key];
      }
      localStorage.setItem("japan-notes", JSON.stringify(next));
      return next;
    });
  };

  return { notes, setNote };
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, " ");
}

interface TimelineItemView {
  item: TimelineEntry;
  entryIndex: number;
  noteKey: string;
  isDone: boolean;
}

function TimelineView({
  data,
  items,
  onToggle,
  notes,
  openNotes,
  onToggleNote,
  onNoteChange,
}: {
  data: DayData;
  items: TimelineItemView[];
  onToggle: (key: string) => void;
  notes: Record<string, string>;
  openNotes: Record<string, boolean>;
  onToggleNote: (key: string) => void;
  onNoteChange: (key: string, value: string) => void;
}) {
  return (
    <div className="relative mt-4 pl-8">
      <div className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-border" />
      {items.map(({ item, entryIndex, noteKey, isDone }) => {
        const hasNote = Boolean(notes[noteKey]?.trim());
        const noteOpen = Boolean(openNotes[noteKey]);

        return (
          <div key={`${data.day}-${entryIndex}`} className={`relative mb-10 transition-opacity ${isDone ? "opacity-60" : ""}`}>
            <div
              className={`absolute left-[-2rem] top-[6px] z-10 h-3.5 w-3.5 rounded-full border-[3px] border-background ${isDone ? "bg-emerald-500" : "bg-primary"}`}
              style={{ boxShadow: `0 0 0 2px ${isDone ? "#10B981" : "#E11D48"}` }}
            />

            <div className="mb-1.5 flex items-start justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block rounded font-mono text-xs font-bold tracking-wider text-muted-foreground" data-testid={`badge-time-${entryIndex}`}>
                  {item.time}
                </span>
                {isDone && (
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    <Check className="h-2.5 w-2.5" />
                    Fatto
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onToggleNote(noteKey)}
                  aria-expanded={noteOpen}
                  aria-label={`Apri nota per ${item.title}`}
                  className={`relative flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                    hasNote
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-border bg-card text-muted-foreground hover:bg-muted"
                  }`}
                  data-testid={`button-note-${data.day}-${entryIndex}`}
                >
                  <FileText className="h-4 w-4" />
                  {hasNote && <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-primary" />}
                </button>
                <button
                  type="button"
                  onClick={() => onToggle(noteKey)}
                  role="checkbox"
                  aria-checked={isDone}
                  aria-label={`${item.title} - ${isDone ? "completato" : "da fare"}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border-2 transition-all ${
                    isDone ? "border-emerald-500 bg-emerald-500 text-white" : "border-input text-transparent hover:border-muted-foreground"
                  }`}
                  data-testid={`check-activity-${data.day}-${entryIndex}`}
                >
                  <Check className="h-4 w-4" />
                </button>
              </div>
            </div>

            <h4 className={`mb-1.5 font-fraunces text-base font-semibold leading-tight sm:text-lg ${isDone ? "text-muted-foreground line-through" : "text-foreground"}`} data-testid={`text-timeline-title-${entryIndex}`}>
              {item.title}
            </h4>

            {item.image && (
              <div className="mb-3 overflow-hidden rounded-xl border border-border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover sm:h-48"
                  loading="lazy"
                  data-testid={`img-activity-${data.day}-${entryIndex}`}
                />
              </div>
            )}

            <SafeHtml
              html={item.detail}
              className="text-sm leading-relaxed text-muted-foreground [&_b]:font-bold [&_b]:text-foreground [&_i]:font-semibold [&_i]:not-italic [&_i]:text-primary"
              data-testid={`text-timeline-detail-${entryIndex}`}
            />

            {noteOpen && (
              <div className="mt-3 rounded-xl border border-border bg-card/80 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Nota personale
                  </span>
                  {hasNote && (
                    <button
                      type="button"
                      onClick={() => onNoteChange(noteKey, "")}
                      className="text-xs font-bold text-primary"
                    >
                      Cancella
                    </button>
                  )}
                </div>
                <Textarea
                  value={notes[noteKey] ?? ""}
                  onChange={(event) => onNoteChange(noteKey, event.target.value)}
                  placeholder="Aggiungi una nota per ricordarti prenotazioni, idee o varianti..."
                  className="min-h-[110px] resize-y border-border"
                  data-testid={`textarea-note-${data.day}-${entryIndex}`}
                />
              </div>
            )}

            {item.maps && (
              <a
                href={item.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center space-x-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/15"
                data-testid={`link-maps-${entryIndex}`}
              >
                <MapPin className="h-3 w-3" />
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
  const [query, setQuery] = useState("");
  const [openNotes, setOpenNotes] = useState<Record<string, boolean>>({});
  const { checked, toggle } = useCheckedItems();
  const { notes, setNote } = useNotes();
  const data = itineraryData.find((day) => day.day === currentDay)!;
  const normalizedQuery = query.trim().toLowerCase();

  const getDayProgress = (day: number) => {
    const dayData = itineraryData.find((entry) => entry.day === day);
    if (!dayData || dayData.timeline.length === 0) return 0;
    const total = dayData.timeline.length;
    const done = dayData.timeline.filter((_, index) => checked[`d${day}-${index}`]).length;
    return Math.round((done / total) * 100);
  };

  const filteredDays = useMemo(() => {
    if (!normalizedQuery) {
      return [
        {
          day: data,
          items: data.timeline.map((item, entryIndex) => ({
            item,
            entryIndex,
            noteKey: `d${data.day}-${entryIndex}`,
            isDone: Boolean(checked[`d${data.day}-${entryIndex}`]),
          })),
        },
      ];
    }

    return itineraryData
      .map((day) => {
        const dayMatches = [day.title, day.location].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        );

        const items = day.timeline
          .map((item, entryIndex) => ({
            item,
            entryIndex,
            noteKey: `d${day.day}-${entryIndex}`,
            isDone: Boolean(checked[`d${day.day}-${entryIndex}`]),
          }))
          .filter(({ item }) => {
            if (dayMatches) {
              return true;
            }

            return [item.title, stripHtml(item.detail)].some((value) =>
              value.toLowerCase().includes(normalizedQuery),
            );
          });

        return { day, items };
      })
      .filter(({ items }) => items.length > 0);
  }, [checked, data, normalizedQuery]);

  const resultCount = filteredDays.reduce((total, day) => total + day.items.length, 0);

  const toggleNote = (key: string) => {
    setOpenNotes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Layout>
      <header className="border-b border-border bg-card/90 px-4 pb-4 pt-6 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-fraunces italic text-2xl font-bold text-foreground sm:text-3xl" data-testid="text-itinerary-heading">Il Piano di Battaglia</h1>
          <p className="mt-1 text-sm text-muted-foreground">Giorno per giorno, ora per ora.</p>
        </div>
      </header>

      <div className="sticky top-14 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-2 px-4 pt-3">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cerca karaoke, omakase, Nikko..."
                className="pl-10 pr-10"
                data-testid="input-itinerary-search"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Pulisci ricerca"
                  data-testid="button-clear-search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {query && (
              <Button type="button" variant="outline" onClick={() => setQuery("")} className="hidden sm:inline-flex">
                Reset
              </Button>
            )}
          </div>

          {query && (
            <div className="px-4 pt-3 text-xs font-semibold text-muted-foreground" data-testid="text-search-summary">
              {resultCount > 0
                ? `${resultCount} tappe trovate in ${filteredDays.length} giorni`
                : "Nessuna tappa trovata. Prova con un termine diverso."}
            </div>
          )}

          <div
            className="flex gap-1.5 overflow-x-auto px-4 py-3"
            style={{ scrollbarWidth: "none" }}
            data-testid="container-day-selector"
          >
            {itineraryData.map((day) => {
              const progress = getDayProgress(day.day);
              const isActive = day.day === currentDay;

              return (
                <button
                  key={day.day}
                  type="button"
                  onClick={() => setCurrentDay(day.day)}
                  className={`relative flex-shrink-0 rounded-lg px-3 py-2 transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border bg-card text-muted-foreground hover:bg-accent/50"
                  }`}
                  data-testid={`button-day-${day.day}`}
                >
                  <span className="block font-mono text-xs font-bold">G{day.day}</span>
                  <span className={`mt-0.5 block font-mono text-[9px] ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {day.date}
                  </span>
                  {progress === 100 && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[8px] font-bold text-white">
                      {"\u2713"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-4 pb-24" data-testid="container-day-content">
        {!query && (
          <div className="mb-4 flex items-start gap-4 border-b border-border pb-4">
            <div className="flex-shrink-0 rounded-xl border border-border bg-muted/60 p-3 text-4xl" data-testid="text-day-icon">
              {data.icon}
            </div>
            <div className="min-w-0 pt-1">
              <span className="block font-mono text-[10px] tracking-widest text-muted-foreground" data-testid="text-day-location">
                {data.date} · {data.location}
              </span>
              <h2 className="mb-2 mt-1 font-fraunces text-xl font-bold leading-tight text-foreground sm:text-2xl" data-testid="text-day-title">{data.title}</h2>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getTagColor(data.tag)}`} data-testid="badge-day-tag">
                  {data.tag}
                </span>
                {getDayProgress(currentDay) > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700" data-testid="badge-day-progress">
                    <Check className="h-2.5 w-2.5" />
                    {data.timeline.filter((_, index) => checked[`d${currentDay}-${index}`]).length}/{data.timeline.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
        {filteredDays.map(({ day, items }) => (
          <motion.section
            key={query ? `search-${day.day}` : `day-${day.day}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className={query ? "mb-8 last:mb-0" : ""}
          >
            {query && (
              <div className="mb-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/70 text-2xl">
                    {day.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {day.date} &bull; {day.location}
                    </span>
                    <h2 className="mt-1 font-fraunces text-lg font-semibold leading-tight text-foreground">
                      G{day.day} · {day.title}
                    </h2>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">
                      {items.length} {items.length === 1 ? "tappa trovata" : "tappe trovate"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <TimelineView
              data={day}
              items={items}
              onToggle={toggle}
              notes={notes}
              openNotes={openNotes}
              onToggleNote={toggleNote}
              onNoteChange={setNote}
            />
          </motion.section>
        ))}
        </AnimatePresence>
      </main>
    </Layout>
  );
}
