import { Sparkles } from "lucide-react";

export default function StickyBadge() {
  return (
    <a
      href="#contact"
      className="sticky-badge hidden sm:inline-flex items-center gap-2 hover:scale-105 transition-transform"
    >
      <Sparkles className="w-4 h-4" />
      <span>Built for Growth, Not Just Design</span>
    </a>
  );
}
