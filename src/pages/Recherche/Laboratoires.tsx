import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { rechercheEntites } from "../../constants";
import { ArrowRight, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LaboratoiresPage() {
  // Détails succincts inspirés des pages de chaque labo
  const metaByHref: Record<string, { axes: string[]; chercheurs?: string; projets?: string }> = {
    "/recherche/laboratoire/lamon-ia": {
      axes: ["IA & ML", "Modélisation", "NLP", "Vision"],
      chercheurs: "20+",
      projets: "8",
    },
    "/recherche/laboratoire/recyb": {
      axes: ["Cryptographie", "Réseaux", "Blockchain", "Forensique"],
      chercheurs: "15+",
      projets: "6",
    },
    "/recherche/laboratoire/lefe-er": {
      axes: ["Solaire", "Éolien", "Hydrocarbures", "Hydrogène"],
      chercheurs: "22+",
      projets: "10",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section inspirée de RecteurSection */}
      <section className="relative bg-[#2f4858] text-white">
        {/* Image de fond */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-30"
          style={{ backgroundImage: "url('/images/fond.jpg')" }}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.8 }}
        />

        {/* Contenu principal (vide, sert d'espace pour le visuel) */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center" />

        {/* Pancarte flottante */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white text-[#12283E] p-8 shadow-[12px_12px_0px_#2f4858] border-[#D9D8D5]"
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2f4858]">Laboratoires de Recherche</h2>
              <p className="mt-2 text-[#12283E]/80 text-base md:text-lg">
                Découvrez les entités de recherche de l'université et accédez à leurs pages dédiées.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grille des laboratoires (rechercheEntites) */}
      <section className="py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rechercheEntites.map((entite, idx) => {
              const meta = metaByHref[entite.href] ?? { axes: [] };
              const axes = meta.axes.slice(0, 3);
              return (
                <Card
                  key={idx}
                  className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2f4858] cursor-pointer group"
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#2f4858] text-white">
                        {entite.icon}
                      </div>
                      <Badge className="bg-gray-100 text-[#2f4858] border border-gray-200">{entite.code}</Badge>
                    </div>
                    <CardTitle className="text-lg text-[#12283E] leading-snug">{entite.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#12283E]/70 mb-4">{entite.description}</p>

                    {/* Axes (badges) */}
                    {axes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {axes.map((ax, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-gray-200 bg-gray-50 text-[#2f4858]"
                          >
                            {ax}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Ligne CTA + mini-stats */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        to={entite.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#2f4858] hover:underline"
                      >
                        Voir le laboratoire <ArrowRight className="w-4 h-4" />
                      </Link>

                      {(meta.chercheurs || meta.projets) && (
                        <div className="flex items-center gap-4 text-xs text-[#12283E]/70">
                          {meta.chercheurs && (
                            <div className="flex items-center gap-1.5">
                              <Users className="w-4 h-4 text-[#2f4858]" />
                              <span>{meta.chercheurs} Chercheurs</span>
                            </div>
                          )}
                          {meta.projets && (
                            <div className="flex items-center gap-1.5">
                              <TrendingUp className="w-4 h-4 text-[#2f4858]" />
                              <span>{meta.projets} Projets</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
