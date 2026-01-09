import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@univernum.fr",
      description: "Notre équipe vous répond sous 24h"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      description: "Du lundi au vendredi, 9h-18h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "123 Avenue de l'Innovation",
      description: "75001 Paris, France"
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Chat en direct",
      description: "Discutez avec nos conseillers pédagogiques",
      action: "Démarrer le chat",
      available: true
    },
    {
      icon: Users,
      title: "Rendez-vous personnalisé",
      description: "Planifiez un entretien avec un expert",
      action: "Prendre RDV",
      available: true
    },
    {
      icon: Clock,
      title: "Webinaire d'information",
      description: "Participez à nos sessions d'information",
      action: "S'inscrire",
      available: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos conseillers pédagogiques sont là pour vous accompagner dans votre 
            projet de formation. N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <p className="text-gray-600">
                  Remplissez ce formulaire et nous vous recontacterons rapidement.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Prénom *
                    </label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Nom *
                    </label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <Input type="email" placeholder="votre.email@exemple.fr" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <Input placeholder="+33 6 12 34 56 78" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Programme d'intérêt
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#D9D8D5] focus:border-transparent">
                    <option value="">Sélectionnez un programme</option>
                    <option value="web-dev">Développement Web Full-Stack</option>
                    <option value="data-science">Data Science & IA</option>
                    <option value="marketing">Marketing Digital</option>
                    <option value="cybersecurity">Cybersécurité</option>
                    <option value="ux-ui">Design UX/UI</option>
                    <option value="project-mgmt">Gestion de Projet Agile</option>
                    <option value="other">Autre / Je ne sais pas encore</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Décrivez votre projet et vos objectifs de formation..."
                    rows={4}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="mt-1 h-4 w-4 text-[#12283E] border-gray-300 rounded focus:ring-[#D9D8D5]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte d'être recontacté(e) par UniverNum concernant ma demande 
                    et je consens au traitement de mes données personnelles. *
                  </label>
                </div>

                <Button size="lg" className="w-full bg-[#D9D8D5] text-[#12283E] hover:bg-[#12283E] hover:text-white">
                  Envoyer ma demande
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Support */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-[#D9D8D5] rounded-sm flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-[#12283E]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-900 font-medium">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle>Autres options de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportOptions.map((option, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-sm hover:border-[#D9D8D5] transition-colors">
                    <div className="flex items-start gap-3">
                      <option.icon className="w-5 h-5 text-[#12283E] mt-1 shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{option.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          disabled={!option.available}
                        >
                          {option.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Vous avez des questions ?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Consultez notre FAQ pour trouver des réponses immédiates aux questions les plus fréquentes.
                </p>
                <Button variant="outline" size="sm">
                  Voir la FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}