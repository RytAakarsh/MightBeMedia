import { useScrollAnimation } from "./useScrollAnimation";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";
import { useRef } from "react";

const international = [
  { name: "Sommie", url: "https://pro.sommie.io/", tag: "SaaS Platform", preview: "/sommie.png" },
  { name: "BaristaI", url: "https://mvp.baristai.online/", tag: "AI Product", preview: "/baristai.png" },
];

const national = [
  { name: "Viva Skin Care",
    tag: "Skin & Hair Clinic",
    preview: "/viva.png",
    url: "https://vivaskincare.in" },
  { name: "Modulus Classes", url: "https://www.modulusclasses.in/", tag: "Course Funnel", preview: "/modulus.png" },
  { name: "SEM Fitness", url: "https://sem-fitness.vercel.app/", tag: "Brand Website", preview: "/sem.png" },
  { name: "She & Soul", url: "https://www.sheandsoul.co.in/", tag: "Women Healthcare", preview: "/she&soul.png" },
  { name: "Prime Sports", url: "https://prime-sports-academy.vercel.app/", tag: "Sports Academy", preview: "/primesports.png" },
  { name: "Passion Crafted", url: "https://www.passioncrafted.com/", tag: "E-commerce", preview: "/passioncrafted.png" },
];

type Project = typeof international[0];

function PortfolioCard({ project, large = false, compact = false }: { project: Project; large?: boolean; compact?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(1200px) rotateY(0) rotateX(0) translateY(0)";
  };

  const heightClass = large ? "h-64 sm:h-80 lg:h-96" : compact ? "h-48 sm:h-56" : "h-56 sm:h-64";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative w-full rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className={`relative ${heightClass} overflow-hidden bg-gradient-to-br from-secondary to-background`}>
          <img
            src={project.preview}
            alt={`${project.name} website preview by MightBeMedia`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center backdrop-blur-sm">
            <span className="pill-btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              View Live
              <span className="pill-btn-arrow bg-primary/20"><ExternalLink className="w-4 h-4" /></span>
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary mb-2">
              {project.tag}
            </span>
            <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold truncate group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 truncate">
              {project.url.replace(/https?:\/\/(www\.)?/, "")}
            </p>
          </div>
          <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

  // duplicate the national list for seamless marquee loop
  const nationalLoop = [...national, ...national];

  return (
    <section id="portfolio" className="surface-cream py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/15 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Our Work</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-balance">
              Systems we've built that{" "}
              <span className="text-gradient-lime">actually convert.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md">
            Real projects. Real results. Each one designed around revenue, not just visuals.
          </p>
        </div>

        {/* International */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-[0.25em]">
              International Clients
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {international.map((p) => (
              <PortfolioCard key={p.name} project={p} large />
            ))}
          </div>
        </div>

        {/* National - Marquee carousel */}
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="text-lg">🇮🇳</span>
            <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-[0.25em]">
              National Clients
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            <span className="text-xs text-muted-foreground hidden sm:inline">Auto-scrolling · hover to pause</span>
          </div>

          <div className="relative -mx-4 sm:-mx-6 portfolio-marquee-wrapper">
            {/* edge fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

            <div className="overflow-hidden px-4 sm:px-6">
              <div className="portfolio-marquee-track flex gap-5 sm:gap-6 py-3">
                {nationalLoop.map((p, i) => (
                  <div
                    key={`${p.name}-${i}`}
                    className="shrink-0 w-[80vw] sm:w-[360px] lg:w-[380px]"
                  >
                    <PortfolioCard project={p} compact />
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
