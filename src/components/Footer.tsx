import logo from "@/assets/logo.png";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border">
      {/* Gradient line on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-center">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="MightBeMedia" className="h-14 " />
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">Turning Ideas Into Revenue Systems</p>
          </div>

          {/* Positioning */}
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-xs sm:text-sm font-semibold gradient-text">We are not a service provider.</p>
            <p className="text-xs sm:text-sm font-semibold gradient-text">We are your revenue growth partner.</p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            <a
              href="mailto:info.mightbemedia@gmail.com"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <ArrowUp className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-[10px] mb-4 sm:text-xs text-muted-foreground">© {new Date().getFullYear()} MightBeMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
