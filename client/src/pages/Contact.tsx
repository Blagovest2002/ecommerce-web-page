import { Header, Footer } from "@/components/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Кулинарен Газ София - Контакти",
      "telephone": "0886401804",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "София",
        "addressCountry": "BG"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <SEO 
        title="Контакти | Поръчка на Кулинарен Газ София - 088 640 1804"
        description="Свържете се с нас за експресна поръчка на кулинарен газ в София. Работим 24/7. Обадете се на 088 640 1804 за доставка до 20 минути."
        canonicalUrl="/contact"
        schema={schema}
      />
      
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <Header />

      <main className="container mx-auto px-6 pt-40 pb-20 relative z-10 min-h-[80vh] flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Свържете се с нас
          </h1>
          <p className="text-xl text-muted-foreground">
            Готови сме да приемем вашата поръчка 24 часа в денонощието, 7 дни в седмицата.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                <Phone className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Телефон за поръчки</h2>
              <p className="text-muted-foreground mb-4">Обадете се за бърза доставка</p>
              <a href="tel:0886401804" className="text-2xl font-black text-white hover:text-primary transition-colors">
                088 640 1804
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-400">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Район на доставка</h2>
              <p className="text-muted-foreground mb-4">Обслужваме целия град</p>
              <span className="text-xl font-bold text-white">
                София, България
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400">
                <Clock className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Работно време</h2>
              <p className="text-muted-foreground mb-4">Без почивен ден</p>
              <span className="text-xl font-bold text-white flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" /> 24 / 7
              </span>
            </div>
          </div>

          <div className="mt-12 text-center border-t border-white/10 pt-10">
            <a 
              href="tel:0886401804" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-white bg-primary rounded-full hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(217,70,239,0.5)] text-xl w-full md:w-auto"
            >
              <Phone className="w-6 h-6" /> Поръчай Кулинарен Газ Сега
            </a>
          </div>
        </motion.div>

        <section className="mt-20 max-w-3xl prose prose-invert text-center">
          <p className="text-lg text-white/70">
            При нас всяка <strong>поръчка по телефон</strong> се обработва на мига. Експресната ни мрежа ни позволява да доставим желания от вас <strong>кулинарен газ</strong> във всяка точка на <strong>София</strong> за по-малко от 20 минути. Не губете време, обадете се на 0886401804 и се уверете в качеството на нашия <strong>газ за сифони</strong>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}