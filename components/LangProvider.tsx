
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "ar";
type Ctx = { lang: Lang; setLang: (l: Lang)=>void; t: (k: string)=>string };
const strings: Record<Lang, Record<string,string>> = {
  en: {
    visa_guides_gems: "visa • guides • hidden gems",
    start_planning: "Start Planning",
    explore_gems: "Explore Hidden Gems",
    everything_title: "Everything you need, in one place",
    everything_sub: "From paperwork to once-in-a-lifetime experiences, we’ve got you.",
    hidden_title: "Hidden Gems We Love",
    hidden_sub: "A curated gallery of underrated places and soulful moments.",
    guides_title: "Meet Our Local Guides",
    guides_sub: "Real people. Real stories. Tours that feel like a friend is showing you around.",
    plan_title: "Plan Your Next Trip",
    plan_sub: "Tell us a bit, and we’ll craft something unforgettable.",
    get_options: "Get trip options",
    contact_title: "Contact & Support",
    message_us: "Send a message",
    reach_us: "Reach us directly",
    office_hours: "Office hours: Sun–Thu, 9:00–18:00 (AST)",
    visa_title: "Visa Check",
    nationality: "Nationality",
    destination: "Destination country",
    purpose: "Purpose (tourism, work)",
    check: "Check requirements",
    lang_en: "EN",
    lang_ar: "AR",
  },
  ar: {
    visa_guides_gems: "تأشيرات • مرشدون • جواهر مخفية",
    start_planning: "ابدأ التخطيط",
    explore_gems: "استكشف الجواهر",
    everything_title: "كل ما تحتاجه في مكان واحد",
    everything_sub: "من الأوراق إلى التجارب التي لا تُنسى، نحن هنا لأجلك.",
    hidden_title: "أماكن خفية نحبها",
    hidden_sub: "مجموعة منتقاة من اللحظات والأماكن الهادئة.",
    guides_title: "تعرف على المرشدين المحليين",
    guides_sub: "أشخاص حقيقيون وقصص حقيقية وتجارب كأن صديقًا يرشدك.",
    plan_title: "خطط لرحلتك القادمة",
    plan_sub: "أخبرنا قليلاً وسنصنع لك ما لا يُنسى.",
    get_options: "احصل على خيارات الرحلة",
    contact_title: "الدعم والتواصل",
    message_us: "أرسل رسالة",
    reach_us: "تواصل مباشرة",
    office_hours: "ساعات العمل: الأحد – الخميس، 9:00–18:00",
    visa_title: "فحص التأشيرة",
    nationality: "الجنسية",
    destination: "بلد الوجهة",
    purpose: "الغرض (سياحة، عمل)",
    check: "تحقق من المتطلبات",
    lang_en: "إنج",
    lang_ar: "عر",
  }
};
const C = createContext<Ctx>({ lang: "en", setLang: ()=>{}, t: (k)=>k });
export const useLang = ()=> useContext(C);
export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(()=>{
    const saved = (typeof window !== 'undefined' && localStorage.getItem("gbs_lang")) as Lang | null;
    if (saved) setLang(saved);
  }, []);
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      localStorage.setItem("gbs_lang", lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  }, [lang]);
  const t = (k:string)=> strings[lang][k] || k;
  return <C.Provider value={{ lang, setLang, t }}>{children}</C.Provider>;
}
