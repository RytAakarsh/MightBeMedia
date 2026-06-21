// import logo from "@/assets/MBM_Logo.png";
// import { Mail, Phone, ArrowUp, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const footerLinks = [
//   { label: "About", href: "/#about" },
//   { label: "Services", href: "/#services" },
//   { label: "MVP Lab", href: "/#mvp" },
//   { label: "Portfolio", href: "/#portfolio" },
//   { label: "Blog", href: "/blog" },
//   { label: "Contact", href: "/#contact" },
// ];

// export default function Footer() {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="relative border-t border-border pt-16 sm:pt-20 pb-8">
//       <div className="absolute top-0 left-0 right-0  h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
//       <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[140px]" />

//       <div className="container  mx-auto px-4 sm:px-6 relative z-10">
//         {/* Big CTA strip */}
//         <div className="mb-14 sm:mb-20 text-center">
//           <h3 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance max-w-3xl mx-auto mb-6">
//             Ready to build your{" "}
//             <span className="text-gradient-lime">revenue engine?</span>
//           </h3>
//           <a href="#contact" className="pill-btn-primary lime-glow">
//             Let's Talk
//             <span className="pill-btn-arrow bg-primary-foreground/15">
//               <ArrowUpRight className="w-4 h-4" />
//             </span>
//           </a>
//         </div>

//         {/* Main footer grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 pb-10 border-b border-border">
//           {/* Brand */}
//           <div className="md:col-span-5">
//             <img src={logo} alt="MightBeMedia" className="h-12 mb-5" />
//             <p className="text-sm sm:text-base text-muted-foreground max-w-sm mb-6 leading-relaxed">
//               We are not a service provider.{" "}
//               <span className="text-foreground font-semibold">
//                 We are your revenue growth partner.
//               </span>
//             </p>
//             <div className="space-y-2">
//               <a
//                 href="mailto:info@mightbemedia.in"
//                 className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Mail className="w-4 h-4 text-primary" />
//                 info@mightbemedia.in
//               </a>
//               <a
//                 href="tel:+918851872245"
//                 className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Phone className="w-4 h-4 text-primary" />
//                 +91 88518 72245
//               </a>
//             </div>
//           </div>

//           {/* Sitemap */}
//           <div className="md:col-span-3">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-5">
//               Sitemap
//             </p>
//             <ul className="space-y-3">
//               {footerLinks.map((l) => (
//                 <li key={l.href}>
//                   {l.href.startsWith("/#") ? (
//                     <a href={l.href.slice(1)} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
//                   ) : (
//                     <Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="md:col-span-4">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-5">
//               Services
//             </p>
//             <ul className="space-y-3">
//               {["Website Development", "SEO Services", "MVP for Startups", "App Development", "Software Development", "Social Media Growth"].map(
//                 (s) => (
//                   <li key={s}>
//                     <a
//                       href="#services"
//                       className="text-sm text-muted-foreground hover:text-primary transition-colors"
//                     >
//                       {s}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom row */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-xs text-muted-foreground text-center sm:text-left">
//             © {new Date().getFullYear()} MightBeMedia. All rights reserved.
//           </p>
//           <button
//             onClick={scrollToTop}
//             className="pill-btn-outline text-xs"
//           >
//             Back to Top
//             <span className="pill-btn-arrow bg-muted">
//               <ArrowUp className="w-4 h-4" />
//             </span>
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }



import logo from "@/assets/MBM_Logo.png";
import { Mail, Phone, ArrowUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "MVP Lab", href: "/#mvp" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="relative border-t border-border pt-16 sm:pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* CTA */}
        <div className="mb-14 sm:mb-20 text-center">
          <h3 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance max-w-3xl mx-auto mb-6">
            Ready to build your{" "}
            <span className="text-gradient-lime">
              revenue engine?
            </span>
          </h3>

          <a
            href="/#contact"
            className="pill-btn-primary lime-glow"
          >
            Let's Talk

            <span className="pill-btn-arrow bg-primary-foreground/15">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 pb-10 border-b border-border">

          {/* Brand */}
          <div className="md:col-span-5">
            <img
              src={logo}
              alt="MightBeMedia"
              className="h-12 mb-5"
            />

            <p className="text-sm sm:text-base text-muted-foreground max-w-sm mb-6 leading-relaxed">
              We are not a service provider.{" "}
              <span className="text-foreground font-semibold">
                We are your revenue growth partner.
              </span>
            </p>

            <div className="space-y-2">
              <a
                href="mailto:info@mightbemedia.in"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@mightbemedia.in
              </a>

              <a
                href="tel:+918851872245"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 88518 72245
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-5">
              Sitemap
            </p>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-5">
              Services
            </p>

            <ul className="space-y-3">
              {[
                "Website Development",
                "SEO Services",
                "MVP for Startups",
                "App Development",
                "Software Development",
                "Social Media Growth",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} MightBeMedia. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="pill-btn-outline text-xs"
          >
            Back to Top

            <span className="pill-btn-arrow bg-muted">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}