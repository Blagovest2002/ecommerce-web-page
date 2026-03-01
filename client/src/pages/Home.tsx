import { Header, Footer } from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

// Define our LocalBusiness schema for the Home page
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Кулинарен Газ София",
  "image": "https://replit.com/public/images/opengraph.png",
  "telephone": "0886401804",
  "url": "https://kulinarengaz-sofia.bg/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "София",
    "addressRegion": "София-град",
    "addressCountry": "BG"
  },
  "areaServed": {
    "@type": "City",
    "name": "София"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30">
      <SEO 
        title="Кулинарен Газ София | Експресна Доставка 24/7 | 088 640 1804"
        description="Кулинарен газ за сифони в София. БЕЗПЛАТНА експресна доставка до 20 минути. Поръчка по телефон 0886401804. Най-ниски цени!"
        canonicalUrl="/"
        schema={localBusinessSchema}
      />
      
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <Header />

      <main className="container mx-auto px-6 pt-40 md:pt-48 pb-20 min-h-[80vh] flex flex-col justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto md:mx-0 text-center md:text-left"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm md:text-base mb-6">
            🚀 Най-бързата доставка в София
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8">
            Кулинарен Газ <br className="hidden md:block"/> София <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">24/7</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mt-4 block">
              Газ за сифони и флакони
            </span>
          </h1>
          
          <div className="space-y-6 text-xl md:text-2xl font-medium text-white/80 md:border-l-4 border-primary md:pl-8 py-2 mx-auto md:mx-0 max-w-3xl">
            <h2 className="flex items-center justify-center md:justify-start gap-4">
              <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
              БЕЗПЛАТНА експресна доставка до 20 минути в София
            </h2>
            <p className="flex items-center justify-center md:justify-start gap-4">
              <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              Най-ниски цени на кулинарен газ и доставка в София!
            </p>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <Link href="/products" className="px-10 py-5 bg-white text-black font-extrabold text-lg rounded-full hover:bg-gray-200 transition-colors shadow-xl hover:scale-105 active:scale-95 duration-200 text-center">
              Разгледай Продуктите
            </Link>
            <Link href="/promotions" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors hover:scale-105 active:scale-95 duration-200 text-center">
              Виж Промоциите
            </Link>
          </div>
        </motion.div>
        
        {/* SEO Text Content below the fold */}
        <section className="mt-32 max-w-4xl mx-auto md:mx-0 prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">Защо да изберете нашия кулинарен газ в София?</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Търсите качествен <strong>кулинарен газ</strong> за вашите сладкарски изделия, десерти или коктейли? Ние сме водещият доставчик на <strong>газ за сифони в София</strong>, предлагайки висококачествени продукти на марки като Exotic Whip, Instant Whip и Carbon Whip Magnum. Нашите флакони са идеални за приготвяне на перфектна бита сметана, инфузии и еспуми.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Разбираме колко е важно времето за нашите клиенти, затова предлагаме <strong>безплатна експресна доставка до 20 минути</strong> за цяла София. Независимо дали сте професионален готвач, барман или ентусиаст в кухнята, ние сме на ваше разположение 24/7. Вашата <strong>поръчка по телефон</strong> се приема веднага на номер 0886401804.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}