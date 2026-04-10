import { useScrollAnimation } from "./useScrollAnimation";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

const international = [
  { name: "Sommie", url: "https://pro.sommie.io/", tag: "SaaS Platform" },
  { name: "BaristaI", url: "https://mvp.baristai.online/", tag: "AI Product" },
];

const national = [
  { name: "Modulus Classes", url: "https://www.modulusclasses.in/", tag: "Course Funnel" },
  { name: "SEM Fitness", url: "https://sem-fitness.vercel.app/", tag: "Brand Website" },
  { name: "She & Soul", url: "https://www.sheandsoul.co.in/", tag: "Lead Generation" },
  { name: "Prime Sports", url: "https://prime-sports-academy.vercel.app/", tag: "Brand Website" },
  { name: "Passion Crafted", url: "https://www.passioncrafted.com/", tag: "Lead Generation" },
];

function PortfolioCard({ project }: { project: { name: string; url: string; tag: string } }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(600px) rotateY(0) rotateX(0)";
  };

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card-hover p-6 group block transition-transform duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.tag}</span>
          <h3 className="text-lg font-bold font-heading mt-1">{project.name}</h3>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <div className="h-32 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Visit Live Project →</span>
      </div>
    </a>
  );
}

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Our Work</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Systems <span className="gradient-text">We've Built</span>
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">🌍 International Clients</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {international.map((p) => <PortfolioCard key={p.name} project={p} />)}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">🇮🇳 National Clients</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {national.map((p) => <PortfolioCard key={p.name} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
