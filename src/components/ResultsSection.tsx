import { useScrollAnimation } from "./useScrollAnimation";
import { TrendingUp, Users, Layers, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

const results = [
  { icon: TrendingUp, title: "Increased Conversions", desc: "Our systems are designed to turn visitors into customers.", stat: "3x", statLabel: "Avg. Conversion Boost" },
  { icon: Users, title: "Better Lead Flow", desc: "Structured funnels that generate quality leads on autopilot.", stat: "10x", statLabel: "More Qualified Leads" },
  { icon: Layers, title: "Structured Systems", desc: "Scalable architecture that grows with your business.", stat: "100%", statLabel: "Scalable & Future-Ready" },
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
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Headline */}
        <div ref={ref} className={`text-center mb-12 sm:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">Results</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-3 sm:mb-4">
            We Don't Deliver Projects.{" "}
            <span className="gradient-text">We Deliver Outcomes.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">Every system we build is measured by one thing: your revenue growth.</p>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {results.map((r) => (
            <div key={r.title} className="glass-card-hover p-6 sm:p-8 text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:from-primary/25 group-hover:to-accent/25 transition-all duration-500">
                <r.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-heading gradient-text mb-1">{r.stat}</div>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">{r.statLabel}</p>
              <h3 className="text-base sm:text-lg font-bold font-heading mb-2">{r.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div ref={ref2} className={`transition-all duration-700 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading mb-3">
              Why Choose <span className="gradient-text">MightBeMedia</span>
            </h3>
            <p className="text-sm text-muted-foreground">What makes us different from every other agency</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {whyUs.map((w) => (
              <div key={w.title} className="glass-card-hover p-5 sm:p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0 group-hover:from-primary/25 group-hover:to-accent/25 transition-all">
                    <w.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base mb-1">{w.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-10 sm:mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm sm:text-base transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] neon-glow"
            >
              Start Your Growth Today
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
