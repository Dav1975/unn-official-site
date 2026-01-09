import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, FlaskConical, BookOpen, Briefcase, Scale, Heart, Cpu, ArrowLeft, GraduationCap, Award, Clock, CheckCircle, Target, Briefcase as BriefcaseIcon } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

interface FormationData {
  id: string;
  title: string;
  acronym: string;
  niveau: string;
  duree: string;
  description: string;
  prerequis: string[];
  competences: string[];
  modalites: string[];
}

const FormationDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formationId = location.state?.formationId as string;

  const formationsData: { [key: string]: FormationData } = {
    'licence-shs': {
      id: 'licence-shs',
      title: 'Licence Sciences Humaines et Sociales',
      acronym: 'L-SHS',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Formation complète en sciences humaines et sociales offrant une compréhension approfondie des dynamiques sociales, culturelles et humaines.',
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
    'licence-mpc': {
      id: 'licence-mpc',
      title: 'Licence Mathématiques Physiques Chimie',
      acronym: 'L-MPC',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Programme rigoureux en sciences exactes permettant de maîtriser les fondamentaux des mathématiques, physique et chimie.',
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
    'licence-sna': {
      id: 'licence-sna',
      title: 'Licence Sciences Naturelles Agronomiques',
      acronym: 'L-SNA',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Formation en biologie, environnement et agronomie pour former des experts en développement durable et gestion des ressources naturelles.',
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
    'licence-sjp': {
      id: 'licence-sjp',
      title: 'Licence Sciences Juridiques et Politiques',
      acronym: 'L-SJP',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Cursus complet en droit et science politique formant des juristes et analystes politiques compétents.',
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
    'licence-seg': {
      id: 'licence-seg',
      title: 'Licence Sciences Économiques de Gestion',
      acronym: 'L-SEG',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Formation en économie, gestion et management pour préparer les futurs managers et entrepreneurs.',
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
    'licence-mpo': {
      id: 'licence-mpo',
      title: 'Licence Médecine Pharmacie Odontostomatologie',
      acronym: 'L-MPO',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Première étape du cursus médical et paramédical offrant une formation scientifique solide en sciences de la santé.',
      prerequis: [
        'Baccalauréat série S ou équivalent',
        'Excellentes notes en sciences',
        'Vocation pour les métiers de la santé'
      ],
      competences: [
        'Anatomie et physiologie',
        'Biologie médicale',
        'Pharmacologie de base',
        'Éthique médicale'
      ],
      modalites: [
        'Cours théoriques à distance',
        'Travaux pratiques en centre agréé',
        'Stages hospitaliers',
        'Examens nationaux'
      ]
    },
    'licence-sti': {
      id: 'licence-sti',
      title: 'Licence Sciences Techniques de l\'Ingénierie',
      acronym: 'L-STI',
      niveau: 'Licence (Bac+3)',
      duree: '3 ans',
      description: 'Formation technique et scientifique pour préparer les futurs ingénieurs dans divers domaines technologiques.',
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
    },
    // Ajout : Masters demandés par l'utilisateur
    'master-bdia': {
      id: 'master-bdia',
      title: 'Master Recherche — Aide à la décision et Optimisation Combinatoire (BDIA)',
      acronym: 'M-BDIA',
      niveau: 'Master Recherche (Bac+5)',
      duree: '2 ans',
      description: 'Formation axée sur les méthodes d\'aide à la décision, l\'optimisation combinatoire et les outils algorithmiques pour résoudre des problèmes complexes en industrie et recherche.',
      prerequis: [
        'Licence en mathématiques, informatique, ingénierie ou domaine connexe',
        'Bonnes bases en algorithmes et optimisation',
        'Motivation pour la recherche et l\'analyse quantitative'
      ],
      competences: [
        'Modélisation et formulation mathématique de problèmes combinatoires',
        'Conception et analyse d\'algorithmes d\'optimisation',
        'Utilisation de solveurs et méthodes heuristiques',
        'Rédaction scientifique et conduite de projets de recherche'
      ],
      modalites: [
        'Cours avancés et séminaires de recherche',
        'Travaux dirigés axés sur la modélisation',
        'Projets de recherche encadrés',
        'Stage de recherche ou industriel en fin de master'
      ]
    },
    'master-adoc': {
      id: 'master-adoc',
      title: 'Master Professionnel — Data & Intelligence Artificielle (ADOC)',
      acronym: 'M-ADOC',
      niveau: 'Master Professionnel (Bac+5)',
      duree: '2 ans',
      description: 'Parcours professionnalisant centré sur l\'intelligence artificielle, l\'apprentissage automatique et l\'ingénierie des données pour des applications industrielles et décisionnelles.',
      prerequis: [
        'Licence en informatique, statistique, mathématiques appliquées ou domaine proche',
        'Connaissances de base en programmation et machine learning',
        'Capacité à travailler sur des projets applicatifs'
      ],
      competences: [
        'Conception et déploiement de modèles d\'apprentissage automatique',
        'Ingénierie des données et traitement à grande échelle',
        'Evaluation et interprétabilité des modèles',
        'Gestion de projets IA en contexte professionnel'
      ],
      modalites: [
        'Cours pratiques et études de cas industriels',
        'Ateliers de mise en production et MLOps',
        'Projets tutorés avec partenaires entreprises',
        'Stage professionnel obligatoire'
      ]
    }
  };

  const formationData = formationId ? formationsData[formationId] : null;

  // `returnTo` peut être :
  // - une string (chemin),
  // - un objet { pathname: string, state?: any } (pour restaurer l'état de la page appelante),
  // sinon on retombe sur la page des formations initiales.
  const returnToRaw = location.state?.returnTo as any;
  const fallbackReturn = '/formations/initial-formation';

  const navigateBack = () => {
    if (typeof returnToRaw === 'string') {
      navigate(returnToRaw);
      return;
    }
    if (returnToRaw && typeof returnToRaw === 'object' && returnToRaw.pathname) {
      // Naviguer en restaurant l'état si fourni
      navigate(returnToRaw.pathname, { state: returnToRaw.state });
      return;
    }
    navigate(fallbackReturn);
  };

  useEffect(() => {
    if (!formationId || !formationData) {
      navigateBack();
    }
  }, [formationId, formationData]);

  if (!formationData) {
    return null;
  }

  const getIcon = (iconId: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'licence-shs': <Users className="w-12 h-12" />,
      'licence-mpc': <FlaskConical className="w-12 h-12" />,
      'licence-sna': <BookOpen className="w-12 h-12" />,
      'licence-sjp': <Scale className="w-12 h-12" />,
      'licence-seg': <Briefcase className="w-12 h-12" />,
      'licence-mpo': <Heart className="w-12 h-12" />,
      'licence-sti': <Cpu className="w-12 h-12" />,
      // Icônes pour les masters ajoutés
      'master-bdia': <Target className="w-12 h-12" />,
      'master-adoc': <Cpu className="w-12 h-12" />,
    };
    return icons[iconId] || <GraduationCap className="w-12 h-12" />;
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
              onClick={() => navigateBack()}
              className="flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Retour</span>
            </button>

            {/* En-tête de la formation */}
            <div className="flex items-start gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border border-white/20">
                <div className="text-white">
                  {getIcon(formationId)}
                </div>
              </div>
              
              <div className="flex-1">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-1.5 text-sm font-bold mb-4">
                  {formationData.acronym}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {formationData.title}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
                  {formationData.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contenu principal avec un design plus aéré */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Informations clés */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-8 border border-[#2f4858]/10">
              <div className="flex flex-wrap gap-8 justify-center">
                <div className="text-center">
                  <div className="bg-[#2f4858] w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="text-sm text-[#12283E]/60 mb-1">Niveau</div>
                  <div className="text-lg font-bold text-[#12283E]">{formationData.niveau}</div>
                </div>
                <div className="text-center">
                  <div className="bg-[#2f4858] w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div className="text-sm text-[#12283E]/60 mb-1">Durée</div>
                  <div className="text-lg font-bold text-[#12283E]">{formationData.duree}</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Prérequis - Design liste moderne */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#2f4858] p-3 rounded-sm">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Prérequis</h2>
                <p className="text-[#12283E]/60 text-sm">Conditions d'admission à cette formation</p>
              </div>
            </div>

            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {formationData.prerequis.map((prerequis, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="group p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-[#2f4858]/10 p-2 rounded-sm group-hover:bg-[#2f4858] transition-colors">
                        <CheckCircle className="w-5 h-5 text-[#2f4858] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-lg text-[#12283E]/80 leading-relaxed flex-1">
                        {prerequis}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Compétences acquises - Design card moderne */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#2f4858] p-3 rounded-sm">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Compétences acquises</h2>
                <p className="text-[#12283E]/60 text-sm">Ce que vous saurez faire à la fin de la formation</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {formationData.competences.map((competence, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="group bg-white p-5 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#2f4858]/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2f4858] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-[#12283E] font-medium leading-relaxed">
                      {competence}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Modalités pédagogiques - Design tags modernes */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pb-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#2f4858] p-3 rounded-sm">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#12283E]">Modalités pédagogiques</h2>
                <p className="text-[#12283E]/60 text-sm">Comment se déroule la formation</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-8 border border-[#2f4858]/10">
              <div className="flex flex-wrap gap-3">
                {formationData.modalites.map((modalite, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.03 }}
                  >
                    <Badge className="px-5 py-2.5 bg-white text-[#2f4858] border-2 border-[#2f4858]/20 text-sm font-semibold hover:bg-[#2f4858] hover:text-white hover:border-[#2f4858] transition-all cursor-pointer shadow-sm hover:shadow-md rounded-full">
                      {modalite}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-br from-[#2f4858] to-[#1a2d3d] rounded-sm p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Prêt à commencer votre parcours ?</h3>
            <p className="mb-6 text-white/90">
              Rejoignez notre communauté d'étudiants et lancez-vous dans cette formation dès maintenant
            </p>
            <button className="px-8 py-3 bg-white text-[#2f4858] rounded-sm font-semibold hover:shadow-lg transition-all">
              S'inscrire maintenant
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FormationDetails;

