import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { projetsRecherche } from "../../constants";
import { Users, TrendingUp, Building2, Calendar, DollarSign, CheckCircle2, Clock, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EquipesRecherche() {
  // Créer des données d'équipes basées sur les laboratoires
  const equipesRecherche = [
    {
      nom: "Équipe  de Recherche Intelligence Artificielle  (ERIA)",
      laboratoire: "LaMon & IA",
      responsable: "",
      membres: 0,
      doctorants: 0,
      domaines: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning"],
      description: "Équipe spécialisée dans le développement d'algorithmes d'IA avancés et leur application dans divers domaines.",
      projetsActifs: 0,
      publications: 0
    },
    {
      nom: "Équipe de Recherche Aide à la Décision et Optimisation Combinatoire, (ERADOC)",
      laboratoire: "LaMoN & IA",
      responsable: " ",
      membres: 0,
      doctorants: 0,
      domaines: ["Optimisation multicritère", "Décision dans l'incertain", "Polyèdre et Optimisation combinatoire", "Optimisation continue"],
      description: "Recherche sur l'aide àl a décision et sur l'optimisation combinatoire avancée.",
      projetsActifs: 0,
      publications: 0
    },
   //// {
   //   nom: "Équipe Big Data & Analytics",
   //   laboratoire: "LIAM",
  //    responsable: " ",
  //    membres: 0,
   //   doctorants: 0,
  //    domaines: ["Data Mining", "Machine Learning", "Data Visualization", "Predictive Analytics"],
 //     description: "Analyse et traitement de données massives pour extraire des insights significatifs.",
 //     projetsActifs: 0,
 //     publications: 0
 //   },
   // {
   //   nom: "Équipe Technologies Éducatives",
   //   laboratoire: "CEN",
   //   responsable: "",
     // membres: 15,
     // doctorants: 6,
     // domaines: ["E-learning", "EdTech", "Learning Analytics", "MOOC"],
     // description: "Innovation pédagogique et développement de solutions numériques pour l'éducation.",
    //  projetsActifs: 5,
    //  publications: 52
   // },
   // {
      //nom: "Équipe Transformation Digitale",
      //laboratoire: "CEN",
      //responsable: " ",
      //membres: 9,
      //doctorants: 3,
      //domaines: ["Digital Strategy", "Change Management", "Innovation", "UX Design"],
      //description: "Étude de l'impact de la transformation numérique sur les organisations et la société.",
      //projetsActifs: 3,
      //publications: 28
   // },
   // {
     // nom: "Équipe Blockchain & Applications Distribuées",
     // laboratoire: "LCS",
     // responsable: " ",
     // membres: 7,
     // doctorants: 2,
     // domaines: ["Blockchain", "Smart Contracts", "DApps", "Web3"],
     // description: "Recherche sur les technologies blockchain et leurs applications dans différents secteurs.",
     // projetsActifs: 2,
     // publications: 24
   // }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#2f4858] text-white ">
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
              <Users className="w-6 h-6 text-[#2f4858]" />
              <h2 className="text-2xl font-bold text-[#2f4858]">Nos Équipes de Recherche</h2>
            </div>
            <p className="text-[#12283E]/80 text-base leading-relaxed text-center">
              Des équipes pluridisciplinaires de chercheurs passionnés qui travaillent ensemble
              pour faire avancer la science et l'innovation dans le domaine du numérique.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-8 border border-[#2f4858]/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-8 justify-center">
              {[
                { icon: Users, label: "Équipes", value: equipesRecherche.length },
                { icon: Users, label: "Chercheurs", value: `${equipesRecherche.reduce((sum, eq) => sum + eq.membres, 0)}+` },
                { icon: TrendingUp, label: "Doctorants", value: equipesRecherche.reduce((sum, eq) => sum + eq.doctorants, 0) },
                { icon: CheckCircle2, label: "Projets Actifs", value: equipesRecherche.reduce((sum, eq) => sum + eq.projetsActifs, 0) }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-[#2f4858] w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-3 shadow-lg">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-sm text-[#12283E]/60 mb-1">{stat.label}</div>
                  <div className="text-3xl font-bold text-[#12283E]">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Équipes Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="bg-[#2f4858] p-3 rounded-sm shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Découvrez Nos Équipes</h2>
                <p className="text-[#12283E]/60 text-sm">Des équipes pluridisciplinaires d'excellence</p>
              </div>
            </div>
            <p className="text-lg text-[#12283E]/70 max-w-3xl ml-16">
              Chaque équipe est composée de chercheurs expérimentés, d'enseignants-chercheurs et de doctorants travaillant sur des thématiques de pointe.
            </p>
          </motion.div>

          <div className="space-y-8">
            {equipesRecherche.map((equipe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2f4858]/30">
                <div className="bg-gradient-to-br from-[#2f4858]/5 to-transparent p-8 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <Badge className="mb-4 bg-[#2f4858] text-white hover:bg-white hover:text-[#2f4858] border-2 border-[#2f4858] transition-all duration-300">
                        {equipe.laboratoire}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3 text-[#12283E]">{equipe.nom}</h3>
                      <div className="flex items-center text-[#12283E]/70">
                        <Users className="w-4 h-4 mr-2 text-[#2f4858]" />
                        <span className="font-medium">{equipe.responsable}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="bg-[#2f4858] w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-2 shadow-lg">
                          <span className="text-xl font-bold">{equipe.membres}</span>
                        </div>
                        <div className="text-xs text-[#12283E]/60 font-medium">Membres</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-[#2f4858] w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-2 shadow-lg">
                          <span className="text-xl font-bold">{equipe.doctorants}</span>
                        </div>
                        <div className="text-xs text-[#12283E]/60 font-medium">Doctorants</div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-[#12283E]/80 mb-6 leading-relaxed text-lg">
                    {equipe.description}
                  </p>

                  {/* Domaines de recherche */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-[#2f4858]/10 p-2 rounded-sm">
                        <Building2 className="w-4 h-4 text-[#2f4858]" />
                      </div>
                      <h4 className="font-semibold text-[#12283E]">Domaines de Recherche</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {equipe.domaines.map((domaine, idx) => (
                        <Badge key={idx} className="px-4 py-2 bg-white text-[#2f4858] border-2 border-[#2f4858]/20 text-sm font-semibold hover:bg-[#2f4858] hover:text-white hover:border-[#2f4858] transition-all cursor-pointer shadow-sm hover:shadow-md rounded-full">
                          {domaine}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats bottom */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-[#2f4858] flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-[#12283E]/60 font-medium">Projets actifs</div>
                        <div className="text-xl font-bold text-[#12283E]">{equipe.projetsActifs}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-[#2f4858] flex items-center justify-center shadow-md">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-[#12283E]/60 font-medium">Publications</div>
                        <div className="text-xl font-bold text-[#12283E]">{equipe.publications}+</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets de Recherche Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="bg-[#2f4858] p-3 rounded-sm shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Projets de Recherche Phares</h2>
                <p className="text-[#12283E]/60 text-sm">Innovation et excellence scientifique</p>
              </div>
            </div>
            <p className="text-lg text-[#12283E]/70 max-w-3xl ml-16">
              Découvrez quelques-uns des projets innovants menés par nos équipes de recherche.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projetsRecherche.map((projet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
              >
                <Card className="overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2f4858]/30">
                <CardHeader className="pb-4 bg-gradient-to-br from-[#2f4858]/5 to-transparent">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={
                      projet.statut === "En cours" ? "bg-[#2f4858] text-white border-2 border-[#2f4858]" :
                      projet.statut === "Démarrage" ? "bg-[#2f4858]/80 text-white border-2 border-[#2f4858]" :
                      "bg-[#2f4858]/60 text-white border-2 border-[#2f4858]"
                    }>
                      {projet.statut}
                    </Badge>
                    <Badge className="bg-white text-[#2f4858] border-2 border-[#2f4858]/20 hover:bg-[#2f4858] hover:text-white transition-all">
                      {projet.laboratoire}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 text-[#12283E]">{projet.titre}</CardTitle>
                  <CardDescription className="text-[#12283E]/70 leading-relaxed">{projet.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-4 border border-[#2f4858]/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#2f4858] flex items-center justify-center shadow-md">
                          <DollarSign className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-xs text-[#12283E]/60 font-medium">Budget</div>
                      </div>
                      <div className="font-bold text-[#12283E]">{projet.budget}</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-4 border border-[#2f4858]/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#2f4858] flex items-center justify-center shadow-md">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-xs text-[#12283E]/60 font-medium">Durée</div>
                      </div>
                      <div className="font-bold text-[#12283E]">{projet.duree}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-3 text-[#12283E]">Partenaires</div>
                    <div className="flex flex-wrap gap-2">
                      {projet.partenaires.map((partenaire, idx) => (
                        <Badge key={idx} className="text-xs bg-white text-[#2f4858] border border-[#2f4858]/20 hover:bg-[#2f4858] hover:text-white transition-all rounded-full">
                          {partenaire}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#2f4858] flex items-center justify-center mt-0.5 shadow-md">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-[#12283E]/60 font-medium">Impact: </span>
                        <span className="text-sm font-medium text-[#12283E]">{projet.impact}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#2f4858] to-[#1a2d3d] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: "url('/images/fond.jpg')"
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2f4858]/90"></div>

        {/* Motif décoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Rejoignez Nos Équipes</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Vous êtes chercheur, doctorant ou post-doctorant ? Rejoignez nos équipes de recherche et contribuez à l'avancement des connaissances scientifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Chercheurs", description: "Opportunités pour chercheurs confirmés et enseignants-chercheurs", btnText: "En savoir plus" },
              { icon: TrendingUp, title: "Doctorants", description: "Programmes de doctorat dans tous nos laboratoires", btnText: "Postuler" },
              { icon: Clock, title: "Post-doctorants", description: "Positions post-doctorales sur projets de recherche", btnText: "Découvrir" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full bg-white/95 backdrop-blur-sm border-none hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-sm">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="bg-[#2f4858] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#12283E] mb-4">{item.title}</h3>
                    <p className="text-[#12283E]/70 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <Button className="bg-[#2f4858] hover:bg-white text-white hover:text-[#2f4858] border-2 border-[#2f4858] w-full transition-all duration-300 rounded-sm">
                      {item.btnText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button size="lg" className="bg-white text-[#2f4858] hover:bg-transparent hover:text-white border-2 border-white font-semibold px-8 py-6 transition-all duration-300 rounded-sm shadow-xl hover:shadow-2xl">
              <Mail className="w-5 h-5 mr-2" />
              Nous Contacter
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

