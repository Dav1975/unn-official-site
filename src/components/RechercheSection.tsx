import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ArrowRight,
  Microscope,
  Cpu,
  Globe,
  Users,
  Calendar,
  ExternalLink,
  Award,
} from "lucide-react";
import { laboratoires, projetsRecherche } from "../constants";

export function RechercheSection() {
  return (
    <section
      id="recherche"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <header className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold text-slate-800 tracking-tight">
            Recherche & Innovation
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Nos laboratoires développent les technologies de demain et étendent
            les frontières de la connaissance scientifique.
          </p>
        </header>

        {/* Statistiques avec animation */}
        <div className="bg-white rounded-sm p-10 shadow-md hover:shadow-xl transition-shadow duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { label: "Laboratoires", value: 3, color: "text-amber-600" },
              { label: "Chercheurs", value: 73, color: "text-slate-700" },
              {
                label: "Publications",
                value: 300,
                color: "text-amber-600",
                plus: true,
              },
              {
                label: "Budget recherche",
                value: "3.1M€",
                color: "text-slate-700",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <div className={`text-4xl font-bold ${item.color} mb-2`}>
                  {item.value}
                  {item.plus && "+"}
                </div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Nos Laboratoires */}
        <div className="text-center space-y-10">
          <h3 className="text-3xl font-bold text-slate-800">
            Nos Laboratoires
          </h3>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
            {laboratoires.map((lab, index) => (
              <Card
                key={index}
                className="p-8 bg-white rounded-sm shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-amber-500 to-orange-400 rounded-sm flex items-center justify-center">
                    <Microscope className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-slate-800">
                      {lab.nom}
                    </h4>
                    <p className="text-slate-500 text-sm">({lab.acronyme})</p>
                  </div>
                </div>

                <div className="space-y-2 mb-5 text-sm">
                  <p>
                    <span className="text-slate-600">Directeur :</span>{" "}
                    <span className="font-semibold">{lab.directeur}</span>
                  </p>
                  <p>
                    <span className="text-slate-600">Équipe :</span>{" "}
                    <span className="font-semibold">{lab.membres}</span>
                  </p>
                  <p>
                    <span className="text-slate-600">Publications :</span>{" "}
                    <span className="font-semibold">{lab.publications}</span>
                  </p>
                  <p>
                    <span className="text-slate-600">Projets actifs :</span>{" "}
                    <span className="font-semibold">{lab.projets}</span>
                  </p>
                </div>

                <p className="text-slate-600 text-sm mb-5">{lab.description}</p>

                <div className="mb-5">
                  <h5 className="font-semibold text-slate-800 mb-2 text-sm">
                    Domaines d'expertise :
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {lab.domaines.map((domaine, idx) => (
                      <Badge
                        key={idx}
                        className="bg-amber-100 text-amber-800 text-xs px-2 py-1"
                      >
                        {domaine}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-linear-to-r from-amber-500 to-orange-500 text-white hover:opacity-90">
                  Découvrir le laboratoire{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Projets de Recherche */}
        <div className="bg-white rounded-sm p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-2">
              Projets de Recherche
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nos projets phares qui façonnent l’avenir du numérique et de
              l’éducation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projetsRecherche.map((projet, index) => (
              <Card
                key={index}
                className="p-8 border border-slate-100 rounded-sm hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">
                      {projet.titre}
                    </h4>
                    <div className="flex gap-4 text-sm text-slate-500">
                      <p className="flex items-center gap-1">
                        <Cpu className="w-4 h-4" /> {projet.laboratoire}
                      </p>
                      <p className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {projet.duree}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={`text-xs ${
                      projet.statut === "En cours"
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {projet.statut}
                  </Badge>
                </div>

                <p className="text-slate-600 text-sm mb-5">
                  {projet.description}
                </p>

                <div className="grid grid-cols-2 bg-slate-50 rounded-sm p-4 mb-5">
                  <div>
                    <span className="text-slate-500 text-xs">Budget :</span>
                    <p className="font-bold">{projet.budget}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs">Impact :</span>
                    <p className="font-bold">{projet.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.partenaires.map((part, i) => (
                    <Badge
                      key={i}
                      className="border border-[#D9D8D5] text-[#12283E] text-xs bg-[#D9D8D5]"
                    >
                      {part}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full border border-slate-300 text-slate-700 hover:bg-slate-100">
                  <ExternalLink className="mr-2 w-4 h-4" /> Voir le projet
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaborations */}
        <div className="text-center space-y-8">
          <h3 className="text-3xl font-bold text-slate-800">
            Collaborations Internationales
          </h3>
          <div className="bg-[#D9D8D5] rounded-sm p-12 grid md:grid-cols-3 gap-10 text-[#12283E]">
            <div>
              <Globe className="w-12 h-12 mx-auto mb-3 text-[#12283E]" />
              <h4 className="font-bold">Réseau International</h4>
              <p className="text-[#12283E]/70">50+ universités dans 25 pays</p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-3 text-[#12283E]" />
              <h4 className="font-bold">Échanges Académiques</h4>
              <p className="text-[#12283E]/70">200+ chercheurs en collaboration</p>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-3 text-[#12283E]" />
              <h4 className="font-bold">Projets Européens</h4>
              <p className="text-[#12283E]/70">12 initiatives Horizon Europe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
