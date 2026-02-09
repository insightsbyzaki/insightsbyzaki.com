import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@mohammadzaki.com",
    href: "mailto:contact@mohammadzaki.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohammadzaki",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mohammadzaki",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Noida, India",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Send className="w-4 h-4" />
              Get In Touch
            </span>
          </BlurFade>
          
          <BlurFade delay={0.2} inView>
            <h2 className="section-title">
              <TextAnimate animation="blurInUp" by="word">
                Let's Connect
              </TextAnimate>
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.3} inView>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm actively looking for Data Analyst opportunities where I can contribute 
              my skills in data analysis, reporting, and insights generation.
            </p>
          </BlurFade>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {contactInfo.map((info, index) => (
            <BlurFade key={info.label} delay={0.1 * index + 0.4} inView>
              {info.href ? (
                <motion.a
                  href={info.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl",
                    "bg-card border border-border/50",
                    "transition-all duration-300",
                    "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ) : (
                <div
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl",
                    "bg-card border border-border/50"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              )}
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={0.8} inView>
          <div className="text-center">
            <motion.a
              href="mailto:contact@mohammadzaki.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full",
                "bg-foreground text-background font-semibold text-lg",
                "transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20"
              )}
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
            </motion.a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
