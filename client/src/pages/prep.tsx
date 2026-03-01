import { useState } from "react";
import { prepData } from "@/lib/itinerary-data";
import Layout from "@/components/layout";

export default function Prep() {
  const [activeTab, setActiveTab] = useState("trasporti");
  const active = prepData.find(p => p.id === activeTab)!;

  return (
    <Layout>
      <header className="pt-8 pb-6 px-4 bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-prep-heading">Prima di Partire</h1>
          <p className="mt-1 text-slate-500 text-sm sm:text-base">Tutto quello che dobbiamo sapere PRIMA di salire sull'aereo.</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 pb-24">
        <div className="flex overflow-x-auto gap-2 pb-3 -mx-4 px-4" style={{ scrollbarWidth: "none" }} data-testid="container-prep-tabs">
          {prepData.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                cat.id === activeTab
                  ? "bg-[#E11D48] text-white shadow-md shadow-red-200"
                  : "bg-white border border-slate-200 text-slate-600 active:bg-slate-50"
              }`}
              data-testid={`tab-prep-${cat.id}`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        <div className="space-y-3 mt-2">
          {active.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4" data-testid={`card-prep-${activeTab}-${idx}`}>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 mt-0.5">
                  {idx + 1}
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-slate-900 leading-tight" data-testid={`text-prep-item-${activeTab}-${idx}`}>{item.title}</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
