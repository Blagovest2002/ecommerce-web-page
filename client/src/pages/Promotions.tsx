import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, buildProductSchema, localBusinessSchema } from "@/components/SEO";

const promos = [
  {
    id: 1,
    name: "Exotic Whip 670g",
    offer: "6 броя • 130,00 €",
    image: { avif: "/images/promo-1.avif", webp: "/images/promo-1.webp", fallback: "/images/promo-1.jpg" },
  },
  {
    id: 2,
    name: "Exotic Whip 2000g",
    offer: "3 броя • 200,00 €",
    image: { avif: "/images/promo-2.avif", webp: "/images/promo-2.webp", fallback: "/images/promo-2.jpg" },
  },
  {
    id: 3,
    name: "Instant Whip 640g",
    offer: "6 броя • 110,00 €",
    image: { avif: "/images/promo-3.avif", webp: "/images/promo-3.webp", fallback: "/images/promo-3.jpg" },
  },
  {
    id: 4,
    name: "Carbon Whip Magnum 1100g",
    offer: "4 броя • 155,00 €",
    image: { avif: "/images/promo-4.avif", webp: "/images/promo-4.webp", fallback: "/images/promo-4.jpg" },
  },
];

export default function Promotions() {
  const promoSchemas = promos.map((promo) =>
    buildProductSchema({
      name: `Промо Пакет: ${promo.name}`,
      price: promo.offer.split("•")[1]?.trim() ?? "0",
      image: promo.image.fallback,
      description: `Ексклузивна промоция за райски газ ${promo.name}. Вземете ${promo.offer.split("•")[0]} с доставка в София.`,
    })
  );
  const promotionsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Промоции Райски Газ София",
    "itemListElement": promos.map((promo, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": "https://raiskigazsofia.bg/promotions",
      "name": promo.name,
    })),
  };

  return (
    <>
      <SEO 
        title="Промоции Райски Газ — Топ Оферти за София" 
        description="Спестете с нашите ексклузивни пакетни предложения за райски газ. Exotic Whip, Instant Whip и Carbon Whip на промо цени с безплатна доставка за София."
        path="/promotions"
        schema={[localBusinessSchema, promotionsListSchema, ...promoSchemas]}
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
            <div
              key={item.id}
              className="flex flex-col items-center group relative motion-enter-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="absolute -top-4 -right-4 bg-primary text-white font-black px-4 py-2 rounded-full z-20 shadow-lg rotate-12 transform group-hover:rotate-0 transition-transform">
                ПРОМО
              </div>
              
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden mb-6 relative border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 shadow-[0_0_30px_rgba(217,70,239,0.15)] bg-gradient-to-b from-white/5 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <picture>
                  <source srcSet={item.image.avif} type="image/avif" />
                  <source srcSet={item.image.webp} type="image/webp" />
                  <img 
                    src={item.image.fallback} 
                    alt={`Промоция ${item.name} — райски газ София`} 
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
              
              <div className="flex flex-col items-center">
                <div className="text-lg font-medium text-blue-400 mb-1">
                  {item.offer.split('•')[0]}
                </div>
                <div className="text-2xl font-black text-white px-8 py-2 rounded-full bg-gradient-to-r from-primary to-blue-500 shadow-lg">
                  {item.offer.split('•')[1]}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/10 text-muted-foreground text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Най-добрите цени за партита и събития</h3>
          <p className="text-lg leading-relaxed mb-8">
            Нашите промоционални пакети са идеални за по-големи събирания. Поръчайте вашите флакони с <strong className="text-white">райски газ</strong> днес и се възползвайте от нашата 
            експресна 24/7 доставка за цяла <strong className="text-white">София</strong>. 
          </p>
          <a 
            href="tel:+359886401804" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 active:scale-95 transition-all text-xl"
          >
            <Phone className="w-6 h-6" /> Свържете се с нас
          </a>

          {/* Additional SEO copy */}
          <p className="mt-8 text-base leading-relaxed">
            Нашите промоционални пакети включват <strong className="text-white">флакони</strong> от Exotic Whip, Instant Whip и Carbon Whip Magnum на специални цени. 
            Всяка <strong className="text-white">поръчка по телефон</strong> се доставя безплатно до 20 минути във всички квартали на <strong className="text-white">София</strong>. 
            Използвайте пакетните оферти за максимална стойност при по-големи количества.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Ако търсите единични артикули, вижте всички 
            <Link to="/products" className="text-primary hover:underline"> продукти и цени</Link>
            , или отидете на 
            <Link to="/contact" className="text-primary hover:underline"> страницата за контакт</Link>
            за бърза поръчка по телефон в София.
          </p>
        </div>
      </main>
    </>
  );
}