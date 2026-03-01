import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from "recharts";
import { stepChartData, budgetData, kyotoData, vibeData } from "@/lib/itinerary-data";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

function StepChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-1" data-testid="text-step-chart-title">Quanti passi ci aspettano (RIP gambe)</h3>
      <p className="text-sm text-slate-500 mb-6">Al giorno 13 (USJ) tocchiamo i 32.000 passi. Portiamoci scarpe serie o piangiamo al terzo tempio.</p>
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
      <h3 className="text-xl font-bold text-slate-900 mb-1" data-testid="text-budget-chart-title">Dove finiscono i nostri soldi</h3>
      <p className="text-sm text-slate-500 mb-6">Spoiler: soprattutto in cibo e uscite. Il portafoglio non sopravviver&agrave;, noi s&igrave;.</p>
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
      <h3 className="text-xl font-bold text-slate-900 mb-1" data-testid="text-kyoto-chart-title">Dove andare a Kyoto senza turisti</h3>
      <p className="text-sm text-slate-500 mb-6">Quanto &egrave; figo (Y) vs quanta gente c&apos;&egrave; (X). In alto a sinistra = posto da urlo senza folla. Obiettivo: stare l&igrave;.</p>
      <div className="w-full h-[350px] max-h-[400px]" data-testid="chart-kyoto">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="#F1F5F9" />
            <XAxis
              type="number"
              dataKey="x"
              domain={[0, 11]}
              name="Quanta gente"
              tick={{ fill: "#64748B", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              label={{ value: "Quanta gente", position: "bottom", offset: 0, style: { fontWeight: 700, fill: "#64748B", fontSize: 12 } }}
            />
            <YAxis
              type="number"
              dataKey="y"
              domain={[0, 11]}
              name="Quanto è figo"
              tick={{ fill: "#64748B", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              label={{ value: "Quanto è figo", angle: -90, position: "insideLeft", style: { fontWeight: 700, fill: "#64748B", fontSize: 12 } }}
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
      <h3 className="text-xl font-bold text-slate-900 mb-1" data-testid="text-vibe-chart-title">Che tipo di viaggio sar&agrave;</h3>
      <p className="text-sm text-slate-500 mb-6">Tanta roba da fare, tanta roba da mangiare, zero relax. Ce lo meritiamo. Il riposo &egrave; per i deboli.</p>
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

export default function Stats() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-slate-300">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" data-testid="nav-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-4 h-16 items-center">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span className="text-2xl" role="img" aria-label="Japan flag">&#x1F1EF;&#x1F1F5;</span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Project <span className="text-[#E11D48]">Japan</span>
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#E11D48] transition-colors" data-testid="link-back-home">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Torna al Piano</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="py-16 px-4 bg-white border-b border-slate-200 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E11D48] to-orange-400" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight" data-testid="text-stats-title">
            I Numeri del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-rose-500">Delirio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium" data-testid="text-stats-subtitle">
            Per non crepare a met&agrave; viaggio abbiamo fatto i conti. Al giorno 13 (USJ) saremo distrutti, ma felici. Chi molla paga da bere a tutti.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StepChart />
          <BudgetChart />
          <KyotoChart />
          <VibeChart />
        </div>
      </main>

      <footer className="bg-slate-900 py-12 text-center" data-testid="footer">
        <p className="text-slate-400 font-medium">Fatto con birre, ansia e troppo tempo libero &bull; Tre maschi in Giappone &bull; 2026</p>
      </footer>
    </div>
  );
}
