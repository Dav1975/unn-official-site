import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRight, FlaskConical, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { easeOut, motion, Variants } from "framer-motion";

export default function PolesSection() {
  const poles = [
    {
      title: "Pôle Enseignement à Distance",
      description:
        "Formations numériques flexibles dans 7 facultés d’excellence.",
      icon: <Users className="w-12 h-12 text-[#163547]" />,
      href: "/poles/enseignement",
      gradient: "from-slate-50 via-blue-50 to-slate-100",
      ringColor: "ring-blue-500/20",
    },
    {
      title: "Pôle Recherche",
      description:
        "Laboratoires et équipes innovant pour un avenir numérique durable.",
      icon: <FlaskConical className="w-12 h-12 text-[#163547]" />,
      href: "/poles/recherche",
      gradient: "from-slate-50 via-teal-50 to-slate-100",
      ringColor: "ring-teal-500/20",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: easeOut },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50/50 to-white/50 relative overflow-hidden">
      {/* Arrière-plan animé léger */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-tr from-[#B8A458]/30 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#163547]/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#163547] via-[#1e3a4f] to-[#2C5159] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
              Nos pôles d’excellence
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight">
              Nos <span className="text-[#B8A458]">Pôles</span> d’Excellence
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos pôles d’enseignement à distance et de recherche,
              intégrant innovation numérique et excellence académique.
            </p>
            <Button
              size="lg"
              className="bg-[#B8A458] text-[#163547] font-semibold px-8 h-12 shadow-lg hover:bg-yellow-600 hover:shadow-xl transition"
            >
              Explorer les pôles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Liste des pôles */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-[#163547] mb-6"
          >
            Nos Deux Pôles
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-[#163547] to-[#2C5159] mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Enseignement à distance et recherche au service de l’innovation.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {poles.map((pole) => (
            <motion.div
              key={pole.title}
              variants={itemVariants}
              whileHover={{
                translateY: -12,
                boxShadow: "0 25px 35px rgba(22, 53, 71, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 160, damping: 12 }}
            >
              <Link to={pole.href}>
                <Card
                  className={`
                    relative p-8 rounded-sm border border-transparent bg-white shadow-md cursor-pointer
                    transition-all duration-500 hover:ring-4 ${pole.ringColor} 
                    before:absolute before:inset-0 before:bg-linear-to-br before:${pole.gradient} 
                    before:opacity-0 group-hover:before:opacity-30 before:transition-opacity before:duration-700
                    before:backdrop-blur-sm
                  `}
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-[#163547] rounded-full animate-ping" />
                  </div>
                  <CardHeader className="pb-8 relative z-10 flex items-center gap-4">
                    <div className="p-4 bg-[#B8A458]/20 rounded-full ring-2 ring-[#B8A458] shadow-sm">
                      {pole.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-[#163547] group-hover:text-[#2C5159] transition-colors duration-500">
                      {pole.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="mb-6 line-clamp-3 text-slate-700">
                      {pole.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#163547] hover:text-[#2C5159] hover:bg-[#163547]/10 p-2 rounded-full transition"
                    >
                      Découvrir{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
