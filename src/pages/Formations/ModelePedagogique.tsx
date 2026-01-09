import { BookOpen, Users, Target, Lightbulb, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";

export default function ModelePedagogique() {
  const approaches = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Apprentissage collaboratif",
      description:
        "Des projets de groupe et des activités collaboratives pour développer les compétences de travail en équipe et d'échange de connaissances.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Approche par compétences",
      description:
        "Formation axée sur le développement de compétences pratiques et professionnelles directement applicables dans le monde du travail.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Pédagogie active",
      description:
        "Méthodes d'enseignement interactives qui placent l'étudiant au centre de son apprentissage avec des études de cas et des simulations.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Formation hybride",
      description:
        "Combinaison équilibrée de cours en présentiel et d'apprentissage en ligne pour une flexibilité optimale et une meilleure accessibilité.",
    },
  ];

  const strengths = [
    "Enseignants qualifiés et expérimentés",
    "Infrastructures modernes et équipements de pointe",
    "Partenariats avec les entreprises et institutions",
    "Suivi personnalisé des étudiants",
    "Programmes actualisés selon les besoins du marché",
    "Évaluation continue des compétences",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2f4858]">
        {/* Image de fond avec blur */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm brightness-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
          {/* Contenu principal */}
          <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

          </div>

        {/* Pancarte flottante */}
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[85%] md:w-[500px]"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="bg-white text-[#12283E] p-5 shadow-[10px_10px_0px_#2f4858] border-[#D9D8D5]"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <BookOpen className="w-4 h-4 text-[#2f4858]" />
              </motion.div>
              <h2 className="text-lg font-bold text-[#2f4858]">Modèle Pédagogique</h2>
            </div>
            <p className="text-[#12283E]/80 text-xs leading-relaxed text-center">
              Une approche innovante et centrée sur l'apprenant pour garantir
              l'excellence académique et la réussite professionnelle.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="py-16 bg-white mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-6 text-center"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Notre Vision Pédagogique
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              L'Université Numérique du Niger adopte un modèle pédagogique
              moderne et innovant qui allie théorie et pratique. Notre approche
              est conçue pour préparer les étudiants aux défis du monde
              professionnel tout en développant leur esprit critique et leur
              capacité d'innovation.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Nous croyons en une éducation qui va au-delà de la simple
              transmission de connaissances, en favorisant le développement de
              compétences transversales essentielles dans un monde en constante
              évolution.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Approaches Section */}
      <div className="py-16 bg-[#D9D8D5]/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos Approches Pédagogiques
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-2 border-[#D9D8D5] hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <motion.div
                      className="bg-[#2f4858] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {approach.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#2f4858] mb-4">
                      {approach.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {approach.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Strengths Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
              >
                <Award className="w-12 h-12 text-[#2f4858] mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-4">
                Nos Points Forts
              </h2>
              <p className="text-lg text-gray-700">
                Ce qui distingue notre modèle pédagogique
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-[#D9D8D5]/20 p-6 rounded-sm hover:bg-[#D9D8D5]/40 transition-all"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-[#2f4858] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{strength}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation Section */}
      <div className="py-16 bg-[#D9D8D5]/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-8 text-center"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Système d'Évaluation
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-2 border-[#D9D8D5]">
                <CardContent className="p-8">
                  <motion.p
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Notre système d'évaluation est basé sur une approche continue
                    qui permet de suivre la progression de chaque étudiant tout au
                    long de sa formation. Nous combinons plusieurs modalités
                    d'évaluation :
                  </motion.p>
                  <ul className="space-y-4">
                    <motion.li
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                    <div className="bg-[#2f4858] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2f4858] mb-2">
                        Contrôle continu
                      </h4>
                      <p className="text-gray-700">
                        Des évaluations régulières pour mesurer l'acquisition
                        progressive des connaissances
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-[#2f4858] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2f4858] mb-2">
                        Projets pratiques
                      </h4>
                      <p className="text-gray-700">
                        Des projets individuels et collectifs pour évaluer les
                        compétences pratiques
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-[#2f4858] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2f4858] mb-2">
                        Examens finaux
                      </h4>
                      <p className="text-gray-700">
                        Des évaluations de synthèse pour valider les acquis de
                        chaque module
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-[#2f4858] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2f4858] mb-2">
                        Stages et mémoires
                      </h4>
                      <p className="text-gray-700">
                        Des expériences professionnelles encadrées et des
                        travaux de recherche
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Rejoignez-nous
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Découvrez comment notre modèle pédagogique peut vous aider à
              atteindre vos objectifs académiques et professionnels
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 bg-[#2f4858] text-white border-2 border-[#2f4858] rounded-sm font-semibold hover:bg-white hover:text-[#2f4858] transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir nos formations
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white text-[#2f4858] border-2 border-[#2f4858] rounded-sm font-semibold hover:bg-[#2f4858] hover:text-white transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Processus d'admission
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

