import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Package, Percent, Zap } from "lucide-react";

import product1 from "@assets/IMG_7461_1772361053130.jpeg";
import product2 from "@assets/IMG_7462_1772361053131.jpeg";
import product3 from "@assets/IMG_7463_1772361053130.jpeg";
import product4 from "@assets/IMG_7460_1772361053129.jpeg";

const products = [
  { id: 1, name: "Exotic Whip 670g", price: "75,00 €", image: product1 },
  { id: 2, name: "Exotic Whip 2000g", price: "30,00 €", image: product2 },
  { id: 3, name: "Instant Whip 640g", price: "25,00 €", image: product3 },
  { id: 4, name: "Carbon Whip Magnum 1100 g", price: "45,00 €", image: product4 },
];

const promos = [
  { id: 1, name: "Exotic Whip 670g", offer: "6 броя • 180,00 €", image: product1 },
  { id: 2, name: "Exotic Whip 2000g", offer: "3 броя • 200,00 €", image: product2 },
  { id: 3, name: "Instant Whip 640g", offer: "6 броя • 110,00 €", image: product3 },
  { id: 4, name: "Carbon Whip Magnum 1100g", offer: "4 броя • 155,00 €", image: product4 },
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<"products" | "promos" | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 h-auto py-4 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-black text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 flex items-center gap-2">
            <Zap className="w-8 h-8 text-primary" fill="currentColor" /> N2O СОФИЯ
          </div>
          
          <nav className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
            <button 
              onClick={() => setActiveModal("products")}
              className="text-sm md:text-base font-semibold hover:text-primary transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5"
              data-testid="button-products"
            >
              <Package className="w-5 h-5" /> Продукти
            </button>
            <button 
              onClick={() => setActiveModal("promos")}
              className="text-sm md:text-base font-semibold hover:text-primary transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5"
              data-testid="button-promos"
            >
              <Percent className="w-5 h-5" /> Промоции
            </button>
            
            <a 
              href="tel:0888888888" 
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-8 md:py-4 font-bold text-white bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(217,70,239,0.4)] text-sm md:text-lg ml-2"
              data-testid="button-order"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <Phone className="w-5 h-5" /> 088 888 8888
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6 pt-40 md:pt-48 pb-20 min-h-screen flex flex-col justify-center relative z-10">
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
            <button 
              onClick={() => setActiveModal("products")}
              className="px-10 py-5 bg-white text-black font-extrabold text-lg rounded-full hover:bg-gray-200 transition-colors shadow-xl hover:scale-105 active:scale-95 duration-200"
            >
              Разгледай Продуктите
            </button>
            <button 
              onClick={() => setActiveModal("promos")}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors hover:scale-105 active:scale-95 duration-200"
            >
              Виж Промоциите
            </button>
          </div>
        </motion.div>
      </main>

      {/* Modal / Pop-up */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl bg-background/95 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 inline-block">
                  {activeModal === "products" ? "Нашите Продукти" : "Топ Промоции"}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {activeModal === "products" 
                    ? "Изберете от нашата селекция висококачествени флакони и балони." 
                    : "Спестете с нашите ексклузивни пакетни предложения!"}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {(activeModal === "products" ? products : promos).map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.id}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 relative border-[6px] border-white/5 group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {item.name}
                    </h3>
                    
                    <div className="text-xl font-bold text-white text-center px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      {'price' in item ? item.price : item.offer}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                 <a 
                  href="tel:0888888888" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-primary rounded-full hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(217,70,239,0.5)] text-lg"
                >
                  <Phone className="w-6 h-6" /> Поръчай сега: 088 888 8888
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}