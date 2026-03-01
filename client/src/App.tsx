import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Promotions from "@/pages/Promotions";
import Contact from "@/pages/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/promotions" component={Promotions}/>
      <Route path="/contact" component={Contact}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col selection:bg-primary/30 bg-noise">
          <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />
          <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
          
          <Header />
          <Router />
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;