import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, FlaskConical, BookOpen, Briefcase, Scale, Heart, Cpu, ChevronRight, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { polesData, PoleData } from '../../constants';

interface PoleWithIcon extends PoleData {
  icon: React.ReactNode;
}

const FormationContinue = () => {
  const navigate = useNavigate();

  // Fonction pour obtenir l'icône correspondant à chaque pôle
  const getIcon = (poleId: string): React.ReactNode => {
    const icons: { [key: string]: React.ReactNode } = {
      'shs': <Users className="w-8 h-8" />,
      'mpc': <FlaskConical className="w-8 h-8" />,
      'sna': <BookOpen className="w-8 h-8" />,
      'sjp': <Scale className="w-8 h-8" />,
      'seg': <Briefcase className="w-8 h-8" />,
      'mpo': <Heart className="w-8 h-8" />,
      'sti': <Cpu className="w-8 h-8" />,
    };
    return icons[poleId] || <GraduationCap className="w-8 h-8" />;
  };

  // Conversion des données des pôles pour ajouter les icônes
  const poles: PoleWithIcon[] = Object.values(polesData).map(pole => ({
    ...pole,
    icon: getIcon(pole.id)
  }));


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2f4858] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>
        </div>

        {/* Pancarte flottante */}
        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white text-[#12283E] p-8 shadow-[12px_12px_0px_#2f4858] border-[#D9D8D5]"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-10 h-10 text-[#2f4858]" />
              <h2 className="text-2xl font-bold text-[#2f4858]">Pôles de Formation UFAD</h2>
            </div>
            <p className="text-[#12283E]/80 text-base leading-relaxed text-center">
              Découvrez les 7 pôles de formation de l'Unité de Formation à Distance qui couvrent l'ensemble des domaines académiques avec des programmes innovants et adaptés aux besoins du marché.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Poles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#12283E] mb-4">
            Pôles d'Enseignement - UFAD
          </h2>
          <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
            Sept pôles d'excellence couvrant l'ensemble des domaines académiques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poles.map((pole, i) => (
            <motion.div
              key={pole.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card
                className="h-full border-2 border-[#D9D8D5] hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="bg-[#2f4858] w-16 h-16 rounded-sm flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-all">
                    {pole.icon}
                  </div>
                  <div className="mb-4">
                    <div className="inline-block bg-[#2f4858] text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                      {pole.acronym}
                    </div>
                    <h3 className="text-xl font-bold text-[#12283E] mb-2">
                      {pole.title}
                    </h3>
                    <p className="text-[#12283E]/70 text-sm leading-relaxed mb-4">
                      {pole.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t-2 border-gray-200">
                    <p className="text-sm text-[#12283E] font-semibold mb-2">
                      {pole.formations.length} formations disponibles
                    </p>
                    <button
                      onClick={() => navigate('/formations/pole-details', { state: { poleId: pole.id } })}
                      className="w-full px-4 py-2 bg-[#2f4858] text-white rounded-sm text-sm font-semibold hover:bg-white hover:text-[#2f4858] border-2 border-[#2f4858] transition-all flex items-center justify-center gap-2 group"
                    >
                      Voir les détails
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default FormationContinue;

