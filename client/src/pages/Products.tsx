import { Header, Footer } from "@/components/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import product1 from "@assets/IMG_7461_1772361053130.jpeg";
import product2 from "@assets/IMG_7462_1772361053131.jpeg";
import product3 from "@assets/IMG_7463_1772361053130.jpeg";
import product4 from "@assets/IMG_7460_1772361053129.jpeg";

const products = [
  { id: 1, name: "Exotic Whip 670g", price: "75,00 €", numericPrice: "75.00", image: product1 },
  { id: 2, name: "Exotic Whip 2000g", price: "30,00 €", numericPrice: "30.00", image: product2 },
  { id: 3, name: "Instant Whip 640g", price: "25,00 €", numericPrice: "25.00", image: product3 },
  { id: 4, name: "Carbon Whip Magnum 1100 g", price: "45,00 €", numericPrice: "45.00", image: product4 },
];

export default function Products() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "image": p.image,
        "description": `Кулинарен газ за сифони ${p.name} с експресна доставка в София.`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": p.numericPrice,
          "availability": "https://schema.org/InStock",
          "url": "https://kulinarengaz-sofia.bg/products"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <SEO 
        title="Продукти - Кулинарен Газ и Газ за Сифони | София"
        description="Разгледайте нашите продукти: Exotic Whip, Instant Whip и Carbon Whip Magnum. Качествен кулинарен газ за сифони с безплатна доставка в София. Поръчай по телефон."
        canonicalUrl="/products"
        schema={schema}
      />
      
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <Header />

      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10 min-h-[80vh]">
        <div className="mb-12 text-center md:text-left mt-8">
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 inline-block">
            Нашите Продукти
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Изберете от нашата селекция висококачествени флакони с кулинарен газ. Перфектни за професионална и домашна употреба.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {products.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.id}
              className="flex flex-col items-center group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 relative border-[4px] border-transparent group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={item.image} 
                  alt={`Снимка на ${item.name}`} 
                  width="256" height="256"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-black/50"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {item.name}
              </h2>
              
              <div className="text-xl font-bold text-white text-center px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-white/10 mb-6">
                {item.price}
              </div>
              
              <a 
                href="tel:0886401804" 
                className="w-full flex items-center justify-center gap-2 px-4 py-3 font-bold text-white bg-primary/80 hover:bg-primary rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" /> Поръчай
              </a>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 max-w-4xl prose prose-invert">
          <h2 className="text-2xl font-bold mb-4">Висококачествен газ за сифони</h2>
          <p className="text-white/70">
            Всеки флакон <strong>кулинарен газ</strong>, който предлагаме, преминава строг контрол на качеството. В нашия каталог ще откриете флакони с различна вместимост - от 640g до 2000g, за да отговорим на нуждите както на професионални заведения, така и на любители. Извършваме <strong>поръчка по телефон</strong> с бърза доставка за град <strong>София</strong>. 
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}