import { Link, useLocation } from "wouter";
import { Phone, Package, Percent, Zap, MapPin, Mail } from "lucide-react";

export function Header() {
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 h-auto py-4 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-black text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 flex items-center gap-2">
          <Zap className="w-8 h-8 text-primary" fill="currentColor" /> N2O СОФИЯ
        </Link>
        
        <nav className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
          <Link href="/products" className={`text-sm md:text-base font-semibold hover:text-primary transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 ${location === '/products' ? 'text-primary' : ''}`}>
            <Package className="w-5 h-5" /> Продукти
          </Link>
          <Link href="/promotions" className={`text-sm md:text-base font-semibold hover:text-primary transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 ${location === '/promotions' ? 'text-primary' : ''}`}>
            <Percent className="w-5 h-5" /> Промоции
          </Link>
          <Link href="/contact" className={`text-sm md:text-base font-semibold hover:text-primary transition-colors flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 ${location === '/contact' ? 'text-primary' : ''}`}>
            <Mail className="w-5 h-5" /> Контакти
          </Link>
          
          <a 
            href="tel:0886401804" 
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-8 md:py-4 font-bold text-white bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(217,70,239,0.4)] text-sm md:text-lg ml-2"
            title="Обадете се за поръчка на райски газ в София"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Phone className="w-5 h-5" /> 088 640 1804
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-12 pb-8 mt-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              <Zap className="w-6 h-6 text-primary" fill="currentColor" /> Кулинарен Газ София
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Най-бързата доставка на кулинарен газ за сифони в София. Разчитайте на нас 24/7 за вашите нужди от качествени консумативи за кулинарни цели.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Начало</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Продукти</Link></li>
              <li><Link href="/promotions" className="text-muted-foreground hover:text-primary transition-colors text-sm">Промоции</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Контакти</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:0886401804" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" /> 088 640 1804
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" /> София, България
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground text-sm mt-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Работим 24/7 без почивен ден
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Кулинарен Газ София. Всички права запазени.
        </div>
      </div>
    </footer>
  );
}