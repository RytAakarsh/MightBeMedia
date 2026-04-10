import logo from "@/assets/logo.png";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="MightBeMedia" className="h-8" />
            <p className="text-sm text-muted-foreground">Turning Ideas Into Revenue Systems</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-semibold gradient-text">We are not a service provider.</p>
            <p className="text-sm font-semibold gradient-text">We are your revenue growth partner.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:info.mightbemedia@gmail.com" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/40 transition-colors">
              <Mail className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MightBeMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
