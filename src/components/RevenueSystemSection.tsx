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
import { useEffect, useRef, useState, useCallback } from "react";

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
  const speedRef = useRef(0.5); // Reduced speed for smoother iOS performance
  const [isIOS, setIsIOS] = useState(false);

  // Detect iOS
  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                       (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(isIOSDevice);
    
    // Reduce speed on iOS for smoother performance
    if (isIOSDevice) {
      speedRef.current = 0.3;
    }
  }, []);

  // Auto-scroll using transform instead of scrollLeft for iOS
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const totalWidth = container.scrollWidth / 3; // Width of one set of cards

    const autoScroll = () => {
      if (!isHovered && !isDragging) {
        position += speedRef.current;
        
        // Reset position when reaching the end of one set
        if (position >= totalWidth) {
          position = 0;
        }
        
        // Apply transform for smooth scrolling
        const track = container.querySelector('.carousel-track') as HTMLElement;
        if (track) {
          track.style.transform = `translateX(-${position}px)`;
          track.style.transition = 'none';
        }
      }
      
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered, isDragging]);

  // Handle drag for all devices using transform
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    const container = scrollRef.current;
    if (!container) return;
    
    const track = container.querySelector('.carousel-track') as HTMLElement;
    if (track) {
      // Get current transform value
      const transform = track.style.transform;
      const match = transform.match(/translateX\(-([\d.]+)px\)/);
      const currentPos = match ? parseFloat(match[1]) : 0;
      setStartX(clientX);
      setScrollLeft(currentPos);
      
      // Disable transition during drag
      track.style.transition = 'none';
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    
    const container = scrollRef.current;
    if (!container) return;
    
    const track = container.querySelector('.carousel-track') as HTMLElement;
    if (!track) return;
    
    const diff = (clientX - startX) * 1.2;
    let newPosition = scrollLeft - diff;
    
    const totalWidth = container.scrollWidth / 3;
    
    // Loop the carousel
    if (newPosition < 0) {
      newPosition = totalWidth + newPosition;
    } else if (newPosition > totalWidth) {
      newPosition = newPosition - totalWidth;
    }
    
    track.style.transform = `translateX(-${newPosition}px)`;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    handleDragMove(e.clientX);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    handleDragStart(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    if (!touch) return;
    handleDragMove(touch.clientX);
  };

  // Snap to nearest card on drag end
  const snapToNearest = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    const track = container.querySelector('.carousel-track') as HTMLElement;
    if (!track) return;
    
    const transform = track.style.transform;
    const match = transform.match(/translateX\(-([\d.]+)px\)/);
    if (!match) return;
    
    const currentPos = parseFloat(match[1]);
    const cardWidth = container.querySelector('.shrink-0')?.clientWidth || 360;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    
    const nearestIndex = Math.round(currentPos / totalCardWidth);
    const snapPosition = nearestIndex * totalCardWidth;
    
    track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translateX(-${snapPosition}px)`;
    
    // Update scrollLeft for dot indicators
    container.scrollLeft = snapPosition;
  }, []);

  // Handle dot navigation
  const goToSlide = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const track = container.querySelector('.carousel-track') as HTMLElement;
    if (!track) return;
    
    const cardWidth = container.querySelector('.shrink-0')?.clientWidth || 360;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    const snapPosition = index * totalCardWidth;
    
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translateX(-${snapPosition}px)`;
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

        {/* AUTO-SCROLLING SMOOTH CAROUSEL - iOS FIXED */}
        <div
          ref={scrollRef}
          className="overflow-hidden pb-4 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleDragEnd();
            snapToNearest();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => {
            handleDragEnd();
            snapToNearest();
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => {
            handleDragEnd();
            snapToNearest();
          }}
          style={{
            touchAction: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div 
            className="carousel-track flex gap-6 w-max px-1"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translateX(0px)',
            }}
          >
            {clinicLoop.map((clinic, index) => (
              <div
                key={`${clinic.name}-${index}`}
                className="w-[85vw] sm:w-[360px] lg:w-[380px] shrink-0"
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                }}
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