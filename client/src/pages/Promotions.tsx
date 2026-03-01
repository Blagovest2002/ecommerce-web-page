import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SEO } from "@/components/SEO";

import product1 from "@assets/IMG_7461_1772361053130.jpeg";
import product2 from "@assets/IMG_7462_1772361053131.jpeg";
import product3 from "@assets/IMG_7463_1772361053130.jpeg";
import product4 from "@assets/IMG_7460_1772361053129.jpeg";

const promos = [
  { id: 1, name: "Exotic Whip 670g", offer: "6 броя • 180,00 €", image: product1 },
  { id: 2, name: "Exotic Whip 2000g", offer: "3 броя • 200,00 €", image: product2 },
  { id: 3, name: "Instant Whip 640g", offer: "6 броя • 110,00 €", image: product3 },
  { id: 4, name: "Carbon Whip Magnum 1100g", offer: "4 броя • 155,00 €", image: product4 },
];

export default function Promotions() {
  const promoSchema = promos.map(promo => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Промо Пакет: ${promo.name} - ${promo.offer}`,
    "image": `https://raiskigazsofia.bg${promo.image}`,
    "description": `Ексклузивна промоция за райски газ ${promo.name}. Вземете ${promo.offer.split('•')[0]} с доставка в София.`,
    "offers": {
      "@type": "Offer",
      "url": "https://raiskigazsofia.bg/promotions",
      "priceCurrency": "EUR",
      "price": promo.offer.split('•')[1].trim().replace(',', '.').replace(' €', ''),
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Райски Газ София 24/7"
      }
    }
  }));

  return (
    <>
      <SEO 
        title="Промоции Райски Газ - Топ Оферти за София" 
        description="Спестете с нашите ексклузивни пакетни предложения за райски газ. Поръчайте 6 броя Exotic Whip или Instant Whip на изгодна цена с безплатна доставка за София."
        canonicalUrl="https://raiskigazsofia.bg/promotions"
        schema={promoSchema}
      />
      <main className="container mx-auto px-6 pt-32 pb-20 min-h-screen relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Топ Промоции
          </h1>
          <p className="text-muted-foreground text-xl">
            Вземете повече, платете по-малко! Спестете с нашите ексклузивни пакетни предложения за флакони с райски газ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {promos.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.id}
              className="flex flex-col items-center group relative"
            >
              <div className="absolute -top-4 -right-4 bg-primary text-white font-black px-4 py-2 rounded-full z-20 shadow-lg rotate-12 transform group-hover:rotate-0 transition-transform">
                ПРОМО
              </div>
              
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden mb-6 relative border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 shadow-[0_0_30px_rgba(217,70,239,0.15)] bg-gradient-to-b from-white/5 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-3 group-hover:text-primary transition-colors">
                {item.name}
              </h2>
              
              <div className="flex flex-col items-center">
                <div className="text-lg font-medium text-blue-400 mb-1">
                  {item.offer.split('•')[0]}
                </div>
                <div className="text-2xl font-black text-white px-8 py-2 rounded-full bg-gradient-to-r from-primary to-blue-500 shadow-lg">
                  {item.offer.split('•')[1]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/10 text-muted-foreground text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Най-добрите цени за партита и събития</h3>
          <p className="text-lg leading-relaxed mb-8">
            Нашите промоционални пакети са идеални за по-големи събирания. Поръчайте вашите флакони с <strong className="text-white">райски газ</strong> днес и се възползвайте от нашата 
            експресна 24/7 доставка за цяла <strong className="text-white">София</strong>. 
          </p>
          <a 
            href="tel:0886401804" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 active:scale-95 transition-all text-xl"
          >
            <Phone className="w-6 h-6" /> Свържете се с нас
          </a>
        </div>
      </main>
    </>
  );
}