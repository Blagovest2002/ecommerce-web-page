import { useNavigate, useLocation } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleFooterNavClick = (targetPath: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(targetPath);
    }
  };

  return (
    <footer
      className="bg-background/95 border-t border-white/5 pt-16 pb-8 relative z-10 mt-auto min-h-[320px]"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="Райски Газ София 24/7" />
      <meta itemProp="telephone" content="+359886401804" />
      <meta itemProp="url" content="https://raiskigazsofia1.com" />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="addressLocality" content="София" />
        <meta itemProp="addressCountry" content="BG" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Райски Газ София 24/7
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Най-бързата и надеждна доставка на райски газ в град София. Ние предлагаме висококачествени флакони и балони с експресна доставка до 20 минути, 24 часа в денонощието, 7 дни в седмицата.
            </p>
          </div>
          
          <nav aria-label="Бързи връзки">
            <h4 className="text-lg font-bold mb-4 text-white">Бързи връзки</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" onClick={handleFooterNavClick("/")} className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Начало</a>
              </li>
              <li>
                <a href="/products" onClick={handleFooterNavClick("/products")} className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Продукти – Флакони и Балони</a>
              </li>
              <li>
                <a href="/promotions" onClick={handleFooterNavClick("/promotions")} className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Промоции и Пакети</a>
              </li>
              <li>
                <a href="/contact" onClick={handleFooterNavClick("/contact")} className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Контакти</a>
              </li>
            </ul>
          </nav>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Контакти</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+359886401804" className="hover:text-white transition-colors">088 640 1804 (Поръчка по телефон)</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>София, България (Експресна доставка до адрес)</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Работно време: 24/7 (Без почивен ден)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Райски Газ София 24/7. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}