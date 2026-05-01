import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between gap-4 px-4 sm:px-5 py-2.5 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg"
                : "bg-background/40 backdrop-blur-md border border-border/40"
            }`}
          >
            <a href="#" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="MightBeMedia" className="h-9 sm:h-11" />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex pill-btn-primary text-xs lime-glow"
              >
                Get in Touch
                <span className="pill-btn-arrow bg-primary-foreground/15">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 glass-card p-6 transition-all duration-500 ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-border/50 last:border-0 text-foreground hover:text-primary transition-colors"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="font-semibold">{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 pill-btn-primary w-full justify-between text-xs lime-glow"
          >
            Get in Touch
            <span className="pill-btn-arrow bg-primary-foreground/15">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
