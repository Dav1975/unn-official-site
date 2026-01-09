import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, FlaskConical, BookOpen, Briefcase, Scale, Heart, Cpu, ChevronRight, ArrowLeft, GraduationCap } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { polesData } from '../../constants';

const PoleDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const poleId = location.state?.poleId as string;
  const returnTo = location.state?.returnTo as string || '/formations/formations-continues'; // Page par défaut si pas spécifiée


  const poleData = poleId ? polesData[poleId] : null;

  // mapping heuristique du nom affiché vers l'id utilisé dans FormationDetails
  const mapFormationNameToId = (name: string): string | null => {
    const n = name.toLowerCase();
    // Priorité aux mentions explicites
    if (n.includes('big data') || n.includes('intelligence artificielle') || n.includes('data')) {
      return 'master-adoc'; // Master Data & IA
    }
    if (n.includes('aide à la décision') || n.includes('optimisation') || n.includes('aide')) {
      return 'master-bdia'; // Master Aide à la décision / optimisation
    }
    // gestion des acronymes présents dans les libellés
    if (n.includes('bdia') && !n.includes('big data')) {
      return 'master-bdia';
    }
    if (n.includes('adoc') && !n.includes('aide')) {
      return 'master-adoc';
    }
    return null;
  };

  const handleFormationClick = (formationName: string) => {
    const formationId = mapFormationNameToId(formationName);
    if (!formationId) {
      console.warn('Impossible de mapper la formation vers un id:', formationName);
      return;
    }
    // Passer un objet returnTo avec pathname + state (poleId) pour que la page appelante
    // puisse être restaurée avec son état lors du retour.
    navigate('/formations/formation-details', {
      state: {
        formationId,
        returnTo: { pathname: location.pathname, state: { poleId } }
      }
    });
  };

  useEffect(() => {
    if (!poleId || !poleData) {
      navigate(returnTo);
    }
  }, [poleId, poleData, navigate, returnTo]);

  if (!poleData) {
    return null;
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'shs': <Users className="w-12 h-12" />,
      'mpc': <FlaskConical className="w-12 h-12" />,
      'sna': <BookOpen className="w-12 h-12" />,
      'sjp': <Scale className="w-12 h-12" />,
      'seg': <Briefcase className="w-12 h-12" />,
      'mpo': <Heart className="w-12 h-12" />,
      'sti': <Cpu className="w-12 h-12" />,
      'recherche': <FlaskConical className="w-12 h-12" />,
      'formation_expertise': <GraduationCap className="w-12 h-12" />,
    };
    return icons[iconName] || <GraduationCap className="w-12 h-12" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Plus moderne et épuré */}
      <div className="relative bg-gradient-to-br from-[#2f4858] to-[#1a2d3d] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

        {/* Overlay pour assombrir l'image */}
        <div className="absolute inset-0 bg-[#2f4858]/60"></div>

        {/* Motif décoratif */}
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
            {/* Bouton retour intégré dans le hero */}
            <button
              onClick={() => navigate(returnTo)}
              className="flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Retour</span>
            </button>

            {/* En-tête du pôle */}
            <div className="flex items-start gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border border-white/20">
                <div className="text-white">
                  {getIcon(poleId)}
                </div>
              </div>

              <div className="flex-1">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-1.5 text-sm font-bold mb-4">
                  {poleData.acronym}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {poleData.title}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
                  {poleData.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contenu principal avec un design plus aéré */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Formations - Design card moderne */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#2f4858] p-3 rounded-sm">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Formations proposées</h2>
                <p className="text-[#12283E]/60 text-sm">Découvrez nos programmes de formation</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {poleData.formations.map((formation, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleFormationClick(formation)}
                  type="button"
                  className="cursor-pointer group text-left bg-white p-5 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#2f4858]/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2f4858] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-[#12283E] font-medium leading-relaxed">
                      {formation}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* Objectifs - Design liste moderne */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#2f4858] p-3 rounded-sm">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Objectifs du pôle</h2>
                <p className="text-[#12283E]/60 text-sm">Les missions et ambitions de ce pôle</p>
              </div>
            </div>

            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {poleData.objectifs.map((objectif, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="group p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-[#2f4858]/10 p-2 rounded-sm group-hover:bg-[#2f4858] transition-colors">
                        <ChevronRight className="w-5 h-5 text-[#2f4858] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-lg text-[#12283E]/80 leading-relaxed flex-1">
                        {objectif}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Débouchés - Design tags modernes */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pb-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#2f4858] p-3 rounded-sm">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Débouchés professionnels</h2>
                <p className="text-[#12283E]/60 text-sm">Opportunités de carrière après la formation</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-8 border border-[#2f4858]/10">
              <div className="flex flex-wrap gap-3">
                {poleData.debouches.map((debouche, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.03 }}
                  >
                    <Badge className="px-5 py-2.5 bg-white text-[#2f4858] border-2 border-[#2f4858]/20 text-sm font-semibold hover:bg-[#2f4858] hover:text-white hover:border-[#2f4858] transition-all cursor-pointer shadow-sm hover:shadow-md rounded-full">
                      {debouche}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default PoleDetails;

