import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

const Piano = lazy(() => import("@/pages/piano"));
const Prep = lazy(() => import("@/pages/prep"));
const Esperienze = lazy(() => import("@/pages/esperienze"));
const Checklist = lazy(() => import("@/pages/checklist"));
const Stats = lazy(() => import("@/pages/stats"));

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8 h-8 border-4 border-rose-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/piano" component={Piano} />
        <Route path="/prep" component={Prep} />
        <Route path="/esperienze" component={Esperienze} />
        <Route path="/checklist" component={Checklist} />
        <Route path="/stats" component={Stats} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
