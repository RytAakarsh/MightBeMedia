import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBadge from "@/components/StickyBadge";
import { useEffect } from "react";
import { posts } from "@/blog/posts";

export default function Blog() {
  useEffect(() => {
    document.title = "Growth & Conversion Blog | MightBeMedia";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      "Practical guides on website conversion, SEO, MVP launches and lead generation for coaches, clinics, fitness trainers and startups."
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 sm:pt-32 lg:pt-36 pb-20">
        <section className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="eyebrow mb-5">MightBeMedia Blog</p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance mb-5">
              Growth playbooks for{" "}
              <span className="text-gradient-lime">businesses & startups.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Real strategies on conversion-focused websites, SEO, MVPs and lead generation —
              written by builders who ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group glass-card-hover overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-secondary to-accent/10 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary)/0.5), transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent)/0.4), transparent 50%)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <span className="font-heading font-bold text-2xl sm:text-3xl text-foreground/80 text-center leading-tight">
                      {p.shortTitle}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider text-[10px]">
                      {p.category}
                    </span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                  </div>
                  <h2 className="font-heading font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-primary group-hover:gap-3 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyBadge />
    </div>
  );
}
