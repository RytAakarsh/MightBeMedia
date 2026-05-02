import { useScrollAnimation } from "./useScrollAnimation";
import { ArrowUpRight, Lightbulb, Rocket, Users, Award, CheckCircle2 } from "lucide-react";
import mvpVisual from "@/assets/mvp-visual.jpg";

const offerings = [
  { icon: Lightbulb, title: "MVP Development", desc: "From idea to a real, usable product in 4–8 weeks." },
  { icon: Rocket, title: "Product Launch Strategy", desc: "Positioning, pricing, and a go-to-market plan that lands." },
  { icon: Users, title: "User Acquisition System", desc: "Connect your startup with real, qualified early users." },
  { icon: Award, title: "Brand Positioning", desc: "Establish authority on social and in your category." },
];

export default function MvpSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="mvp" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -top-20 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left visual */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative rounded-[2rem] overflow-hidden border border-border/40 aspect-[4/5] bg-secondary">
              <img
                src={mvpVisual}
                alt="Startup MVP launch with MightBeMedia Center of Excellence"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

              <div className="absolute top-5 left-5 glass-card px-3 py-2 flex items-center gap-2 floating">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">Center of Excellence</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 glass-card p-4 floating-slow">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-1">For Founders</p>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  Idea → MVP → Real Users → Revenue
                </p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Center of Excellence · For Startups</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-balance mb-6">
              Launch your startup with a{" "}
              <span className="text-gradient-lime">real system</span>, not just a deck.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              If you're a startup founder with an idea — we help you turn it into a real product.
              From <span className="text-foreground font-semibold">MVP development</span> to{" "}
              <span className="text-foreground font-semibold">market launch</span>, we build systems
              that connect your idea with real users and drive early traction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {offerings.map((o) => (
                <div key={o.title} className="glass-card-hover p-4 sm:p-5 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <o.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading font-bold text-sm sm:text-base mb-1">{o.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-5 sm:p-6 mb-8 border-l-4 border-primary">
              <p className="text-base sm:text-lg font-heading font-semibold leading-snug">
                We don't just build products.{" "}
                <span className="text-primary">We help you launch, validate, and grow.</span>
              </p>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Backed by India's best growth team — built for real conversion.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#contact" className="pill-btn-primary lime-glow">
                Launch Your MVP
                <span className="pill-btn-arrow bg-primary-foreground/15">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a href="#contact" className="pill-btn-outline">
                Build My Product
                <span className="pill-btn-arrow bg-muted">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
