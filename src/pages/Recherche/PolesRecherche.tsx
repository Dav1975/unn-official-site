import { Card, CardContent,  CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { rechercheEntites } from "../../constants";
import { ArrowRight, Building2, Users, BookOpen, TrendingUp, Target, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PolesRecherche() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#2f4858] text-white">
        <motion.div
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-20"
          style={{
            backgroundImage: "url('/images/fond.jpg')"
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        </div>

        {/* Pancarte flottante */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ y: -5 }}
        >
          <div className="bg-white text-[#12283E] p-8 shadow-[12px_12px_0px_#2f4858] border-2 border-[#D9D8D5]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-[#2f4858]">Le Pôle de Recherche</h2>
            </div>
            <p className="text-[#12283E]/80 text-base leading-relaxed text-center">
              Des centres d'excellence dédiés à l'innovation et à la recherche de pointe dans le domaine du numérique et des technologies émergentes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl font-bold text-[#12283E] mb-6">
              Une Recherche d'Excellence au Service du Développement
            </h2>
            <p className="text-lg text-[#12283E]/70 leading-relaxed">
              Le pôle de recherche de l'Université Numérique du Niger est une structure qui regroupe plusieurs laboratoires au sein desquels se trouvent les équipes de recherche. Il a pour vocation de promouvoir la recherche scientifique, de développer des projets innovants et de former les chercheurs. En synergie avec les pôles de formation, il contribue à la production scientifique et au développement de solutions technologiques répondant aux défis nationaux et internationaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pôles de Recherche Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#12283E] mb-4">Nos Laboratoires de Recherche</h2>
            <p className="text-[#12283E]/60">Trois centres d'excellence pour une recherche de pointe</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {rechercheEntites.map((pole, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link to={pole.href}>
                  <Card className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 cursor-pointer group overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2f4858] to-[#1a3a4a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="bg-gradient-to-br from-[#2f4858] to-[#1a3a4a] w-20 h-20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                          {pole.icon}
                        </div>

                        <Badge className="bg-[#2f4858]/10 text-[#2f4858] hover:bg-[#2f4858] hover:text-white border border-[#2f4858]/20 transition-all px-4 py-1">
                          {pole.code}
                        </Badge>

                        <h3 className="text-xl font-bold text-[#12283E] leading-tight">
                          {pole.title}
                        </h3>

                        <p className="text-[#12283E]/70 leading-relaxed text-sm">
                          {pole.description}
                        </p>

                        <div className="flex items-center text-[#2f4858] font-semibold pt-4 group-hover:gap-3 gap-2 transition-all">
                          Découvrir
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Modernisée */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#12283E] mb-4">Le Pôle en Chiffres</h2>
            <p className="text-[#12283E]/60">Impact et excellence scientifique</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: "Laboratoires", value: "3", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50" },
              { icon: Users, label: "Chercheurs", value: "0", color: "from-emerald-500 to-emerald-600", bgColor: "bg-emerald-50" },
              { icon: BookOpen, label: "Publications", value: "0", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50" },
              { icon: TrendingUp, label: "Projets Actifs", value: "0", color: "from-amber-500 to-amber-600", bgColor: "bg-amber-50" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className={`border-0  transition-all duration-300 overflow-hidden bg-white`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 `}>
                      <stat.icon className="w-7 h-7 text-[#2f4858]" />
                    </div>
                    <div className="text-4xl font-bold text-[#12283E] mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-[#12283E]/70">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsable Section - Design modernisé */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

              <div className="grid md:grid-cols-5 gap-0">
                {/* Photo section */}
                <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#2f4858] to-[#1a3a4a]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                 {/*  <img
                    src="/images/recteur.jpeg"
                    alt="Professeur Mamane Souleye Ibrahim"
                    className="h-full w-full object-cover"
                  />*/}
            {/*      <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3 border border-white/30">
                      <Target className="w-3 h-3" />
                      <span className="text-xs font-medium">Coordonnateur du Pôle</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">Prof. Mamane Souleye Ibrahim</h3>
                    <p className="text-sm text-white/90">Pôle de Recherche et Innovation</p>
                                      </div> */}
                 </div>  

                {/* Contenu section */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-[#2f4858]/20 mb-4" />
                    <blockquote className="text-lg text-[#12283E]/90 leading-relaxed italic mb-6">
                      "Notre ambition est de faire de l'Université Numérique du Niger un hub d'innovation et de recherche scientifique de premier plan en Afrique. Nous nous engageons à créer un environnement stimulant pour nos chercheurs et à développer des projets à fort impact sociétal."
                    </blockquote>
                  </div> 

                 <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#2f4858]"></div>
                      <span className="text-[#12283E]/70">Leadership en Innovation Numérique</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#2f4858]"></div>
                      <span className="text-[#12283E]/70">Développement de Partenariats Stratégiques</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#2f4858]"></div>
                      <span className="text-[#12283E]/70">Promotion de la Recherche Appliquée</span>
                    </div>
                  </div> 
                </div> 
              </div>   

          </motion.div>
        </div>
      </section>

      {/* Mission Section - Redesign */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#12283E] mb-4">Notre Mission & Nos Axes Stratégiques</h2>
            <p className="text-[#12283E]/60 max-w-2xl mx-auto">
              Des centres d'excellence qui se consacrent à l'avancement des connaissances scientifiques et technologiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Objectifs Stratégiques */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gray-50 border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#2f4858] w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#12283E]">Objectifs Stratégiques</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Développer la recherche fondamentale et appliquée dans les domaines du numérique",
                    "Favoriser l'innovation technologique et le transfert de compétences vers le tissu socio-économique",
                    "Former une nouvelle génération de chercheurs et d'experts de haut niveau",
                    "Animer la vie scientifique par l'organisation de colloques, séminaires et écoles de recherche"
                  ].map((objectif, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-[#2f4858] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-[#12283E]/80 leading-relaxed">{objectif}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Axes de Recherche */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gray-50 border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#2f4858] w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#12283E]">Axes de Recherche</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Intelligence Artificielle et Science des Données", icon: "🤖" },
                    { title: "Réseaux, Télécommunications et Cybersécurité", icon: "🔐" },
                    { title: "Énergies Renouvelables et Efficacité Énergétique", icon: "⚡" },
                    { title: "Numérique pour l'Éducation et les Sciences Sociales", icon: "📚" }
                  ].map((axe, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-2xl flex-shrink-0">{axe.icon}</div>
                      <p className="text-[#12283E]/80 leading-relaxed">{axe.title}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-[#2f4858] to-[#1a3a4a] border-0 shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center text-white">
                <Building2 className="w-12 h-12 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
                <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
                  Devenir un pôle d'excellence en recherche et innovation reconnu à l'échelle internationale,
                  contribuant activement au développement socio-économique du Niger et de l'Afrique à travers
                  des solutions technologiques innovantes et une formation d'excellence.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

