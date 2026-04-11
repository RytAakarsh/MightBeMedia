// import { useScrollAnimation } from "./useScrollAnimation";
// import { ExternalLink, ArrowUpRight, Globe as GlobeIcon } from "lucide-react";
// import { useRef } from "react";

// const international = [
//   { name: "Sommie", url: "https://pro.sommie.io/", tag: "SaaS Platform", color: "from-neon-blue/20 to-neon-purple/20" },
//   { name: "BaristaI", url: "https://mvp.baristai.online/", tag: "AI Product", color: "from-neon-purple/20 to-neon-cyan/20" },
// ];

// const national = [
//   { name: "Modulus Classes", url: "https://www.modulusclasses.in/", tag: "Course Funnel", color: "from-neon-blue/15 to-neon-cyan/15" },
//   { name: "SEM Fitness", url: "https://sem-fitness.vercel.app/", tag: "Brand Website", color: "from-neon-purple/15 to-neon-blue/15" },
//   { name: "She & Soul", url: "https://www.sheandsoul.co.in/", tag: "Women HealthCare", color: "from-neon-cyan/15 to-neon-purple/15" },
//   { name: "Prime Sports", url: "https://prime-sports-academy.vercel.app/", tag: "Sports Academy", color: "from-neon-blue/15 to-neon-purple/15" },
//   { name: "Passion Crafted", url: "https://www.passioncrafted.com/", tag: "E-commerce Store", color: "from-neon-purple/15 to-neon-cyan/15" },
// ];

// function PortfolioCard({ project, index }: { project: typeof international[0]; index: number }) {
//   const cardRef = useRef<HTMLAnchorElement>(null);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     cardRef.current.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
//   };

//   const handleMouseLeave = () => {
//     if (cardRef.current) cardRef.current.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
//   };

//   return (
//     <a
//       ref={cardRef}
//       href={project.url}
//       target="_blank"
//       rel="noopener noreferrer"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="group block glass-card-hover overflow-hidden transition-transform duration-300"
//     >
//       {/* Gradient preview area */}
//       <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-20 h-20 rounded-2xl bg-background/10 backdrop-blur-sm border border-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//             <GlobeIcon className="w-8 h-8 text-primary/60" />
//           </div>
//         </div>
//         {/* Hover overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
//           <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
//             View Live Project <ArrowUpRight className="w-4 h-4" />
//           </span>
//         </div>
//       </div>

//       {/* Card info */}
//       <div className="p-5 sm:p-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-2">
//               {project.tag}
//             </span>
//             <h3 className="text-base sm:text-lg font-bold font-heading">{project.name}</h3>
//           </div>
//           <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
//             <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }

// export default function PortfolioSection() {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="portfolio" className="py-20 sm:py-32 relative">
//       <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />
//       <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <div ref={ref} className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
//           <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">Our Work</p>
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-3">
//             Systems <span className="gradient-text">We've Built</span>
//           </h2>
//           <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">Real projects. Real results. Systems designed to convert.</p>
//         </div>

//         {/* International */}
//         <div className="mb-10 sm:mb-14">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
//               <span className="text-base">🌍</span>
//             </div>
//             <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">International Clients</h3>
//             <div className="flex-1 h-px bg-border" />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//             {international.map((p, i) => <PortfolioCard key={p.name} project={p} index={i} />)}
//           </div>
//         </div>

//         {/* National */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
//               <span className="text-base">🇮🇳</span>
//             </div>
//             <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">National Clients</h3>
//             <div className="flex-1 h-px bg-border" />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {national.map((p, i) => <PortfolioCard key={p.name} project={p} index={i} />)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { useScrollAnimation } from "./useScrollAnimation";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useRef } from "react";

const international = [
  { 
    name: "Sommie", 
    url: "https://pro.sommie.io/", 
    tag: "SaaS Platform", 
    preview: "/sommie.png"
  },
  { 
    name: "BaristaI", 
    url: "https://mvp.baristai.online/", 
    tag: "AI Product", 
    preview: "/baristai.png"
  },
];

const national = [
  { 
    name: "Modulus Classes", 
    url: "https://www.modulusclasses.in/", 
    tag: "Course Funnel", 
    preview: "/modulus.png"
  },
  { 
    name: "SEM Fitness", 
    url: "https://sem-fitness.vercel.app/", 
    tag: "Brand Website", 
    preview: "/sem.png"
  },
  { 
    name: "She & Soul", 
    url: "https://www.sheandsoul.co.in/", 
    tag: "Women Healthcare", 
    preview: "/she&soul.png"
  },
  { 
    name: "Prime Sports", 
    url: "https://prime-sports-academy.vercel.app/", 
    tag: "Sports Academy", 
    preview: "/primesports.png"
  },
  { 
    name: "Passion Crafted", 
    url: "https://www.passioncrafted.com/", 
    tag: "E-commerce", 
    preview: "/passioncrafted.png"
  },
];

function PortfolioCard({ project }: { project: typeof international[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative w-[320px] sm:w-[360px] lg:w-[380px] rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        {/* Website Screenshot Preview */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
          <img
            src={project.preview}
            alt={`${project.name} website preview`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Hover Overlay with button */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center backdrop-blur-sm">
            <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
              View Live Project <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Card Info */}
        <div className="p-5 bg-card border-t border-border/30">
          <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary mb-2">
            {project.tag}
          </span>
          <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-200">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 truncate group-hover:text-foreground transition-colors">
            {project.url.replace('https://', '').replace('http://', '').replace('www.', '')}
          </p>
        </div>
      </a>
    </div>
  );
}

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-16 sm:mb-20 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-5">
            Systems <span className="gradient-text">We've Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Real projects. Real results. Systems designed to convert.
          </p>
        </div>

        {/* International Clients - Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-xl">🌍</span>
            </div>
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">
              International Clients
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center">
            {international.map((p, i) => (
              <PortfolioCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* National Clients - Horizontal Scroll */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-xl">🇮🇳</span>
              </div>
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">
                National Clients
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>← Drag to scroll →</span>
            </div>
          </div>

          {/* Scroll Container */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            {/* Gradient fades for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable cards - hidden scrollbar */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {national.map((p, i) => (
                <div key={p.name} className="flex-shrink-0">
                  <PortfolioCard project={p} index={i} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .overflow-x-auto {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
