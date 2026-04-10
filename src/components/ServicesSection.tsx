import { useScrollAnimation } from "./useScrollAnimation";
import { Globe, Smartphone, Cpu, Share2 } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    features: ["High-converting websites", "Funnel-based structure", "SEO-ready"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    features: ["Scalable mobile/web apps", "Performance-focused", "User-centric design"],
  },
  {
    icon: Cpu,
    title: "Software Development",
    features: ["ERP & CRM systems", "Custom dashboards", "Automation tools"],
  },
  {
    icon: Share2,
    title: "Social Media Growth",
    features: ["Content strategy", "Reel systems", "Organic growth engine"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
      className="glass-card-hover p-8 transition-all duration-300 group cursor-pointer"
      style={{ transitionProperty: "box-shadow, border-color" }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
        <service.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold font-heading mb-4">{service.title}</h3>
      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
    <section id="services" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
