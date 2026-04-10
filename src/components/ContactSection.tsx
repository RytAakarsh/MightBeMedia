import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { Send, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", business: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Growth Inquiry from ${form.name} - ${form.business}`);
    const body = encodeURIComponent(`Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
    window.open(`mailto:info.mightbemedia@gmail.com?subject=${subject}&body=${body}`);
    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Talk Growth
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-3 sm:mb-4">
              Let's Build Your <span className="gradient-text">Growth System</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-4 sm:mb-6">
              Ready to turn your traffic into revenue? Let's start the conversation.
            </p>

            {/* Contact info pills */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="mailto:info.mightbemedia@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-primary/40 transition-colors text-sm text-muted-foreground hover:text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info.mightbemedia@gmail.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5 relative overflow-hidden">
            {/* Subtle gradient line on top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 block">Business Name</label>
                <input
                  type="text"
                  required
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all resize-none"
                placeholder="Tell us about your business and goals..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] neon-glow group"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
              Start Growth
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
