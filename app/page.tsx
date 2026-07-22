
"use client";
import { motion } from "framer-motion";
import { Plane, ShieldCheck, MapPin, Stars } from "lucide-react";
import { useLang } from "../components/LangProvider";

export default function Page() {
  const { t } = useLang();
  const services = [
    { icon: <ShieldCheck size={20} />, title: "Visa Assistance", desc: "Step-by-step guidance, document checks, and timelines — made simple." },
    { icon: <MapPin size={20} />, title: "Local Guides", desc: "Handpicked, multilingual experts who know every story behind each street." },
    { icon: <Stars size={20} />, title: "Hidden Gems", desc: "Curated offbeat experiences far from the crowds — authentic and unforgettable." },
  ];
  return (
    <main>
      <section className="relative bg-[color:var(--brand)] text-white">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <p className="kicker">{t("visa_guides_gems")}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">Escape the noise. <span className="opacity-90">Travel made effortless.</span></h1>
            <p className="mt-5 text-white/90 max-w-xl">We handle visas, match you with trusted local guides, and curate off-the-map experiences so you can explore more and stress less.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href="/visa" className="btn bg-white text-[color:var(--brand)] hover:bg-white/90">{t("start_planning")}</a>
              <a href="/hidden-gems" className="btn btn-outline bg-white/10 border-white/30 text-white hover:bg-white/20">{t("explore_gems")}</a>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-white/90">
              <div className="flex items-center gap-2"><Plane size={16} /> Fast itineraries</div>
              <div className="flex items-center gap-2"><ShieldCheck size={16} /> Visa partners</div>
              <div className="flex items-center gap-2"><Stars size={16} /> Photo-friendly routes</div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1800&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover"/>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="container py-16">
        <div className="text-center mb-10">
          <p className="kicker">go book stay</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("everything_title")}</h2>
          <p className="text-black/60 mt-3 max-w-2xl mx-auto">{t("everything_sub")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:i*0.05}} viewport={{once:true}} className="card">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[color:var(--brand)]/10 text-[color:var(--brand)]">{s.icon}</div>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-black/60">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
