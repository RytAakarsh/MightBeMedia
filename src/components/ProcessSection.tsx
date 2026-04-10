import { useScrollAnimation } from "./useScrollAnimation";
import { Search, Eye, Rocket, Settings, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Understand Business", desc: "We deep-dive into your business model, audience, and goals." },
  { icon: Eye, title: "Identify Conversion Gaps", desc: "We find where you're losing leads and revenue." },
  { icon: Settings, title: "Build Growth System", desc: "We design and develop a conversion-focused digital system." },
  { icon: Rocket, title: "Launch & Optimize", desc: "We launch, test, and refine for maximum performance." },
  { icon: TrendingUp, title: "Scale Revenue", desc: "We scale what works and keep driving growth." },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            How We Build <span className="gradient-text">Growth Systems</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ProcessStep key={step.title} step={step} index={i} isLeft={isLeft} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, isLeft }: { step: typeof steps[0]; index: number; isLeft: boolean }) {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-12 last:mb-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary neon-glow z-10" />

      <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
        <div className="glass-card-hover p-6">
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <step.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {index + 1}</span>
          </div>
          <h3 className="text-lg font-bold font-heading mb-1">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.desc}</p>
        </div>
      </div>
    </div>
  );
}
