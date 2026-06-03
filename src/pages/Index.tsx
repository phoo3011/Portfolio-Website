import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import FloatingParticles from '@/components/effects/FloatingParticles';
import InteractiveParticles from '@/components/effects/InteractiveParticles';

const Index = () => {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      <FloatingParticles />
      <InteractiveParticles />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ActivitiesSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
