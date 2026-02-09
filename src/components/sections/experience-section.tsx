import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Inventory Manager (Data & Support)",
    company: "First Idea Automation India",
    location: "Greater Noida, UP",
    period: "May 2025 – Present",
    current: true,
    highlights: [
      "Managed inventory records and stock movement data using Excel and ODOO",
      "Updated inward and outward stock reports on a daily basis",
      "Tracked product availability, shortages, and reorder requirements",
      "Ensured data accuracy through regular stock verification and reconciliation",
      "Prepared inventory summaries for supervisors and management",
      "Assisted in monthly stock audits and inventory reporting",
    ],
  },
  {
    title: "MIS / Data Executive",
    company: "Goan Xpress Courier",
    location: "Goa",
    period: "Mar 2024 – Mar 2025",
    current: false,
    highlights: [
      "Generated daily, weekly, and monthly MIS reports using Excel",
      "Analysed operational data to identify delays, errors, and workflow gaps",
      "Used Excel formulas such as VLOOKUP, IF, and Pivot Tables to automate reports",
      "Maintained centralized data sheets for performance and operational tracking",
      "Shared data insights with supervisors to support data-driven decision making",
      "Reduced manual effort by standardizing report templates and formats",
    ],
  },
  {
    title: "Data Ops. Executive",
    company: "Skyline International Courier",
    location: "Goa",
    period: "Jan 2023 – Feb 2024",
    current: false,
    highlights: [
      "Maintained daily operational data related to shipments, deliveries, and returns using MS Excel",
      "Prepared daily and weekly MIS reports for management review and tracking",
      "Cleaned, verified, and structured raw data to ensure accuracy and consistency",
      "Tracked delivery performance, pending shipments, and exception cases",
      "Coordinated with operations teams to resolve data mismatches and update reports",
      "Improved reporting efficiency by organizing large datasets into structured Excel formats",
    ],
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  return (
    <BlurFade delay={0.2 * index} inView>
      <div className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline Line */}
        {index < experiences.length - 1 && (
          <div className="absolute left-[11px] top-8 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-accent to-border" />
        )}
        
        {/* Timeline Dot */}
        <div className={cn(
          "absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center",
          experience.current 
            ? "border-accent bg-accent" 
            : "border-border bg-background"
        )}>
          {experience.current && (
            <span className="absolute w-3 h-3 rounded-full bg-accent animate-ping" />
          )}
          <span className={cn(
            "w-2 h-2 rounded-full",
            experience.current ? "bg-background" : "bg-muted-foreground"
          )} />
        </div>

        {/* Card */}
        <div className={cn(
          "relative group p-6 rounded-2xl",
          "bg-card border border-border/50",
          "transition-all duration-500",
          "hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
        )}>
          {experience.current && <BorderBeam size={100} duration={12} />}
          
          {/* Header */}
          <div className="mb-4">
            {experience.current && (
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                Current Role
              </span>
            )}
            <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
            <p className="text-lg text-accent font-medium">{experience.company}</p>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
          </div>

          {/* Highlights */}
          <ul className="space-y-3">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BlurFade>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Work History
            </span>
          </BlurFade>
          
          <BlurFade delay={0.2} inView>
            <h2 className="section-title">
              <TextAnimate animation="blurInUp" by="word">
                Professional Experience
              </TextAnimate>
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.3} inView>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building expertise in data management, MIS reporting, and operational analytics 
              across diverse industries.
            </p>
          </BlurFade>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
