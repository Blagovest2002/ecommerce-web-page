import { Header, Footer } from "@/components/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import product1 from "@assets/IMG_7461_1772361053130.jpeg";
import product2 from "@assets/IMG_7462_1772361053131.jpeg";
import product3 from "@assets/IMG_7463_1772361053130.jpeg";
import product4 from "@assets/IMG_7460_1772361053129.jpeg";

const promos = [
  { id: 1, name: "Exotic Whip 670g", offer: "6 броя • 180,00 €", numericPrice: "180.00", image: product1 },
  { id: 2, name: "Exotic Whip 2000g", offer: "3 броя • 200,00 €", numericPrice: "200.00", image: product2 },
  { id: 3, name: "Instant Whip 640g", offer: "6 броя • 110,00 €", numericPrice: "110.00", image: product3 },
  { id: 4, name: "Carbon Whip Magnum 1100g", offer: "4 броя • 155,00 €", numericPrice: "155.00", image: product4 },
];

export default function Promotions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": promos.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `Промо Пакет: ${p.name}`,
        "image": p.image,
        "description": `Промоционален пакет кулинарен газ ${p.name}: ${p.offer}. Доставка в София.`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": p.numericPrice,
          "availability": "https://schema.org/InStock",
          "url": "https://kulinarengaz-sofia.bg/promotions"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <SEO 
        title="Промоции на Кулинарен Газ | Изгодни пакети в София"
        description="Спестете с нашите ексклузивни пакетни предложения за кулинарен газ и газ за сифони. Най-изгодните цени с бърза доставка в София. Разгледай тук."
        canonicalUrl="/promotions"
        schema={schema}
      />
      
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <Header />

      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10 min-h-[80vh]">
        <div className="mb-12 text-center md:text-left mt-8">
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 inline-block">
            Топ Промоции
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Спестете с нашите ексклузивни пакетни предложения! Идеални за заведения и чести потребители на кулинарен газ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {promos.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.id}
              className="flex flex-col items-center group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                ПРОМО
              </div>
              
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 relative border-[4px] border-transparent group-hover:border-blue-500/50 transition-colors duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={item.image} 
                  alt={`Промоция ${item.name}`} 
                  width="256" height="256"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-black/50"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                {item.name}
              </h2>
              
              <div className="text-xl font-bold text-white text-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-primary/20 border border-white/10 mb-6">
                {item.offer}
              </div>
              
              <a 
                href="tel:0886401804" 
                className="w-full flex items-center justify-center gap-2 px-4 py-3 font-bold text-white bg-blue-600/80 hover:bg-blue-600 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" /> Поръчай Пакета
              </a>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 max-w-4xl prose prose-invert">
          <h2 className="text-2xl font-bold mb-4">Спестете с пакетни цени за кулинарен газ</h2>
          <p className="text-white/70">
            Ние предлагаме изгодни решения за бизнеси в <strong>София</strong>, които се нуждаят от редовни доставки. Поръчвайки <strong>газ за сифони</strong> на едро чрез нашите промоционални пакети, вие си гарантирате най-добрите цени на пазара. Направете своята <strong>поръчка по телефон</strong> и получете безплатна доставка до вашата врата в рамките на минути.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}