import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO, localBusinessSchema } from "@/components/SEO";
import heroImage from "@assets/IMG_7466_1772385908982.jpeg";

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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex-1"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm md:text-base mb-6">
              🚀 Най-бързата доставка в града
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 font-serif">
              Райски Газ София <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">24/7</span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mt-4 block font-sans">
                балони и флакони
              </span>
            </h1>
            
            <div className="space-y-6 text-xl md:text-2xl font-medium text-white/80 md:border-l-2 border-primary/50 md:pl-8 py-2 mx-auto md:mx-0 max-w-3xl">
              <h2 className="sr-only">Бърза и безплатна доставка на райски газ в София</h2>
              <p className="flex items-center justify-center lg:justify-start gap-4">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(217,160,91,0.8)]" />
                БЕЗПЛАТНА експресна доставка до 20 минути в София
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                Най-ниски цени на райски газ и доставка в София!
              </p>
            </div>

            <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href="/products">
                <button 
                  className="px-10 py-5 bg-primary text-primary-foreground font-extrabold text-lg rounded-none border border-primary hover:bg-transparent hover:text-primary transition-colors shadow-[0_0_30px_rgba(217,160,91,0.3)] hover:shadow-[0_0_40px_rgba(217,160,91,0.5)] active:scale-95 duration-300 uppercase tracking-widest"
                >
                  Разгледай Продуктите
                </button>
              </Link>
              <Link href="/promotions">
                <button 
                  className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg rounded-none hover:bg-white/10 transition-colors hover:scale-105 active:scale-95 duration-200 uppercase tracking-widest"
                >
                  Виж Промоциите
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-xl relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 2, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-amber-500/30 blur-[80px] rounded-full scale-90" />
              <img 
                src={heroImage} 
                alt="Exotic Whip райски газ" 
                className="w-full h-auto object-cover rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
              />
              <div className="absolute inset-0 rounded-[2rem] border border-primary/20 pointer-events-none mix-blend-overlay" />
            </motion.div>
          </motion.div>
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
      </main>
    </>
  );
}