import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO, localBusinessSchema } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Райски Газ София 24/7 - Доставка до 20 минути" 
        description="Най-ниски цени на райски газ и доставка в София! БЕЗПЛАТНА експресна доставка до 20 минути на флакони и балони. Поръчай по телефон 24/7."
        canonicalUrl="https://raiskigazsofia.bg/"
        schema={localBusinessSchema}
      />
      <main className="container mx-auto px-6 pt-40 md:pt-48 pb-20 min-h-[calc(100vh-200px)] flex flex-col justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto md:mx-0 text-center md:text-left"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm md:text-base mb-6">
            🚀 Най-бързата доставка в града
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8">
            Райски Газ София <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">24/7</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mt-4 block">
              балони и флакони
            </span>
          </h1>
          
          <div className="space-y-6 text-xl md:text-2xl font-medium text-white/80 md:border-l-4 border-primary md:pl-8 py-2 mx-auto md:mx-0 max-w-3xl">
            <h2 className="sr-only">Бърза и безплатна доставка на райски газ в София</h2>
            <p className="flex items-center justify-center md:justify-start gap-4">
              <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
              БЕЗПЛАТНА експресна доставка до 20 минути в София
            </p>
            <p className="flex items-center justify-center md:justify-start gap-4">
              <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              Най-ниски цени на райски газ и доставка в София!
            </p>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <Link href="/products">
              <button 
                className="px-10 py-5 bg-white text-black font-extrabold text-lg rounded-full hover:bg-gray-200 transition-colors shadow-xl hover:scale-105 active:scale-95 duration-200"
              >
                Разгледай Продуктите
              </button>
            </Link>
            <Link href="/promotions">
              <button 
                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors hover:scale-105 active:scale-95 duration-200"
              >
                Виж Промоциите
              </button>
            </Link>
          </div>
          
          {/* SEO Content block - visible to crawlers, styled beautifully for users */}
          <div className="mt-24 pt-12 border-t border-white/10 text-muted-foreground">
            <h3 className="text-2xl font-bold text-white mb-4">Денонощна доставка на райски газ София</h3>
            <p className="mb-4 text-lg leading-relaxed">
              Ако търсите качествени <strong className="text-white">флакони райски газ</strong> или <strong className="text-white">балони</strong> за вашето парти, ние предлагаме най-доброто решение в <strong className="text-white">София</strong>. 
              Нашата услуга за <strong className="text-white">поръчка по телефон</strong> работи 24/7, осигурявайки ви бърз и надежден достъп до продуктите ни.
            </p>
            <p className="text-lg leading-relaxed">
              Разполагаме с разнообразие от размери, включително популярните Exotic Whip и Instant Whip. 
              Всички наши продукти са с гарантирано качество, а експресната ни доставка пристига до вашия адрес за по-малко от 20 минути.
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
}