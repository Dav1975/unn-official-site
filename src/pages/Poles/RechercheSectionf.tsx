import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ChevronRight } from "lucide-react";
import { rechercheEntites } from "../../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RechercheSection() {
  return (
    <section className="min-h-screen bg-linear-to-b from-slate-50/40 via-white/60 to-slate-100/30 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-linear-to-br from-[#163547] via-[#1e3a4f] to-[#2C5159]"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Pôle{" "}
            <span className="text-[#CBAF68] drop-shadow-md">Recherche</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Nos laboratoires et équipes de recherche innovent pour un avenir
            numérique durable.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button className="bg-white text-[#163547] font-semibold px-10 h-12 shadow-lg hover:bg-slate-50 hover:shadow-xl duration-300">
              Explorer la recherche
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Liste des laboratoires */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#163547] mb-4">
            Nos Laboratoires & Équipes
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#163547] to-[#2C5159] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez nos entités de recherche, dédiées à l’innovation
            scientifique et technologique.
          </p>
        </div>

        {/* Grille des entités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rechercheEntites.map((entite, index) => (
            <motion.div
              key={entite.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <Link to={entite.href}>
                <Card
                  className="relative bg-white rounded-sm border border-slate-100 
                    shadow-md hover:shadow-2xl transition-all duration-500 group"
                >
                  {/* Accent Lumineux */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                    bg-linear-to-br ${entite.gradient} blur-md`}
                  />

                  {/* Badge animé */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-2 h-2 bg-[#CBAF68] rounded-full animate-ping"></div>
                  </div>

                  {/* Icône flottante */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-4 rounded-sm shadow-lg border border-white/20 bg-linear-to-br ${entite.gradient}`}
                    >
                      <div className={`w-10 h-10 ${entite.accentColor}`}>
                        {entite.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Accent Lumineux de fond (z-index bas pour ne pas cacher le texte) */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                      bg-linear-to-br ${entite.gradient} blur-md`}
                    style={{ zIndex: 0 }}
                  />

                  {/* Contenu sur un plan supérieur */}
                  <div className="relative z-10">
                    <CardHeader className="pt-20 pb-6 text-center">
                      <CardTitle className="text-lg font-bold text-[#163547] group-hover:text-[#2C5159] transition-colors duration-500">
                        {entite.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="px-6">
                      <CardDescription className="text-slate-600 text-sm mb-6 line-clamp-4">
                        {entite.description}
                      </CardDescription>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 border-t border-slate-100/50 flex items-center justify-between">
                      <span
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold 
      bg-linear-to-r from-[#163547]/5 to-[#2C5159]/5 text-[#163547] border border-[#163547]/10"
                      >
                        {entite.code}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#163547] hover:bg-[#163547]/10 p-2 rounded-full transition-transform group-hover:translate-x-1"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
