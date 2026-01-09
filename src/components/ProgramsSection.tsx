import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, Star } from "lucide-react";

export function ProgramsSection() {
  const programs = [
    {
      title: "Développement Web Full-Stack",
      description: "Maîtrisez les technologies modernes du développement web avec React, Node.js et les bases de données.",
      duration: "6 mois",
      students: "2,547",
      rating: "4.9",
      level: "Intermédiaire",
      price: "1,899€",
      highlights: ["JavaScript avancé", "React & Next.js", "API REST", "Déploiement cloud"]
    },
    {
      title: "Data Science & IA",
      description: "Plongez dans l'analyse de données et l'intelligence artificielle avec Python et les outils modernes.",
      duration: "8 mois",
      students: "1,823",
      rating: "4.8",
      level: "Avancé",
      price: "2,299€",
      highlights: ["Python & Pandas", "Machine Learning", "Deep Learning", "Visualisation de données"]
    },
    {
      title: "Marketing Digital",
      description: "Développez vos compétences en marketing numérique et stratégie de contenu digital.",
      duration: "4 mois",
      students: "3,421",
      rating: "4.7",
      level: "Débutant",
      price: "1,299€",
      highlights: ["SEO/SEA", "Réseaux sociaux", "Analytics", "Content Marketing"]
    },
    {
      title: "Cybersécurité",
      description: "Protégez les systèmes informatiques et apprenez les meilleures pratiques de sécurité.",
      duration: "7 mois",
      students: "967",
      rating: "4.9",
      level: "Avancé",
      price: "2,199€",
      highlights: ["Ethical Hacking", "Cryptographie", "Audit sécurité", "Gestion des risques"]
    },
    {
      title: "Design UX/UI",
      description: "Créez des expériences utilisateur exceptionnelles avec les outils et méthodes de design moderne.",
      duration: "5 mois",
      students: "2,156",
      rating: "4.8",
      level: "Intermédiaire",
      price: "1,699€",
      highlights: ["Figma/Adobe XD", "Prototypage", "Research UX", "Design System"]
    },
    {
      title: "Gestion de Projet Agile",
      description: "Maîtrisez les méthodologies agiles et les outils de gestion de projet modernes.",
      duration: "3 mois",
      students: "1,789",
      rating: "4.6",
      level: "Débutant",
      price: "999€",
      highlights: ["Scrum & Kanban", "Jira/Trello", "Leadership", "Gestion d'équipe"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="programmes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Nos Programmes de Formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos formations certifiantes conçues par des experts et adaptées 
            aux besoins du marché du travail actuel.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                  <Badge className={`${getLevelColor(program.level)} text-xs px-2 py-1`}>
                    {program.level}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{program.price}</div>
                  </div>
                </div>
                
                <CardTitle className="text-xl leading-tight">{program.title}</CardTitle>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{program.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-600">{program.rating}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900">Points clés :</div>
                  <div className="flex flex-wrap gap-1">
                    {program.highlights.map((highlight, highlightIndex) => (
                      <Badge 
                        key={highlightIndex} 
                        variant="secondary" 
                        className="text-xs px-2 py-1"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas le programme qui vous convient ?
          </p>
          <Button variant="outline" size="lg">
            Voir tous nos programmes
          </Button>
        </div>
      </div>
    </section>
  );
}