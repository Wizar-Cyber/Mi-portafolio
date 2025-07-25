import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';

const skillIcons = {
  FaHtml5: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  FaJs: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  ),
  FaReact: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.167.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.099 2.21-.099zm-3.635.154c-.96.04-1.846.154-2.65.334-.784.181-1.22.372-1.284.716-.04.28.153.621.762 1.072.8.591 2.168 1.162 3.884 1.61.28.07.568.132.856.194-.54-1.134-.956-2.25-1.14-3.272-.144-.505-.24-.983-.428-1.654zm.53 1.798c.085.381.18.762.295 1.14.253-.037.51-.073.772-.108.036-.114.072-.227.11-.34-.09-.27-.18-.538-.282-.802-.075.04-.149.08-.223.12-.22.128-.45.258-.672.385zm5.173.007c-.22-.128-.45-.258-.673-.386-.074-.04-.147-.079-.22-.118-.1.266-.19.537-.28.806.036.115.072.229.108.343.262.035.52.07.774.107.115-.378.21-.759.29-1.14zm-2.986.123c.145.445.304.903.486 1.375.182-.472.341-.93.486-1374-.49-.036-.986-.035-1.479 0-.006 0-.006-.002 0 0-.006.001-.006-.001 0 0zm2.334.048c-.25.313-.513.65-.773.999.748-.27 1.45-.601 2.09-.985-.51.134-1.04.244-1.593.329-.244-.114-.49-.227-.724-.343zm-2.21.026c-.124.058-.248.118-.37.179-.506.252-.982.53-1.43.832.64.384 1.342.715 2.09.985-.26-.349-.523-.686-.773-.999-.172.001-.344.002-.517.003zm-2.21.206c-.51-.134-1.04-.244-1.593-.329.244.116.49.227.724.343.25-.313.513-.65.773-.999-.28-.001-.56-.002-.84-.002-.022-.001-.043-.001-.064-.013zm4.893.48c-.1.266-.19.537-.28.806-.036-.115-.072-.229-.108-.343-.262-.035-.52-.07-.774-.107-.115.378-.21.759-.29 1.14.22.128.45.258.673.386.074.04.147.079.22.118zm-7.334.006c.075-.04.149-.08.223-.12.22-.128.45-.258.672-.385.085-.381.18-.762.295-1.14-.253.037-.51.073-.772.108-.036.114-.072.227-.11.34.09.27.18.538.282.802-.09.269-.18.537-.282.805.074-.04.147-.08.22-.118.085.381.18.762.295 1.14.253-.037.51-.073.772-.108.036-.114.072-.227.11-.34zm2.986-.123c-.145-.445-.304-.903-.486-1.375-.182.472-.341.93-.486 1.374.49.036.986.035 1.479 0 .006 0 .006.002 0 0 .006-.001.006.001 0 0zm-2.334-.048c.25-.313.513-.65.773-.999-.748.27-1.45.601-2.09.985.51-.134 1.04-.244 1.593-.329.244.114.49.227.724.343zm2.21-.026c.124-.058.248-.118.37-.179.506-.252.982-.53 1.43-.832-.64-.384-1.342-.715-2.09-.985.26.349.523.686.773.999.172-.001.344-.002.517-.003zm2.21-.206c.51.134 1.04.244 1.593.329-.244-.116-.49-.227-.724-.343-.25.313-.513.65-.773.999.28.001.56.002.84.002.022.001.043.001.064.013zm-4.893-.48c.1-.266.19-.537.28-.806.036.115.072.229.108.343.262.035.52.07.774.107.115-.378.21-.759.29-1.14-.22-.128-.45-.258-.673-.386-.074-.04-.147-.079-.22-.118zm7.334-.006c-.075.04-.149.08-.223.12-.22.128-.45.258-.672.385-.085.381-.18.762-.295 1.14.253-.037.51-.073.772-.108.036-.114.072-.227.11-.34-.09-.27-.18-.538-.282-.802.09-.269.18-.537.282-.805zm-9.77-.02c-.96-.04-1.846-.154-2.65-.334-.784-.181-1.22-.372-1.284-.716-.04-.28.153-.621.762-1.072.8-.591 2.168-1.162 3.884-1.61.28-.07.568-.132.856-.194.54 1.134.956 2.25 1.14 3.272.144.505.24.983.428 1.654zm17.308-.154c.96.04 1.846.154 2.65.334.784.181 1.22.372 1.284.716.04.28-.153.621-.762 1.072-.8.591-2.168 1.162-3.884 1.61-.28.07-.568.132-.856.194.54-1.134.956-2.25 1.14-3.272.144-.505.24-.983.428-1.654zm-9.293 5.569c-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868C8.662 7.69 9.4 7.655 10.14 7.655c.74 0 1.477.035 2.202.093.406.582.802 1.204 1.183 1.86.372.64.71 1.29 1.018 1.946-.303.657-.646 1.313-1.013 1.954-.38.66-.773 1.286-1.18 1.868-.728.064-1.466.099-2.21.099zm-3.635-.154c-.455-.468-.91-.992-1.36-1.564.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.096-1.345 1.565zM12 15.9c-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.308-.655.646-1.31 1.013-1.95.38-.66.773-1.288 1.18-1.87.728-.063 1.466-.098 2.21-.098.74 0 1.477.035 2.202.093.406.582.802 1.204 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098zm3.635-.154c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM17.57 17.584c.112.49.195.964.254 1.42.23 1.868-.054 3.32-.714 3.707-.19.09-.4.167-.563.132-1.012 0-2.514-.808-4.11-2.28.686-.72 1.37-1.537 2.02-2.442 1.107-.117 2.154-.298 3.113-.538zm-11.14.02c.96.236 2.006.417 3.107.534.66.905 1.345 1.727 2.035 2.447-1.592 1.48-3.087 2.292-4.105 2.295-.225 0-.406-.044-.558-.127-.666-.382-.955-1.835-.73-3.704.054-.46.142-.945.25-1.44z"/>
    </svg>
  ),
  FaNodeJs: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
    </svg>
  ),
  FaLinux: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.504 0C5.683 0 0.268 5.415 0.268 12.235c0 6.82 5.415 12.235 12.236 12.235c6.82 0 12.235-5.415 12.235-12.235C24.739 5.415 19.324 0 12.504 0zM7.018 4.306c.265 0 .48.215.48.48s-.215.48-.48.48s-.48-.215-.48-.48S6.753 4.306 7.018 4.306zM17.986 4.306c.265 0 .48.215.48.48s-.215.48-.48.48s-.48-.215-.48-.48S17.721 4.306 17.986 4.306zM12.504 7.018c3.315 0 6.002 2.687 6.002 6.002s-2.687 6.002-6.002 6.002s-6.002-2.687-6.002-6.002S9.189 7.018 12.504 7.018z"/>
    </svg>
  ),
  FaChartLine: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  FaNetworkWired: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v4.396a2 2 0 010 3.208V16h1a2 2 0 012 2v.5a1.5 1.5 0 01-3 0V18a1 1 0 00-1-1H9.618a2 2 0 01-1.236-.428l-1.764-1.382a2 2 0 00-2.236 0l-1.764 1.382A2 2 0 012.382 18H1a1 1 0 00-1 1v.5a1.5 1.5 0 003 0V18a2 2 0 012 2h1v-.396a2 2 0 010-3.208V11H5a1 1 0 00-1 1v5.5a1.5 1.5 0 01-3 0V9a2 2 0 012-2h1V5a2 2 0 012-2h8a2 2 0 012 2v2z"/>
    </svg>
  ),
  FaSearch: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  ),
  FaBug: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6.72 5.66l.001-.004A5.002 5.002 0 0110 4a5 5 0 013.28 1.656c-.001.001-.002.002-.001.004l-.003.001A1 1 0 0114 6c0 .057-.006.112-.016.166a5.001 5.001 0 011.005 1.506 1 1 0 001.921-.537A7 7 0 0010 2a7 7 0 00-6.91 5.135 1 1 0 101.921.537A5.001 5.001 0 016.016 6.166 1.003 1.003 0 006 6a1 1 0 00.72-.34zM3.5 9.5a1.5 1.5 0 113 0v7a1.5 1.5 0 11-3 0v-7zm10 0a1.5 1.5 0 113 0v7a1.5 1.5 0 11-3 0v-7zM10 15a3 3 0 11-6 0 3 3 0 016 0zm6-6a1 1 0 00-1 1v1a1 1 0 11-2 0v-1a3 3 0 00-3-3H8a3 3 0 00-3 3v1a1 1 0 11-2 0v-1a1 1 0 00-1-1H1a1 1 0 100 2h1v7a3 3 0 003 3h2v-2H5a1 1 0 01-1-1v-7h1a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1v7a1 1 0 01-1 1h-2v2h2a3 3 0 003-3v-7h1a1 1 0 100-2h-1z" clipRule="evenodd" />
    </svg>
  )
};

