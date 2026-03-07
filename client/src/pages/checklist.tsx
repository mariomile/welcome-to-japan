import { useEffect, useState } from "react";
import { Check, Download, Upload } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { tasksData } from "@/lib/itinerary-data";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CHECKLIST_STORAGE_KEY = "japan-checklist";
const SYNC_CODE_STORAGE_KEY = "japan-sync-code";

function isCheckedRecord(value: unknown): value is Record<string, boolean> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((entry) => typeof entry === "boolean")
  );
}

function useCheckedTasks() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      if (!stored) return {};
      const parsed: unknown = JSON.parse(stored);
      return isCheckedRecord(parsed) ? parsed : {};
    } catch {
      return {};
    }
  });

  const persist = (next: Record<string, boolean>) => {
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(next));
    return next;
  };

  const toggle = (id: number) => {
    setChecked((prev) => persist({ ...prev, [id]: !prev[id] }));
  };

  const replace = (next: Record<string, boolean>) => {
    setChecked(persist(next));
  };

  return { checked, toggle, replace };
}

export default function Checklist() {
  const { checked, toggle, replace } = useCheckedTasks();
  const [tripCode, setTripCode] = useState(() => localStorage.getItem(SYNC_CODE_STORAGE_KEY) ?? "JAPAN26");
  const [syncing, setSyncing] = useState<"load" | "save" | null>(null);
  const [syncStatus, setSyncStatus] = useState("Nessuna sincronizzazione ancora.");
  const doneCount = tasksData.filter((task) => checked[task.id]).length;

  useEffect(() => {
    localStorage.setItem(SYNC_CODE_STORAGE_KEY, tripCode);
  }, [tripCode]);

  const formatSyncTime = () =>
    new Date().toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const resolveCode = () => tripCode.trim().toUpperCase();

  const mergeState = (remote: Record<string, boolean>) => {
    const next = tasksData.reduce<Record<string, boolean>>((acc, task) => {
      if (checked[task.id] || remote[task.id]) {
        acc[task.id] = true;
      }

      return acc;
    }, {});

    replace(next);
  };

  const loadRemote = async () => {
    const code = resolveCode();
    if (!code) {
      setSyncStatus("Inserisci un codice viaggio valido.");
      return;
    }

    setSyncing("load");

    try {
      const response = await fetch(`/api/sync/${encodeURIComponent(code)}`);
      if (!response.ok) {
        throw new Error("load failed");
      }

      const payload: unknown = await response.json();
      const remoteState =
        typeof payload === "object" &&
        payload !== null &&
        "state" in payload &&
        isCheckedRecord((payload as { state?: unknown }).state)
          ? (payload as { state: Record<string, boolean> }).state
          : {};

      mergeState(remoteState);
      setSyncStatus(`Stato caricato alle ${formatSyncTime()}.`);
    } catch {
      setSyncStatus("Errore durante il caricamento della checklist condivisa.");
    } finally {
      setSyncing(null);
    }
  };

  const saveRemote = async () => {
    const code = resolveCode();
    if (!code) {
      setSyncStatus("Inserisci un codice viaggio valido.");
      return;
    }

    setSyncing("save");

    try {
      await apiRequest("POST", `/api/sync/${encodeURIComponent(code)}`, { state: checked });
      setSyncStatus(`Stato salvato alle ${formatSyncTime()}.`);
    } catch {
      setSyncStatus("Errore durante il salvataggio della checklist condivisa.");
    } finally {
      setSyncing(null);
    }
  };

  const progressPct = tasksData.length > 0 ? Math.round((doneCount / tasksData.length) * 100) : 0;

  return (
    <Layout>
      <header className="border-b border-border bg-card/90 px-4 pb-6 pt-8 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-fraunces italic text-2xl font-bold text-foreground sm:text-3xl" data-testid="text-checklist-heading">Roba da Prenotare</h1>
              <p className="mt-1 text-sm text-muted-foreground">Chi non spunta tutto paga una penale in birre.</p>
            </div>
            <span
              className={`ml-4 flex-shrink-0 font-mono text-sm font-bold ${
                doneCount === tasksData.length ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"
              }`}
              data-testid="badge-checklist-progress"
            >
              {doneCount}/{tasksData.length}
            </span>
          </div>
          <div className="mt-4 h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl space-y-3 px-4 py-4 pb-24">
        <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Sincronizza</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Condividi la checklist tra tutti e 3 con un codice viaggio comune.
              </p>
            </div>
            <span className="rounded border border-primary/20 bg-primary/8 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
              Manuale
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Input
              value={tripCode}
              onChange={(event) => setTripCode(event.target.value)}
              placeholder="Codice viaggio"
              className="font-mono font-semibold uppercase tracking-[0.2em]"
              data-testid="input-sync-code"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={loadRemote}
                disabled={syncing !== null}
                className="flex-1 sm:flex-none"
                data-testid="button-sync-load"
              >
                <Download className="h-4 w-4" />
                Carica
              </Button>
              <Button
                type="button"
                onClick={saveRemote}
                disabled={syncing !== null}
                className="flex-1 sm:flex-none"
                data-testid="button-sync-save"
              >
                <Upload className="h-4 w-4" />
                Salva
              </Button>
            </div>
          </div>

          <p className="mt-3 font-mono text-xs text-muted-foreground" data-testid="text-sync-status">
            {syncing === "load" && "Caricamento in corso..."}
            {syncing === "save" && "Salvataggio in corso..."}
            {syncing === null && syncStatus}
          </p>
        </section>

        {tasksData.map((task, index) => {
          const isDone = Boolean(checked[task.id]);

          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => toggle(task.id)}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all active:scale-[0.98] shadow-sm ${
                isDone ? "opacity-55" : "hover:bg-accent/50"
              }`}
              data-testid={`task-row-${task.id}`}
            >
              <div className="flex-shrink-0 text-xl">{task.icon}</div>
              <div className="min-w-0 flex-grow">
                <h4 className={`text-sm font-semibold leading-tight ${isDone ? "text-muted-foreground line-through" : "text-foreground"}`} data-testid={`text-task-title-${task.id}`}>{task.title}</h4>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground" data-testid={`text-task-timeline-${task.id}`}>{task.timeline}</p>
              </div>
              <div
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 transition-all ${
                  isDone ? "border-primary bg-primary" : "border-input"
                }`}
                data-testid={`checkbox-task-${task.id}`}
              >
                {isDone && <Check className="h-3.5 w-3.5 text-white" />}
              </div>
            </motion.div>
          );
        })}
      </main>
    </Layout>
  );
}
