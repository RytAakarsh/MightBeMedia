import { useScrollAnimation } from "./useScrollAnimation";
import { GraduationCap, Stethoscope, Dumbbell, Rocket, ArrowUpRight } from "lucide-react";

const targets = [
  {
    icon: GraduationCap,
    title: "Website for Coaches",
    keyword: "Coaches & Course Sellers",
    problem: "Losing leads on Instagram bios.",
    solution: "Funnel-based website that books calls on autopilot.",
    benefits: ["Lead-capture funnel", "Booking + payments", "Course landing pages"],
  },
  {
    icon: Stethoscope,
    title: "Website for Clinics",
    keyword: "Clinics & Doctors",
    problem: "Patients can't find you on Google.",
    solution: "SEO-ready clinic site that ranks locally and converts walk-ins.",
    benefits: ["Local SEO + Google Maps", "Appointment booking", "Trust + reviews built in"],
  },
  {
    icon: Dumbbell,
    title: "Website for Fitness Trainers",
    keyword: "Trainers, Gyms & Studios",
    problem: "No system to convert followers.",
    solution: "Conversion-focused website that turns reels into paying clients.",
    benefits: ["Free trial funnel", "Plan + program pages", "WhatsApp lead capture"],
  },
  {
    icon: Rocket,
    title: "MVP for Startups",
    keyword: "Startup Founders",
    problem: "Idea stuck in Notion. No traction.",
    solution: "Launch a real MVP, validate with users, and start growing.",
    benefits: ["MVP in 4–8 weeks", "Launch + GTM strategy", "User acquisition system"],
  },
];

export default function TargetedServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solutions" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="eyebrow mb-5">Built For Your Business</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-balance mb-5">
            Industry-specific systems that{" "}
            <span className="text-gradient-lime">actually convert.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Every business has a different funnel. We build the one that fits yours —
            so traffic stops being a vanity metric and starts becoming revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {targets.map((t, i) => (
            <div
              key={t.title}
              className="group relative glass-card-hover p-6 sm:p-8 overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start gap-4 sm:gap-5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors duration-500 flex items-center justify-center shrink-0">
                  <t.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">
                    {t.keyword}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold">{t.title}</h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5 border border-destructive/15">
                  <span className="text-xs font-bold uppercase tracking-wider text-destructive shrink-0 mt-0.5">
                    Problem
                  </span>
                  <p className="text-sm text-foreground/90">{t.problem}</p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary shrink-0 mt-0.5">
                    Solution
                  </span>
                  <p className="text-sm text-foreground/90">{t.solution}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {t.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors"
              >
                Get Free Demo
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
