import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ThemeToggle } from "@/components/theme-toggle";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:contact@mohammadzaki.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: FileText, label: "Resume", href: "#" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <BlurFade delay={0.1} inView>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">Open to Data Analyst Opportunities</span>
          </div>
        </BlurFade>

        {/* Name */}
        <BlurFade delay={0.2} inView>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-foreground">MOHAMMAD</span>
            <br />
            <span className="gradient-text">ZAKI</span>
          </h1>
        </BlurFade>

        {/* Title Animation */}
        <BlurFade delay={0.4} inView>
          <div className="mb-8">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              Data Analyst • MIS Specialist • Excel Expert
            </TextAnimate>
          </div>
        </BlurFade>

        {/* Summary */}
        <BlurFade delay={0.6} inView>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Data-oriented professional with expertise in managing and analyzing operational, 
            inventory, and MIS data. Building insights that drive decisions.
          </p>
        </BlurFade>

        {/* CTA Buttons */}
        <BlurFade delay={0.8} inView>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full",
                "bg-foreground text-background font-semibold",
                "transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20"
              )}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full",
                "bg-secondary text-secondary-foreground font-semibold border border-border",
                "transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </div>
        </BlurFade>

        {/* Dock Navigation */}
        <BlurFade delay={1} inView>
          <Dock className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            {socialLinks.map((link) => (
              <DockIcon key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center justify-center w-full h-full"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              </DockIcon>
            ))}
          </Dock>
        </BlurFade>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
