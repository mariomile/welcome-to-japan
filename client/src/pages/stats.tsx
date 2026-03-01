import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from "recharts";
import { stepChartData, budgetData, kyotoData, vibeData } from "@/lib/itinerary-data";
import Layout from "@/components/layout";

function StepChart() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold text-slate-900 mb-0.5" data-testid="text-step-chart-title">Passi previsti (RIP gambe)</h3>
      <p className="text-xs text-slate-500 mb-4">Giorno 7 (Kyoto piena) = 30.000 passi.</p>
      <div className="w-full h-[250px] sm:h-[300px]" data-testid="chart-steps">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stepChartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="#F1F5F9" />
            <XAxis dataKey="day" tick={{ fill: "#64748B", fontSize: 10, fontWeight: 600 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#64748B", fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 40000]} />
            <RechartsTooltip
              contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0", fontWeight: 600, fontSize: 12 }}
              formatter={(value: number) => [`${value.toLocaleString()} passi`, "Passi"]}
            />
            <Line type="monotone" dataKey="steps" stroke="#E11D48" strokeWidth={2.5} dot={{ fill: "#0F172A", r: 3 }} activeDot={{ r: 5, fill: "#E11D48" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function BudgetChart() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold text-slate-900 mb-0.5" data-testid="text-budget-chart-title">Dove finiscono i soldi</h3>
      <p className="text-xs text-slate-500 mb-4">Soprattutto in cibo e uscite. Il portafoglio non sopravviver&agrave;.</p>
      <div className="w-full h-[250px] sm:h-[300px]" data-testid="chart-budget">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={budgetData} cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" dataKey="value" paddingAngle={2} stroke="none">
              {budgetData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <RechartsTooltip
              contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0", fontWeight: 600, fontSize: 12 }}
              formatter={(value: number, name: string) => [`${value}%`, name]}
            />
            <Legend verticalAlign="bottom" iconSize={10} wrapperStyle={{ fontSize: "11px", fontWeight: 700, paddingTop: "12px" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function KyotoChart() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold text-slate-900 mb-0.5" data-testid="text-kyoto-chart-title">Kyoto senza turisti</h3>
      <p className="text-xs text-slate-500 mb-4">Figo (Y) vs Gente (X). In alto a sinistra = paradiso.</p>
      <div className="w-full h-[250px] sm:h-[300px]" data-testid="chart-kyoto">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: -10 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="#F1F5F9" />
            <XAxis type="number" dataKey="x" domain={[0, 11]} tick={{ fill: "#64748B", fontSize: 10 }} axisLine={false} tickLine={false} label={{ value: "Gente", position: "bottom", offset: 0, style: { fontWeight: 700, fill: "#64748B", fontSize: 10 } }} />
            <YAxis type="number" dataKey="y" domain={[0, 11]} tick={{ fill: "#64748B", fontSize: 10 }} axisLine={false} tickLine={false} label={{ value: "Figo", angle: -90, position: "insideLeft", style: { fontWeight: 700, fill: "#64748B", fontSize: 10 } }} />
            <RechartsTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-md">
                      <p className="text-xs font-bold text-slate-900">{data.label}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter data={kyotoData} fill="#10B981" stroke="#FFF" strokeWidth={2} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function VibeChart() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold text-slate-900 mb-0.5" data-testid="text-vibe-chart-title">Tipo di viaggio</h3>
      <p className="text-xs text-slate-500 mb-4">Tanta roba, zero relax. Il riposo &egrave; per i deboli.</p>
      <div className="w-full h-[250px] sm:h-[300px]" data-testid="chart-vibe">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={vibeData} cx="50%" cy="50%" outerRadius="65%">
            <PolarGrid stroke="#F1F5F9" />
            <PolarAngleAxis dataKey="category" tick={{ fill: "#64748B", fontSize: 9, fontWeight: 700 }} />
            <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
            <Radar dataKey="value" stroke="#E11D48" fill="rgba(225, 29, 72, 0.15)" strokeWidth={2.5} dot={{ fill: "#0F172A", r: 3 }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <Layout>
      <header className="pt-8 pb-6 px-4 bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-stats-title">
            I Numeri del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-rose-500">Delirio</span>
          </h1>
          <p className="mt-1 text-slate-500 text-sm sm:text-base" data-testid="text-stats-subtitle">
            14 giorni, 7 tappe, un milione di passi. Chi molla paga da bere.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 pb-24 space-y-4">
        <StepChart />
        <BudgetChart />
        <KyotoChart />
        <VibeChart />
      </main>
    </Layout>
  );
}
