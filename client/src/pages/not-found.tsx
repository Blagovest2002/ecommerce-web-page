import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Страницата не е намерена"
        description="Страницата, която търсите, не съществува. Върнете се към началната страница на Райски Газ София."
        path="/404"
        noindex
      />
      <main id="main-content" className="min-h-[70vh] flex items-center justify-center relative z-10 px-6">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl font-black mb-4 text-white">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Страницата не е намерена. Може би линкът е грешен или страницата е преместена.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg text-lg"
          >
            <Home className="w-5 h-5" /> Към началото
          </Link>
        </div>
      </main>
    </>
  );
}
