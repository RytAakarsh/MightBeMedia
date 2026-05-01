import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Growth Inquiry from ${form.name} - ${form.business}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:info@mightbemedia.in?subject=${subject}&body=${body}`);
    toast.success("Opening your email client…");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left col - heading + contact info */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Let's Talk Growth</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-balance mb-6">
              Let's build your{" "}
              <span className="text-gradient-lime">growth system.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
              Ready to turn traffic into revenue? Tell us about your business
              and we'll come back with a clear plan.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:info@mightbemedia.in"
                className="group flex items-center gap-4 p-4 rounded-2xl glass-card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email us</p>
                  <p className="text-sm sm:text-base font-semibold truncate">info@mightbemedia.in</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="tel:+918851872245"
                className="group flex items-center gap-4 p-4 rounded-2xl glass-card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Call us</p>
                  <p className="text-sm sm:text-base font-semibold">+91 88518 72245</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Based in</p>
                  <p className="text-sm sm:text-base font-semibold">India · Working Globally</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right col - form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <Field
                  label="Your Name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  label="Business Name"
                  placeholder="Your Company"
                  value={form.business}
                  onChange={(v) => setForm({ ...form, business: v })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <Field
                  label="Email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  label="Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-background/40 border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  placeholder="Tell us about your business and goals…"
                />
              </div>

              <button type="submit" className="pill-btn-primary lime-glow w-full justify-between mt-2">
                Start Growth
                <span className="pill-btn-arrow bg-primary-foreground/15">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
        {label}
      </label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3.5 rounded-2xl bg-background/40 border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
