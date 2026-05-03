import { useScrollAnimation } from "./useScrollAnimation";
import { TrendingUp, Users, Layers, Shield, ArrowUpRight, Quote } from "lucide-react";

const results = [
  { icon: TrendingUp, title: "Increased Conversions", desc: "Systems designed to turn visitors into paying customers.", stat: "3x", statLabel: "Conversion boost" },
  { icon: Users, title: "Better Lead Flow", desc: "Structured funnels that generate quality leads on autopilot.", stat: "10x", statLabel: "Qualified leads" },
  { icon: Layers, title: "Structured Systems", desc: "Scalable architecture that grows with your business.", stat: "100%", statLabel: "Scalable & ready" },
];

const whyUs = [
  { icon: Shield, title: "Business-first approach", desc: "Every decision starts with your business goals" },
  { icon: TrendingUp, title: "Conversion-focused design", desc: "Design that drives action, not just looks" },
  { icon: Layers, title: "Scalable systems", desc: "Built to grow as your business scales" },
  { icon: Users, title: "Long-term support", desc: "We stay with you beyond the launch" },
];

export default function ResultsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();

  return (
    <section className="surface-cream py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[160px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="eyebrow mb-5">Outcomes</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-balance mb-5">
            We don't deliver projects. We{" "}
            <span className="text-gradient-lime">deliver outcomes.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Every system we build is measured by one thing — your revenue growth.
          </p>
        </div>

        {/* Big stat row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {results.map((r, i) => (
            <div
              key={r.title}
              className={`relative p-7 sm:p-9 rounded-3xl overflow-hidden border transition-all duration-500 ${
                i === 1
                  ? "bg-primary text-primary-foreground border-primary lime-glow"
                  : "glass-card-hover"
              }`}
            >
              <div className="flex items-start justify-between mb-8 sm:mb-10">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    i === 1 ? "bg-primary-foreground/15" : "bg-primary/10"
                  }`}
                >
                  <r.icon className={`w-5 h-5 ${i === 1 ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <ArrowUpRight className={`w-5 h-5 ${i === 1 ? "text-primary-foreground/70" : "text-muted-foreground"}`} />
              </div>

              <div className={`text-5xl sm:text-6xl font-heading font-bold mb-2 ${i === 1 ? "" : "gradient-text"}`}>
                {r.stat}
              </div>
              <p
                className={`text-[11px] uppercase tracking-[0.2em] mb-5 ${
                  i === 1 ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {r.statLabel}
              </p>
              <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
                {r.title}
              </h3>
              <p className={`text-sm leading-relaxed ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div
          ref={ref2}
          className={`transition-all duration-700 ${
            vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5">Why MightBeMedia</p>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-5 text-balance">
                What makes us{" "}
                <span className="text-gradient-lime">different</span> from every
                other agency.
              </h3>

              {/* Quote */}
              <div className="glass-card p-6 mt-8 relative">
                <Quote className="absolute -top-3 left-5 w-7 h-7 text-primary fill-primary" />
                <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed">
                  "We are not a service provider. We are your{" "}
                  <span className="text-primary font-bold not-italic">revenue growth partner.</span>"
                </p>
                <p className="text-xs text-muted-foreground mt-3">— MightBeMedia Team</p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {whyUs.map((w, i) => (
                <div
                  key={w.title}
                  className="glass-card-hover p-6 group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-500">
                    <w.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-heading font-bold text-base sm:text-lg mb-1.5">
                    {w.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <a href="#contact" className="pill-btn-primary lime-glow">
              Start Your Growth Today
              <span className="pill-btn-arrow bg-primary-foreground/15">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
