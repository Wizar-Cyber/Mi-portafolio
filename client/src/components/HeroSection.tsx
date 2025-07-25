import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <p className="cyber-green font-medium mb-4">
                {t('subtitle', 'Cybersecurity Analyst & Software Engineer', 'Analista de Ciberseguridad e Ingeniero de Software')}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {t('greeting', 'Hello I\'m', 'Hola, soy')}<br />
                <span className="cyber-green">{portfolioData.name}</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {portfolioData.heroDescription[language]}
              </p>
            </div>
            
            {/* Download CV Button */}
            <div className="flex items-center space-x-4">
              <Button className="bg-dark-secondary hover:bg-dark-border text-white">
                {t('download_cv', 'Download CV', 'Descargar CV')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Button>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href={portfolioData.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-secondary hover:bg-cyber-green hover:text-dark-bg rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href={portfolioData.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-secondary hover:bg-cyber-green hover:text-dark-bg rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href={portfolioData.socialLinks.x} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-secondary hover:bg-cyber-green hover:text-dark-bg rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>
                <a 
                  href={portfolioData.socialLinks.discord} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-secondary hover:bg-cyber-green hover:text-dark-bg rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="dashed-border w-80 h-80 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                  alt={`${portfolioData.name} - Cybersecurity Analyst`}
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{portfolioData.stats.experienceYears}</div>
            <div className="text-gray-400 text-sm">
              {t('years_experience', 'Years of experience', 'Años de experiencia')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{portfolioData.stats.projectsCompleted}+</div>
            <div className="text-gray-400 text-sm">
              {t('projects_completed', 'Projects completed', 'Proyectos completados')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{portfolioData.stats.technologiesMastered}</div>
            <div className="text-gray-400 text-sm">
              {t('technologies_mastered', 'Technologies mastered', 'Tecnologías dominadas')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{portfolioData.stats.securityAssessments}+</div>
            <div className="text-gray-400 text-sm">
              {t('security_assessments', 'Security assessments', 'Evaluaciones de seguridad')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
