import { useEffect, useRef } from "react";
import { ArrowRight, BarChart3, Globe, Layout, TrendingUp } from "lucide-react";

const floatingCards = [
  { icon: Globe, label: "Website", x: "10%", y: "20%", delay: 0 },
  { icon: Layout, label: "Dashboard", x: "75%", y: "15%", delay: 1 },
  { icon: BarChart3, label: "Analytics", x: "80%", y: "60%", delay: 2 },
  { icon: TrendingUp, label: "Growth", x: "5%", y: "65%", delay: 0.5 },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll<HTMLElement>(".floating-card");
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      cards.forEach((card, i) => {
        const factor = (i + 1) * 0.3;
        card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Floating cards */}
      {floatingCards.map((card, i) => (
        <div
          key={card.label}
          className="floating-card hidden lg:flex absolute glass-card p-4 items-center gap-3 floating"
          style={{
            left: card.x,
            top: card.y,
            animationDelay: `${card.delay}s`,
          }}
        >
          <div className="p-2 rounded-lg bg-primary/10">
            <card.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">{card.label}</span>
        </div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium animate-fade-in">
          Your Revenue Growth Partner
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 animate-fade-in-up">
          We Don't Build Websites.{" "}
          <span className="gradient-text">We Build Revenue Engines.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          We help businesses convert traffic into paying customers using high-converting digital systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#portfolio"
            className="group px-8 py-4 rounded-xl glass-card-hover text-foreground font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] neon-glow"
          >
            Start Your Growth
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
