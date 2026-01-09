import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Share2, Eye, Download, Tag, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { actualites } from "../../constants";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";

export default function ActualiteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Récupérer la page de retour depuis le state ou utiliser /actualites par défaut
  const returnTo = location.state?.returnTo || '/actualites';

  // Récupérer l'actualité par ID (en utilisant l'index comme ID)
  const actualite = actualites[Number(id)];

  // Si l'actualité n'existe pas, rediriger vers la page des actualités
  useEffect(() => {
    if (!actualite) {
      navigate('/actualites');
    }
  }, [actualite, navigate]);

  if (!actualite) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-xl text-gray-500">Actualité non trouvée</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === actualite.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? actualite.images.length - 1 : prev - 1
    );
  };

  const relatedActualites = actualites
    .filter((actu, index) => index !== Number(id) && actu.category === actualite.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Design harmonisé PoleDetails */}
      <div className="relative bg-gradient-to-br from-[#2f4858] to-[#1a2d3d] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: `url('${actualite.images[0]}')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-[#2f4858]/70"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate(returnTo)}
              className="flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">
                {returnTo === '/' ? 'Retour à l\'accueil' : 'Retour aux actualités'}
              </span>
            </button>
            <div className="flex items-start gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border border-white/20">
                <div className="text-white">
                  <Tag className="w-12 h-12" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-1.5 text-sm font-bold mb-4 rounded-sm inline-block">
                  {actualite.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {actualite.title}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-3xl mb-6">
                  {actualite.description}
                </p>
                <div className="flex items-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{actualite.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min de lecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>142 vues</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contenu détaillé simplifié - textes noirs et lisibles */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-8">
              <p className="text-xl text-black font-medium leading-relaxed">
                {actualite.description}
              </p>

              <p className="text-lg text-black leading-relaxed">
                Cette initiative s'inscrit dans la stratégie de développement de l'Université Numérique du Niger
                visant à renforcer ses capacités institutionnelles et à consolider son positionnement dans
                l'écosystème de l'enseignement supérieur numérique africain.
              </p>

              <p className="text-lg text-black leading-relaxed">
                Les retombées de cette initiative contribuent au renforcement des liens de coopération
                inter-universitaire et à l'amélioration continue de la qualité de l'enseignement
                dispensé par l'UNN.
              </p>

              <p className="text-lg text-black leading-relaxed">
                L'UNN poursuit son engagement dans le développement de l'excellence académique
                et la promotion de l'innovation pédagogique numérique au service de la formation
                des étudiants nigériens et africains.
              </p>
            </div>

            <motion.div
              className="mt-16 flex items-center justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                className="flex items-center gap-2 px-8 py-3 bg-[#2f4858] text-white rounded-lg hover:bg-[#3d5a6d] transition-all shadow-lg border border-transparent"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-5 h-5" />
                Partager
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-8 py-3 bg-white text-[#2f4858] rounded-lg hover:bg-[#2f4858] hover:text-white transition-all border border-[#2f4858] shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Télécharger PDF
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Galerie d'images redessinée - placée à la fin */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="py-20">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* En-tête de la galerie */}
            <div className="text-center max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#2f4858] mb-4">
                  Galerie Photos
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Découvrez les moments forts de cet événement en images
                </p>
              </motion.div>
            </div>

            {/* Image principale avec nouveau design */}
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                {/* Image principale */}
                <div className="relative h-full group">
                  <motion.img
                    key={currentImageIndex}
                    src={actualite.images[currentImageIndex]}
                    alt={`${actualite.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Overlay élégant */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Contrôles redessinés */}
                {actualite.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-[#2f4858] p-4 rounded-full transition-all shadow-xl border border-gray-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-[#2f4858] p-4 rounded-full transition-all shadow-xl border border-gray-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>

                    {/* Indicateurs redessinés */}
                    <motion.div
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {actualite.images.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-[#2f4858] scale-125' 
                              : 'bg-gray-300 hover:bg-[#2f4858]/50'
                          }`}
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.8 }}
                        />
                      ))}
                    </motion.div>
                  </>
                )}

                {/* Compteur redessiné */}
                <motion.div
                  className="absolute top-6 right-6 bg-[#2f4858] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {currentImageIndex + 1} / {actualite.images.length}
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Galerie de miniatures améliorée */}
            {actualite.images.length > 1 && (
              <motion.div
                className="max-w-6xl mx-auto px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-center mb-8">
                  <span className="text-sm font-medium text-gray-500 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-200">
                    Cliquez sur une image pour l'agrandir
                  </span>
                </div>

                <div className="flex gap-4 justify-center overflow-x-auto py-2 my-4">
                  {actualite.images.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 group ${
                        index === currentImageIndex ? 'ring-4 ring-[#2f4858] ring-offset-4 ring-offset-gray-100' : ''
                      }`}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                        <img
                          src={image}
                          alt={`Miniature ${index + 1}`}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'scale-100 brightness-100' 
                              : 'scale-95 brightness-75 group-hover:scale-100 group-hover:brightness-100'
                          }`}
                        />

                        {/* Badge pour l'image active */}
                        {index === currentImageIndex && (
                          <motion.div
                            className="absolute -top-1 -right-1 bg-[#2f4858] text-white rounded-full p-1.5 shadow-lg"
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          >
                            <Eye className="w-3 h-3" />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.section>
        </div>
      </div>
      {/* Actualités similaires modernisées */}
      {relatedActualites.length > 0 && (
        <div className="py-16 bg-[#D9D8D5]/40">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.h2
              className="text-3xl font-bold text-[#2f4858] text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Actualités Similaires
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedActualites.map((actu, index) => {
                const actualiteIndex = actualites.findIndex(a => a === actu);
                return (
                  <motion.div
                    key={actualiteIndex}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full border border-gray-100 rounded-sm"
                      onClick={() => navigate(`/actualites/${actualiteIndex}`)}
                    >
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
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{actu.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#12283E] mb-3 group-hover:text-[#2f4858] transition-colors line-clamp-2">
                          {actu.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {actu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
