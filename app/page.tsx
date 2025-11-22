
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative font-sans">
      {/* Supergradiente contínuo por trás de todas as seções */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(113,187,212,0.18),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(52,95,151,0.18),transparent_40%)]" />
        <div className="absolute left-1/2 top-[20%] h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-[var(--brand-primary)]/15 blur-[120px]" />
        <div className="absolute right-0 top-[40%] h-[60vh] w-[60vh] translate-x-1/4 rounded-full bg-[var(--brand-secondary)]/20 blur-[120px]" />
        <div className="absolute left-0 top-[60%] h-[70vh] w-[70vh] -translate-x-1/4 rounded-full bg-[var(--brand-primary)]/15 blur-[120px]" />
        <div className="absolute left-1/2 top-[80%] h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-[var(--brand-secondary)]/12 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
      </div>
      
      <Hero />
      <About />
      <Services />
      <ContactUs />
      <Footer />
    </main>
  );
}
