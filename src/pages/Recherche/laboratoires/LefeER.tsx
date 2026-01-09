import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Zap, Users, BookOpen, TrendingUp, Award, Target, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LefeER() {
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = location.state?.returnTo || '/recherche/poles-de-recherche'; // Page par défaut si pas spécifiée

  const domainesRecherche = [
    "Énergies Renouvelables (Solaire, Éolien)",
    "Exploration & Production d'Hydrocarbures et Uranium",
    "Stockage & Distribution d'Énergie",
    "Efficacité Énergétique & Smart Grids",
    "Bioénergies & Carburants Alternatifs",
    "Transition Énergétique Durable",
  ];

  const projets = [
    {
      titre: "SolarNiger 2030",
      description: "Développement de solutions photovoltaïques adaptées au climat sahélien",
      statut: "En cours",
    },
    {
      titre: "Géothermie Sahel",
      description: "Étude du potentiel géothermique pour la production d'énergie propre",
      statut: "En cours",
    },
    {
      titre: "Hydrogène Vert",
      description: "Recherche sur la production et le stockage d'hydrogène renouvelable",
      statut: "Planifié",
    },
  ];

  const equipe = [
    { nom: "Dr. Boubacar Adamou", role: "Directeur du Laboratoire", specialite: "Énergies Renouvelables" },
    { nom: "Dr. Mariama Abdou", role: "Chercheur Senior", specialite: "Génie Pétrolier" },
    { nom: "Dr. Hamidou Garba", role: "Chercheur", specialite: "Systèmes Énergétiques" },
    { nom: "18+ Doctorants", role: "Équipe de recherche", specialite: "Diverses spécialités" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#2f4858] text-white overflow-hidden py-16">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80')",
            filter: "blur(3px)"
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-[#2f4858]/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate(returnTo)}
            className="mb-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </motion.button>

          <div className="flex items-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-sm flex items-center justify-center flex-shrink-0 border border-white/20">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
              <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30 px-3 py-1">
                2E R
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Laboratoire Énergies Fossiles & Énergies Renouvelables
              </h1>
              <p className="text-lg text-white/90">
                Recherche pour une transition énergétique durable et responsable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#2f4858] p-3 rounded-sm">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Mission & Vision</h2>
                <p className="text-[#12283E]/60 text-sm">Ce qui guide notre action</p>
              </div>
            </div>

            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#12283E] mb-3">Notre Mission</h3>
                  <p className="text-[#12283E]/70 leading-relaxed">
                    Le Laboratoire Énergies Fossiles & Énergies Renouvelables (LEFE&ER) se consacre à la recherche
                    et au développement de solutions énergétiques durables. Nous travaillons sur l'optimisation de
                    l'exploitation des ressources fossiles (pétrole, gaz, uranium) tout en développant les technologies d'énergies renouvelables
                    pour accompagner le Niger dans sa transition énergétique.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#12283E] mb-3">Notre Vision</h3>
                  <p className="text-[#12283E]/70 leading-relaxed">
                    Devenir un centre de référence en Afrique pour la recherche énergétique, contribuant à l'autonomie
                    énergétique du Niger et au développement de solutions énergétiques propres et accessibles pour tous.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Domaines de Recherche */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#12283E] mb-4">Domaines de Recherche</h2>
            <p className="text-lg text-[#12283E]/70">Nos axes de recherche prioritaires</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainesRecherche.map((domaine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-gray-100 hover:border-[#2f4858] hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#2f4858]/10 p-2 rounded-sm flex-shrink-0">
                        <Zap className="w-5 h-5 text-[#2f4858]" />
                      </div>
                      <p className="text-[#12283E] font-semibold">{domaine}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#12283E] mb-4">Projets de Recherche</h2>
            <p className="text-lg text-[#12283E]/70">Nos projets actuels et à venir</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-100 hover:shadow-lg transition-all">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${projet.statut === "En cours" ? "bg-green-500" : "bg-blue-500"} text-white`}>
                        {projet.statut}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-[#12283E]">{projet.titre}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-[#12283E]/70">{projet.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipes de Recherche */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#12283E] mb-4">Équipes de Recherche</h2>
            <p className="text-lg text-[#12283E]/70">Nos groupes de recherche spécialisés</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-gray-100 hover:shadow-xl transition-all h-full">
                <CardHeader className="bg-[#D9D8D5]/30 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#2f4858] p-3 rounded-sm">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-[#2f4858] text-white">ERER</Badge>
                  </div>
                  <CardTitle className="text-2xl text-[#12283E]">
                    Équipe de Recherche en Énergies Renouvelables
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#12283E] leading-relaxed mb-4">
                    L'ERER se concentre sur le développement et l'optimisation des technologies solaires,
                    éoliennes et autres sources d'énergies propres adaptées au contexte sahélien.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#12283E]/60">
                      <Users className="w-4 h-4" />
                      <span>10-12 chercheurs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#12283E]/60">
                      <BookOpen className="w-4 h-4" />
                      <span>Domaines : Solaire, Éolien, Biomasse, Stockage d'énergie</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-gray-100 hover:shadow-xl transition-all h-full">
                <CardHeader className="bg-[#D9D8D5]/30 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#2f4858] p-3 rounded-sm">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-[#2f4858] text-white">EREF</Badge>
                  </div>
                  <CardTitle className="text-2xl text-[#12283E]">
                    Équipe de Recherche en Énergies Fossiles
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#12283E] leading-relaxed mb-4">
                    L'EREF travaille sur l'optimisation de l'exploitation des ressources pétrolières et gazières,
                    avec un focus sur la réduction de l'impact environnemental.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#12283E]/60">
                      <Users className="w-4 h-4" />
                      <span>8-10 chercheurs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#12283E]/60">
                      <BookOpen className="w-4 h-4" />
                      <span>Domaines : Hydrocarbures, Uranium, Géologie, Raffinage, Efficacité énergétique</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#12283E] mb-4">Notre Équipe</h2>
            <p className="text-lg text-[#12283E]/70">Des experts en énergie et développement durable</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((membre, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center border border-gray-100 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="bg-[#2f4858] w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-[#12283E] mb-1">{membre.nom}</h3>
                    <p className="text-sm text-[#2f4858] font-semibold mb-2">{membre.role}</p>
                    <p className="text-xs text-[#12283E]/60">{membre.specialite}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Chercheurs", value: "22+" },
              { icon: BookOpen, label: "Publications", value: "60+" },
              { icon: TrendingUp, label: "Projets Actifs", value: "10" },
              { icon: Award, label: "Partenariats", value: "18+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center border border-gray-100 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="bg-[#2f4858] w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-[#12283E] mb-2">{stat.value}</div>
                    <div className="text-[#12283E]/70">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
