import { ArrowUpRight, Users, Star, TrendingUp, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT - Headline + copy */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-7">
              Built for visibility.{" "}
              <span className="italic text-primary">Designed for conversion.</span>
            </p>

            <h1 className="font-heading font-bold text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.5rem] xl:leading-[1.02] tracking-tight text-balance mb-6 sm:mb-8">
              Fueling business to{" "}
              <span className="relative inline-block">
                <span className="text-gradient-lime">growth</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/40 rounded-full" />
              </span>{" "}
              through digital marketing
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed">
              We help businesses grow by creating smart, results-driven digital
              systems that convert traffic into paying customers.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <a href="#contact" className="pill-btn-primary lime-glow">
                Start Growth
                <span className="pill-btn-arrow bg-primary-foreground/15">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a href="#portfolio" className="pill-btn-outline">
                View Our Work
                <span className="pill-btn-arrow bg-muted">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-lg">
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text">
                  50+
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Projects Delivered
                </p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text">
                  10x
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Lead Growth
                </p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text">
                  3+
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Years Building
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - Visual stack */}
          <div className="lg:col-span-5 relative">
            {/* Big primary card with conic blob */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] border border-border/40">
              <div className="hero-blob absolute inset-0 animate-[blob-spin_25s_linear_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              {/* Floating UI badges inside the card */}
              <div className="absolute top-6 left-6 right-6 flex justify-between">
                <div className="glass-card px-3 py-2 flex items-center gap-2 floating">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold">Live Growth</span>
                </div>
                <div className="glass-card w-10 h-10 rounded-full flex items-center justify-center floating-delayed">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Center bold tag */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-5xl sm:text-7xl font-heading font-bold text-foreground/95">
                    27<span className="text-primary">%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 mt-2 max-w-[180px] mx-auto">
                    Average lift in conversions for our clients
                  </p>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 flex items-center gap-3 floating-slow">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/80 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                      M
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent/80 border-2 border-background flex items-center justify-center text-[10px] font-bold text-accent-foreground">
                      B
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/60 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                      M
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold">Quality Team</p>
                    <p className="text-[10px] text-muted-foreground">Designers · Devs · Strategists</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating stat card */}
            <div className="hidden sm:flex absolute -left-4 -bottom-6 lg:-left-10 glass-card p-4 items-center gap-3 floating shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-lg font-heading font-bold">2.1x</div>
                <p className="text-[10px] text-muted-foreground">ROAS Avg</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -right-2 top-12 lg:-right-6 glass-card px-4 py-2.5 items-center gap-2 floating-delayed shadow-2xl">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs font-semibold">5.0 Rated</span>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-16 sm:mt-24 lg:mt-28 border-y border-border py-6 sm:py-8 marquee">
          {[0, 1].map((idx) => (
            <div key={idx} className="marquee-track" aria-hidden={idx === 1}>
              {[
                "Revenue Growth",
                "Web Development",
                "App Development",
                "SEO & Funnels",
                "Social Growth",
                "Conversion Design",
                "Analytics",
                "Brand Systems",
              ].map((t) => (
                <span
                  key={t + idx}
                  className="flex items-center gap-3 sm:gap-6 text-xl sm:text-3xl lg:text-4xl font-heading font-bold text-muted-foreground/40 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {t}
                  <span className="w-2 h-2 rounded-full bg-primary/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
