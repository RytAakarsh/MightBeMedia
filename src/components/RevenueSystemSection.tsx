// import { ArrowUpRight, ExternalLink } from "lucide-react";

// const clinics = [
//   {
//     name: "Viva Skin Care",
//     tag: "Skin & Hair Clinic",
//     preview: "/viva.png",
//     url: "https://vivaskincare.in",
//   },
//   {
//     name: "She & Soul",
//     tag: "Women Healthcare",
//     preview: "/she&soul.png",
//     url: "https://www.sheandsoul.co.in/",
//   },
//   {
//     name: "Dr Rangoli Derma",
//     tag: "Skin Clinic",
//     preview: "/rangoli.png",
//     url: "https://drrangolidermaskin.vercel.app/",
//   },
//   {
//     name: "Varnika Skin",
//     tag: "Aesthetic Clinic",
//     preview: "/varnika.png",
//     url: "https://varnikaskin.vercel.app/",
//   },
//   {
//     name: "Roots Care Hair",
//     tag: "Hair Restoration",
//     preview: "/skinroot.png",
//     url: "https://rootscarehairs.vercel.app/",
//   },
// ];

// const clinicLoop = [...clinics, ...clinics];

// function ClinicCard({ clinic }: any) {
//   return (
//     <div className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
//       <a
//         href={clinic.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="block"
//       >
//         <div className="relative h-56 sm:h-64 overflow-hidden">
//           <img
//             src={clinic.preview}
//             alt={clinic.name}
//             className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

//           <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
//             <span className="pill-btn-primary bg-primary-foreground text-primary">
//               Visit Website

//               <span className="pill-btn-arrow bg-primary/10">
//                 <ExternalLink className="w-4 h-4" />
//               </span>
//             </span>
//           </div>
//         </div>

//         <div className="p-5">
//           <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
//             {clinic.tag}
//           </span>

//           <div className="flex items-center justify-between gap-4">
//             <div>
//               <h3 className="font-heading font-bold text-lg group-hover:text-primary transition-colors">
//                 {clinic.name}
//               </h3>

//               <p className="text-xs text-muted-foreground mt-1">
//                 Revenue System Client
//               </p>
//             </div>

//             <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
//               <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// }

// export default function RevenueSystemSection() {
//   return (
//     <section className="surface-cream py-24 sm:py-32 relative overflow-hidden">
//       {/* Background Blurs */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[150px]" />

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <div className="text-center max-w-5xl mx-auto mb-16">
//           <p className="eyebrow justify-center mb-5">
//             Trusted By Clinics
//           </p>

//           <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
//             India's Various Doctors Using
//             <span className="text-gradient-lime block">
//               MightBeMedia Revenue System
//             </span>
//           </h2>

//           <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//             Real doctors. Real clinics. Real patient acquisition systems.
//             Click any clinic below to see live projects.
//           </p>
//         </div>

//         {/* Marquee Slider */}
//         <div className="relative portfolio-marquee-wrapper">
//           <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
//           <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

//           <div className="overflow-hidden">
//             <div className="portfolio-marquee-track flex gap-6 py-4">
//               {clinicLoop.map((clinic, index) => (
//                 <div
//                   key={`${clinic.name}-${index}`}
//                   className="shrink-0 w-[85vw] sm:w-[360px] lg:w-[380px]"
//                 >
//                   <ClinicCard clinic={clinic} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mt-24 flex justify-center">
//           <a
//             href="https://wa.me/919911207086?text=I%20want%20this%20Revenue%20System"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="pill-btn-primary lime-glow text-sm sm:text-base"
//           >
//             I Want This Revenue System

