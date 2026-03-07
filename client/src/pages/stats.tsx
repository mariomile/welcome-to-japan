import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend,
} from "recharts";
import Layout from "@/components/layout";
import { stepChartData, budgetData, kyotoData, vibeData } from "@/lib/itinerary-data";

interface ChartTheme {
  axis: string;
  grid: string;
  tooltipBg: string;
  tooltipBorder: string;
  tooltipText: string;
  dot: string;
}

function StepChart({ theme }: { theme: ChartTheme }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-md sm:p-6">
      <h3 className="mb-0.5 font-fraunces text-lg font-semibold text-foreground" data-testid="text-step-chart-title">Passi previsti (RIP gambe)</h3>
      <p className="mb-4 text-xs text-muted-foreground">Giorno 7 (Kyoto piena) = 30.000 passi.</p>
      <div className="h-[250px] w-full sm:h-[300px]" data-testid="chart-steps">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stepChartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="4 4" stroke={theme.grid} />
            <XAxis dataKey="day" tick={{ fill: theme.axis, fontSize: 10, fontWeight: 600 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: theme.axis, fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 40000]} />
            <RechartsTooltip
              contentStyle={{
                borderRadius: "8px",
                border: `1px solid ${theme.tooltipBorder}`,
                fontWeight: 600,
                fontSize: 12,
                backgroundColor: theme.tooltipBg,
                color: theme.tooltipText,
              }}
              formatter={(value: number) => [`${value.toLocaleString()} passi`, "Passi"]}
            />
            <Line type="monotone" dataKey="steps" stroke="#E11D48" strokeWidth={2.5} dot={{ fill: theme.dot, r: 3 }} activeDot={{ r: 5, fill: "#E11D48" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function BudgetChart({ theme }: { theme: ChartTheme }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-md sm:p-6">
      <h3 className="mb-0.5 font-fraunces text-lg font-semibold text-foreground" data-testid="text-budget-chart-title">Dove finiscono i soldi</h3>
      <p className="mb-4 text-xs text-muted-foreground">Soprattutto in cibo e uscite. Il portafoglio non sopravviver&agrave;.</p>
      <div className="h-[250px] w-full sm:h-[300px]" data-testid="chart-budget">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={budgetData} cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" dataKey="value" paddingAngle={2} stroke="none">
              {budgetData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <RechartsTooltip
              contentStyle={{
                borderRadius: "8px",
                border: `1px solid ${theme.tooltipBorder}`,
                fontWeight: 600,
                fontSize: 12,
                backgroundColor: theme.tooltipBg,
                color: theme.tooltipText,
              }}
              formatter={(value: number, name: string) => [`${value}%`, name]}
            />
            <Legend verticalAlign="bottom" iconSize={10} wrapperStyle={{ fontSize: "11px", fontWeight: 700, paddingTop: "12px", color: theme.axis }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function KyotoChart({ theme }: { theme: ChartTheme }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-md sm:p-6">
      <h3 className="mb-0.5 font-fraunces text-lg font-semibold text-foreground" data-testid="text-kyoto-chart-title">Kyoto senza turisti</h3>
      <p className="mb-4 text-xs text-muted-foreground">Figo (Y) vs Gente (X). In alto a sinistra = paradiso.</p>
      <div className="h-[250px] w-full sm:h-[300px]" data-testid="chart-kyoto">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: -10 }}>
            <CartesianGrid strokeDasharray="4 4" stroke={theme.grid} />
            <XAxis type="number" dataKey="x" domain={[0, 11]} tick={{ fill: theme.axis, fontSize: 10 }} axisLine={false} tickLine={false} label={{ value: "Gente", position: "bottom", offset: 0, style: { fontWeight: 700, fill: theme.axis, fontSize: 10 } }} />
            <YAxis type="number" dataKey="y" domain={[0, 11]} tick={{ fill: theme.axis, fontSize: 10 }} axisLine={false} tickLine={false} label={{ value: "Figo", angle: -90, position: "insideLeft", style: { fontWeight: 700, fill: theme.axis, fontSize: 10 } }} />
            <RechartsTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-lg border px-3 py-2 shadow-md" style={{ backgroundColor: theme.tooltipBg, borderColor: theme.tooltipBorder }}>
                      <p className="text-xs font-bold" style={{ color: theme.tooltipText }}>{data.label}</p>
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

function VibeChart({ theme }: { theme: ChartTheme }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-md sm:p-6">
      <h3 className="mb-0.5 font-fraunces text-lg font-semibold text-foreground" data-testid="text-vibe-chart-title">Tipo di viaggio</h3>
      <p className="mb-4 text-xs text-muted-foreground">Tanta roba, zero relax. Il riposo &egrave; per i deboli.</p>
      <div className="h-[250px] w-full sm:h-[300px]" data-testid="chart-vibe">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={vibeData} cx="50%" cy="50%" outerRadius="65%">
            <PolarGrid stroke={theme.grid} />
            <PolarAngleAxis dataKey="category" tick={{ fill: theme.axis, fontSize: 9, fontWeight: 700 }} />
            <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
            <Radar dataKey="value" stroke="#E11D48" fill="rgba(225, 29, 72, 0.15)" strokeWidth={2.5} dot={{ fill: theme.dot, r: 3 }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function Stats() {
  const isDarkMode =
    typeof document !== "undefined" && document.documentElement.classList.contains("dark");

  const theme: ChartTheme = isDarkMode
    ? {
        axis: "#a09880",
        grid: "#2e2a24",
        tooltipBg: "#1a1714",
        tooltipBorder: "#2e2a24",
        tooltipText: "#ede8de",
        dot: "#ede8de",
      }
    : {
        axis: "#8a7a68",
        grid: "#e8e3d8",
        tooltipBg: "#faf8f3",
        tooltipBorder: "#e8e3d8",
        tooltipText: "#1c1810",
        dot: "#1c1810",
      };

  return (
    <Layout>
      <header className="border-b border-border bg-card/90 px-4 pb-6 pt-8 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-fraunces italic text-2xl font-bold text-foreground sm:text-3xl" data-testid="text-stats-title">
            I Numeri del <span className="text-primary">Delirio</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base" data-testid="text-stats-subtitle">
            14 giorni, 7 tappe, un milione di passi. Chi molla paga da bere.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl space-y-4 px-4 py-4 pb-24">
        <StepChart theme={theme} />
        <BudgetChart theme={theme} />
        <KyotoChart theme={theme} />
        <VibeChart theme={theme} />
      </main>
    </Layout>
  );
}
