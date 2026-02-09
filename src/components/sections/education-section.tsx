import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Indira Gandhi National Open University",
    location: "Noida",
    period: "Jul 2025 - Present",
    current: true,
    description: "Pursuing advanced studies in computer applications with focus on data science and analytics.",
  },
  {
    degree: "Bachelor of Science (B.Sc) – PCM",
    institution: "D. S. B. Campus",
    location: "Nainital",
    period: "Aug 2015 – Dec 2019",
    current: false,
    description: "Foundation in Physics, Chemistry, and Mathematics providing strong analytical and quantitative skills.",
  },
];

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  return (
    <BlurFade delay={0.2 * index} inView>
      <div
        className={cn(
          "relative group p-8 rounded-2xl",
          "bg-card border border-border/50",
          "transition-all duration-500",
          "hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5",
          "hover:-translate-y-1"
        )}
      >
        {/* Badge */}
        {edu.current && (
          <div className="absolute -top-3 left-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
              Currently Pursuing
            </span>
          </div>
        )}

        {/* Icon */}
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
          "bg-gradient-to-br from-accent/20 to-accent/5",
          "group-hover:from-accent/30 group-hover:to-accent/10",
          "transition-all duration-300"
        )}>
          <GraduationCap className="w-7 h-7 text-accent" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
        <p className="text-lg text-accent font-medium mb-4">{edu.institution}</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>{edu.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{edu.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground">{edu.description}</p>
      </div>
    </BlurFade>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Academic Background
            </span>
          </BlurFade>
          
          <BlurFade delay={0.2} inView>
            <h2 className="section-title">
              <TextAnimate animation="blurInUp" by="word">
                Education
              </TextAnimate>
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.3} inView>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A solid academic foundation combined with continuous learning in computer applications and data science.
            </p>
          </BlurFade>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
