import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, buildProductSchema, localBusinessSchema } from "@/components/SEO";

const products = [
  {
    id: 1,
    name: "Exotic Whip 670g",
    price: "30,00 €",
    image: { avif: "/images/product-1.avif", webp: "/images/product-1.webp", fallback: "/images/product-1.jpg" },
  },
  {
    id: 2,
    name: "Exotic Whip 2000g",
    price: "70,00 €",
    image: { avif: "/images/product-2.avif", webp: "/images/product-2.webp", fallback: "/images/product-2.jpg" },
  },
  {
    id: 3,
    name: "Instant Whip 640g",
    price: "25,00 €",
    image: { avif: "/images/product-3.avif", webp: "/images/product-3.webp", fallback: "/images/product-3.jpg" },
  },
  {
    id: 4,
    name: "Carbon Whip Magnum 1100 g",
    price: "45,00 €",
    image: { avif: "/images/product-4.avif", webp: "/images/product-4.webp", fallback: "/images/product-4.jpg" },
  },
];

export default function Products() {
  const productSchemas = products.map((p) =>
    buildProductSchema({ name: p.name, price: p.price, image: p.image.fallback })
  );
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Продукти Райски Газ София",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": "https://raiskigazsofia.bg/products",
      "name": product.name,
    })),
  };

  return (
    <>
      <SEO 
        title="Продукти — Флакони Райски Газ и Балони София" 
        description="Разгледайте нашата селекция от флакони Exotic Whip, Instant Whip и Carbon Whip Magnum. Експресна денонощна доставка на райски газ в София за 20 минути."
        path="/products"
        schema={[localBusinessSchema, productListSchema, ...productSchemas]}
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
            <div
              key={item.id}
              className="flex flex-col items-center group motion-enter-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden mb-6 relative border border-white/10 group-hover:border-primary/50 transition-colors duration-500 shadow-xl bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <picture>
                  <source srcSet={item.image.avif} type="image/avif" />
                  <source srcSet={item.image.webp} type="image/webp" />
                  <img 
                    src={item.image.fallback} 
                    alt={`${item.name} — райски газ за доставка в София`} 
                    loading="lazy"
                    width={288}
                    height={288}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                  />
                </picture>
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-3 group-hover:text-primary transition-colors">
                {item.name}
              </h2>
              
              <div className="text-xl font-black text-white text-center px-8 py-3 rounded-full bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-[2.5rem] max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Готови ли сте да поръчате?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Нашата услуга за поръчка по телефон гарантира, че ще получите вашите продукти в рамките на 20 минути навсякъде в София.
          </p>
          <a 
            href="tel:+359886401804" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-primary rounded-full hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(217,70,239,0.5)] text-xl"
          >
            <Phone className="w-6 h-6" /> Поръчай сега: 088 640 1804
          </a>
        </div>

        {/* SEO Content */}
        <section className="mt-20 max-w-4xl mx-auto text-muted-foreground">
          <h2 className="text-2xl font-bold text-white mb-4">Качествени флакони райски газ с доставка в София</h2>
          <p className="text-lg leading-relaxed mb-4">
            Нашият асортимент включва най-търсените марки <strong className="text-white">Exotic Whip</strong>, <strong className="text-white">Instant Whip</strong> и <strong className="text-white">Carbon Whip Magnum</strong> в различни размери — от 640 g до 2000 g. 
            Всички <strong className="text-white">флакони</strong> са с гарантирано качество и се доставят директно до вашия адрес в <strong className="text-white">София</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            За <strong className="text-white">поръчка по телефон</strong> се обадете на <a href="tel:+359886401804" className="text-primary hover:underline">088 640 1804</a>. 
            Нашият екип работи 24/7 и доставя до 20 минути във всички квартали на <strong className="text-white">София</strong>.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            За още по-изгодни оферти проверете 
            <Link to="/promotions" className="text-primary hover:underline"> промоционалните пакети</Link>
            , а при въпроси посетете 
            <Link to="/contact" className="text-primary hover:underline"> страницата за контакт</Link>
            за бърза поръчка по телефон.
          </p>
        </section>
      </main>
    </>
  );
}