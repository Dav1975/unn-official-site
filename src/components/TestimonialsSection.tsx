import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Développeuse Full-Stack",
      company: "Tech Innovate",
      avatar: "MD",
      rating: 5,
      content: "Grâce à UniverNum, j'ai pu me reconvertir dans le développement web en seulement 6 mois. La qualité des cours et l'accompagnement personnalisé m'ont permis de décrocher mon poste de rêve !",
      program: "Développement Web Full-Stack"
    },
    {
      name: "Thomas Martin",
      role: "Data Scientist",
      company: "DataCorp",
      avatar: "TM",
      rating: 5,
      content: "Le programme de Data Science est exceptionnel. Les projets pratiques et les mentors experts m'ont donné toutes les compétences nécessaires pour exceller dans ce domaine passionnant.",
      program: "Data Science & IA"
    },
    {
      name: "Sophie Laurent",
      role: "UX Designer",
      company: "Creative Studio",
      avatar: "SL",
      rating: 5,
      content: "Une formation complète qui m'a permis de maîtriser tous les aspects du design UX/UI. L'approche pratique et les retours constructifs ont fait toute la différence.",
      program: "Design UX/UI"
    },
    {
      name: "Pierre Moreau",
      role: "Chef de Projet",
      company: "Agile Solutions",
      avatar: "PM",
      rating: 5,
      content: "La formation en gestion de projet agile m'a donné les outils et la confiance nécessaires pour diriger efficacement mon équipe. Un investissement qui a changé ma carrière !",
      program: "Gestion de Projet Agile"
    },
    {
      name: "Emma Rousseau",
      role: "Spécialiste Marketing Digital",
      company: "Digital Agency",
      avatar: "ER",
      rating: 5,
      content: "Cours très bien structurés avec des exemples concrets. J'ai pu appliquer immédiatement ce que j'apprenais dans mon travail. Résultat : une promotion en 3 mois !",
      program: "Marketing Digital"
    },
    {
      name: "Lucas Bernard",
      role: "Consultant en Cybersécurité",
      company: "SecureIT",
      avatar: "LB",
      rating: 5,
      content: "Formation de très haut niveau avec des instructeurs qui sont de vrais experts terrain. Les lab pratiques et les simulations d'attaques sont particulièrement formateurs.",
      program: "Cybersécurité"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Ce que disent nos étudiants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos diplômés qui ont transformé leur carrière 
            grâce à nos formations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-[#D9D8D5] opacity-50" />
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Program */}
                <div className="text-sm text-[#12283E] font-medium">
                  Programme : {testimonial.program}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-[#D9D8D5] text-[#12283E] font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-[#D9D8D5] rounded-sm p-8 text-[#12283E]">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-[#12283E]/70">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold">87%</div>
              <div className="text-[#12283E]/70">Trouvent un emploi en 6 mois</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.8/5</div>
              <div className="text-[#12283E]/70">Note moyenne des formations</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15K+</div>
              <div className="text-[#12283E]/70">Diplômés depuis 2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}