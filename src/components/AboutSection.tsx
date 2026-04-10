import { useScrollAnimation } from "./useScrollAnimation";
import { Zap, Target, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Zap, title: "Traffic → Attention", desc: "We capture your audience's attention with systems designed to attract." },
  { icon: Target, title: "Trust → Authority", desc: "We build trust through strategic design and positioning." },
  { icon: TrendingUp, title: "Conversion → Revenue", desc: "We turn visitors into paying customers with optimized funnels." },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-3xl mx-auto text-center mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Growth-Focused <span className="gradient-text">Digital Agency</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            MightBeMedia is a growth-focused digital agency that builds systems designed to generate leads, increase conversions, and scale businesses. Not just developers. Not just designers. <span className="text-foreground font-semibold">We build business systems.</span>
          </p>
        </div>

        {/* Core Message */}
        <div ref={ref2} className={`max-w-4xl mx-auto mb-16 transition-all duration-700 delay-200 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold font-heading mb-10">
                Your Business Doesn't Need a Website.{" "}
                <span className="gradient-text">It Needs a System That Converts.</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((p, i) => (
                  <div key={p.title} className="group" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <p.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold font-heading mb-2">{p.title}</h4>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
