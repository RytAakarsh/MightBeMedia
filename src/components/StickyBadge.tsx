import { Sparkles } from "lucide-react";

export default function StickyBadge() {
  return (
    <div className="sticky-badge flex items-center gap-2 rounded-full text-xs sm:text-sm">
      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
      <span className="text-foreground">Built for Growth, Not Just Design</span>
    </div>
  );
}
