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

// Duplicate for infinite scroll effect
const clinicLoop = [...clinics, ...clinics, ...clinics];

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
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);
  const speedRef = useRef(0.8); // pixels per frame

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let lastTimestamp = 0;
    let scrollStep = 0;

    const smoothScroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      
      // Throttle to ~60fps
      const delta = timestamp - lastTimestamp;
      if (delta >= 16) {
        lastTimestamp = timestamp;

        // Only auto-scroll if not hovered, not dragging, and container has content
        if (!isHovered && !isDragging && container.scrollWidth > container.clientWidth) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          
          // Move by speed
          scrollStep += speedRef.current;
          
          if (scrollStep >= 1) {
            const steps = Math.floor(scrollStep);
            scrollStep -= steps;
            
            let newScrollLeft = container.scrollLeft + steps;
            
            // Reset to beginning when reaching the end (for infinite effect)
            if (newScrollLeft >= maxScroll) {
              // Reset to middle of the loop for seamless infinite effect
              const middlePosition = maxScroll / 2;
              container.scrollLeft = middlePosition;
              newScrollLeft = middlePosition + steps;
            }
            
            container.scrollLeft = newScrollLeft;
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(smoothScroll);
    };

    animationRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isDragging]);

  // Handle mouse drag for desktop
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    setIsDragging(true);
    setStartX(touch.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    if (!touch) return;
    const x = touch.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
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

        {/* AUTO-SCROLLING SMOOTH CAROUSEL */}
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar pb-4 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseUpOrLeave();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollBehavior: isDragging ? 'auto' : 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="flex gap-6 w-max px-1">
            {clinicLoop.map((clinic, index) => (
              <div
                key={`${clinic.name}-${index}`}
                className="w-[85vw] sm:w-[360px] lg:w-[380px] shrink-0"
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
              className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/60 transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.querySelector('.shrink-0')?.clientWidth || 360;
                  const gap = 24; // gap-6 = 24px
                  const scrollAmount = (cardWidth + gap) * index;
                  scrollRef.current.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth',
                  });
                }
              }}
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