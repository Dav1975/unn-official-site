import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { title: "Accueil", href: "#accueil" },
    { title: "À Propos", href: "#apropos" },
    { title: "Programmes", href: "#programmes" },
    { title: "Témoignages", href: "#temoignages" },
    { title: "Contact", href: "#contact" }
  ];

  const programs = [
    { title: "Développement Web", href: "#" },
    { title: "Data Science & IA", href: "#" },
    { title: "Marketing Digital", href: "#" },
    { title: "Cybersécurité", href: "#" },
    { title: "Design UX/UI", href: "#" },
    { title: "Gestion de Projet", href: "#" }
  ];

  const resources = [
    { title: "Blog", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "Support", href: "#" },
    { title: "Carrières", href: "#" },
    { title: "Partenaires", href: "#" },
    { title: "Actualités", href: "#" }
  ];

  const legal = [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions d'utilisation", href: "#" },
    { title: "Cookies", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Restez informé de nos actualités
              </h3>
              <p className="text-blue-100">
                Recevez nos dernières nouvelles, conseils et offres spéciales directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <Input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="bg-white text-gray-900 border-0 h-12"
                />
              </div>
              <Button variant="secondary" size="lg" className="px-8">
                <Mail className="w-4 h-4 mr-2" />
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">UniverNum</h2>
              <p className="text-gray-300 leading-relaxed">
                L'université numérique de référence qui forme les professionnels 
                de demain aux métiers du digital. Excellence académique et innovation 
                technologique au service de votre réussite.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Suivez-nous</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-gray-300">
                <strong>Email:</strong> contact@univernum.fr
              </div>
              <div className="text-gray-300">
                <strong>Téléphone:</strong> +33 1 23 45 67 89
              </div>
              <div className="text-gray-300">
                <strong>Adresse:</strong> 123 Avenue de l'Innovation, 75001 Paris
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-6">Programmes</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {program.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-6">Ressources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 UniverNum. Tous droits réservés.
          </div>
          
          <div className="flex flex-wrap gap-6">
            {legal.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}