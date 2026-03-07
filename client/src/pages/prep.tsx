import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { prepData } from "@/lib/itinerary-data";

export default function Prep() {
  const [activeTab, setActiveTab] = useState("trasporti");
  const active = prepData.find((section) => section.id === activeTab)!;

  return (
    <Layout>
      <header className="border-b border-border bg-card/90 px-4 pb-6 pt-8 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-fraunces italic text-2xl font-bold text-foreground sm:text-3xl" data-testid="text-prep-heading">Prima di Partire</h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">Tutto quello che dobbiamo sapere PRIMA di salire sull'aereo.</p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-4 pb-24">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3" style={{ scrollbarWidth: "none" }} data-testid="container-prep-tabs">
          {prepData.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`relative flex-shrink-0 px-4 py-2.5 text-sm font-semibold transition-all ${
                category.id === activeTab
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`tab-prep-${category.id}`}
            >
              <span className="mr-1.5">{category.icon}</span>
              {category.title}
              {category.id === activeTab && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-3 space-y-3"
        >
          {active.items.map((item, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-4 shadow-sm" data-testid={`card-prep-${activeTab}-${index}`}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs font-bold text-muted-foreground">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h4 className="font-fraunces text-base font-semibold leading-tight text-foreground" data-testid={`text-prep-item-${activeTab}-${index}`}>{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </main>
    </Layout>
  );
}
