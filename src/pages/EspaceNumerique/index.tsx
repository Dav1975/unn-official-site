import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { ExternalLink, BookOpen, Users, Calendar, MessageSquare, FileText, Video, Settings, Lock, Monitor } from "lucide-react";
import { useState } from "react";

export function EspaceNumeriqueSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fonctionnalitesMoodle = [
    {
      icone: BookOpen,
      titre: "Cours Interactifs",
      description: "Accédez à tous vos cours avec contenus multimédias, quiz et exercices pratiques"
    },
    {
      icone: Calendar,
      titre: "Planning & Calendrier",
      description: "Consultez vos emplois du temps, échéances et événements académiques"
    },
    {
      icone: Users,
      titre: "Collaboration",
      description: "Travaillez en équipe avec vos camarades sur des projets collaboratifs"
    },
    {
      icone: MessageSquare,
      titre: "Forums & Discussions",
      description: "Échangez avec vos enseignants et autres étudiants dans les forums dédiés"
    },
    {
      icone: FileText,
      titre: "Ressources Pédagogiques",
      description: "Téléchargez tous vos supports de cours, documents et ressources complémentaires"
    },
    {
      icone: Video,
      titre: "Classes Virtuelles",
      description: "Participez aux webinaires et cours en direct avec vos professeurs"
    }
  ];

  const statistiquesUtilisation = [
    { label: "Cours disponibles", valeur: "150+" },
    { label: "Étudiants actifs", valeur: "5,000+" },
    { label: "Enseignants", valeur: "200+" },
    { label: "Ressources", valeur: "10,000+" }
  ];

  return (
    <section id="espace-numerique" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Espace Numérique</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Votre portail d'apprentissage numérique powered by Moodle - Accédez à tous vos cours, ressources et outils pédagogiques
          </p>
        </div>

        {/* Statistiques d'utilisation */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-sm p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statistiquesUtilisation.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-amber-400 mb-2">{stat.valeur}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Section de connexion */}
          <div>
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Connexion à Moodle</h3>
                <p className="text-slate-600">Accédez à votre espace d'apprentissage personnalisé</p>
              </div>

              <form className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-slate-700">Adresse email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@universite-numerique.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-slate-700">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
                  size="lg"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Se connecter à Moodle
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600 mb-4">
                  Vous n'avez pas encore de compte ?
                </p>
                <Button 
                  variant="outline" 
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Créer un compte étudiant
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-200">
                <Button 
                  variant="outline" 
                  className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Accès direct à Moodle
                </Button>
              </div>
            </Card>

            {/* Aide et support */}
            <Card className="mt-8 p-6 border-0 shadow-lg">
              <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-slate-600" />
                Aide & Support Technique
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Guide de première connexion disponible
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Support technique 24/7 par chat
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Tutoriels vidéo pour débuter
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  FAQ complète disponible
                </li>
              </ul>
            </Card>
          </div>

          {/* Fonctionnalités de Moodle */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8">Fonctionnalités de la Plateforme</h3>
            
            <div className="grid gap-6">
              {fonctionnalitesMoodle.map((fonctionnalite, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                      <fonctionnalite.icone className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2">{fonctionnalite.titre}</h4>
                      <p className="text-slate-600">{fonctionnalite.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Avantages de Moodle */}
            <Card className="mt-8 p-8 border-0 shadow-lg bg-gray-50">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">Pourquoi Moodle ?</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-slate-800 mb-3">✓ Plateforme Leader</h5>
                  <p className="text-slate-600 text-sm">
                    Utilisée par plus de 300 millions d'utilisateurs dans le monde
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-3">✓ Sécurité Maximale</h5>
                  <p className="text-slate-600 text-sm">
                    Conformité RGPD et sécurité des données étudiantes
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-3">✓ Mobile First</h5>
                  <p className="text-slate-600 text-sm">
                    Application mobile pour apprendre partout, tout le temps
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-3">✓ Personnalisable</h5>
                  <p className="text-slate-600 text-sm">
                    Interface adaptée aux besoins de chaque formation
                  </p>
                </div>
              </div>
            </Card>

            {/* Système de notes et évaluations */}
            <Card className="mt-8 p-6 border-0 shadow-lg">
              <h4 className="text-lg font-bold text-slate-800 mb-4">Système d'Évaluation</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-sm">
                  <span className="text-slate-700">Notes et relevés automatiques</span>
                  <span className="text-green-600 font-medium">✓ Actif</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-sm">
                  <span className="text-slate-700">Feedback instantané sur les quiz</span>
                  <span className="text-green-600 font-medium">✓ Actif</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-sm">
                  <span className="text-slate-700">Portfolio et projets étudiants</span>
                  <span className="text-green-600 font-medium">✓ Actif</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-sm">
                  <span className="text-slate-700">Certification automatique</span>
                  <span className="text-green-600 font-medium">✓ Actif</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}