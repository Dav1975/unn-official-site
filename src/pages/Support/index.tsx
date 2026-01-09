import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Badge } from "../../components/ui/badge";
import { HelpCircle, MessageCircle, Phone, Mail, Clock, Search, User, BookOpen, Settings, Wifi } from "lucide-react";
import { useState } from "react";

export function SupportSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqItems = [
    {
      category: "Connexion & Accès",
      questions: [
        {
          q: "Comment me connecter à la plateforme Moodle ?",
          r: "Utilisez votre adresse email universitaire et le mot de passe fourni lors de votre inscription. Si vous avez oublié votre mot de passe, cliquez sur 'Mot de passe oublié' sur la page de connexion."
        },
        {
          q: "Que faire si je n'arrive pas à me connecter ?",
          r: "Vérifiez d'abord que votre adresse email et mot de passe sont corrects. Si le problème persiste, contactez le support technique au +33 1 23 45 67 89 ou par email à support@universite-numerique.fr."
        },
        {
          q: "Puis-je accéder aux cours depuis mon téléphone ?",
          r: "Oui, notre plateforme est entièrement responsive et nous avons également une application mobile Moodle disponible sur iOS et Android."
        }
      ]
    },
    {
      category: "Cours & Contenus",
      questions: [
        {
          q: "Comment télécharger les ressources de cours ?",
          r: "Dans chaque cours, cliquez sur le nom du fichier que vous souhaitez télécharger. Le téléchargement se lancera automatiquement. Vous pouvez aussi télécharger tous les fichiers d'un cours en une fois."
        },
        {
          q: "Les cours sont-ils accessibles 24h/24 ?",
          r: "Oui, tous les contenus de cours sont disponibles 24h/24 et 7j/7. Vous pouvez étudier à votre rythme selon votre emploi du temps."
        },
        {
          q: "Comment rattraper un cours manqué ?",
          r: "Tous les cours en direct sont enregistrés et disponibles en replay dans votre espace étudiant sous 24h. Vous trouverez également tous les supports et exercices associés."
        }
      ]
    },
    {
      category: "Évaluations & Notes",
      questions: [
        {
          q: "Comment consulter mes notes ?",
          r: "Vos notes sont disponibles dans l'onglet 'Notes' de votre tableau de bord. Elles sont mises à jour automatiquement après chaque évaluation."
        },
        {
          q: "Puis-je repasser un quiz raté ?",
          r: "Cela dépend de la configuration du quiz par votre enseignant. Certains quiz permettent plusieurs tentatives. Consultez les instructions spécifiques de chaque évaluation."
        },
        {
          q: "Comment contester une note ?",
          r: "Contactez directement votre enseignant via la messagerie interne ou par email. Si le problème persiste, vous pouvez saisir l'administration pédagogique."
        }
      ]
    },
    {
      category: "Technique",
      questions: [
        {
          q: "Quels navigateurs sont recommandés ?",
          r: "Nous recommandons Chrome, Firefox, Safari ou Edge dans leurs versions récentes. Assurez-vous que JavaScript est activé et que votre navigateur est à jour."
        },
        {
          q: "Que faire en cas de problème technique pendant un examen ?",
          r: "Contactez immédiatement le support technique au +33 1 23 45 67 89. Prenez une capture d'écran du problème et notez l'heure exacte pour faciliter le diagnostic."
        },
        {
          q: "Comment signaler un bug ou dysfonctionnement ?",
          r: "Utilisez le formulaire de contact ci-dessous ou envoyez un email détaillé à support@universite-numerique.fr avec une description précise du problème et des captures d'écran si possible."
        }
      ]
    }
  ];

  const canaux = [
    {
      icone: MessageCircle,
      titre: "Chat en Direct",
      description: "Support instantané 24/7",
      disponibilite: "Toujours disponible",
      action: "Démarrer le chat",
      couleur: "bg-green-500"
    },
    {
      icone: Phone,
      titre: "Support Téléphonique",
      description: "+33 1 23 45 67 89",
      disponibilite: "Lun-Ven 8h-20h",
      action: "Appeler maintenant",
      couleur: "bg-amber-600"
    },
    {
      icone: Mail,
      titre: "Email Support",
      description: "support@universite-numerique.fr",
      disponibilite: "Réponse sous 4h",
      action: "Envoyer un email",
      couleur: "bg-slate-600"
    },
    {
      icone: BookOpen,
      titre: "Base de Connaissances",
      description: "Guides et tutoriels",
      disponibilite: "Accès libre",
      action: "Consulter",
      couleur: "bg-blue-600"
    }
  ];

  const statsSupport = [
    { label: "Temps de réponse moyen", valeur: "< 2h" },
    { label: "Taux de résolution", valeur: "98%" },
    { label: "Satisfaction client", valeur: "4.9/5" },
    { label: "Disponibilité", valeur: "24/7" }
  ];

  const filteredFAQ = faqItems.map(category => ({
    ...category,
    questions: category.questions.filter(item => 
      searchQuery === "" || 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.r.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Support & Assistance</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Notre équipe de support est là pour vous accompagner dans votre parcours d'apprentissage
          </p>
        </div>

        {/* Statistiques du support */}
        <div className="mb-16">
          <Card className="p-8 border-0 shadow-lg bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statsSupport.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-[#12283E] mb-2">{stat.valeur}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Questions Fréquentes</h3>
              
              {/* Barre de recherche */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Rechercher dans la FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {filteredFAQ.length > 0 ? (
                <div className="space-y-6">
                  {filteredFAQ.map((category, categoryIndex) => (
                    <Card key={categoryIndex} className="border-0 shadow-lg bg-white">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <Badge variant="secondary" className="bg-[#D9D8D5] text-[#12283E] hover:bg-[#D9D8D5]">
                            {category.category}
                          </Badge>
                          <span className="ml-2 text-sm text-slate-600">
                            {category.questions.length} question{category.questions.length > 1 ? 's' : ''}
                          </span>
                        </div>
                        
                        <Accordion type="single" collapsible>
                          {category.questions.map((item, index) => (
                            <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                              <AccordionTrigger className="text-left hover:text-[#12283E]">
                                {item.q}
                              </AccordionTrigger>
                              <AccordionContent className="text-slate-600 leading-relaxed">
                                {item.r}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center border-0 shadow-lg bg-white">
                  <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">Aucune question trouvée pour "{searchQuery}"</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Afficher toutes les questions
                  </Button>
                </Card>
              )}
            </div>
          </div>

          {/* Canaux de support */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Contactez-nous</h3>
            
            <div className="grid gap-6 mb-8">
              {canaux.map((canal, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 ${canal.couleur} rounded-sm flex items-center justify-center mr-4 shrink-0`}>
                      <canal.icone className="w-6 h-6 text-[#12283E]" />
                    </div>
                    <div className="grow">
                      <h4 className="text-lg font-bold text-slate-800 mb-1">{canal.titre}</h4>
                      <p className="text-slate-600 mb-2">{canal.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {canal.disponibilite}
                        </span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:bg-[#D9D8D5]"
                        >
                          {canal.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Formulaire de contact */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <h4 className="text-xl font-bold text-slate-800 mb-6">Formulaire de Contact</h4>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nom">Nom complet</Label>
                    <Input
                      id="nom"
                      placeholder="Votre nom"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="sujet">Sujet</Label>
                  <Input
                    id="sujet"
                    placeholder="Objet de votre demande"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre problème ou question en détail..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#D9D8D5] hover:bg-[#12283E] text-[#12283E] hover:text-white"
                  size="lg"
                >
                  Envoyer le message
                </Button>
              </form>
            </Card>

            {/* Assistance technique spécialisée */}
            <Card className="mt-8 p-6 border-0 shadow-lg bg-gray-50">
              <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-[#12283E]" />
                Assistance Technique Spécialisée
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-sm">
                  <div className="flex items-center">
                    <Wifi className="w-5 h-5 text-slate-600 mr-3" />
                    <span className="text-slate-700">Problèmes de connexion</span>
                  </div>
                  <Button size="sm" variant="outline">Diagnostic</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-sm">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-slate-600 mr-3" />
                    <span className="text-slate-700">Problèmes avec Moodle</span>
                  </div>
                  <Button size="sm" variant="outline">Guide Moodle</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-sm">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-slate-600 mr-3" />
                    <span className="text-slate-700">Gestion de compte</span>
                  </div>
                  <Button size="sm" variant="outline">Mon Compte</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}