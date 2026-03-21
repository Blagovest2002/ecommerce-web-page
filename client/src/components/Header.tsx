import { Link, useLocation } from "react-router-dom";
import { Phone, Package, Percent, MapPin } from "lucide-react";

const logoImages = {
  avif: "/images/logo.avif",
  webp: "/images/logo.webp",
  fallback: "/images/logo.png",
};

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded">
        Преминете към основното съдържание
      </a>
      <div className="container mx-auto px-4 md:px-6 h-auto py-4 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" aria-label="Начална страница – Райски Газ София">
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <picture>
              <source srcSet={logoImages.avif} type="image/avif" />
              <source srcSet={logoImages.webp} type="image/webp" />
              <img
                src={logoImages.fallback}
                alt="Райски Газ София"
                width={40}
                height={40}
                className="h-10 w-auto rounded-full border border-primary/30 shadow-[0_0_15px_rgba(217,70,239,0.2)]"
              />
            </picture>
            <div className="font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
              N2O СОФИЯ
            </div>
          </div>
        </Link>
        
        <nav aria-label="Основна навигация" className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
          <Link to="/products" className={`text-sm md:text-base font-semibold transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 ${pathname === '/products' ? 'text-primary' : 'hover:text-primary'}`} data-testid="link-products">
            <Package className="w-5 h-5" /> Продукти
          </Link>
          <Link to="/promotions" className={`text-sm md:text-base font-semibold transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 ${pathname === '/promotions' ? 'text-primary' : 'hover:text-primary'}`} data-testid="link-promotions">
            <Percent className="w-5 h-5" /> Промоции
          </Link>
          <Link to="/contact" className={`text-sm md:text-base font-semibold transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 ${pathname === '/contact' ? 'text-primary' : 'hover:text-primary'}`} data-testid="link-contact">
            <MapPin className="w-5 h-5" /> Контакти
          </Link>
          
          <a 
            href="tel:+359886401804" 
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-8 md:py-4 font-bold text-white bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(217,70,239,0.4)] text-sm md:text-lg ml-2 min-h-[44px] min-w-[160px] md:min-w-[200px]"
            data-testid="button-order"
            aria-label="Обадете се за поръчка: 088 640 1804"
          >
            <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Phone className="w-5 h-5" /> 088 640 1804
          </a>
        </nav>
      </div>
    </header>
  );
}