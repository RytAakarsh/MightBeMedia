import { useScrollAnimation } from "./useScrollAnimation";
import { Search, Eye, Rocket, Settings, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Understand Business", desc: "We deep-dive into your business model, audience, and goals to align on outcomes." },
  { icon: Eye, title: "Identify Conversion Gaps", desc: "We audit where leads and revenue are leaking — then prioritize fixes by impact." },
  { icon: Settings, title: "Build Growth System", desc: "We design and develop a conversion-focused digital system, not just a website." },
  { icon: Rocket, title: "Launch & Optimize", desc: "We launch fast, then test and refine for maximum performance." },
  { icon: TrendingUp, title: "Scale Revenue", desc: "We scale what works, double down on winners, and keep driving growth." },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mb-12 sm:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="eyebrow mb-5">Our Process</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-balance">
            How we build{" "}
            <span className="text-gradient-lime">growth systems</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((step, i) => (
            <ProcessCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isLast = index === 4;

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card-hover p-6 sm:p-7 h-full flex flex-col relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary transition-colors duration-500 flex items-center justify-center">
            <step.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
          </div>
          <span className="text-4xl font-heading font-bold text-primary/20">
            0{index + 1}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-heading font-bold mb-2">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {step.desc}
        </p>
      </div>

      {/* Connector arrow on lg+ */}
      {!isLast && (
        <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 z-10 items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      )}
    </div>
  );
}
