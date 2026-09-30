import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FreelanceServices from "@/components/FreelanceServices";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import HowIWork from "@/components/HowIWork";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <CustomCursor />
            <ScrollToTop />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <FreelanceServices />
            <ProjectsSection />
            <ExperienceSection />
            <HowIWork />
            <ContactSection />
        </div>
    );
};

export default Index;
