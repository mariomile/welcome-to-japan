import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Piano from "@/pages/piano";
import Prep from "@/pages/prep";
import Esperienze from "@/pages/esperienze";
import Checklist from "@/pages/checklist";
import Stats from "@/pages/stats";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/piano" component={Piano} />
      <Route path="/prep" component={Prep} />
      <Route path="/esperienze" component={Esperienze} />
      <Route path="/checklist" component={Checklist} />
      <Route path="/stats" component={Stats} />
      <Route component={NotFound} />
    </Switch>
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
