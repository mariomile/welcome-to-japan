import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { SafeHtml } from "@/components/safe-html";
import { bonusExperiences } from "@/lib/itinerary-data";

export default function Esperienze() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <Layout>
      <header className="border-b border-border bg-card/90 px-4 pb-6 pt-8 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-fraunces italic text-2xl font-bold text-foreground sm:text-3xl" data-testid="text-bonus-heading">Esperienze Folli</h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">Opzionali ma consigliatissime. Le cose che ci rendono leggendari.</p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl space-y-3 px-4 py-4 pb-24">
        {bonusExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            data-testid={`card-bonus-${index}`}
          >
            {experience.image && (
              <img
                src={experience.image}
                alt={experience.title}
                className="h-36 w-full object-cover sm:h-44"
                loading="lazy"
              />
            )}

            <div className="p-4">
              <div className="mb-1.5 flex items-start justify-between gap-2">
                <h3 className="font-fraunces text-base font-semibold leading-tight text-foreground">{experience.title}</h3>
                <span className="flex-shrink-0 rounded border border-primary/20 bg-primary/8 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">{experience.location}</span>
              </div>

              <div className="mb-2 flex gap-2 font-mono text-xs text-muted-foreground">
                <span>{experience.cost}</span>
                <span>&bull;</span>
                <span>{experience.duration}</span>
              </div>

              {expanded === index ? (
                <>
                  <SafeHtml
                    html={experience.detail}
                    className="mb-3 text-sm leading-relaxed text-muted-foreground [&_b]:font-bold [&_b]:text-foreground [&_i]:font-semibold [&_i]:not-italic [&_i]:text-primary"
                  />
                  <div className="flex items-center gap-3">
                    <a
                      href={experience.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/15"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Info
                    </a>
                    <button
                      type="button"
                      onClick={() => setExpanded(null)}
                      className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`button-collapse-bonus-${index}`}
                    >
                      <ChevronUp className="h-3 w-3" />
                      Chiudi
                    </button>
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setExpanded(index)}
                  className="inline-flex items-center gap-1 px-0 py-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                  data-testid={`button-expand-bonus-${index}`}
                >
                  <ChevronDown className="h-3 w-3" />
                  Dettagli
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </main>
    </Layout>
  );
}
