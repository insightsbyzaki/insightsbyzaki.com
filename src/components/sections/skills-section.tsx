import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { 
  FileSpreadsheet, 
  Database, 
  BarChart3, 
  Code2, 
  PieChart,
  Table2
} from "lucide-react";

const skills = [
  { name: "MS Excel (Advanced)", icon: FileSpreadsheet, level: 95 },
  { name: "SQL", icon: Database, level: 85 },
  { name: "Power BI", icon: BarChart3, level: 80 },
  { name: "Python", icon: Code2, level: 75 },
  { name: "Tableau", icon: PieChart, level: 78 },
  { name: "ODOO", icon: Table2, level: 82 },
];

const excelSkills = [
  "VLOOKUP", "HLOOKUP", "INDEX-MATCH", "Pivot Tables", "Power Query",
  "Data Validation", "Conditional Formatting", "VBA Macros", "Charts & Graphs",
  "What-If Analysis", "Goal Seek", "Solver", "Data Tables", "Power Pivot"
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  return (
    <BlurFade delay={0.1 * index} inView>
      <div
        className={cn(
          "group relative p-6 rounded-2xl",
          "bg-card border border-border/50",
          "transition-all duration-500",
          "hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5",
          "hover:-translate-y-1"
        )}
      >
        {/* Icon */}
        <div className="mb-4">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            "bg-secondary group-hover:bg-accent/10",
            "transition-colors duration-300"
          )}>
            <skill.icon className="w-6 h-6 text-accent" />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>

        {/* Progress Bar */}
        <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-2 text-right">
          <span className="text-sm text-muted-foreground">
            <NumberTicker value={skill.level} delay={0.3 * index} />%
          </span>
        </div>
      </div>
    </BlurFade>
  );
}

function ExcelBadge({ skill }: { skill: string }) {
  return (
    <div className={cn(
      "px-4 py-2 rounded-full",
      "bg-card border border-border/50",
      "text-sm font-medium text-foreground",
      "whitespace-nowrap"
    )}>
      {skill}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Technical Expertise
            </span>
          </BlurFade>
          
          <BlurFade delay={0.2} inView>
            <h2 className="section-title">
              <TextAnimate animation="blurInUp" by="word">
                Skills & Tools
              </TextAnimate>
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.3} inView>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in data analysis tools and technologies, with a strong foundation 
              in spreadsheet-based analysis and business intelligence platforms.
            </p>
          </BlurFade>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Excel Skills Marquee */}
        <BlurFade delay={0.5} inView>
          <div className="relative py-8">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="text-center mb-6">
              <span className="text-sm font-medium text-muted-foreground">Excel Proficiencies</span>
            </div>
            
            <Marquee pauseOnHover duration="30s">
              {excelSkills.map((skill) => (
                <ExcelBadge key={skill} skill={skill} />
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.6} inView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { label: "Years Experience", value: 3 },
              { label: "Reports Generated", value: 500 },
              { label: "Data Projects", value: 50 },
              { label: "Tools Mastered", value: 6 },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <NumberTicker value={stat.value} delay={0.2 * index} />
                  <span className="text-accent">+</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
