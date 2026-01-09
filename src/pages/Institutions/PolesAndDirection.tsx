import { motion } from "framer-motion";
import { useState } from "react";
import { Quote } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import {
  Building2,
  GraduationCap,
  Lightbulb,
  Mail,
  Brain,
  Microscope,
  Leaf,
  Gavel,
  LineChart,
  Stethoscope,
  Wrench,
  Atom,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

interface Person {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  image?: string;
}

interface Pole {
  id: string;
  name: string;
  acronym: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  responsable?: Person;
  staff?: Person[];
}

interface Unite {
  name: string;
  acronym: string;
  chef: Person;
}

const PolesAndDirection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<
    "direction" | "ufad" | "uren"
  >("direction");

  const poleMapping: { [key: string]: string } = {
    'shs': 'shs',
    'mpc': 'mpc',
    'sna': 'sna',
    'sjp': 'sjp',
    'seg': 'seg',
    'mpo': 'mpo',
    'sti': 'sti',
  };

  // Mapping des IDs des entités de recherche vers leurs routes
  const rechercheMapping: { [key: string]: string } = {
    'pole-recherche': '/recherche/poles-recherche',
    'pole-formation': '/recherche/poles-recherche',
    'recherche': '/recherche/poles-recherche',
    'formation-expertise': '/recherche/poles-recherche',
  };

  // Fonction pour naviguer vers les détails d'un pôle
  const navigateToPoleDetails = (nodeId: string) => {
    const poleId = poleMapping[nodeId];
    if (poleId) {
      navigate('/formations/pole-details', {
        state: {
          poleId,
          returnTo: '/institutions/directions-et-poles' // Page d'origine
        }
      });
    }
  };

  // Fonction pour naviguer vers les détails des entités de recherche
  const navigateToRechercheDetails = (nodeId: string) => {
    if (nodeId === 'recherche') {
      navigate('/formations/pole-details', {
        state: {
          poleId: 'recherche',
          returnTo: '/institutions/directions-et-poles'
        }
      });
    } else if (nodeId === 'formation-expertise') {
      navigate('/formations/pole-details', {
        state: {
          poleId: 'formation_expertise',
          returnTo: '/institutions/directions-et-poles'
        }
      });
    } else {
      // Fallback vers la page de recherche générale
      const route = rechercheMapping[nodeId];
      if (route) {
        navigate(route, {
          state: {
            returnTo: '/institutions/directions-et-poles'
          }
        });
      }
    }
  };
  // Essai
           
  // Fin Essai
  const unites: Unite[] = [
    {
      name: "Unité de Formation à Distance",
      acronym: "UFAD",
      chef: {
        name: "Dr. Moussa Sagayar (MC)",
        role: "Directeur de l'UFAD",
        email: "ufad@unn.ne",
      },
    },
    {
      name: "Unité de Recherche et d'Expertise Numérique",
      acronym: "UREN",
      chef: {
        name: "Pr. Mamane Souleye Ibrahim",
        role: "Directeur de l'UREN",
        email: "uren@unn.ne",
      },
    },
  ];

  const polesUFAD: Pole[] = [
    {
      id: "shs",
      name: "Sciences Humaines et Sociales",
      acronym: "SHS",
      description:
        "Formation en psychologie, sociologie, sciences de l'éducation et sciences sociales.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Dr. Moussa Sagayar (MC)",
        role: "Responsable Pôle SHS",
        email: "shs@universitenumerique.ne",
      },
    },
    {
      id: "mpc",
      name: "Mathématiques Physiques Chimie",
      acronym: "MPC",
      description:
        "Programmes en mathématiques appliquées, physique théorique et expérimentale, chimie.",
      icon: <Atom className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Dr. Moussa Sagayar (MC)",
        role: "Responsable Pôle MPC",
        email: "mpc@universitenumerique.ne",
      },
    },
    {
      id: "sna",
      name: "Sciences Naturelles Agronomiques",
      acronym: "SNA",
      description:
        "Formation en biologie, agronomie, sciences environnementales et développement durable.",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Dr. Moussa Sagayar (MC)",
        role: "Responsable Pôle SNA",
        email: "sna@universitenumerique.ne",
      },
    },
    {
      id: "sjp",
      name: "Sciences Juridiques et Politiques",
      acronym: "SJP",
      description:
        "Droit, sciences politiques, relations internationales et administration publique.",
      icon: <Gavel className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Dr. Moussa Sagayar (MC)",
        role: "Responsable Pôle SJP",
        email: "sjp@universitenumerique.ne",
      },
    },
    {
      id: "seg",
      name: "Sciences Économiques de Gestion",
      acronym: "SEG",
      description:
        "Économie, gestion d'entreprise, finance, comptabilité et entrepreneuriat.",
      icon: <LineChart className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Dr. Moussa Sagayar (MC)",
        role: "Responsable Pôle SEG",
        email: "seg@universitenumerique.ne",
      },
    },
    {
      id: "mpo",
      name: "Médecine Pharmacie et Odontostomatologie",
      acronym: "MPO",
      description:
        "Formation médicale, pharmacie, sciences dentaires et sciences de la santé.",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Dr. Moussa Sagayar (MC)",
        role: "Responsable Pôle MPO",
        email: "mpo@universitenumerique.ne",
      },
    },
    {
      id: "sti",
      name: "Sciences Techniques de l'Ingénierie",
      acronym: "STI",
      description:
        "Génie civil, génie électrique, génie mécanique, informatique et télécommunications.",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Dr. Moussa Sagayar (MC)",
        role: "Responsable Pôle STI",
        email: "sti@universitenumerique.ne",
      },
    },
  ];

  const polesUREN: Pole[] = [
    {
      id: "recherche",
      name: "Pôle de Recherche",
      acronym: "PR",
      description:
        "Coordination des activités de recherche, gestion des laboratoires et publications scientifiques.",
      icon: <Microscope className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Prof. Mamane Souleye Ibrahim",
        role: "Responsable Pôle Recherche",
        email: "recherche@universitenumerique.ne",
      },
    },
    {
      id: "formation-expertise",
      name: "Pôle de Formation et d'Expertise",
      acronym: "PFE",
      description:
        "Formations continues, certifications professionnelles et expertises techniques.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-[#D9D8D5] to-[#D9D8D5]",
      responsable: {
        name: "Prof. Mamane Souleye Ibrahim",
        role: "Responsable Pôle Formation",
        email: "formation@universitenumerique.ne",
      },
    },
  ];

    /*const laboratoires = [
    {
      name: "LaMoN&IA",
      fullName:
        "Laboratoire de Modélisation Numérique et Intelligence Artificielle",
      description:
        "Recherche avancée en IA, machine learning, data science et modélisation numérique.",
      directeur: {
        name: "Prof. Mamane Souleye Ibrahim",
        email: "lamonia@universitenumerique.ne",
      },
    },
  ];*/

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#2f4858] text-white ">
        {/* Image de fond avec effet blur */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center blur-lg  z-0"
          style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1950&q=80')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>


        {/* Contenu principal */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

          </motion.div>
        </div>

        {/* Pancarte flottante */}
        <motion.div
          className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[800px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ y: -5 }}
        >
          <div className="bg-white text-[#12283E] p-8 shadow-[12px_12px_0px_#2f4858] border-2 border-gray-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-[#2f4858]" />
              <h2 className="text-2xl font-bold text-[#2f4858]">Structure Organisationnelle</h2>
            </div>
            <p className="text-[#12283E]/80 text-base leading-relaxed text-center mb-6">
              L'Université Numérique s'organise autour de deux grandes unités : l'UFAD (Formation à Distance) 
              et l'UREN (Recherche et Expertise Numérique), chacune regroupant des pôles spécialisés.
            </p>

            {/* Navigation par boutons */}
            <div className="flex gap-3 justify-center flex-wrap">
              {[
                {
                  id: "direction",
                  label: "Direction",
                  icon: <Building2 className="w-5 h-5" />,
                },
                {
                  id: "ufad",
                  label: "UFAD",
                  icon: <GraduationCap className="w-5 h-5" />,
                },
                {
                  id: "uren",
                  label: "UREN",
                  icon: <Lightbulb className="w-5 h-5" />,
                },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === tab.id
                      ? "bg-[#2f4858] text-white shadow-xl"
                      : "bg-gray-100 text-[#12283E] hover:bg-gray-200 hover:shadow-lg"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <div className="relative ">
          {/* Cercles décoratifs */}
          <div className="absolute inset-0 pointer-events-none z-0 ">
              <motion.div
                  className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#21363F]/40"
                  initial={{ opacity: 0 }}
                  animate={{
                      opacity: 1,
                      scale: [1, 1.1, 1],
                  }}
                  transition={{
                      opacity: { duration: 0.8 },
                      scale: {
                          duration: 15,
                          repeat: Infinity,
                          ease: "easeInOut",
                      }
                  }}
              />
              <motion.div
                  className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#21363F]/40"
                  initial={{ opacity: 0 }}
                  animate={{
                      opacity: 1,
                      scale: [1, 1.05, 1],
                  }}
                  transition={{
                      opacity: { duration: 1, delay: 0.2 },
                      scale: {
                          duration: 18,
                          repeat: Infinity,
                          ease: "easeInOut",
                      }
                  }}
              />
          </div>
          {/* Direction Section */}
          {selectedCategory === "direction" && (
              <div className="bg-gray-50 py-20 mt-40 ">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-center mb-16"
                      >
                          <div className="inline-flex items-center gap-2 bg-[#2f4858] px-4 py-2 rounded-sm mb-4">
                              <Building2 className="w-5 h-5 text-white" />
                              <span className="text-white font-semibold">Direction</span>
                          </div>
                          <h2 className="text-4xl font-bold text-[#12283E] mb-4">
                              Structure Académique
                          </h2>
                          <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
                              Les instances qui dirigent et coordonnent notre institution
                          </p>
                      </motion.div>
             
                      <div className="grid md:grid-cols-2 gap-8 z-10 relative">
                          {/* UFAD */}
                          <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.15, duration: 0.6 }}
                          >
                              <Card className="h-full border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                                  <CardContent className="p-8">
                                      <div className="bg-[#2f4858] w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all shadow-lg">
                                          <GraduationCap className="w-10 h-10" />
                                      </div>
                                      <div className="inline-block bg-[#2f4858] text-white px-3 py-1 rounded-sm text-xs font-bold mb-3">
                                          Unité de Formation
                                      </div>
                                      <h3 className="text-2xl font-bold text-[#12283E] mb-4">
                                          UFAD
                                      </h3>
                                      <p className="text-[#12283E]/70 leading-relaxed mb-6">
                                          Coordonne l'ensemble des activités d'enseignement et de
                                          formation à distance à travers 7 pôles académiques
                                          couvrant tous les domaines de formation.
                                      </p>

                                      <div className="space-y-3 pt-4 border-t-2 border-gray-200">
                                          <h4 className="font-semibold text-[#12283E] text-sm mb-3">
                                              Chef d'Unité :
                                          </h4>
                                          <div className="bg-gray-50 p-3 rounded-sm mb-4 hover:bg-gray-100 transition-colors">
                                              <p className="font-bold text-[#12283E] text-sm">
                                                  {unites[0].chef.name}
                                              </p>
                                              <p className="text-xs text-[#12283E]/70">
                                                  {unites[0].chef.role}
                                              </p>
                                          </div>
                                          <h4 className="font-semibold text-[#12283E] text-sm mb-2">
                                              Pôles d'enseignement :
                                          </h4>
                                          <ul className="space-y-2 text-xs text-[#12283E]/70">
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-[#2f4858] rounded-full"></span>
                                                  <span>7 pôles académiques</span>
                                              </li>
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-[#2f4858] rounded-full"></span>
                                                  <span>Formation multidisciplinaire</span>
                                              </li>
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-[#2f4858] rounded-full"></span>
                                                  <span>Programmes certifiants</span>
                                              </li>
                                          </ul>
                                          <motion.button
                                              onClick={() => setSelectedCategory("ufad")}
                                              whileHover={{ scale: 1.02 }}
                                              whileTap={{ scale: 0.98 }}
                                              className="w-full mt-4 px-4 py-3 bg-[#2f4858] text-white border-2 border-[#2f4858] text-sm font-bold hover:bg-white hover:text-[#2f4858] transition-all shadow-md hover:shadow-xl"
                                          >
                                              Voir les Pôles
                                          </motion.button>
                                      </div>
                                  </CardContent>
                              </Card>
                          </motion.div>

                          {/* UREN */}
                          <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                          >
                              <Card className="h-full border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                                  <CardContent className="p-8">
                                      <div className="bg-[#2f4858] w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all shadow-lg">
                                          <Lightbulb className="w-10 h-10" />
                                      </div>
                                      <div className="inline-block bg-[#2f4858] text-white px-3 py-1 rounded-sm text-xs font-bold mb-3">
                                          Unité de Recherche et d'Expertise
                                      </div>
                                      <h3 className="text-2xl font-bold text-[#12283E] mb-4">
                                          UREN
                                      </h3>
                                      <p className="text-[#12283E]/70 leading-relaxed mb-6">
                                          Pilote les activités de recherche et d'innovation,
                                          coordonne les laboratoires et développe l'expertise dans
                                          les domaines numériques stratégiques.
                                      </p>

                                      <div className="space-y-3 pt-4 border-t-2 border-gray-200">
                                          <h4 className="font-semibold text-[#12283E] text-sm mb-3">
                                              Chef d'Unité :
                                          </h4>
                                          <div className="bg-gray-50 p-3 rounded-sm mb-4 hover:bg-gray-100 transition-colors">
                                              <p className="font-bold text-[#12283E] text-sm">
                                                  {unites[1].chef.name}
                                              </p>
                                              <p className="text-xs text-[#12283E]/70">
                                                  {unites[1].chef.role}
                                              </p>
                                          </div>
                                          <h4 className="font-semibold text-[#12283E] text-sm mb-2">
                                              Missions principales :
                                          </h4>
                                          <ul className="space-y-2 text-xs text-[#12283E]/70">
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-[#2f4858] rounded-full"></span>
                                                  <span>Recherche scientifique</span>
                                              </li>
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-[#2f4858] rounded-full"></span>
                                                  <span>Formation & Expertise</span>
                                              </li>
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-[#2f4858] rounded-full"></span>
                                                  <span>Innovation numérique</span>
                                              </li>
                                          </ul>
                                          <motion.button
                                              onClick={() => setSelectedCategory("uren")}
                                              whileHover={{ scale: 1.02 }}
                                              whileTap={{ scale: 0.98 }}
                                              className="w-full mt-4 px-4 py-3 bg-[#2f4858] text-white border-2 border-[#2f4858] text-sm font-bold hover:bg-white hover:text-[#2f4858] transition-all shadow-md hover:shadow-xl"
                                          >
                                              Voir les Pôles
                                          </motion.button>
                                      </div>
                                  </CardContent>
                              </Card>
                          </motion.div>
                      </div>
                  </div>
              </div>
          )}

          {/* UFAD Poles Section */}
          {selectedCategory === "ufad" && (
              <div className="bg-white py-20 mt-40">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-center mb-16"
                      >
           {/* Essai*/}
           <div className="relative bg-white ">
            {/* Formes géométriques décoratives */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    className="absolute -top-4 -left-0 w-80 h-80 rounded-full bg-[#2f4858]/70"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                            </div>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20 relative">
                <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                    {/* Directeur UFAD Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-24 bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/images/sag.jpg"
                                alt="Recteur"
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-[#12283E] mb-2">
                                    Dr. Moussa Sagayar MC
                                </h3>
                                <p className="text-[#12283E]/70 text-sm">
                                    Directeur  de l'Unité de la Formation à Distance
                                </p>
                            </div>
                        </div>
                    </motion.div>
                        {/* Message Content */}
                   {/* Message Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Quote Introduction */}
                        <div className="relative  bg-[#2f4858]  p-8 rounded-sm text-white shadow-xl">
                            <Quote className="absolute top-4 right-4 w-12 h-12 text-white/20" />
                            <p className="text-xl font-bold italic leading-relaxed">
                                "La formation à distance offre une opportunité unique d’apprendre sans contrainte de lieu ni d’horaire. Grâce aux outils numériques modernes, les étudiants suivent des cours de qualité tout en conciliant études, travail et vie personnelle. Cette modalité d’
                                apprentissage favorise l’autonomie, la responsabilité et l’accès à l’enseignement supérieur pour tous. Elle représente aujourd’hui une solution efficace, flexible et tournée vers l’avenir."
                            </p>
                        </div>
                     </motion.div>
                    
                 </div>
            </div>

        </div>

                         
                         {/* Fin Essai*/}


                          <div className="inline-flex items-center gap-2 bg-[#2f4858] px-4 py-2 rounded-sm mb-4">
                              <GraduationCap className="w-5 h-5 text-white" />
                              <span className="text-white font-semibold">Formation</span>
                          </div>
                          <h2 className="text-4xl font-bold text-[#12283E] mb-4">
                              UFAD
                          </h2>
                          <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
                              Unité de Formation à Distance - 7 pôles académiques couvrant l'ensemble des domaines de formation
                          </p>
                      </motion.div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {polesUFAD.map((pole, i) => (
                              <motion.div
                                  key={pole.id}
                                  initial={{ opacity: 0, y: 40 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1, duration: 0.6 }}
                                  onClick={() => navigateToPoleDetails(pole.id)}
                                  style={{ cursor: 'pointer' }}
                              >
                                  <Card className="h-full border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden rounded-sm hover:border-[#2f4858]">
                                      <CardContent className="p-6">
                                          <div className="bg-[#2f4858] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-all shadow-lg">
                                              {pole.icon}
                                          </div>
                                          <div className="mb-4">
                                              <div className="inline-block bg-[#2f4858] text-white px-3 py-1 rounded-sm text-sm font-bold mb-3">
                                                  {pole.acronym}
                                              </div>
                                              <h3 className="text-xl font-bold text-[#12283E] mb-3 group-hover:text-[#2f4858] transition-colors">
                                                  {pole.name}
                                              </h3>
                                              <p className="text-[#12283E]/70 text-sm leading-relaxed mb-4">
                                                  {pole.description}
                                              </p>
                                          </div>
                                          {pole.responsable && (
                                              <div className="pt-4 border-t-2 border-gray-200">
                                                  <p className="text-sm text-[#12283E] font-semibold mb-1">
                                                      Responsable
                                                  </p>
                                                  <p className="text-[#12283E] font-medium">
                                                      {pole.responsable.name}
                                                  </p>
                                                  <p className="text-[#12283E]/70 text-xs">
                                                      {pole.responsable.role}
                                                  </p>
                                                  {pole.responsable.email && (
                                                      <div className="flex items-center gap-2 mt-2">
                                                          <Mail className="w-3 h-3 text-[#12283E]" />
                                                          <span className="text-xs text-[#12283E]/70">
                                {pole.responsable.email}
                              </span>
                                                      </div>
                                                  )}
                                              </div>
                                          )}
                                          {/* Indicateur visuel de cliquabilité */}
                                          <div className="mt-4 text-center">
                                              <span className="text-xs text-[#2f4858] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                                  Cliquer pour voir les détails →
                                              </span>
                                          </div>
                                      </CardContent>
                                  </Card>
                              </motion.div>
                          ))}
                      </div>
                  </div>
              </div>
          )}

          {/* UREN Poles Section */}
          {selectedCategory === "uren" && (
              <div className="bg-white py-20 mt-40">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-center mb-16"
                       >
                         {/* Essai*/}
        {/*    <div className="relative bg-white ">
            {/* Formes géométriques décoratives */}
           {/*   <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    className="absolute -top-4 -left-0 w-80 h-80 rounded-full bg-[#2f4858]/70"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
             </div>  */}
            
                         
                         {/* Fin Essai*/}

                          <div className="inline-flex items-center gap-2 bg-[#2f4858] px-4 py-2 rounded-sm mb-4">
                              <Lightbulb className="w-5 h-5 text-white" />
                              <span className="text-white font-semibold">Recherche</span>
                          </div>
                          <h2 className="text-4xl font-bold text-[#12283E] mb-4">
                              UREN
                          </h2>
                          <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
                              Unité de Recherche et d'Expertise Numérique - 2 pôles dédiés à la recherche, l'innovation et l'expertise
                          </p>
                      </motion.div>

                      <div className="grid md:grid-cols-2 gap-8 mb-16">
                          {polesUREN.map((pole, i) => (
                              <motion.div
                                  key={pole.id}
                                  initial={{ opacity: 0, y: 40 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.2, duration: 0.6 }}
                                  onClick={() => navigateToRechercheDetails(pole.id)}
                                  style={{ cursor: 'pointer' }}
                              >
                                  <Card className="h-full border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden rounded-sm hover:border-[#2f4858]">
                                      <CardContent className="p-8">
                                          <div className="bg-[#2f4858] w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all shadow-lg">
                                              {pole.icon}
                                          </div>
                                          <div className="inline-block bg-[#2f4858] text-white px-3 py-1 rounded-sm text-sm font-bold mb-4">
                                              {pole.acronym}
                                          </div>
                                          <h3 className="text-2xl font-bold text-[#12283E] mb-4 group-hover:text-[#2f4858] transition-colors">
                                              {pole.name}
                                          </h3>
                                          <p className="text-[#12283E]/70 leading-relaxed mb-6">
                                              {pole.description}
                                          </p>
                                          {pole.responsable && (
                                              <div className="pt-6 border-t-2 border-gray-200">
                                                  <p className="text-sm text-[#12283E] font-semibold mb-2">
                                                      Responsable
                                                  </p>
                                                  <p className="text-[#12283E] font-medium text-lg">
                                                      {pole.responsable.name}
                                                  </p>
                                                  <p className="text-[#12283E]/70 text-sm mb-2">
                                                      {pole.responsable.role}
                                                  </p>
                                                  {pole.responsable.email && (
                                                      <div className="flex items-center gap-2">
                                                          <Mail className="w-4 h-4 text-[#12283E]" />
                                                          <span className="text-sm text-[#12283E]/70">
                                {pole.responsable.email}
                              </span>
                                                      </div>
                                                  )}
                                              </div>
                                          )}
                                          {/* Indicateur visuel de cliquabilité */}
                                          <div className="mt-4 text-center">
                                              <span className="text-sm text-[#2f4858] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                                  Cliquer pour explorer →
                                              </span>
                                          </div>
                                      </CardContent>
                                  </Card>
                              </motion.div>
                          ))}
                      </div>

                      {/* Laboratoires
                      <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                      >
                          <h3 className="text-3xl font-bold text-[#12283E] mb-8 text-center">
                              Laboratoires de Recherche
                          </h3>
                          {laboratoires.map((lab, i) => (
                              <Card
                                  key={i}
                                  className="border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden rounded-sm"
                              >
                                  <CardContent className="p-8">
                                      <div className="flex items-start gap-6">
                                          <div className="bg-[#2f4858] w-24 h-24 rounded-full flex items-center justify-center text-white flex-shrink-0 hover:scale-110 transition-all shadow-lg">
                                              <FlaskConical className="w-12 h-12" />
                                          </div>
                                          <div className="flex-1">
                                              <div className="inline-block bg-[#2f4858] text-white px-3 py-1 rounded-sm text-sm font-bold mb-3">
                                                  {lab.name}
                                              </div>
                                              <h4 className="text-2xl font-bold text-[#12283E] mb-3">
                                                  {lab.fullName}
                                              </h4>
                                              <p className="text-[#12283E]/70 leading-relaxed mb-4">
                                                  {lab.description}
                                              </p>
                                              <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-200">
                                                  <div>
                                                      <p className="text-sm text-[#12283E] font-semibold">
                                                          Directeur
                                                      </p>
                                                      <p className="text-[#12283E] font-medium">
                                                          {lab.directeur.name}
                                                      </p>
                                                  </div>
                                                  <div className="flex items-center gap-2 text-[#12283E]/70">
                                                      <Mail className="w-4 h-4 text-[#2f4858]" />
                                                      <span className="text-sm">
                              {lab.directeur.email}
                            </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </CardContent>
                              </Card>
                          ))}
                      </motion.div>*/}
                  </div>
              </div>
          )}
      </div>
    </div>
  );
};

export default PolesAndDirection;
