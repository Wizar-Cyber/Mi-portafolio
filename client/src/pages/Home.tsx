import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ResumeSection } from '@/components/ResumeSection';
import { WorkSection } from '@/components/WorkSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HeroSection />;
      case 'services':
        return <ServicesSection />;
      case 'resume':
        return <ResumeSection />;
      case 'work':
        return <WorkSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="pt-20">
        {renderSection()}
      </main>
    </div>
  );
}
