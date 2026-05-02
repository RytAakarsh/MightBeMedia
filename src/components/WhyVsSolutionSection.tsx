import { useScrollAnimation } from "./useScrollAnimation";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const fails = [
  { title: "No conversion system", desc: "Pretty pages, zero pipeline. Visitors leave without a single action." },
  { title: "No structured flow", desc: "Random sections, broken navigation, no path from visit to purchase." },
  { title: "No clear CTA", desc: "Visitors don't know what to do next — so they do nothing." },
  { title: "No trust-building", desc: "No proof, no positioning, no reason to choose you over the next tab." },
];

const wins = [
  { title: "Conversion-focused structure", desc: "Every section is engineered to move the visitor closer to action." },
  { title: "Funnel-based approach", desc: "We design the journey, not just the page. Awareness → trust → purchase." },
  { title: "Lead generation system", desc: "Built-in capture, qualification, and follow-up — leads flow on autopilot." },
  { title: "Scalable growth system", desc: "Built to scale with your business — not break the moment you grow." },
];

export default function WhyVsSolutionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="eyebrow mb-5 justify-center">The Real Difference</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-balance">
            Why most websites fail —{" "}
            <span className="text-gradient-lime">and how we fix it.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Why Fail */}
          <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/15 text-destructive text-xs font-bold uppercase tracking-wider mb-6">
              <XCircle className="w-4 h-4" /> Why Most Websites Fail
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
              Built to look good. Not to <span className="text-destructive">convert.</span>
            </h3>
            <ul className="space-y-4">
              {fails.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-destructive/15 flex items-center justify-center shrink-0">
                    <XCircle className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solution */}
          <div className="rounded-3xl border border-primary/40 bg-primary/5 p-6 sm:p-8 lg:p-10 lime-glow">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 className="w-4 h-4" /> Our Solution
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
              Built to <span className="text-primary">convert.</span> Designed to scale.
            </h3>
            <ul className="space-y-4">
              {wins.map((w) => (
                <li key={w.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg mb-1">{w.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-7 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
            >
              Build My Growth System <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
