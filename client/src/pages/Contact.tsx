import { Phone, MapPin, Clock, Truck } from "lucide-react";
import { SEO, localBusinessSchema } from "@/components/SEO";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Контакти — Денонощна доставка на райски газ в София" 
        description="Свържете се с нас за бърза поръчка по телефон: 088 640 1804. Денонощна експресна доставка на райски газ до всеки адрес в София за 20 минути."
        path="/contact"
        schema={localBusinessSchema}
      />
      <main className="container mx-auto px-6 pt-32 pb-20 min-h-screen relative z-10 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Свържете се с нас
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl">
              Ние сме на разположение 24 часа в денонощието, 7 дни в седмицата за вашите поръчки в София.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-primary/50 transition-colors motion-enter-left">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Поръчка по телефон</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Обадете се сега за моментална заявка. Нашият екип ще обработи вашата поръчка веднага.
              </p>
              <a 
                href="tel:+359886401804" 
                className="inline-flex items-center justify-center gap-3 w-full py-5 font-black text-white bg-primary rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(217,70,239,0.3)] text-2xl tracking-wider"
              >
                088 640 1804
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between motion-enter-right motion-delay-150">
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full mt-1">
                    <Truck className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Експресна Доставка</h3>
                    <p className="text-muted-foreground">Гарантирана доставка до 20 минути до вашия адрес.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full mt-1">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Район на обслужване</h3>
                    <p className="text-muted-foreground">Обслужваме всички квартали на територията на град <strong className="text-white/80">София</strong>.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full mt-1">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Работно време</h3>
                    <p className="text-muted-foreground">Работим <strong className="text-white/80">24/7</strong> (Без почивен ден). Винаги на разположение!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <section className="mt-16 text-muted-foreground max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Как да поръчате райски газ в София</h2>
            <p className="text-lg leading-relaxed mb-4">
              Поръчката на <strong className="text-white">райски газ</strong> е лесна: обадете се на <a href="tel:+359886401804" className="text-primary hover:underline">088&nbsp;640&nbsp;1804</a>, кажете какви <strong className="text-white">флакони</strong> или <strong className="text-white">балони</strong> желаете и посочете адрес за доставка. 
              Нашият куриер ще пристигне до 20 минути до всеки квартал на <strong className="text-white">София</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Работим <strong className="text-white">24/7 без почивен ден</strong> — включително празници и нощни часове. 
              Доставката е напълно <strong className="text-white">безплатна</strong> за всички поръчки в град <strong className="text-white">София</strong>. 
              <strong className="text-white">Поръчка по телефон</strong> е единственият начин за поръчка — бързо, лесно и удобно.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}