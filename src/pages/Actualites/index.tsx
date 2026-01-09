import { motion } from "framer-motion";
import { Newspaper, Calendar, TrendingUp, Filter, Search } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { actualites } from "../../constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const navigate = useNavigate();

  // Créer plus d'actualités pour la démonstration
  const extendedActualites = [
    ...actualites,
  ];

  const categories = ["Tous", "Événement", "Recherche", "Vie Étudiante"];

  const filteredActualites =
    selectedCategory === "Tous"
      ? extendedActualites
      : extendedActualites.filter((actu) => actu.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2f4858]">
        {/* Image de fond avec blur */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm brightness-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1950&q=80')",
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
                <Newspaper className="w-4 h-4 text-[#2f4858]" />
              </motion.div>
              <h2 className="text-lg font-bold text-[#2f4858]">Actualités</h2>
            </div>
            <p className="text-[#12283E]/80 text-xs leading-relaxed text-center">
              Restez informer des dernières nouvelles, événements et réalisations
              de l'Université Numérique du Niger.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Filter Section */}
      <div className="py-12 bg-[#D9D8D5]/20 mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="bg-white rounded-sm shadow-lg p-8 border-2 border-[#D9D8D5]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#2f4858] mb-3 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Rechercher une actualité
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tapez un mot-clé, un titre ou une catégorie..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-[#D9D8D5] rounded-sm focus:border-[#2f4858] focus:outline-none focus:ring-2 focus:ring-[#2f4858]/20 transition-all text-gray-700 placeholder:text-gray-400"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#2f4858]" />
                <motion.button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-[#2f4858] text-white rounded-sm font-semibold hover:bg-[#3d5a6d] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rechercher
                </motion.button>
              </div>
            </div>

            {/* Categories Filter */}
            <div className="border-t-2 border-[#D9D8D5] pt-6">
              <label className="block text-sm font-semibold text-[#2f4858] mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtrer par catégorie
              </label>
              <div className="flex items-center gap-3 flex-wrap">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-sm font-semibold transition-all shadow-md ${
                      selectedCategory === category
                        ? "bg-[#2f4858] text-white shadow-[#2f4858]/30"
                        : "bg-white text-[#2f4858] border-2 border-[#D9D8D5] hover:bg-[#D9D8D5]/40 hover:border-[#2f4858]/50"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Actualités Grid */}
      <div className="py-16 bg-[#D9D8D5]/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-4">
              Actualités
            </h2>
            <p className="text-lg text-gray-700">
              Dernières nouvelles et événements au sein de l'UNN
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredActualites.map((actu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-[#D9D8D5] hover:border-[#D9D8D5] group h-full cursor-pointer"
                  onClick={() => navigate(`/actualites/${i}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={actu.images[0]} // Utiliser seulement la première image
                      alt={actu.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#2f4858] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {actu.category}
                      </span>
                    </div>
                    {/* Indicateur s'il y a plusieurs images */}
                    {actu.images.length > 1 && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/50 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          +{actu.images.length - 1} photos
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-[#12283E] text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{actu.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#12283E] mb-3 group-hover:text-[#2f4858] transition-colors">
                      {actu.title}
                    </h3>
                    <p className="text-[#12283E]/70 mb-4 line-clamp-3">
                      {actu.description}
                    </p>
                    <button className="text-[#2f4858] font-semibold hover:gap-3 flex items-center gap-2 group/btn transition-all">
                      Lire plus
                      <TrendingUp className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination ou Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-[#2f4858] text-white border-2 border-[#2f4858] rounded-sm font-semibold hover:bg-white hover:text-[#2f4858] transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Charger plus d'actualités
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2f4858] via-[#3d5a6d] to-[#2f4858]">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
              </div>

              <div className="relative p-12 md:p-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-left">
                    <motion.div
                      className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <Newspaper className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">Newsletter</span>
                    </motion.div>

                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-white mb-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Restez Informer
                    </motion.h2>

                    <motion.p
                      className="text-lg text-white/90 mb-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Abonnez-vous à notre newsletter et recevez les dernières actualités, événements et opportunités directement dans votre boîte mail.
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-4 text-white/80 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Actualités hebdomadaires</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Événements exclusifs</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Form */}
                  <motion.div
                    className="bg-white rounded-sm p-8 shadow-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#2f4858] mb-2">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          placeholder="Entrez votre nom"
                          className="w-full px-4 py-3 border-2 border-[#D9D8D5] rounded-sm focus:border-[#2f4858] focus:outline-none focus:ring-2 focus:ring-[#2f4858]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#2f4858] mb-2">
                          Adresse email
                        </label>
                        <input
                          type="email"
                          placeholder="exemple@email.com"
                          className="w-full px-4 py-3 border-2 border-[#D9D8D5] rounded-sm focus:border-[#2f4858] focus:outline-none focus:ring-2 focus:ring-[#2f4858]/20 transition-all"
                        />
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mt-1 w-4 h-4 text-[#2f4858] border-[#D9D8D5] rounded focus:ring-[#2f4858]"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                          J'accepte de recevoir des emails et je peux me désabonner à tout moment
                        </label>
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full px-8 py-4 bg-[#2f4858] text-white rounded-sm font-bold hover:bg-[#3d5a6d] transition-all shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        S'abonner maintenant
                      </motion.button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Archives Section */}
      <div className="py-16 bg-[#D9D8D5]/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-6">
              Archives
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Consultez les actualités des mois et années précédents
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Janvier 2024", "Décembre 2023", "Novembre 2023", "Octobre 2023"].map(
                (month, index) => (
                  <motion.button
                    key={month}
                    className="px-6 py-3 bg-white border-2 border-[#D9D8D5] rounded-sm font-semibold text-[#2f4858] hover:bg-[#2f4858] hover:text-white hover:border-[#2f4858] transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {month}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

