import { useScrollAnimation } from "./useScrollAnimation";
import { Globe, Smartphone, Cpu, Share2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Conversion-first websites built around your funnel and revenue goals.",
    features: ["High-converting websites", "Funnel-based structure", "SEO-ready foundations"],
    num: "01",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Scalable mobile and web apps engineered for performance and retention.",
    features: ["iOS, Android & Web", "Performance-focused", "User-centric design"],
    num: "02",
  },
  {
    icon: Cpu,
    title: "Software Development",
    desc: "Custom internal tools and dashboards that streamline how you operate.",
    features: ["ERP & CRM systems", "Custom dashboards", "Automation workflows"],
    num: "03",
  },
  {
    icon: Share2,
    title: "Social Media Growth",
    desc: "Content systems and reels engineered for organic, compounding reach.",
    features: ["Content strategy", "Reel systems", "Organic growth engine"],
    num: "04",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">What We Do</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-balance">
              Services that{" "}
              <span className="text-gradient-lime">drive growth</span>, not just
              deliverables.
            </h2>
          </div>
          <a href="#contact" className="pill-btn-outline self-start lg:self-auto">
            Discuss a Project
            <span className="pill-btn-arrow bg-muted">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative glass-card-hover p-6 sm:p-8 lg:p-10 overflow-hidden"
            >
              {/* Accent gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/5 transition-all duration-700 pointer-events-none" />

              <div className="relative z-10 flex items-start justify-between mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors duration-500 flex items-center justify-center">
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <span className="text-5xl sm:text-6xl font-heading font-bold text-primary/15 leading-none">
                  {s.num}
                </span>
              </div>

              <h3 className="relative z-10 text-xl sm:text-2xl font-heading font-bold mb-3">
                {s.title}
              </h3>
              <p className="relative z-10 text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                {s.desc}
              </p>

              <ul className="relative z-10 space-y-2 mb-6 sm:mb-8">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="relative z-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