export function ResumeSection() {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('experience');

  const renderExperienceContent = () => (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        {t('my_experience', 'My experience', 'Mi experiencia')}
      </h2>
      <p className="text-gray-400 mb-12">
        {t('experience_desc', 
          'Professional journey focused on cybersecurity, software development, and technical leadership roles.',
          'Trayectoria profesional enfocada en ciberseguridad, desarrollo de software y roles de liderazgo técnico.'
        )}
      </p>
      
      <div className="space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="timeline-item pl-8 border-l-4 border-cyber-green">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title[language]}
                </h3>
                <p className="cyber-green font-medium">
                  {exp.company[language]}
                </p>
              </div>
              <div className="text-gray-400 font-medium lg:text-right">
                {exp.duration}
              </div>
            </div>
            <ul className="text-gray-300 space-y-2">
              {exp.description[language].map((item, itemIndex) => (
                <li key={itemIndex}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEducationContent = () => (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        {t('my_education', 'My education', 'Mi educación')}
      </h2>
      <p className="text-gray-400 mb-12">
        {t('education_desc', 
          'Academic foundation in software engineering and specialized cybersecurity training.',
          'Base académica en ingeniería de software y formación especializada en ciberseguridad.'
        )}
      </p>
      
      <div className="space-y-8">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="timeline-item pl-8 border-l-4 border-cyber-green">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.title[language]}
                </h3>
                <p className="cyber-green font-medium">
                  {edu.institution[language]}
                </p>
              </div>
              <div className="text-gray-400 font-medium lg:text-right">
                {edu.duration}
              </div>
            </div>
            <p className="text-gray-300">
              {edu.description[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSkillsContent = () => (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        {t('my_skills', 'My skills', 'Mis habilidades')}
      </h2>
      <p className="text-gray-400 mb-12">
        {t('skills_desc', 
          'Technical expertise spanning cybersecurity tools, programming languages, and security frameworks.',
          'Experiencia técnica que abarca herramientas de ciberseguridad, lenguajes de programación y marcos de seguridad.'
        )}
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {portfolioData.skills.map((skill, index) => {
          const IconComponent = skillIcons[skill.icon as keyof typeof skillIcons];
          
          return (
            <div key={index} className="text-center skill-icon">
              <div className="w-20 h-20 bg-dark-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className={skill.color}>
                  <IconComponent />
                </div>
              </div>
              <p className="font-medium">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderAboutContent = () => (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        {t('about_me', 'About me', 'Acerca de mí')}
      </h2>
      <p className="text-gray-400 mb-12">
        {t('about_desc', 
          'Personal information and professional overview.',
          'Información personal y descripción profesional.'
        )}
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Personal Info */}
        <div className="space-y-6">
          <div className="flex">
            <span className="text-gray-400 w-24">
              {t('name', 'Name', 'Nombre')}
            </span>
            <span className="text-white font-medium">{portfolioData.name}</span>
          </div>
          <div className="flex">
            <span className="text-gray-400 w-24">
              {t('phone', 'Phone', 'Teléfono')}
            </span>
            <span className="text-white font-medium">{portfolioData.contactInfo.phone}</span>
          </div>
          <div className="flex">
            <span className="text-gray-400 w-24">
              {t('experience', 'Experience', 'Experiencia')}
            </span>
            <span className="text-white font-medium">
              {t('years_exp', `${portfolioData.stats.experienceYears}+ Years`, `${portfolioData.stats.experienceYears}+ Años`)}
            </span>
          </div>
          <div className="flex">
            <span className="text-gray-400 w-24">
              {t('nationality', 'Nationality', 'Nacionalidad')}
            </span>
            <span className="text-white font-medium">
              {t('colombian', portfolioData.contactInfo.nationality, 'Colombiano')}
            </span>
          </div>
          <div className="flex">
            <span className="text-gray-400 w-24">
              {t('email', 'Email', 'Correo')}
            </span>
            <span className="text-white font-medium">{portfolioData.contactInfo.email}</span>
          </div>
          <div className="flex">
            <span className="text-gray-400 w-24">
              {t('freelance', 'Freelance', 'Freelance')}
            </span>
            <span className="cyber-green font-medium">
              {t('available', portfolioData.contactInfo.freelanceStatus, 'Disponible')}
            </span>
          </div>
          <div className="flex">
            <span className="text-gray-400 w-24">
              {t('languages', 'Languages', 'Idiomas')}
            </span>
            <span className="text-white font-medium">
              {portfolioData.contactInfo.languages[language]}
            </span>
          </div>
        </div>
        
        {/* Professional Description */}
        <div>
          <p className="text-gray-300 leading-relaxed">
            {portfolioData.aboutMe[language]}
          </p>
        </div>
      </div>
    </div>
  );

  const sections = [
    { id: 'experience', label: { en: 'Experience', es: 'Experiencia' }, content: renderExperienceContent },
    { id: 'education', label: { en: 'Education', es: 'Educación' }, content: renderEducationContent },
    { id: 'skills', label: { en: 'Skills', es: 'Habilidades' }, content: renderSkillsContent },
    { id: 'about', label: { en: 'About me', es: 'Acerca de mí' }, content: renderAboutContent }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="space-y-2 sticky top-24">
              {sections.map(section => (
                <Button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === section.id
                      ? 'bg-cyber-green text-dark-bg'
                      : 'bg-dark-secondary text-white hover:bg-dark-border'
                  }`}
                  variant="ghost"
                >
                  {section.label[language]}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Right Content Area */}
          <div className="lg:w-3/4">
            {sections.find(section => section.id === activeSection)?.content()}
          </div>
        </div>
      </div>
    </section>
  );
}
