import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SEO } from "@/components/SEO";

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

export default function Products() {
  const productSchema = products.map(product => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://raiskigazsofia.bg${product.image}`,
    "description": `Висококачествен райски газ ${product.name} с експресна доставка в София.`,
    "offers": {
      "@type": "Offer",
      "url": "https://raiskigazsofia.bg/products",
      "priceCurrency": "EUR",
      "price": product.price.replace(',', '.').replace(' €', ''),
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
        title="Продукти - Флакони Райски Газ и Балони София" 
        description="Разгледайте нашата селекция от флакони Exotic Whip, Instant Whip и Carbon Whip Magnum. Експресна денонощна доставка на райски газ в София."
        canonicalUrl="https://raiskigazsofia.bg/products"
        schema={productSchema}
      />
      <main className="container mx-auto px-6 pt-32 pb-20 min-h-screen relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Нашите Продукти
          </h1>
          <p className="text-muted-foreground text-xl">
            Изберете от нашата селекция висококачествени флакони с райски газ. Предлагаме различни размери за всяко парти с безплатна доставка за София.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {products.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.id}
              className="flex flex-col items-center group"
            >
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden mb-6 relative border border-white/10 group-hover:border-primary/50 transition-colors duration-500 shadow-xl bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-3 group-hover:text-primary transition-colors">
                {item.name}
              </h2>
              
              <div className="text-xl font-black text-white text-center px-8 py-3 rounded-full bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-[2.5rem] max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Готови ли сте да поръчате?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Нашата услуга за поръчка по телефон гарантира, че ще получите вашите продукти в рамките на 20 минути навсякъде в София.
          </p>
          <a 
            href="tel:0886401804" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-primary rounded-full hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(217,70,239,0.5)] text-xl"
          >
            <Phone className="w-6 h-6" /> Поръчай сега: 088 640 1804
          </a>
        </div>
      </main>
    </>
  );
}