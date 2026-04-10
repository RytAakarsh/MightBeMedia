import { useScrollAnimation } from "./useScrollAnimation";
import { TrendingUp, Users, Layers, Shield } from "lucide-react";

const results = [
  { icon: TrendingUp, title: "Increased Conversions", desc: "Our systems are designed to turn visitors into customers." },
  { icon: Users, title: "Better Lead Flow", desc: "Structured funnels that generate quality leads on autopilot." },
  { icon: Layers, title: "Structured Systems", desc: "Scalable architecture that grows with your business." },
];

const whyUs = [
  { icon: Shield, title: "Business-first approach" },
  { icon: TrendingUp, title: "Conversion-focused design" },
  { icon: Layers, title: "Scalable systems" },
  { icon: Users, title: "Long-term support" },
];

export default function ResultsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();

  return (
    <section className="py-32 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            We Don't Deliver Projects.{" "}
            <span className="gradient-text">We Deliver Outcomes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {results.map((r) => (
            <div key={r.title} className="glass-card-hover p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>

        <div ref={ref2} className={`transition-all duration-700 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-center mb-10">
            Why Choose <span className="gradient-text">MightBeMedia</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="glass-card p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <w.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-sm">{w.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
