// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import RevenueSystemSection from "@/components/RevenueSystemSection";

// export default function RevenueSystem() {
//   return (
//     <div className="min-h-screen bg-background text-foreground overflow-hidden">
//       <Navbar />

//       <section className="pt-32 pb-20 relative">
//         <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px]" />
//         <div className="absolute top-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px]" />

//         <div className="container mx-auto px-4 sm:px-6 relative z-10">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <p className="eyebrow justify-center mb-6">
//               Revenue Growth System
//             </p>

//             <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
//               How Top Clinics Turn
//               <span className="text-gradient-lime block mt-2">
//                 Instagram Views Into Patient Bookings
//               </span>
//             </h1>

//             <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
//               Watch this short presentation to understand how the
//               MightBeMedia Revenue System converts content, ads,
//               WhatsApp automation and follow-ups into booked
//               consultations.
//             </p>
//           </div>

//           {/* YouTube Video */}
//           <div className="max-w-6xl mx-auto">
//             <div className="glass-card p-3 sm:p-4 overflow-hidden">
//               <div className="relative w-full overflow-hidden rounded-2xl">
//                 <iframe
//                   className="w-full aspect-video"
//                   src="https://www.youtube.com/embed/1ZfypNw05NI"
//                   title="MightBeMedia Revenue System"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//                 />
//               </div>
//             </div>
//           </div>

          
//         </div>
//       </section>

//       <RevenueSystemSection />

//       <Footer />
//     </div>
//   );
// }

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevenueSystemSection from "@/components/RevenueSystemSection";

export default function RevenueSystem() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="eyebrow justify-center mb-6">
              Revenue Growth System
            </p>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
              How Top Clinics Turn
              <span className="text-gradient-lime block mt-2">
                Instagram Views Into Patient Bookings
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
              Watch this short presentation to understand how the
              MightBeMedia Revenue System converts content, ads,
              WhatsApp automation and follow-ups into booked consultations.
            </p>
          </div>

          {/* IOS SAFE YOUTUBE EMBED */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl border border-border bg-card p-3">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/1ZfypNw05NI?rel=0&playsinline=1"
                  title="MightBeMedia Revenue System"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RevenueSystemSection />

      <Footer />
    </div>
  );
}