import { BlurFade } from "@/components/magicui/blur-fade";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1.5">
              Built with <Heart className="w-4 h-4 text-accent fill-accent" /> by Mohammad Zaki
            </p>
            <p>© {currentYear} All rights reserved.</p>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
