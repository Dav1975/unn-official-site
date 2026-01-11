import { motion } from "framer-motion";
import {
  Award,
  Globe,
  TrendingUp,
  Calendar,
  Eye,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { actualites, stats, partenaires } from "../../constants";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function AccueilSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Galerie avec effet fade + scale */}
      <div className="py-20 bg-[#D9D8D5]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {["1", "3", "2"].map((n) => (
              <motion.div
                key={n}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.03, rotate: 0.5 }}
              >
                <Card className="overflow-hidden shadow-lg rounded-sm border-[#D9D8D5]">
                  <ImageWithFallback
                    src={`/images/accueil-${n}.png`}
                    alt={`Image ${n}`}
                    className="w-full h-72 object-cover transition-all duration-700 hover:brightness-105"
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Actualités  Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Formes géométriques décoratives */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#21363F]/40"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#21363F]/40"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#2f4858] px-4 py-2 rounded-sm mb-4">
                <span className="text-white font-semibold">Actualités</span>
              </div>
              <h2 className="text-4xl font-bold text-[#12283E] mb-4">
                Actualités
              </h2>
              <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
                Les dernières nouvelles et événements au sein de l'UNN
                
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {actualites.slice(0, 3).map((actu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Link to={`/actualites/${i}`} state={{ returnTo: '/' }}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-[#D9D8D5] hover:border-[#2f4858]/30 group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={actu.images[0]}
                        alt={actu.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#2f4858] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {actu.category}
                        </span>
                      </div>
                      {/* Overlay au hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{actu.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#12283E] mb-3 group-hover:text-[#2f4858] transition-colors line-clamp-2">
                        {actu.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {actu.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#2f4858] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                          Lire la suite
                          <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {actu.images.length} photo{actu.images.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/actualites">
              <motion.button
                className="px-8 py-4 bg-[#2f4858] text-white border-2 border-[#2f4858] rounded-lg font-semibold hover:bg-white hover:text-[#2f4858] hover:border-[#2f4858] transition-all shadow-lg hover:shadow-xl mr-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir toute l'actualité
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-24 bg-[#D9D8D5]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-[#12283E] mb-4"
            >
              Notre Mission & Vision
            </motion.h2>
            <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
              Façonner l'avenir de l'éducation numérique par l'excellence et
              l'innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Notre Mission",
                desc: "Fournir une éducation supérieure de qualité exceptionnelle dans un environnement numérique innovant, en préparant nos étudiants aux défis du monde professionnel moderne.",
              },
              {
                icon: <Globe className="w-6 h-6 text-white" />,
                title: "Notre Vision",
                desc: "Devenir une référence internationale reconnue pour l'excellence et l'innovation pédagogique dans l'enseignement supérieur du numérique.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white border-2 border-[#D9D8D5] p-8 rounded-sm shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="bg-[#2f4858] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#12283E] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#12283E]/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        {/* Formes géométriques décoratives */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#21363F]/40"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#21363F]/40"
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-[#D9D8D5] hover:border-[#2f4858] hover:scale-105">
                  <CardContent className="p-8">
                    <div className="text-[#2f4858] mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-[#12283E] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[#12283E]/70">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section Partenaires avec Carrousel */}
      <div className="py-20 bg-[#D9D8D5]/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#2f4858] px-4 py-2 rounded-sm mb-4">
              <span className="text-white font-semibold">Partenaires</span>
            </div>
            <h2 className="text-4xl font-bold text-[#12283E] mb-4">
              Nos Partenaires Stratégiques
            </h2>
            <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
              Collaborations internationales pour l'excellence académique
            </p>
          </motion.div>

          {/* Carrousel infini */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-12"
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* Double les partenaires pour l'effet de boucle infinie */}
                {[...partenaires, ...partenaires].map((partenaire, i) => (
                  <motion.div
                    key={i}
                    className="flex-shrink-0 w-64"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-white border-[#D9D8D5] hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-8 flex flex-col items-center justify-center h-48">
                        <div className="mb-4 h-20 flex items-center justify-center">
                          <img
                            src={partenaire.logo}
                            alt={partenaire.nom}
                            className="max-h-16 max-w-full object-contain hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-[#12283E] text-center mb-2">
                          {partenaire.nom}
                        </h3>
                        <p className="text-sm text-[#12283E]/60 text-center line-clamp-2">
                          {partenaire.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Gradients pour effet de fondu sur les bords*/}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#D9D8D5]/40 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#D9D8D5]/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccueilSection;
