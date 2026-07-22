
"use client";
import { useLang } from "./LangProvider";

export default function Navbar() {
  const { lang, setLang } = useLang();
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b">
      <div className="container py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.svg" alt="Go Book Stay" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/services" className="hover:text-[color:var(--brand)]">Services</a>
          <a href="/hidden-gems" className="hover:text-[color:var(--brand)]">Hidden Gems</a>
          <a href="/guides" className="hover:text-[color:var(--brand)]">Guides</a>
          <a href="/contact" className="hover:text-[color:var(--brand)]">Contact</a>
          <a href="/visa" className="btn btn-primary">Visa</a>
          <button className="btn btn-outline" onClick={()=> setLang(lang==='en'?'ar':'en')}>
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
}
