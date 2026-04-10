import { Sparkles } from "lucide-react";

export default function StickyBadge() {
  return (
    <div className="sticky-badge flex items-center gap-2 rounded-full">
      <Sparkles className="w-4 h-4 text-primary" />
      <span className="text-foreground">Built for Growth, Not Just Design</span>
    </div>
  );
}
