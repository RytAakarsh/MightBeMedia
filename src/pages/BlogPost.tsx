import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBadge from "@/components/StickyBadge";
import { posts } from "@/blog/posts";
import { useEffect } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | MightBeMedia`;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute("content", post.metaDescription);
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 sm:pt-32 lg:pt-36 pb-16">
        <article className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All articles
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider text-xs">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />{" "}
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-balance mb-5">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div className="prose-content space-y-6">
            {post.body.map((s, i) => {
              if (s.type === "h2")
                return (
                  <h2 key={i} className="font-heading font-bold text-2xl sm:text-3xl mt-10 mb-2 text-balance">
                    {s.text}
                  </h2>
                );
              if (s.type === "h3")
                return (
                  <h3 key={i} className="font-heading font-bold text-xl sm:text-2xl mt-6 mb-1 text-balance">
                    {s.text}
                  </h3>
                );
              if (s.type === "p")
                return (
                  <p key={i} className="text-base sm:text-lg text-foreground/85 leading-[1.75]">
                    {s.text}
                  </p>
                );
              if (s.type === "ul")
                return (
                  <ul key={i} className="space-y-3 my-6">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-base text-foreground/85 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              if (s.type === "quote")
                return (
                  <blockquote
                    key={i}
                    className="my-8 px-6 py-5 border-l-4 border-primary bg-primary/5 rounded-r-2xl text-lg sm:text-xl font-heading font-semibold text-foreground/95 italic leading-snug"
                  >
                    "{s.text}"
                  </blockquote>
                );
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 glass-card p-7 sm:p-9 text-center">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-3 text-balance">
              Ready to build a real{" "}
              <span className="text-gradient-lime">growth system?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We help businesses and startups turn traffic into paying clients —
              with conversion-focused websites, MVPs, and SEO.
            </p>
            <Link to="/#contact" className="pill-btn-primary lime-glow">
              Get Free Demo
              <span className="pill-btn-arrow bg-primary-foreground/15">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </article>

        {/* Related */}
        <section className="container mx-auto px-4 sm:px-6 mt-20">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-6">More reads</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group glass-card-hover p-6"
              >
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider text-[10px]">
                  {p.category}
                </span>
                <h4 className="font-heading font-bold text-lg mt-3 mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
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