//             <span className="pill-btn-arrow bg-primary-foreground/15">
//               <ArrowUpRight className="w-5 h-5" />
//             </span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const clinics = [
  {
    name: "Viva Skin Care",
    tag: "Skin & Hair Clinic",
    preview: "/viva.png",
    url: "https://vivaskincare.in",
  },
  {
    name: "She & Soul",
    tag: "Women Healthcare",
    preview: "/she&soul.png",
    url: "https://www.sheandsoul.co.in/",
  },
  {
    name: "Dr Rangoli Derma",
    tag: "Skin Clinic",
    preview: "/rangoli.png",
    url: "https://drrangolidermaskin.vercel.app/",
  },
  {
    name: "Varnika Skin",
    tag: "Aesthetic Clinic",
    preview: "/varnika.png",
    url: "https://varnikaskin.vercel.app/",
  },
  {
    name: "Roots Care Hair",
    tag: "Hair Restoration",
    preview: "/skinroot.png",
    url: "https://rootscarehairs.vercel.app/",
  },
];

function ClinicCard({ clinic }: any) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-xl transition-all duration-300 hover:border-primary/50">
      <a
        href={clinic.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative h-56 sm:h-64 overflow-hidden bg-secondary">
          <img
            src={clinic.preview}
            alt={clinic.name}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="pill-btn-primary bg-primary-foreground text-primary">
              Visit Website

              <span className="pill-btn-arrow bg-primary/10">
                <ExternalLink className="w-4 h-4" />
              </span>
            </span>
          </div>
        </div>

        <div className="p-5">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
            {clinic.tag}
          </span>

          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-lg font-bold transition-colors group-hover:text-primary">
                {clinic.name}
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                Revenue System Client
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function RevenueSystemSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll using native scroll with setInterval (lighter on iOS)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!isPaused && container) {
        const cardWidth = container.querySelector('.shrink-0')?.clientWidth || 360;
        const gap = 24;
        const totalCardWidth = cardWidth + gap;
        
        // Get current scroll position
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Calculate next position
        let nextScroll = currentScroll + totalCardWidth;
        
        // Reset to start if at end
        if (nextScroll >= maxScroll) {
          nextScroll = 0;
        }
        
        // Smooth scroll to next position
        container.scrollTo({
          left: nextScroll,
          behavior: 'smooth'
        });
        
        // Update current index for dots
        const newIndex = Math.round(nextScroll / totalCardWidth);
        setCurrentIndex(newIndex % clinics.length);
      }
    };

    // Start auto-scroll timer
    timerRef.current = setInterval(autoScroll, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  // Handle manual scroll to update dots
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    
    const cardWidth = container.querySelector('.shrink-0')?.clientWidth || 360;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    
    const scrollPos = container.scrollLeft;
    const index = Math.round(scrollPos / totalCardWidth);
    setCurrentIndex(index % clinics.length);
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const cardWidth = container.querySelector('.shrink-0')?.clientWidth || 360;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    
    container.scrollTo({
      left: index * totalCardWidth,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  };

  return (
    <section className="surface-cream py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <p className="eyebrow justify-center mb-5">
            Trusted By Clinics
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-6">
            India's Various Doctors Using
            <span className="text-gradient-lime block">
              MightBeMedia Revenue System
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Real doctors. Real clinics. Real patient acquisition systems.
            Click any clinic below to see live projects.
          </p>
        </div>

        {/* SIMPLE NATIVE SCROLL CAROUSEL - iOS SAFE */}
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            // Resume after a short delay
            setTimeout(() => setIsPaused(false), 3000);
          }}
          onScroll={handleScroll}
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          <div className="flex gap-6 w-max px-1">
            {/* Render 3 copies for infinite feel */}
            {[...clinics, ...clinics, ...clinics].map((clinic, index) => (
              <div
                key={`${clinic.name}-${index}`}
                className="w-[85vw] sm:w-[360px] lg:w-[380px] shrink-0 snap-start"
              >
                <ClinicCard clinic={clinic} />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {clinics.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-primary w-6' 
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/919911207086?text=I%20want%20this%20Revenue%20System"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn-primary lime-glow text-sm sm:text-base"
          >
            I Want This Revenue System

            <span className="pill-btn-arrow bg-primary-foreground/15">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}