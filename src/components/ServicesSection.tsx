import { useScrollAnimation } from "./useScrollAnimation";
import { Globe, Smartphone, Cpu, Share2 } from "lucide-react";
import { useRef } from "react";

const services = [
  { icon: Globe, title: "Website Development", features: ["High-converting websites", "Funnel-based structure", "SEO-ready"] },
  { icon: Smartphone, title: "App Development", features: ["Scalable mobile/web apps", "Performance-focused", "User-centric design"] },
  { icon: Cpu, title: "Software Development", features: ["ERP & CRM systems", "Custom dashboards", "Automation tools"] },
  { icon: Share2, title: "Social Media Growth", features: ["Content strategy", "Reel systems", "Organic growth engine"] },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card-hover p-6 sm:p-8 transition-all duration-300 group cursor-pointer"
      style={{ transitionProperty: "box-shadow, border-color" }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold font-heading mb-3 sm:mb-4">{service.title}</h3>
      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 sm:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">What We Do</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
