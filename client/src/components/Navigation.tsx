import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: { en: 'Home', es: 'Inicio' } },
    { id: 'services', label: { en: 'Services', es: 'Servicios' } },
    { id: 'resume', label: { en: 'Resume', es: 'Currículum' } },
    { id: 'work', label: { en: 'Work', es: 'Trabajo' } },
    { id: 'contact', label: { en: 'Contact', es: 'Contacto' } }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-dark-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">Reiber Lozano</span>
            <span className="cyber-green">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`nav-link px-4 py-2 rounded-lg font-medium ${
                  currentSection === section.id ? 'active' : ''
                }`}
              >
                {section.label[language]}
              </button>
            ))}
          </div>
          
          {/* Language Toggle & Hire Me Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded font-medium ${
                  language === 'en' 
                    ? 'bg-cyber-green text-dark-bg' 
                    : 'bg-dark-secondary text-gray-300'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm rounded font-medium ${
                  language === 'es' 
                    ? 'bg-cyber-green text-dark-bg' 
                    : 'bg-dark-secondary text-gray-300'
                }`}
              >
                ES
              </button>
            </div>
            <Button 
              onClick={() => onSectionChange('contact')}
              className="bg-cyber-green text-dark-bg hover:bg-green-400 font-semibold"
            >
              {t('hire', 'Hire me', 'Contrátame')}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-dark-border">
            <div className="flex flex-col space-y-2 mt-4">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`nav-link px-4 py-2 rounded-lg font-medium text-left ${
                    currentSection === section.id ? 'active' : ''
                  }`}
                >
                  {section.label[language]}
                </button>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-2 px-4 pt-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm rounded font-medium ${
                    language === 'en' 
                      ? 'bg-cyber-green text-dark-bg' 
                      : 'bg-dark-secondary text-gray-300'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 text-sm rounded font-medium ${
                    language === 'es' 
                      ? 'bg-cyber-green text-dark-bg' 
                      : 'bg-dark-secondary text-gray-300'
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
