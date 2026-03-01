import { Link, useLocation } from "wouter";
import { Phone, Package, Percent, Zap, MapPin } from "lucide-react";

export function Header() {
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 h-auto py-4 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/">
          <div className="font-black text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Zap className="w-8 h-8 text-primary" fill="currentColor" /> N2O СОФИЯ
          </div>
        </Link>
        
        <nav className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
          <Link href="/products">
            <span className={`text-sm md:text-base font-semibold transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 cursor-pointer ${location === '/products' ? 'text-primary' : 'hover:text-primary'}`} data-testid="link-products">
              <Package className="w-5 h-5" /> Продукти
            </span>
          </Link>
          <Link href="/promotions">
            <span className={`text-sm md:text-base font-semibold transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 cursor-pointer ${location === '/promotions' ? 'text-primary' : 'hover:text-primary'}`} data-testid="link-promotions">
              <Percent className="w-5 h-5" /> Промоции
            </span>
          </Link>
          <Link href="/contact">
            <span className={`text-sm md:text-base font-semibold transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 cursor-pointer ${location === '/contact' ? 'text-primary' : 'hover:text-primary'}`} data-testid="link-contact">
              <MapPin className="w-5 h-5" /> Контакти
            </span>
          </Link>
          
          <a 
            href="tel:0886401804" 
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-8 md:py-4 font-bold text-white bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(217,70,239,0.4)] text-sm md:text-lg ml-2"
            data-testid="button-order"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Phone className="w-5 h-5" /> 088 640 1804
          </a>
        </nav>
      </div>
    </header>
  );
}