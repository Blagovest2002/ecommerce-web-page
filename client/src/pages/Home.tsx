import { Link } from "react-router-dom";
import { SEO, localBusinessSchema, websiteSchema } from "@/components/SEO";

const heroImage = {
  avif: "/images/hero.avif",
  avifSm: "/images/hero-sm.avif",
  webp: "/images/hero.webp",
  webpSm: "/images/hero-sm.webp",
  fallback: "/images/hero.jpg",
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Райски Газ София 24/7 — Денонощна доставка на флакони и балони" 
        description="Поръчайте райски газ с безплатна експресна доставка до 20 минути в София. Флакони Exotic Whip, Instant Whip и Carbon Whip на най-ниски цени. Обадете се 24/7: 088 640 1804."
        path="/"
        schema={[localBusinessSchema, websiteSchema]}
      />
      <main id="main-content" className="container mx-auto px-6 pt-40 md:pt-48 pb-20 min-h-[calc(100vh-200px)] flex flex-col justify-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex-1 motion-enter-left">
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
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(217,160,91,0.8)]" />
                БЕЗПЛАТНА експресна доставка до 20 минути в София
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-4">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(217,160,91,0.8)]" />
                ПРОМОЦИОНАЛНИ оферти при покупка на повече от 1 флакон райски газ
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-4">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                НАЙ-НИСКИ цени на райски газ и доставка в София!
              </p>
            </div>

            <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link 
                to="/products"
                className="px-10 py-5 bg-primary text-primary-foreground font-extrabold text-lg rounded-none border border-primary hover:bg-transparent hover:text-primary transition-colors shadow-[0_0_30px_rgba(217,160,91,0.3)] hover:shadow-[0_0_40px_rgba(217,160,91,0.5)] active:scale-95 duration-300 uppercase tracking-widest text-center inline-block"
              >
                Разгледай Продуктите
              </Link>
              <Link 
                to="/promotions"
                className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg rounded-none hover:bg-white/10 transition-colors hover:scale-105 active:scale-95 duration-200 uppercase tracking-widest text-center inline-block"
              >
                Виж Промоциите
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="relative z-10">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-amber-500/30 blur-[80px] rounded-full scale-90" />
              <picture>
                <source media="(max-width: 640px)" srcSet={heroImage.avifSm} type="image/avif" />
                <source srcSet={heroImage.avif} type="image/avif" />
                <source media="(max-width: 640px)" srcSet={heroImage.webpSm} type="image/webp" />
                <source srcSet={heroImage.webp} type="image/webp" />
                <img 
                  src={heroImage.fallback} 
                  alt="Exotic Whip райски газ флакон за доставка в София" 
                  width={540}
                  height={640}
                  fetchPriority="high"
                  sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 50vw, 36rem"
                  decoding="async"
                  className="w-full h-auto object-cover rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
                />
              </picture>
              <div className="absolute inset-0 rounded-[2rem] border border-primary/20 pointer-events-none mix-blend-overlay" />
            </div>
          </div>
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
            <p className="text-lg leading-relaxed mt-4">
              Разгледайте всички налични 
              <Link to="/products" className="text-primary hover:underline"> продукти и флакони</Link>,
              вижте актуалните 
              <Link to="/promotions" className="text-primary hover:underline"> промоции </Link>
              или се свържете директно през 
              <Link to="/contact" className="text-primary hover:underline"> страницата за контакт</Link>
              за най-бърза поръчка по телефон в София.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Партньори:{" "}
              <a
                href="https://www.raiskisofia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.raiskisofia.com/
              </a>
            </p>
          </div>
      </main>
    </>
  );
}