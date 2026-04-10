import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { Send, Mail } from "lucide-react";
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
    <section id="contact" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Let's Build Your <span className="gradient-text">Growth System</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info.mightbemedia@gmail.com</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-5">
            {[
              { key: "name", label: "Your Name", type: "text" },
              { key: "business", label: "Business Name", type: "text" },
              { key: "phone", label: "Phone Number", type: "tel" },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder={field.label}
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] neon-glow"
            >
              <Send className="w-5 h-5" />
              Start Growth
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
