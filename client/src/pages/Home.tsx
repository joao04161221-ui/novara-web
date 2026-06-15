import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { VideoCard } from "@/components/VideoCard";
import { DynamicBackground } from "@/components/DynamicBackground";
import { Rocket, Star, MessageCircle, Phone, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

/**
 * NOVARA - Presença Digital
 * Design: Dark theme with bright blue accents
 * Typography: Poppins for headings, Inter for body
 * Animations: Smooth fade-in, scale, and slide effects
 * Responsive: PC - Grid layout, Mobile - Netflix horizontal scroll
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    { id: 1, title: "Projeto 1", description: "Seu primeiro projeto" },
    { id: 2, title: "Projeto 2", description: "Seu segundo projeto" },
    { id: 3, title: "Projeto 3", description: "Seu terceiro projeto" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Juliana M.",
      company: "Loja de Óculos",
      text: "Salvou meu negócio!",
      fullText: "O site trouze mais credibilidade e novos clientes todos os dias.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos A.",
      company: "Restaurante",
      text: "Atendimento rápido e profissional!",
      fullText: "Entregaram exatamente o que eu precisava e no prazo combinado.",
      rating: 5,
    },
    {
      id: 3,
      name: "Fernanda S.",
      company: "Clínica Médica",
      text: "Site perfeito, superou minhas expectativas!",
      fullText: "Moderno, rápido e fácil de usar. Recomendo!",
      rating: 5,
    },
  ];

  const contacts = [
    {
      id: 1,
      platform: "WhatsApp",
      handle: "Fale conosco",
      link: "https://wa.me/5532984209482",
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540178057/54aaHojStA3aejX8wPynvc/whatsapp-icon-3yRkXm2Qkn27Pgc9TgPDuc.webp",
    },
    {
      id: 2,
      platform: "Instagram",
      handle: "@novara.web",
      link: "https://instagram.com/novara.web",
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540178057/54aaHojStA3aejX8wPynvc/instagram-icon-clean-4bZZGG8dzRQChEfxpuVqo6.webp",
    },
    {
      id: 3,
      platform: "Facebook",
      handle: "/novara.web",
      link: "https://facebook.com/novara.web",
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540178057/54aaHojStA3aejX8wPynvc/facebook-icon-clean-D5J38JSPsvqjZgwcgNocKV.webp",
    },
  ];

  const handleQuoteRequest = () => {
    const phoneNumber = "5532984209482"; // Número real do João
    const message = encodeURIComponent("Olá! Vi o site da Novara e gostaria de solicitar um orçamento para o meu projeto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    toast.success("Abrindo WhatsApp para orçamento...", {
      duration: 2000,
    });
  };

  const handleContactClick = (platform: string, link: string) => {
    window.open(link, "_blank");
    toast.success(`Abrindo ${platform}...`, { duration: 2000 });
  };

  const handleVideoUpload = (projectId: number, file: File) => {
    toast.success(`Vídeo adicionado ao projeto ${projectId}!`, {
      duration: 2000,
    });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark relative">
      {/* Dynamic Background */}
      <DynamicBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-card/80 backdrop-blur-md border-b border-border"
              : "bg-transparent"
          }`}
        >
          <div className="container flex items-center justify-between py-3 md:py-4">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 md:gap-3 animate-fade-in-up hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540178057/54aaHojStA3aejX8wPynvc/novara-logo-clean-Nsvxya3Kiqm6zp4phaVkN6.webp"
                alt="Logo NOVARA - Especialista em Presença Digital"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="font-display text-lg md:text-xl text-primary hidden sm:inline">
                NOVARA
              </span>
            </button>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#projects"
                className="text-sm font-body hover:text-primary transition-colors duration-200"
              >
                Projetos
              </a>
              <a
                href="#testimonials"
                className="text-sm font-body hover:text-primary transition-colors duration-200"
              >
                Depoimentos
              </a>
              <a
                href="#contact"
                className="text-sm font-body hover:text-primary transition-colors duration-200"
              >
                Contato
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-0 min-h-[70vh] md:min-h-screen flex items-center justify-center">
          <div className="container relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-7xl text-primary mb-4 md:mb-6 animate-fade-in-up">
              NOVARA
            </h1>
            <p className="font-body text-base md:text-2xl text-foreground/90 mb-3 md:mb-4 animate-fade-in-up">
              Sua presença digital começa aqui.
            </p>
            <p className="font-body text-sm md:text-lg text-foreground/70 mb-8 md:mb-12 animate-fade-in-up">
              Criamos sites modernos, rápidos e estratégicos para transformar
              visitantes em clientes.
            </p>
            <div className="animate-fade-in-up">
              <Button 
                onClick={handleQuoteRequest}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-heading px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
              >
                FAÇA O SEU ORÇAMENTO
              </Button>
            </div>


          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 px-4 md:px-0 bg-card/30">
          <div className="container max-w-6xl mx-auto">
            <div className="mb-8 md:mb-12 animate-fade-in-up text-center">
              <h2 className="font-display text-2xl md:text-4xl text-primary">
                PROJETOS REALIZADOS
              </h2>
            </div>

            {/* Desktop Grid - 3 Columns */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <VideoCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    onVideoUpload={(file) =>
                      handleVideoUpload(project.id, file)
                    }
                  />
                </div>
              ))}
            </div>

            {/* Mobile Netflix-Style Grid - Rectangular Cards */}
            <div className="md:hidden grid grid-cols-3 gap-2">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <VideoCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    onVideoUpload={(file) =>
                      handleVideoUpload(project.id, file)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-20 px-4 md:px-0">
          <div className="container max-w-6xl mx-auto">
            <div className="mb-8 md:mb-12 animate-fade-in-up">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <h2 className="font-display text-2xl md:text-4xl text-primary">
                  AVALIAÇÕES
                </h2>
              </div>
            </div>

            {/* Desktop Grid - 3 Columns */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className="border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 animate-fade-in-up bg-card/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-5">
                    <div className="flex gap-1 mb-3 items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                      <span className="text-xs text-foreground/50 ml-1">5.0</span>
                    </div>
                    <p className="font-heading text-base text-primary mb-2 italic line-clamp-3">
                      "{testimonial.text}"
                    </p>
                    <p className="font-body text-xs text-foreground/60 mb-4 line-clamp-2">
                      {testimonial.fullText}
                    </p>
                    <div className="flex items-center gap-2 pt-3">
                      <Users className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-heading text-xs text-foreground truncate">
                          {testimonial.name}
                        </p>
                        <p className="font-body text-xs text-foreground/50 truncate">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile - Vertical Stack Testimonials */}
            <div className="md:hidden space-y-3">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="border-2 border-primary/30 rounded-lg p-3 hover:border-primary/60 transition-all duration-300 animate-fade-in-up bg-card/30"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex gap-1 mb-2 items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-primary text-primary"
                        />
                      ))}
                      <span className="text-xs text-foreground/50 ml-1">5.0</span>
                    </div>
                    <p className="font-heading text-xs text-primary mb-1 italic line-clamp-2">
                      "{testimonial.text}"
                    </p>
                    <p className="font-body text-xs text-foreground/60 mb-2 line-clamp-1">
                      {testimonial.fullText}
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <Users className="w-3 h-3 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-heading text-xs text-foreground truncate">
                          {testimonial.name}
                        </p>
                        <p className="font-body text-xs text-foreground/50 truncate">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 px-4 md:px-0 bg-card/30">
          <div className="container max-w-6xl mx-auto">
            <div className="mb-8 md:mb-12 animate-fade-in-up">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <h2 className="font-display text-2xl md:text-4xl text-primary">
                  ENTRE EM CONTATO
                </h2>
              </div>
            </div>

            {/* Desktop Grid - 3 Columns */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-8">
              {contacts.map((contact, index) => (
                <Card
                  key={contact.id}
                  className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleContactClick(contact.platform, contact.link)}
                >
                  <div className="p-8 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 text-primary">
                      <img
                        src={contact.icon}
                        alt={`Ícone de contato via ${contact.platform}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-heading text-xl text-primary mb-2">
                      {contact.platform}
                    </h3>
                    <p className="font-body text-base text-foreground/70">
                      {contact.handle}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile - Horizontal Icons */}
            <div className="md:hidden flex justify-center gap-4 pb-4">
              {contacts.map((contact, index) => (
                <button
                  key={contact.id}
                  onClick={() => handleContactClick(contact.platform, contact.link)}
                  className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-card border border-border/50 hover:border-primary/50 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
                    <img
                      src={contact.icon}
                      alt={contact.platform}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="font-body text-xs text-foreground/70 text-center hidden">
                    {contact.platform}
                  </span>
                </button>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl md:rounded-2xl p-6 md:p-12 text-center animate-fade-in-up mt-8 md:mt-16">
              <Rocket className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="font-display text-xl md:text-3xl text-primary mb-2 md:mb-4">
                Seu negócio merece um site{" "}
                <span className="text-primary">que vende.</span>
              </h3>
              <p className="font-body text-base md:text-lg text-foreground/70">
                Sites profissionais entregues em até{" "}
                <span className="font-heading text-primary">7 dias.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card/50 border-t border-border/30 py-6 md:py-8 px-4 md:px-0">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540178057/54aaHojStA3aejX8wPynvc/novara-logo-clean-Nsvxya3Kiqm6zp4phaVkN6.webp"
                  alt="NOVARA"
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
                <span className="font-display text-base md:text-lg text-primary">
                  NOVARA
                </span>
              </div>
              <p className="font-body text-xs md:text-sm text-foreground/60 text-center md:text-left">
                © 2026 NOVARA. Todos os direitos reservados.
              </p>
              <div className="flex gap-4 md:gap-5">
                <a
                  href="https://instagram.com/novara.web"
                  className="text-foreground/60 hover:text-primary transition-colors duration-200 w-6 h-6 md:w-7 md:h-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/novara.web"
                  className="text-foreground/60 hover:text-primary transition-colors duration-200 w-6 h-6 md:w-7 md:h-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
