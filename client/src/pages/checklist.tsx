import { useState } from "react";
import { tasksData } from "@/lib/itinerary-data";
import { Check } from "lucide-react";
import Layout from "@/components/layout";

export default function Checklist() {
  const [tasks, setTasks] = useState(tasksData.map(t => ({ ...t, status: false })));

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: !t.status } : t));
  };

  const doneCount = tasks.filter(t => t.status).length;

  return (
    <Layout>
      <header className="pt-8 pb-6 px-4 bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-checklist-heading">Roba da Prenotare</h1>
              <p className="mt-1 text-slate-500 text-sm">Chi non spunta tutto paga una penale in birre.</p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold ${
                doneCount === tasks.length ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-700"
              }`} data-testid="badge-checklist-progress">
                {doneCount}/{tasks.length}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 pb-24 space-y-2">
        {tasks.map(t => (
          <div
            key={t.id}
            onClick={() => toggleTask(t.id)}
            className={`bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-all ${
              t.status ? "opacity-50" : ""
            }`}
            data-testid={`task-row-${t.id}`}
          >
            <div className="text-2xl flex-shrink-0">{t.icon}</div>
            <div className="flex-grow min-w-0">
              <h4 className={`text-sm font-bold leading-tight ${t.status ? "text-slate-400 line-through" : "text-slate-900"}`} data-testid={`text-task-title-${t.id}`}>{t.title}</h4>
              <p className="text-xs text-[#E11D48] font-semibold mt-0.5 leading-snug" data-testid={`text-task-timeline-${t.id}`}>{t.timeline}</p>
            </div>
            <div className={`flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
              t.status ? "bg-[#10B981] border-[#10B981]" : "border-slate-300"
            }`} data-testid={`checkbox-task-${t.id}`}>
              {t.status && <Check className="w-4 h-4 text-white" />}
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
}
