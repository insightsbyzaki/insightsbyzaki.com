import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
