import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: t('message_sent', 'Message sent successfully!', '¡Mensaje enviado exitosamente!'),
      description: t('message_sent_desc', 
        'Thank you for your message. I will get back to you soon.',
        'Gracias por tu mensaje. Te responderé pronto.'
      ),
    });

    setIsSubmitting(false);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t('lets_work_together', "Let's work together", 'Trabajemos juntos')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('contact_desc', 
              "Ready to secure your digital assets or build your next software solution? Let's discuss how I can help protect and enhance your technology infrastructure.",
              '¿Listo para asegurar sus activos digitales o construir su próxima solución de software? Hablemos sobre cómo puedo ayudar a proteger y mejorar su infraestructura tecnológica.'
            )}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder={t('first_name', 'First name', 'Nombre')}
                  className="bg-dark-secondary border-dark-border text-white placeholder-gray-400 focus:border-cyber-green"
                  required
                />
                <Input
                  type="text"
                  placeholder={t('last_name', 'Last name', 'Apellido')}
                  className="bg-dark-secondary border-dark-border text-white placeholder-gray-400 focus:border-cyber-green"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="email"
                  placeholder={t('email_address', 'Email address', 'Dirección de correo')}
                  className="bg-dark-secondary border-dark-border text-white placeholder-gray-400 focus:border-cyber-green"
                  required
                />
                <Input
                  type="tel"
                  placeholder={t('phone_number', 'Phone number', 'Número de teléfono')}
                  className="bg-dark-secondary border-dark-border text-white placeholder-gray-400 focus:border-cyber-green"
                />
              </div>
              <Select>
                <SelectTrigger className="bg-dark-secondary border-dark-border text-white focus:border-cyber-green">
                  <SelectValue placeholder={t('select_service', 'Select a service', 'Seleccionar un servicio')} />
                </SelectTrigger>
                <SelectContent className="bg-dark-secondary border-dark-border">
                  <SelectItem value="cybersecurity" className="text-white hover:bg-dark-border">
                    {t('cybersecurity_analysis', 'Cybersecurity Analysis', 'Análisis de Ciberseguridad')}
                  </SelectItem>
                  <SelectItem value="java" className="text-white hover:bg-dark-border">
                    {t('java_development', 'Java Development', 'Desarrollo en Java')}
                  </SelectItem>
                  <SelectItem value="software" className="text-white hover:bg-dark-border">
                    {t('software_development', 'Software Development', 'Desarrollo de Software')}
                  </SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                rows={5}
                placeholder={t('type_message', 'Type your message here...', 'Escribe tu mensaje aquí...')}
                className="bg-dark-secondary border-dark-border text-white placeholder-gray-400 focus:border-cyber-green resize-none"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-cyber-green text-dark-bg hover:bg-green-400 font-semibold"
              >
                {isSubmitting 
                  ? t('sending', 'Sending...', 'Enviando...') 
                  : t('send_message', 'Send message', 'Enviar mensaje')
                }
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">
                  {t('phone', 'Phone', 'Teléfono')}
                </p>
                <p className="text-white font-medium">{portfolioData.contactInfo.phone}</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">
                  {t('email', 'Email', 'Correo')}
                </p>
                <p className="text-white font-medium">{portfolioData.contactInfo.email}</p>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">
                  {t('address', 'Address', 'Dirección')}
                </p>
                <p className="text-white font-medium">{portfolioData.contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
