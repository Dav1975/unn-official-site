import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Clock, Users, BookOpen, GraduationCap, FileText, CheckCircle } from "lucide-react";

export function FormationsSection() {
  const formations = [
    {
      title: "Master en Informatique",
      category: "Technologies",
      level: "Bac +5",
      duration: "2 ans",
      students: "150 étudiants",
      description: "Programme avancé couvrant l'intelligence artificielle, le développement logiciel et la cybersécurité.",
      competences: ["IA & Machine Learning", "Développement Web", "Cybersécurité", "Big Data"],
      modalites: "100% en ligne avec séminaires présentiels"
    },
    {
      title: "Licence en Marketing Digital",
      category: "Business",
      level: "Bac +3",
      duration: "3 ans",
      students: "200 étudiants",
      description: "Formation complète aux métiers du marketing numérique et de la communication digitale.",
      competences: ["SEO/SEA", "Réseaux Sociaux", "Analytics", "E-commerce"],
      modalites: "Hybride (50% en ligne, 50% présentiel)"
    },
    {
      title: "MBA Innovation & Leadership",
      category: "Management",
      level: "Bac +5",
      duration: "18 mois",
      students: "80 étudiants",
      description: "Programme d'excellence pour futurs dirigeants dans l'ère numérique.",
      competences: ["Leadership", "Innovation", "Stratégie", "Transformation Digitale"],
      modalites: "Executive (weekends et intensifs)"
    },
    {
      title: "Certificat en Data Science",
      category: "Technologies",
      level: "Certification",
      duration: "6 mois",
      students: "300 étudiants",
      description: "Formation intensive aux outils et méthodes de la science des données.",
      competences: ["Python/R", "Statistiques", "Visualisation", "Machine Learning"],
      modalites: "100% en ligne avec projets pratiques"
    }
  ];

  const processusAdmission = [
    {
      etape: 1,
      titre: "Candidature en ligne",
      description: "Remplissez le formulaire de candidature et téléchargez vos documents"
    },
    {
      etape: 2,
      titre: "Évaluation du dossier",
      description: "Notre comité académique examine votre dossier sous 5 jours ouvrés"
    },
    {
      etape: 3,
      titre: "Entretien de motivation",
      description: "Entretien vidéo avec un responsable pédagogique (30 minutes)"
    },
    {
      etape: 4,
      titre: "Confirmation d'admission",
      description: "Réponse définitive et procédure d'inscription dans les 48h"
    }
  ];

  return (
    <section id="formations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Nos Formations</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez notre catalogue de formations d'excellence, conçues pour les professionnels d'aujourd'hui et de demain
          </p>
        </div>

        {/* Catalogue des formations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 mb-10 text-center">Catalogue des Formations</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {formations.map((formation, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <Badge variant="secondary" className="mb-3 bg-amber-100 text-amber-800 hover:bg-amber-100">
                      {formation.category}
                    </Badge>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">{formation.title}</h4>
                    <p className="text-slate-600">{formation.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-sm">
                  <div className="text-center">
                    <GraduationCap className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-800">{formation.level}</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-800">{formation.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-800">{formation.students}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-bold text-slate-800 mb-3">Compétences acquises :</h5>
                  <div className="flex flex-wrap gap-2">
                    {formation.competences.map((competence, idx) => (
                      <Badge key={idx} variant="outline" className="border-amber-200 text-amber-700">
                        {competence}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-slate-600">
                    <strong>Modalités :</strong> {formation.modalites}
                  </p>
                </div>

                <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Processus d'admission */}
        <div className="bg-linear-to-br from-slate-50 to-amber-50 rounded-sm p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Processus d'Admission</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Un processus simple et transparent pour rejoindre notre communauté académique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processusAdmission.map((etape, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">{etape.etape}</span>
                  </div>
                  {index < processusAdmission.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-amber-200 -translate-y-1/2 translate-x-8"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{etape.titre}</h4>
                <p className="text-slate-600">{etape.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <FileText className="mr-2 w-5 h-5" />
              Déposer ma candidature
            </Button>
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <Card className="p-8 border-0 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              Avantages Étudiants
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
                Accès 24/7 à la plateforme Moodle
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
                Accompagnement personnalisé par un tuteur
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
                Réseau professionnel d'anciens étudiants
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
                Stages en entreprises partenaires
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
                Certification reconnue par l'État
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 text-amber-600 mr-3" />
              Modalités Pédagogiques
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-amber-600 mr-3 mt-0.5 shrink-0" />
                Cours interactifs et ressources multimédias
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-amber-600 mr-3 mt-0.5 shrink-0" />
                Projets pratiques en équipe
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-amber-600 mr-3 mt-0.5 shrink-0" />
                Évaluations continues et examens en ligne
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-amber-600 mr-3 mt-0.5 shrink-0" />
                Webinaires avec des experts du secteur
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-amber-600 mr-3 mt-0.5 shrink-0" />
                Support technique et pédagogique
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}