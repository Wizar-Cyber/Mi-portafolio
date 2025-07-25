import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ResumeSection } from '@/components/ResumeSection';
import { WorkSection } from '@/components/WorkSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'resume', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation currentSection={currentSection} onSectionChange={scrollToSection} />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="resume">
          <ResumeSection />
        </section>
        <section id="work">
          <WorkSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
