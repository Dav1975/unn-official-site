import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Users, FlaskConical, BookOpen, Briefcase, Scale, Heart, Cpu, ChevronRight, GraduationCap} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
//import { Badge } from '../../components/ui/badge';
import CustomButton from '../../components/ui/custom-button';

interface FormationInitiale {
  id: string;
  title: string;
  acronym: string;
  niveau: string;
  duree: string;
  description: string;
  icon: React.ReactNode;
  prerequis: string[];
  competences: string[];
  modalites: string[];
}

const FormationInitiale = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Fonction pour obtenir l'icône correspondant à chaque formation
  const getIcon = (formationId: string): React.ReactNode => {
    const icons: { [key: string]: React.ReactNode } = {
      'licence-shs': <Users className="w-8 h-8" />,
      'licence-mpc': <FlaskConical className="w-8 h-8" />,
      'licence-sna': <BookOpen className="w-8 h-8" />,
      'licence-sjp': <Scale className="w-8 h-8" />,
      'licence-seg': <Briefcase className="w-8 h-8" />,
      'licence-mpo': <Heart className="w-8 h-8" />,
      'licence-sti': <Cpu className="w-8 h-8" />,
    };
    return icons[formationId] || <GraduationCap className="w-8 h-8" />;
  };

  const formations: FormationInitiale[] = [
    {
      id: 'licence-shs',
      title: 'Licence Sciences Humaines et Sociales',
      acronym: 'L-SHS',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Formation complète en sciences humaines et sociales offrant une compréhension approfondie des dynamiques sociales, culturelles et humaines.',
      icon: getIcon('licence-shs'),
      prerequis: [
        'Baccalauréat série L, ES ou équivalent',
        'Niveau B2 en français',
        'Passion pour les sciences humaines'
      ],
      competences: [
        'Analyse critique des phénomènes sociaux',
        'Méthodologie de recherche en sciences sociales',
        'Communication et rédaction académique',
        'Compréhension des enjeux contemporains'
      ],
      modalites: [
        'Cours en ligne synchrones et asynchrones',
        'Travaux dirigés interactifs',
        'Projets de recherche guidés',
        'Stage professionnel de fin de cycle'
      ]
    },
    {
      id: 'licence-mpc',
      title: 'Licence Mathématiques Physiques Chimie',
      acronym: 'L-MPC',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Programme rigoureux en sciences exactes permettant de maîtriser les fondamentaux des mathématiques, physique et chimie.',
      icon: getIcon('licence-mpc'),
      prerequis: [
        'Baccalauréat série S ou équivalent',
        'Solides bases en mathématiques',
        'Intérêt pour les sciences exactes'
      ],
      competences: [
        'Résolution de problèmes complexes',
        'Modélisation mathématique',
        'Expérimentation et analyse scientifique',
        'Programmation et calcul numérique'
      ],
      modalites: [
        'Cours théoriques en ligne',
        'Travaux pratiques virtuels',
        'Séances de tutorat personnalisé',
        'Examens en présentiel ou surveillés'
      ]
    },
    {
      id: 'licence-sna',
      title: 'Licence Sciences Naturelles Agronomiques',
      acronym: 'L-SNA',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Formation en biologie, environnement et agronomie pour former des experts en développement durable et gestion des ressources naturelles.',
      icon: getIcon('licence-sna'),
      prerequis: [
        'Baccalauréat série S, STL ou équivalent',
        'Intérêt pour la biologie et l\'environnement',
        'Sensibilité aux enjeux écologiques'
      ],
      competences: [
        'Connaissance de la biodiversité',
        'Techniques agricoles durables',
        'Gestion des écosystèmes',
        'Analyse environnementale'
      ],
      modalites: [
        'Cours magistraux en ligne',
        'Sorties terrain organisées',
        'Projets pratiques en agronomie',
        'Stage en exploitation agricole ou labo'
      ]
    },
    {
      id: 'licence-sjp',
      title: 'Licence Sciences Juridiques et Politiques',
      acronym: 'L-SJP',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Cursus complet en droit et science politique formant des juristes et analystes politiques compétents.',
      icon: getIcon('licence-sjp'),
      prerequis: [
        'Baccalauréat toutes séries',
        'Excellente maîtrise du français',
        'Esprit d\'analyse et de synthèse'
      ],
      competences: [
        'Maîtrise du droit public et privé',
        'Analyse politique et institutionnelle',
        'Rédaction juridique',
        'Argumentation et plaidoirie'
      ],
      modalites: [
        'Cours de droit en vidéo',
        'Études de cas pratiques',
        'Simulations de procès',
        'Cliniques juridiques en ligne'
      ]
    },
    {
      id: 'licence-seg',
      title: 'Licence Sciences Économiques de Gestion',
      acronym: 'L-SEG',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Formation en économie, gestion et management pour préparer les futurs managers et entrepreneurs.',
      icon: getIcon('licence-seg'),
      prerequis: [
        'Baccalauréat série ES, S, STMG ou équivalent',
        'Bases en mathématiques',
        'Intérêt pour l\'économie et le management'
      ],
      competences: [
        'Gestion financière et comptable',
        'Analyse économique',
        'Management d\'équipe',
        'Stratégie d\'entreprise'
      ],
      modalites: [
        'Cours interactifs en ligne',
        'Études de cas d\'entreprises',
        'Simulations de gestion',
        'Stage en entreprise obligatoire'
      ]
    },
    //{
     // id: 'licence-mpo',
     // title: 'Licence Médecine Pharmacie Odontostomatologie',
     // acronym: 'L-MPO',
     // niveau: 'Licence (Bac+3)',
     // duree: '3 ans',
     // description: 'Première étape du cursus médical et paramédical offrant une formation scientifique solide en sciences de la santé.',
     // icon: getIcon('licence-mpo'),
     // prerequis: [
      //  'Baccalauréat série S ou équivalent',
     //   'Excellentes notes en sciences',
     //   'Vocation pour les métiers de la santé'
     // ],
     // competences: [
     //   'Anatomie et physiologie',
     //   'Biologie médicale',
    //    'Pharmacologie de base',
    //    'Éthique médicale'
   //   ],
   //   modalites: [
   //     'Cours théoriques à distance',
   //     'Travaux pratiques en centre agréé',
  //      'Stages hospitaliers',
   //     'Examens nationaux'
  //    ]
    //},
    {
      id: 'licence-sti',
      title: 'Licence Sciences Techniques de l\'Ingénierie',
      acronym: 'L-STI',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Formation technique et scientifique pour préparer les futurs ingénieurs dans divers domaines technologiques.',
      icon: getIcon('licence-sti'),
      prerequis: [
        'Baccalauréat série S, STI2D ou équivalent',
        'Solides compétences en sciences',
        'Aptitude pour la technologie'
      ],
      competences: [
        'Conception et design technique',
        'Programmation et informatique',
        'Gestion de projet technique',
        'Innovation et créativité'
      ],
      modalites: [
        'Cours techniques en ligne',
        'Projets d\'ingénierie',
        'Laboratoires virtuels et réels',
        'Stage en entreprise industrielle'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2f4858] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

        {/* Overlay pour assombrir l'image */}
        <div className="absolute inset-0 bg-[#2f4858]/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>
        </div>

        {/* Pancarte flottante */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white text-[#12283E] p-8 shadow-[12px_12px_0px_#2f4858] border-[#D9D8D5]"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-10 h-10 text-[#2f4858]" />
              <h2 className="text-2xl font-bold text-[#2f4858]">Formations Initiales UFAD</h2>
            </div>
            <p className="text-[#12283E]/80 text-base leading-relaxed text-center">
              Découvrez nos programmes de Licence dans les 7 pôles de formation. Des cursus complets et diplômants pour démarrer votre parcours académique.
            </p>
            
          </motion.div>
        </div>
      </div>
      {/* Essai */}
      
     
      {/* Stats en dehors du hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-6 border border-[#2f4858]/10"
        >
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2f4858] mb-2">7</div>
              <div className="text-[#12283E]/60 text-sm font-medium">Licences disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2f4858] mb-2">3 ans</div>
              <div className="text-[#12283E]/60 text-sm font-medium">Durée de formation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2f4858] mb-2">100%</div>
              <div className="text-[#12283E]/60 text-sm font-medium">En ligne</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Formations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#12283E] mb-4">
            Nos Licences par Pôle
          </h2>
          <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
            Choisissez votre domaine d'études et démarrez votre parcours académique avec un diplôme reconnu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, i) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-[#D9D8D5] hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="bg-[#2f4858] w-16 h-16 rounded-sm flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-all">
                    {formation.icon}
                  </div>
                  <div className="mb-4">
                    <div className="inline-block bg-[#2f4858] text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                      {formation.acronym}
                    </div>
                    <h3 className="text-xl font-bold text-[#12283E] mb-2">
                      {formation.title}
                    </h3>
                    <p className="text-[#12283E]/70 text-sm leading-relaxed mb-4">
                      {formation.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t-2 border-gray-200">
                    <p className="text-sm text-[#12283E] font-semibold mb-2">
                      {formation.niveau} • {formation.duree}
                    </p>
                    <CustomButton
                      onClick={() => navigate('/formations/formation-details', { state: { formationId: formation.id, returnTo: location.pathname } })}
                      size="sm"
                      icon={ChevronRight}
                      iconPosition="right"
                      fullWidth
                    >
                      Voir le programme
                    </CustomButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Section informations pratiques */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-8 border border-[#2f4858]/10">
            <h3 className="text-2xl font-bold text-[#12283E] mb-6 text-center">
              Comment s'inscrire ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#2f4858] w-12 h-12 rounded-sm flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-[#12283E] mb-2">Choisissez votre formation</h4>
                <p className="text-sm text-[#12283E]/70">
                  Parcourez nos 7 licences et sélectionnez celle qui correspond à votre projet
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#2f4858] w-12 h-12 rounded-sm flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-[#12283E] mb-2">Préparez votre dossier</h4>
                <p className="text-sm text-[#12283E]/70">
                  Rassemblez les documents requis : diplôme, relevés de notes, CV
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#2f4858] w-12 h-12 rounded-sm flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-[#12283E] mb-2">Inscrivez-vous en ligne</h4>
                <p className="text-sm text-[#12283E]/70">
                  Complétez le formulaire et validez votre inscription
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <CustomButton size="lg">
                Démarrer mon inscription
              </CustomButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FormationInitiale;

