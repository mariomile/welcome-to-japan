import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from "recharts";
import {
  itineraryData, tasksData, stepChartData, budgetData, kyotoData, vibeData,
  type DayData
} from "@/lib/itinerary-data";
import { MapPin } from "lucide-react";

function getTagColor(tag: string) {
  if (["High Energy", "Adrenalina Pura", "Chiusura col Botto", "Tech & Culture"].includes(tag)) {
    return "bg-[#E11D48] text-white shadow-md shadow-red-200";
  }
  if (["Relax", "Premium", "Party & Lusso"].includes(tag)) {
    return "bg-[#10B981] text-white shadow-md shadow-emerald-200";
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
            <button onClick={() => scrollTo("itinerary")} className="text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors whitespace-nowrap" data-testid="nav-sprint-log">Daily Sprint Log</button>
            <button onClick={() => scrollTo("dashboard")} className="text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors whitespace-nowrap" data-testid="nav-data-viz">Data Viz</button>
            <button onClick={() => scrollTo("checklist")} className="text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors whitespace-nowrap" data-testid="nav-sla">SLA Bookings</button>
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
          Max Stamina <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-rose-500">Execution Plan</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium" data-testid="text-hero-subtitle">
          Interfacce caricate e ripulite. Nessuna distrazione visiva. Giornate saturate dalle 8 del mattino all&apos;1 di notte per 3 ragazzi con energia da vendere. Dettagli di esecuzione chirurgici per ogni location.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-slate-50 border border-slate-200 px-6 py-2 rounded-lg font-semibold text-slate-700" data-testid="badge-stamina">&#x1F50B; High Stamina</div>
          <div className="bg-slate-50 border border-slate-200 px-6 py-2 rounded-lg font-semibold text-slate-700" data-testid="badge-hours">&#x23F1;&#xFE0F; 16h/Day Active</div>
          <div className="bg-slate-50 border border-slate-200 px-6 py-2 rounded-lg font-semibold text-slate-700" data-testid="badge-data">&#x1F3AF; Data-Driven</div>
        </div>
      </div>
    </header>
  );
}

function TimelineView({ data }: { data: DayData }) {
  return (
    <div className="relative pl-10 mt-6">
      <div className="absolute top-0 bottom-0 left-[10px] w-0.5 bg-slate-200" />
      {data.timeline.map((item, idx) => (
        <div key={idx} className="relative mb-14">
          <div
            className="absolute left-[-2.5rem] top-[6px] w-4 h-4 rounded-full bg-[#E11D48] border-[3px] border-[#F8FAFC] z-10"
            style={{ boxShadow: "0 0 0 2px #E11D48" }}
          />
          <span className="inline-block px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg mb-2 shadow-sm tracking-wide" data-testid={`badge-time-${idx}`}>
            {item.time}
          </span>
          <h4 className="text-xl font-extrabold text-slate-900 leading-tight mb-2" data-testid={`text-timeline-title-${idx}`}>
            {item.title}
          </h4>
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
      ))}
    </div>
  );
}

