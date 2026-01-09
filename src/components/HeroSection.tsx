import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="accueil" className="relative bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                L'avenir de l'éducation est{" "}
                <span className="text-[#12283E]">numérique</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez une nouvelle façon d'apprendre avec nos programmes en ligne 
                innovants, conçus pour votre réussite professionnelle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-[#D9D8D5] text-[#12283E] hover:bg-[#12283E] hover:text-white">
                Découvrir nos programmes
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group border-[#D9D8D5] text-[#12283E] hover:bg-[#D9D8D5]">
                <Play className="mr-2 h-4 w-4" />
                Voir la démo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-600">Étudiants actifs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Cours disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Taux de réussite</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU5MTkxNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Étudiants sur le campus"
                className="rounded-sm shadow-2xl w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D9D8D5] rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D9D8D5] rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}