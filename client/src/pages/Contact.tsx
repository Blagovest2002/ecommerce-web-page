import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Truck } from "lucide-react";
import { SEO, localBusinessSchema } from "@/components/SEO";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Контакти - Денонощна Доставка Райски Газ София" 
        description="Свържете се с нас за бърза поръчка по телефон. Денонощна експресна доставка на райски газ в град София до 20 минути."
        canonicalUrl="https://raiskigazsofia.bg/contact"
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
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Поръчка по телефон</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Обадете се сега за моментална заявка. Нашият екип ще обработи вашата поръчка веднага.
              </p>
              <a 
                href="tel:0886401804" 
                className="inline-flex items-center justify-center gap-3 w-full py-5 font-black text-white bg-primary rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(217,70,239,0.3)] text-2xl tracking-wider"
              >
                088 640 1804
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between"
            >
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
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}