import { useState } from "react";
import { bonusExperiences } from "@/lib/itinerary-data";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Layout from "@/components/layout";

export default function Esperienze() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <Layout>
      <header className="pt-8 pb-6 px-4 bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-bonus-heading">Esperienze Folli</h1>
          <p className="mt-1 text-slate-500 text-sm sm:text-base">Opzionali ma consigliatissime. Le cose che ci rendono leggendari.</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 pb-24 space-y-3">
        {bonusExperiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            data-testid={`card-bonus-${idx}`}
          >
            {exp.image && (
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-36 sm:h-44 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">{exp.title}</h3>
                <span className="text-[10px] font-bold text-[#E11D48] bg-rose-50 px-2 py-0.5 rounded flex-shrink-0">{exp.location}</span>
              </div>
              <div className="flex gap-2 mb-2 text-xs text-slate-500 font-semibold">
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D48] bg-rose-50 px-3 py-2 rounded-lg active:bg-rose-100"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Info
                    </a>
                    <button
                      onClick={() => setExpanded(null)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 px-3 py-2"
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
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E11D48] px-0 py-1"
                  data-testid={`button-expand-bonus-${idx}`}
                >
                  <ChevronDown className="w-3 h-3" />
                  Dettagli
                </button>
              )}
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
}
