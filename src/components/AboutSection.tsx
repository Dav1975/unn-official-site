import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Communauté d'experts",
      description: "Nos enseignants sont des professionnels reconnus dans leur domaine."
    },
    {
      icon: BookOpen,
      title: "Apprentissage flexible",
      description: "Étudiez à votre rythme, où que vous soyez, quand vous voulez."
    },
    {
      icon: Award,
      title: "Certifications reconnues",
      description: "Obtenez des diplômes et certifications valorisés par les employeurs."
    }
  ];

  const stats = [
    "Formation 100% en ligne",
    "Support pédagogique 24/7",
    "Plateforme Moodle intégrée",
    "Projets pratiques inclus"
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1608986596619-eb50cc56831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTkyMDMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Apprentissage en ligne"
              className="rounded-sm shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-sm"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Révolutionnez votre façon d'apprendre
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                UniverNum est une université numérique de nouvelle génération qui combine 
                l'excellence académique traditionnelle avec les dernières innovations 
                technologiques pour offrir une expérience d'apprentissage unique.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#D9D8D5] rounded-sm flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#12283E]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats List */}
            <div className="space-y-3 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}