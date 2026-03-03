import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/* Code-split routes for smaller initial bundle */
const Home = lazy(() => import("@/pages/Home"));
const Products = lazy(() => import("@/pages/Products"));
const Promotions = lazy(() => import("@/pages/Promotions"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    // Reset every possible scroll container
    const targets = [
      document.documentElement,
      document.body,
      document.getElementById("root"),
    ];
    targets.forEach((el) => {
      if (el) el.scrollTop = 0;
    });
    window.scrollTo(0, 0);

    // Double-tap after paint in case lazy route causes re-layout
    const rafId = requestAnimationFrame(() => {
      targets.forEach((el) => {
        if (el) el.scrollTop = 0;
      });
      window.scrollTo(0, 0);

      // Triple-tap after a microtask for lazy-loaded chunks
      requestAnimationFrame(() => {
        targets.forEach((el) => {
          if (el) el.scrollTop = 0;
        });
        window.scrollTo(0, 0);
      });
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 bg-noise">
      <ScrollToTop />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;