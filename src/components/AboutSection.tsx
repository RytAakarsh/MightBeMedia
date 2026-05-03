import { useScrollAnimation } from "./useScrollAnimation";
import { Zap, Target, TrendingUp, ArrowUpRight, CheckCircle2 } from "lucide-react";

const pillars = [
  { icon: Zap, title: "Traffic → Attention", desc: "Capture audience attention through smart, magnetic systems." },
  { icon: Target, title: "Trust → Authority", desc: "Build credibility with strategic design and positioning." },
  { icon: TrendingUp, title: "Conversion → Revenue", desc: "Turn visitors into paying customers with optimized funnels." },
];

const bullets = [
  "Business-first thinking on every decision",
  "Conversion-focused design and copy",
  "Scalable systems built for growth",
  "Long-term partnership beyond launch",
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="surface-light relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left col - heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow mb-5">About MightBeMedia</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight mb-6 text-balance">
              We're not a service provider.{" "}
              <span className="text-gradient-lime">We're your growth partner.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              MightBeMedia is a growth-focused digital agency that builds
              systems designed to generate leads, increase conversions, and
              scale businesses. Not just developers. Not just designers.{" "}
              <span className="text-foreground font-semibold">
                We build business systems.
              </span>
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            <a href="#services" className="pill-btn-primary lime-glow">
              Explore Services
              <span className="pill-btn-arrow bg-primary-foreground/15">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Right col - pillars stacked */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="group glass-card-hover p-6 sm:p-8 flex items-start gap-5 sm:gap-6 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-0 right-0 text-[6rem] sm:text-[8rem] font-heading font-bold text-primary/5 leading-none -mt-4 -mr-4 select-none">
                  0{i + 1}
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <p.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
