import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Shield, Users, BookOpen, TrendingUp, Award, Target, ArrowLeft, Cpu, Lightbulb } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ReCyb() {
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = location.state?.returnTo || '/recherche/poles-de-recherche'; // Page par défaut si pas spécifiée

  const domainesRecherche = [
    "Cryptographie & Sécurité des Communications",
    "Sécurité des Réseaux & Infrastructures",
    "Détection d'Intrusions & Forensique",
    "Blockchain & Technologies Distribuées",
    "Sécurité IoT & Systèmes Embarqués",
    "Cloud Computing & Sécurité dans le Cloud",
    "Cyberdéfense & Cyberstratégie",
  ];

  const projets = [
    {
      titre: "SecureNet Niger",
      description: "Plateforme de sécurisation des infrastructures réseau nationales",
      statut: "En cours",
    },
    {
      titre: "Blockchain Gov",
      description: "Solution blockchain pour la sécurité des données gouvernementales",
      statut: "En cours",
    },
    {
      titre: "CyberWatch",
      description: "Système de détection et prévention des cyberattaques en temps réel",
      statut: "Planifié",
    },
  ];

  const equipe = [
    { nom: "Dr. Issoufou Mahamane", role: "Directeur du Laboratoire", specialite: "Cybersécurité" },
    { nom: "Dr. Aïcha Moussa", role: "Chercheur Senior", specialite: "Cryptographie" },
    { nom: "Dr. Ibrahim Saidou", role: "Chercheur", specialite: "Réseaux" },
    { nom: "12+ Doctorants", role: "Équipe de recherche", specialite: "Diverses spécialités" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#2f4858] text-white overflow-hidden py-16">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80')",
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
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <div>
              <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30 px-3 py-1">
                RéCyb
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Laboratoire de Réseaux et CyberSécurité
              </h1>
              <p className="text-lg text-white/90">
                Protection des infrastructures numériques et expertise en cybersécurité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-[#D9D8D5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-[#D9D8D5] shadow-lg">
              <CardHeader className="bg-gradient-to-br from-[#2f4858]/5 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#2f4858] p-3 rounded-sm">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-[#12283E]">Mission & Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#12283E] mb-3">Notre Mission</h3>
                  <p className="text-[#12283E]/70 leading-relaxed">
                    Le Laboratoire de Réseaux et CyberSécurité (RéCyb) se consacre à la protection des infrastructures
                    numériques critiques et au développement de solutions de cybersécurité innovantes. Nous travaillons
                    sur la sécurisation des réseaux, la cryptographie avancée, et la défense contre les cybermenaces
                    pour garantir un cyberespace sûr et résilient.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#12283E] mb-3">Notre Vision</h3>
                  <p className="text-[#12283E]/70 leading-relaxed">
                    Devenir le centre d'excellence en cybersécurité de référence en Afrique de l'Ouest, contribuant
                    à la protection des infrastructures nationales et à la formation d'experts en sécurité des systèmes
                    d'information.
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
                        <Shield className="w-5 h-5 text-[#2f4858]" />
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
      <section className="py-20 bg-gray-50">
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
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-[#2f4858] text-white">ERSI</Badge>
                  </div>
                  <CardTitle className="text-2xl text-[#12283E]">
                    Équipe de Recherche en Sécurité des Infrastructures
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#12283E]/70 leading-relaxed mb-4">
                    L'ERSI développe des solutions de protection pour les infrastructures critiques,
                    incluant la détection d'intrusions et la sécurisation des réseaux.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#12283E]/60">
                      <Users className="w-4 h-4" />
                      <span>6-8 chercheurs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#12283E]/60">
                      <BookOpen className="w-4 h-4" />
                      <span>Domaines : Sécurité réseau, Détection d'intrusions, Forensique</span>
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
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-[#2f4858] text-white">ERCB</Badge>
                  </div>
                  <CardTitle className="text-2xl text-[#12283E]">
                    Équipe de Recherche en Cryptographie et Blockchain
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#12283E]/70 leading-relaxed mb-4">
                    L'ERCB se concentre sur les algorithmes cryptographiques avancés et les applications
                    de la blockchain pour la sécurisation des données.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#12283E]/60">
                      <Users className="w-4 h-4" />
                      <span>5-7 chercheurs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#12283E]/60">
                      <BookOpen className="w-4 h-4" />
                      <span>Domaines : Cryptographie, Blockchain, Sécurité des données</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#12283E] mb-4">Notre Équipe</h2>
            <p className="text-lg text-[#12283E]/70">Des experts en cybersécurité</p>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Chercheurs", value: "15+" },
              { icon: BookOpen, label: "Publications", value: "40+" },
              { icon: TrendingUp, label: "Projets Actifs", value: "6" },
              { icon: Award, label: "Certifications", value: "20+" },
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