function ItinerarySection() {
  const [currentDay, setCurrentDay] = useState(1);
  const data = itineraryData.find(d => d.day === currentDay)!;

  return (
    <section id="itinerary" className="scroll-mt-24">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold text-slate-900" data-testid="text-itinerary-heading">Sprint Log (H24)</h2>
        <p className="mt-2 text-slate-600 text-lg">Master-detail view. Ogni orario contiene indicazioni precise su logistica, ordini al ristorante e regole sociali giapponesi.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row min-h-[800px]">
        <div
          className="lg:w-1/4 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50 p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
          data-testid="container-day-selector"
        >
          {itineraryData.map(d => (
            <button
              key={d.day}
              onClick={() => setCurrentDay(d.day)}
              className={`text-left lg:text-center flex-shrink-0 px-5 py-4 lg:py-3 rounded-xl border text-sm font-bold transition-all ${
                d.day === currentDay
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "border-slate-200 text-slate-500 hover:border-slate-300"
              }`}
              data-testid={`button-day-${d.day}`}
            >
              Giorno {d.day}
              <span className="block lg:hidden text-xs font-normal opacity-70 mt-1">{d.title}</span>
            </button>
          ))}
        </div>

        <div className="lg:w-3/4 p-6 md:p-10 relative bg-white" data-testid="container-day-content">
          <div className="h-full flex flex-col">
            <div className="flex items-start space-x-6 mb-8 pb-8 border-b border-slate-200">
              <div className="text-6xl p-4 bg-slate-50 rounded-2xl shadow-inner border border-slate-100 flex-shrink-0" data-testid="text-day-icon">
                {data.icon}
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block" data-testid="text-day-location">{data.location}</span>
                <h3 className="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight" data-testid="text-day-title">{data.title}</h3>
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${getTagColor(data.tag)}`} data-testid="badge-day-tag">
                  {data.tag}
                </span>
              </div>
            </div>
            <div className="flex-grow overflow-y-auto lg:pr-8 pb-10" style={{ scrollbarWidth: "none" }}>
              <TimelineView data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-1" data-testid="text-step-chart-title">Affaticamento Cumulativo</h3>
      <p className="text-sm text-slate-500 mb-6">Previsione passi. Toccherete i 35k passi al Giorno 9. Preparare scarpe adeguate.</p>
      <div className="w-full h-[350px] max-h-[400px]" data-testid="chart-steps">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stepChartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="#F1F5F9" />
            <XAxis dataKey="day" tick={{ fill: "#64748B", fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#64748B", fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 40000]} />
            <RechartsTooltip
              contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0", fontWeight: 600 }}
              formatter={(value: number) => [`${value.toLocaleString()} passi`, "Passi"]}
            />
            <Line
              type="monotone"
              dataKey="steps"
              stroke="#E11D48"
              strokeWidth={3}
              dot={{ fill: "#0F172A", r: 4 }}
              activeDot={{ r: 6, fill: "#E11D48" }}
              fill="rgba(225, 29, 72, 0.1)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function BudgetChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-1" data-testid="text-budget-chart-title">Allocazione Capitale (Post-Voli)</h3>
      <p className="text-sm text-slate-500 mb-6">Ripartizione del budget giornaliero in Yen.</p>
      <div className="w-full h-[350px] max-h-[400px]" data-testid="chart-budget">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={budgetData}
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="85%"
              dataKey="value"
              paddingAngle={2}
              stroke="none"
            >
              {budgetData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <RechartsTooltip
              contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0", fontWeight: 600 }}
              formatter={(value: number, name: string) => [`${value}%`, name]}
            />
            <Legend
              verticalAlign="bottom"
              iconSize={12}
              wrapperStyle={{ fontSize: "12px", fontWeight: 700, paddingTop: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function KyotoChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-1" data-testid="text-kyoto-chart-title">Kyoto ROI Matrix</h3>
      <p className="text-sm text-slate-500 mb-6">Impatto Visivo (Y) vs Densità Folla (X). Il quadrante in alto a sinistra è il target.</p>
      <div className="w-full h-[350px] max-h-[400px]" data-testid="chart-kyoto">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="#F1F5F9" />
            <XAxis
              type="number"
              dataKey="x"
              domain={[0, 11]}
              name="ROI (Visivo vs Folla)"
              tick={{ fill: "#64748B", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              label={{ value: "ROI (Visivo vs Folla)", position: "bottom", offset: 0, style: { fontWeight: 700, fill: "#64748B", fontSize: 12 } }}
            />
            <YAxis
              type="number"
              dataKey="y"
              domain={[0, 11]}
              name="Impatto Estetico"
              tick={{ fill: "#64748B", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              label={{ value: "Impatto Estetico", angle: -90, position: "insideLeft", style: { fontWeight: 700, fill: "#64748B", fontSize: 12 } }}
            />
            <RechartsTooltip
              contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0", fontWeight: 600 }}
              formatter={(value: number, name: string) => [value, name]}
              labelFormatter={() => ""}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-md">
                      <p className="text-sm font-bold text-slate-900">{data.label}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter
              data={kyotoData}
              fill="#10B981"
              stroke="#FFF"
              strokeWidth={2}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function VibeChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-1" data-testid="text-vibe-chart-title">Analisi del Vibe</h3>
      <p className="text-sm text-slate-500 mb-6">Punteggi delle categorie per confermare l'allineamento con le aspettative del gruppo.</p>
      <div className="w-full h-[350px] max-h-[400px]" data-testid="chart-vibe">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={vibeData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#F1F5F9" />
            <PolarAngleAxis
              dataKey="category"
              tick={{ fill: "#64748B", fontSize: 11, fontWeight: 700 }}
            />
            <PolarRadiusAxis
              domain={[0, 10]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              stroke="#E11D48"
              fill="rgba(225, 29, 72, 0.15)"
              strokeWidth={3}
              dot={{ fill: "#0F172A", r: 4 }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function DashboardSection() {
  return (
    <section id="dashboard" className="scroll-mt-24">
      <div className="mb-10 border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold text-slate-900" data-testid="text-dashboard-heading">Health & Strategy Dashboard</h2>
        <p className="mt-2 text-slate-600 text-lg">In un piano "Max Stamina", monitorare i colli di bottiglia fisici è vitale per evitare il burnout a metà viaggio.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <StepChart />
        <BudgetChart />
        <KyotoChart />
        <VibeChart />
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
        <h2 className="text-3xl font-extrabold text-slate-900" data-testid="text-checklist-heading">SLA & Pre-Departure Ops</h2>
        <p className="mt-2 text-slate-600 text-lg">Il setup d'ambiente da completare prima di atterrare in Giappone per azzerare le code.</p>
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
      <p className="text-slate-400 font-medium">Generato per Mario &bull; Product Builder &bull; Max Stamina Edition 2026</p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-slate-300">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <ItinerarySection />
        <DashboardSection />
        <ChecklistSection />
      </main>
      <Footer />
    </div>
  );
}
