import {
  Atom,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Scale,
  Users,
  Wrench,
  Cpu,
  TrendingUp,
} from "lucide-react";

// Données détaillées des pôles de formation
export interface PoleData {
  id: string;
  title: string;
  acronym: string;
  description: string;
  formations: string[];
  objectifs: string[];
  debouches: string[];
}

export const polesData: { [key: string]: PoleData } = {
  'shs': {
    id: 'shs',
    acronym: 'SHS',
    title: 'Sciences Humaines et Sociales',
    description: 'Le pôle SHS forme les étudiants aux disciplines qui étudient l\'homme, la société et les cultures dans leurs dimensions historiques, sociales et psychologiques.',
    formations: [
      'Licence en Sociologie',
     // 'Licence en Psychologie',
     // 'Licence en Histoire',
      'Licence en Géographie',
      'Licence en Sciences de l\'Education',
      'Master en Sciences de l\'Education',
     // 'Master en Anthropologie'
    ],
    objectifs: [
      'Comprendre les dynamiques sociales et culturelles',
      'Développer l\'esprit critique et analytique',
      'Former des professionnels de l\'intervention sociale',
      'Promouvoir la recherche en sciences humaines'
    ],
    debouches: [
      'Enseignement et recherche',
      'Travail social et ONG',
      'Ressources humaines',
      'Médiation culturelle',
      'Administration publique'
    ]
  },
  'mpc': {
    id: 'mpc',
    acronym: 'MPC',
    title: 'Mathématiques Physiques Chimie',
    description: 'Le pôle MPC offre une formation scientifique rigoureuse dans les disciplines fondamentales des sciences exactes.',
    formations: [
      //'Licence en Mathématiques',
      //'Licence en Physique',
      //'Licence en Chimie',
      //'Master en Mathématiques Appliquées',
     // 'Master en Big Data et en Intelligence Artificielle (BDIA)',
     // 'Master en Aide à la Décision et Optimisation Combinatoire (ADOC)'
    ],
    objectifs: [
      'Maîtriser les concepts fondamentaux des sciences exactes',
      'Développer la pensée logique et la résolution de problèmes',
      'Former des chercheurs et enseignants qualifiés',
      'Contribuer au développement technologique'
    ],
    debouches: [
      'Enseignement et recherche',
      'Ingénierie et industrie',
      'Laboratoires d\'analyse',
      'Instituts de recherche',
      'Secteur pharmaceutique'
    ]
  },
  'sna': {
    id: 'sna',
    acronym: 'SNA',
    title: 'Sciences Naturelles Agronomiques',
    description: 'Le pôle SNA forme des experts en sciences de la vie, de l\'environnement et de l\'agriculture pour un développement durable.',
    formations: [
     // 'Licence en Biologie',
     // 'Licence en Agronomie',
     // 'Licence en Sciences de l\'Environnement',
     // 'Master en Biotechnologie',
     // 'Master en Agroécologie',
     // 'Master en Gestion des Ressources Naturelles'
    ],
    objectifs: [
      'Former des agronomes et biologistes compétents',
      'Promouvoir l\'agriculture durable',
      'Protéger la biodiversité et l\'environnement',
      'Développer la recherche agronomique'
    ],
    debouches: [
      'Agriculture et élevage',
      'Environnement et conservation',
      'Recherche agronomique',
      'ONG et développement rural',
      'Industries agroalimentaires'
    ]
  },
  'sjp': {
    id: 'sjp',
    acronym: 'SJP',
    title: 'Sciences Juridiques et Politiques',
    description: 'Le pôle SJP forme des juristes et politologues pour renforcer l\'État de droit et la gouvernance démocratique.',
    formations: [
     // 'Licence en Droit',
     // 'Licence en Science Politique',
     // 'Licence en Relations Internationales',
     // 'Master en Droit Public',
     // 'Master en Droit Privé',
     // 'Master en Gouvernance et Politiques Publiques'
    ],
    objectifs: [
      'Former des juristes et avocats compétents',
      'Renforcer la culture juridique et démocratique',
      'Développer l\'expertise en politiques publiques',
      'Promouvoir la justice et l\'État de droit'
    ],
    debouches: [
      'Barreau et magistrature',
      'Administration publique',
      'Organisations internationales',
      'Conseil juridique',
      'Diplomatie et relations internationales'
    ]
  },
  'seg': {
    id: 'seg',
    acronym: 'SEG',
    title: 'Sciences Économiques de Gestion',
    description: 'Le pôle SEG forme des économistes et gestionnaires pour accompagner le développement économique et entrepreneurial.',
    formations: [
     // 'Licence en Économie',
     // 'Licence en Gestion',
     // 'Licence en Comptabilité',
     // 'Master en Finance',
     // 'Master en Management',
     // 'Master en Entrepreneuriat'
    ],
    objectifs: [
      'Former des managers et entrepreneurs',
      'Développer les compétences en gestion',
      'Promouvoir l\'innovation économique',
      'Contribuer au développement des entreprises'
    ],
    debouches: [
      'Entreprises privées et publiques',
      'Banques et institutions financières',
      'Cabinets de conseil',
      'Entrepreneuriat',
      'Organisations internationales'
    ]
  },
  'mpo': {
    id: 'mpo',
    acronym: 'MPO',
    title: 'Médecine Pharmacie et Odontostomatologie',
    description: 'Le pôle MPO forme des professionnels de la santé pour améliorer l\'accès aux soins et la qualité des services de santé.',
    formations: [
     // 'Licence en Sciences de la Santé',
      //'Diplôme d\'État en Médecine',
      //'Diplôme d\'État en Pharmacie',
      //'Diplôme d\'État en Odontologie',
      'Master en Sciences Chirurgicales et Nouvelles Technologies',
      'Master en Santé Numérique'
    ],
    objectifs: [
      'Promouvoir les Sciences Chirurgicales et les nouvelles technologies',
      'Promouvoir la Santé Numérique',
      'Améliorer la santé publique',
      'Développer la recherche médicale',
      'Promouvoir la médecine préventive'
    ],
    debouches: [
      'Hôpitaux et centres de santé',
      'Pharmacies et laboratoires',
      'Cabinets médicaux privés',
      'Organisations de santé publique',
      'Recherche médicale'
    ]
  },
  'sti': {
    id: 'sti',
    acronym: 'STI',
    title: 'Sciences Techniques de l\'Ingénierie',
    description: 'Le pôle STI forme des ingénieurs et techniciens pour répondre aux défis technologiques et infrastructurels.',
    formations: [
      'Licence en Génie Civil',
      'Licence en Génie Électrique',
      'Licence en Informatique',
      'Master en Génie Logiciel',
      'Master en Télécommunications',
      'Master en Énergies Renouvelables'
    ],
    objectifs: [
      'Former des ingénieurs compétents',
      'Promouvoir l\'innovation technologique',
      'Développer les infrastructures',
      'Contribuer à la transformation numérique'
    ],
    debouches: [
      'Bureaux d\'études et ingénierie',
      'Entreprises de construction',
      'Sociétés de télécommunications',
      'Startups technologiques',
      'Secteur énergétique'
    ]
  },
  'recherche': {
    id: 'recherche',
    acronym: 'RECHERCHE',
    title: 'Pôle de Recherche',
    description: 'Le pôle de Recherche regroupe les laboratoires et équipes de recherche de l\'université pour promouvoir l\'innovation et le développement scientifique.',
    formations: [
      'Laboratoire de Modélisation Numérique et IA (LaMoN & IA)',
      'Laboratoire des systèmes Réseaux et CyberSécurité (LaRéCyb)',
      'Laboratoire des Énergies Fossiles & Énergies Renouvelables (La2ER)'
    ],
    objectifs: [
      'Développer la recherche scientifique de pointe',
      'Promouvoir l\'innovation technologique',
      'Créer des partenariats académiques et industriels',
      'Former de jeunes chercheurs'
    ],
    debouches: [
      'Centres de recherche',
      'Universités et instituts',
      'Entreprises innovantes',
      'Organisations internationales',
      'Laboratoires publics et privés'
    ]
  },
  'formation_expertise': {
    id: 'formation_expertise',
    acronym: 'FE',
    title: 'Pôle de Formation et d\'Expertise',
    description: 'Le pôle de Formation et d\'Expertise offre des programmes de master spécialisés pour développer l\'expertise en technologies avancées et aide à la décision.',
    formations: [
      'Master Professionnel Big Data et Intelligence Artificielle (BDIA)',
      'Master Recherche Aide à la Décision et Optimisation Combinatoire (ADOC)'
    ],
    objectifs: [
      'Former des experts en Big Data et IA',
      'Développer l\'expertise en aide à la décision',
      'Promouvoir l\'optimisation combinatoire',
      'Créer des liens entre recherche et industrie'
    ],
    debouches: [
      'Data Scientists et Analystes',
      'Consultants en IA',
      'Experts en optimisation',
      'Chercheurs en informatique décisionnelle',
      'Entrepreneurs tech'
    ]
  }
};

const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Institutions",
    href: "/institutions",
    children: [
      { name: "Mot du Recteur", href: "/institutions/mot-du-recteur" },
      { name: "Organigramme", href: "/institutions/organigramme" },
      { name: "Directions & Pôles", href: "/institutions/directions-et-poles" },
    ],
  },
    {
    name: "Formations",
    href: "/formations",
    children: [
        { name: "Formation Initiales", href: "/formations/initial-formation" },
        { name: "Formation continue", href: "/formations/formations-continues" },
        { name: "Modèle pédagogique", href: "/formations/modele-pedagogique" },
        { name: "Admission", href: "/formations/admission" },
    ],
    },
    {
        name: "Actualités",
        href: "/actualité",
    },
    {
        name: "Recherche",
        href: "/recherche",
        children: [
            { name: "Pôles de recherches", href: "/recherche/poles-de-recherche" },
            { name: "Laboratoires", href: "/recherche/laboratoires" },
            { name: "Équipes de recherche", href: "/recherche/equipes-de-recherche" },
        ]
    },
    {
        name: "Plateforme",
        href: "/plateforme",
        children: [
            { name: "Plateforme", href: "http://192.168.1.104/moodle/login" },
        ]
    },
   /* {
        href: "/documents",
    }, */
    /*{
        name: "Vie Étudiante",
        href: "/vie-etudiante",
    },
  {
    name: "Pôles",
    href: "/poles",
    children: [
      { name: "Enseignement à distance", href: "/poles/enseignement" },
      {
        name: "Recherche",
        href: "/poles/recherche",
      },
    ],
  },
  { name: "Espace Numérique", href: "/espace-numerique" },
  { name: "Support", href: "/support" },*/
];

const poles = [
  {
    code: "SHS",
    title: "Sciences Humaines et Sociales",
    description:
      "Compréhension de la société, de la culture et des comportements humains dans un monde numérique en transformation constante.",
    icon: <Users className="w-10 h-10" />,
    gradient: "from-slate-50 via-blue-50 to-slate-100",
    ringColor: "ring-blue-500/20",
    accentColor: "text-blue-700",
  },
  {
    code: "MPC",
    title: "Mathématiques, Physique et Chimie",
    description:
      "Analyse, modélisation et résolution des grands défis scientifiques et technologiques du XXIe siècle.",
    icon: <Atom className="w-10 h-10" />,
    gradient: "from-slate-50 via-emerald-50 to-slate-100",
    ringColor: "ring-emerald-500/20",
    accentColor: "text-emerald-700",
  },
  {
    code: "SNA",
    title: "Sciences Naturelles et Agronomie",
    description:
      "Biologie, environnement et agriculture durable au service d'un avenir numérique et écologique.",
    icon: <Award className="w-10 h-10" />,
    gradient: "from-slate-50 via-amber-50 to-slate-100",
    ringColor: "ring-amber-500/20",
    accentColor: "text-amber-700",
  },
  {
    code: "SJP",
    title: "Sciences Juridiques et Politiques",
    description:
      "Transformation numérique de la gouvernance, de la justice et des institutions publiques.",
    icon: <Scale className="w-10 h-10" />,
    gradient: "from-slate-50 via-purple-50 to-slate-100",
    ringColor: "ring-purple-500/20",
    accentColor: "text-purple-700",
  },
  {
    code: "SEG",
    title: "Sciences Économiques et Gestion",
    description:
      "Formation des cadres de l'économie numérique et de la gestion innovante des organisations.",
    icon: <BarChart3 className="w-10 h-10" />,
    gradient: "from-slate-50 via-green-50 to-slate-100",
    ringColor: "ring-green-500/20",
    accentColor: "text-green-700",
  },
  {
    code: "MV",
    title: "Médecine et Sciences de la Santé",
    description:
      "Médecine, pharmacie et sciences biomédicales intégrant l'intelligence artificielle et le numérique.",
    icon: <HeartPulse className="w-10 h-10" />,
    gradient: "from-slate-50 via-red-50 to-slate-100",
    ringColor: "ring-red-500/20",
    accentColor: "text-red-700",
  },
  {
    code: "STI",
    title: "Sciences et Techniques de l'Ingénieur",
    description:
      "Conception et innovation technique pour le développement durable et la transition numérique.",
    icon: <Wrench className="w-10 h-10" />,
    gradient: "from-slate-50 via-indigo-50 to-slate-100",
    ringColor: "ring-indigo-500/20",
    accentColor: "text-indigo-700",
  },
];

const enseignementFacultes = [
  {
    code: "SHS",
    title: "Sciences Humaines et Sociales",
    description:
      "Étude des sociétés, cultures et comportements humains à l’ère du numérique.",
    icon: <Users className="w-10 h-10" />,
    gradient: "from-slate-50 via-blue-50 to-slate-100",
    ringColor: "ring-blue-500/20",
    accentColor: "text-blue-700",
    href: "/poles/enseignement/shs",
  },
  {
    code: "MPC",
    title: "Mathématiques, Physique et Chimie",
    description:
      "Modélisation et résolution des défis scientifiques et technologiques.",
    icon: <Atom className="w-10 h-10" />,
    gradient: "from-slate-50 via-emerald-50 to-slate-100",
    ringColor: "ring-emerald-500/20",
    accentColor: "text-emerald-700",
    href: "/poles/enseignement/mpc",
  },
  {
    code: "SNA",
    title: "Sciences Naturelles et Agronomie",
    description:
      "Biologie, environnement et agriculture durable avec une approche numérique.",
    icon: <Award className="w-10 h-10" />,
    gradient: "from-slate-50 via-amber-50 to-slate-100",
    ringColor: "ring-amber-500/20",
    accentColor: "text-amber-700",
    href: "/poles/enseignement/sna",
  },
  {
    code: "SJP",
    title: "Sciences Juridiques et Politiques",
    description: "Transformation numérique dans la gouvernance et la justice.",
    icon: <Scale className="w-10 h-10" />,
    gradient: "from-slate-50 via-purple-50 to-slate-100",
    ringColor: "ring-purple-500/20",
    accentColor: "text-purple-700",
    href: "/poles/enseignement/sjp",
  },
  {
    code: "SEG",
    title: "Sciences Économiques et Gestion",
    description:
      "Formation des cadres pour l’économie numérique et la gestion innovante.",
    icon: <BarChart3 className="w-10 h-10" />,
    gradient: "from-slate-50 via-green-50 to-slate-100",
    ringColor: "ring-green-500/20",
    accentColor: "text-green-700",
    href: "/poles/enseignement/seg",
  },
  {
    code: "MV",
    title: "Médecine et Sciences de la Santé",
    description: "Médecine et sciences biomédicales intégrant le numérique.",
    icon: <HeartPulse className="w-10 h-10" />,
    gradient: "from-slate-50 via-red-50 to-slate-100",
    ringColor: "ring-red-500/20",
    accentColor: "text-red-700",
    href: "/poles/enseignement/mv",
  },
  {
    code: "STI",
    title: "Sciences et Techniques de l’Ingénieur",
    description: "Innovation technique pour un développement durable.",
    icon: <Wrench className="w-10 h-10" />,
    gradient: "from-slate-50 via-indigo-50 to-slate-100",
    ringColor: "ring-indigo-500/20",
    accentColor: "text-indigo-700",
    href: "/poles/enseignement/sti",
  },
];

const rechercheEntites = [
  {
    code: "LaMoN & IA",
    title: "Laboratoire de Modélisation Numérique et IA",
    description:
      "Recherche avancée en intelligence artificielle et modélisation numérique appliquée aux défis scientifiques et industriels.",
    icon: <Brain className="w-10 h-10" />,
    href: "/recherche/laboratoire/lamon-ia",
  },
  {
    code: "LaRéCyb",
    title: "Laboratoire de Réseaux et CyberSécurité",
    description:
      "Expertise en sécurité des réseaux, cryptographie et protection des infrastructures numériques critiques.",
    icon: <Cpu className="w-10 h-10" />,
    href: "/recherche/laboratoire/recyb",
  },
  {
    code: "La2ER",
    title: "Laboratoire Énergies Fossiles & Énergies Renouvelables",
    description:
      "Recherche sur les énergies fossiles, énergies renouvelables et transition énergétique durable.",
    icon: <FlaskConical className="w-10 h-10" />,
    href: "/recherche/laboratoire/lefe-er",
  },
];

const laboratoires = [
  {
    nom: "Laboratoire de Modélisation Numérique & d'IA",
    acronyme: "LaMoN & IA",
    directeur: "Prof. Mamane. S. Ibrahim",
    directeurPhoto: "/images/recteur.jpeg",
    membres: "25 chercheurs",
    domaines: [
      "Intelligence Artificielle",
      "Machine Learning",
      "Deep Learning",
      "Vision par Ordinateur",
    ],
    description:
      "Recherche avancée en intelligence artificielle avec des applications dans la santé, l'industrie et l'éducation.",
    publications: "120+ publications",
    projets: 8,
  },
  {
    nom: "Laboratoire des Systèmes Réseaux et Cybersécurité",
    acronyme: "LaReCyb",
    directeur: "Prof. Mamane. S. Ibrahim",
    directeurPhoto: "/images/recteur.jpeg",
    membres: "18 chercheurs",
    domaines: ["Cryptographie", "Sécurité Réseau", "Forensique", "Blockchain"],
    description:
      "Développement de solutions innovantes pour la sécurité des systèmes d'information et la protection des données.",
    publications: "85+ publications",
    projets: 6,
  },
  {
    nom: "Centre d'Études Numériques",
    acronyme: "CEN",
    directeur: "Prof. Mamane. S. Ibrahim",
    directeurPhoto: "/images/recteur.jpeg",
    membres: "30 chercheurs",
    domaines: [
      "Transformation Digitale",
      "E-learning",
      "UX/UI",
      "Innovation Pédagogique",
    ],
    description:
      "Recherche interdisciplinaire sur l'impact du numérique dans l'éducation et la société.",
    publications: "95+ publications",
    projets: 12,
  },
];

const projetsRecherche = [
  {
    titre: "EduAI : IA pour l'Éducation Personnalisée",
    laboratoire: "LIAM",
    budget: "850k€",
    duree: "2022-2025",
    partenaires: ["Microsoft", "UNESCO", "Ministère de l'Éducation"],
    description:
      "Développement d'un système d'IA pour personnaliser l'apprentissage selon le profil de chaque étudiant.",
    statut: "En cours",
    impact: "5000+ étudiants bénéficiaires",
  },
  {
    titre: "SecureChain : Blockchain pour l'Authentification",
    laboratoire: "LCS",
    budget: "650k€",
    duree: "2023-2026",
    partenaires: ["IBM", "BNP Paribas", "ANSSI"],
    description:
      "Solution blockchain pour sécuriser l'authentification des diplômes et certifications.",
    statut: "En cours",
    impact: "20+ universités partenaires",
  },
  {
    titre: "MetaLearn : Métaverse Éducatif",
    laboratoire: "CEN",
    budget: "1.2M€",
    duree: "2023-2027",
    partenaires: ["Meta", "Orange", "Campus France"],
    description:
      "Création d'espaces d'apprentissage immersifs dans le métaverse pour l'enseignement supérieur.",
    statut: "Démarrage",
    impact: "Prototype en développement",
  },
  {
    titre: "GreenIT : Numérique Responsable",
    laboratoire: "CEN",
    budget: "400k€",
    duree: "2022-2024",
    partenaires: ["ADEME", "Schneider Electric", "WWF"],
    description:
      "Recherche sur l'impact environnemental du numérique et solutions durables.",
    statut: "Phase finale",
    impact: "Réduction de 30% de l'empreinte carbone",
  },
];

const actualites = [
  {
    date: "05 Jan 2026",
    category: "Événement",
    title: "Visite du MESRIT à l'UNN",
    description:
      "Le lundi 05 Janvier 2026, le Ministre de l'Enseignement Supérieur, de le Recherche et de l'Innovation Technologique Pr. Mamadou Saidou a visité les locaux de l'UNN. Le Ministre était accompagné du Sécrétaire Général, du Sécrétaire Général Adjoint et du Directeur de l'Enseignement du MESRIT. Le site Web de l'UNN nouvellement developpé ainsi que la plateforme des cours ont été présentés au Ministre et à sa délégation.",
    images: [
      "/images/actualités/visite1.jpg",
      "/images/actualités/visite2.jpg",
      "/images/actualités/visite3.jpg"
    ],
  },
  {
    date: "25 Juil 2025",
    category: "Événement",
    title: "Atelier de Validation des Textes Réglementaires de l'UNN",
    description:
      "Du 21 au 25 juillet 2025 s'est tenu dans les locaux de l'Université Numérique du Niger, un atelier de travail sur l'élaboration et la validation des textes réglémentant le fonctionnement des différentes entités de l'UNN. La Directrice de la Législation du MESRIT a activement pris part aux travaux.",
    images: [
      "/images/actualités/Atelier-3.jpeg",
      "/images/actualités/Atelier-2.jpeg",
      "/images/actualités/Atelier-1.jpeg"
    ],
  },
  {
    date: "15 Oct 2025",
    category: "Coopération",
    title: "Mission des directeurs de l'UFAD et de l'UREN à l'Université André Salifou de Zinder",
    description:
      "Séance de travail entre les Directeurs de l'UREN (Unité de Recherche et d'Enseignement Numérique) et de l'UFAD (Unité de Formation à Distance) de l'Université Numérique du Niger à l'Université André Salifou de Zinder. Cette mission vise à harmoniser les programmes de formation et renforcer la synergie entre les établissements partenaires dans le cadre du développement de l'enseignement supérieur numérique au Niger.",
    images: [
      "/images/actualités/Seance.jpeg",
      "/images/actualités/Atelier-1.jpeg"
    ],
  },
  {
    date: "23 Fev 2025",
    category: "Coopération",
    title: "Mission de Coopération UNN-UVBF : Renforcement du Partenariat",
    description:
      "Mission officielle du Directeur de la Formation à Distance de l'Université Numérique du Niger à l'Université Virtuelle du Burkina Faso (UVBF). Cette visite stratégique vise à renforcer la coopération inter-universitaire, échanger sur les meilleures pratiques en matière d'enseignement numérique et explorer de nouvelles opportunités de collaboration dans le domaine de la formation à distance entre les deux institutions sœurs.",
    images: [
      "/images/actualités/MDFDUNNUBF.jpeg",
      "/images/actualités/Seance.jpeg"
    
    ],
  },
  {
    date: "23 Fev 2025",
    category: "Partenariat",
    title: "Rencontre UNN-UVCI : Consolidation des Relations Académiques",
    description:
      "Du 17 au 22 février 2025, le Directeur de la Recherche et de l'Expertise Numérique de l'UNN a effectué une mission de travail à l'Université Virtuelle de Côte d'Ivoire (UVCI). Cette rencontre marque une étape importante dans le renforcement des liens de coopération et l'harmonisation des standards académiques entre les universités numériques africaines, contribuant ainsi à l'excellence de l'enseignement supérieur en ligne sur le continent.",
    images: [
      "/images/actualités/RADAUVCI.jpeg",
      "/images/actualités/UVCIDRE.jpeg"
    ],
  },
  {
    date: "23 Fev 2025",
    category: "Recherche",
    title: "Mission du Directeur de la Recherche et d'Expertise Numérique de l'UNN en Côte d'Ivoire",
    description:
      "Mission stratégique du Directeur de la Recherche et de l'Expertise Numérique de l'Université Numérique du Niger à l'Université Virtuelle de Côte d'Ivoire (UVCI). Cette visite s'inscrit dans le cadre du développement de projets de recherche conjoints, de l'échange d'expertise en matière de recherche numérique et de l'établissement de collaborations académiques durables entre les deux institutions. Un pas important vers l'excellence en recherche appliquée et l'innovation technologique.",
    images: [
      "/images/actualités/UVCIDRE.jpeg",
      "/images/actualités/RADAUVCI.jpeg",
      "/images/actualités/Atelier-2.jpeg"
    ],
  },
];

const stats = [
  { icon: <Users className="w-8 h-8" />, value: "0", label: "Étudiants" },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    value: "10+",
    label: "Programmes",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    value: "0+",
    label: "Cours en ligne",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: " ",
    label: "Taux de réussite",
  },
];

const partenaires = [
  {
    nom: "UAZ",
    logo: "/images/partenaires/az.jpeg",
    description: "Université d'Agadez",
  },
  {
    nom: "UDO",
    logo: "/images/partenaires/do.png",
    description: "Université de Dosso",
  },
  {
    nom: "UDA",
    logo: "/images/partenaires/da.jpeg",
    description: "Université de Diffa",
  },
  {
    nom: "UDDM",
    logo: "/images/partenaires/uddm.png",
    description: "Université Dan Dicko Dankoulodo de Maradi",
  },
  {
    nom: "UAM",
    logo: "/images/partenaires/uam.png",
    description: "Université Abdou Moumouni",
  },
  {
    nom: "UDH",
    logo: "/images/partenaires/ta.png",
    description: "Université Djibo Hamani de Tahoua",
  },
  {
    nom: "UTI",
    logo: "/images/partenaires/ti.jpeg",
    description: "Université de Tillaberi",
  },
  {
    nom: "UAS",
    logo: "/images/partenaires/zr.jpeg",
    description: "Université André Salifou de Zinder",
  },
    
];

// Documents PDF de l'université
export interface DocumentPDF {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  datePublication: string;
  taille: string;
  icon: React.ReactNode;
}

const documents: DocumentPDF[] = [
  {
    id: "reglement-interieur",
    title: "Règlement Intérieur",
    description: "Règlement intérieur de l'Université Numérique du Niger définissant les droits et devoirs de tous les membres de la communauté universitaire.",
    category: "Réglementation",
    url: "/documents/reglement-interieur.pdf",
    datePublication: "Mars 2024",
    taille: "2.5 MB",
    icon: <Scale className="w-6 h-6" />,
  },
  {
    id: "guide-etudiant",
    title: "Guide de l'Étudiant",
    description: "Guide complet pour les nouveaux étudiants incluant les procédures d'inscription, les services disponibles et la vie sur le campus.",
    category: "Guides",
    url: "/documents/guide-etudiant.pdf",
    datePublication: "Septembre 2024",
    taille: "4.2 MB",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    id: "catalogue-formations",
    title: "Catalogue des Formations",
    description: "Présentation détaillée de toutes les formations proposées par l'UNN avec les programmes, prérequis et débouchés professionnels.",
    category: "Formations",
    url: "/documents/catalogue-formations.pdf",
    datePublication: "Janvier 2024",
    taille: "8.7 MB",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: "procedures-administratives",
    title: "Procédures Administratives",
    description: "Guide des procédures administratives pour les démarches courantes : inscriptions, examens, stages, diplômes.",
    category: "Administration",
    url: "/documents/procedures-administratives.pdf",
    datePublication: "Février 2024",
    taille: "1.8 MB",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: "charte-numerique",
    title: "Charte du Numérique",
    description: "Charte définissant les règles d'usage des outils numériques et les bonnes pratiques en matière de sécurité informatique.",
    category: "Numérique",
    url: "/documents/charte-numerique.pdf",
    datePublication: "Décembre 2023",
    taille: "950 KB",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: "rapport-activites-2023",
    title: "Rapport d'Activités 2023",
    description: "Bilan complet des activités et réalisations de l'UNN pour l'année universitaire 2023, incluant statistiques et perspectives.",
    category: "Rapports",
    url: "/documents/rapport-activites-2023.pdf",
    datePublication: "Novembre 2023",
    taille: "6.3 MB",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    id: "plan-strategique-2024-2028",
    title: "Plan Stratégique 2024-2028",
    description: "Orientations stratégiques et objectifs de développement de l'université pour les quatre prochaines années.",
    category: "Stratégie",
    url: "/documents/plan-strategique-2024-2028.pdf",
    datePublication: "Octobre 2023",
    taille: "3.1 MB",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    id: "guide-recherche",
    title: "Guide de la Recherche",
    description: "Instructions et procédures pour les activités de recherche, financement des projets et publications scientifiques.",
    category: "Recherche",
    url: "/documents/guide-recherche.pdf",
    datePublication: "Avril 2024",
    taille: "2.9 MB",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    id: "modalites-evaluation",
    title: "Modalités d'Évaluation",
    description: "Règles et critères d'évaluation des étudiants pour tous les niveaux et programmes de formation.",
    category: "Évaluation",
    url: "/documents/modalites-evaluation.pdf",
    datePublication: "Août 2024",
    taille: "1.5 MB",
    icon: <Award className="w-6 h-6" />,
  },
];

export {
  stats,
  actualites,
  partenaires,
  navigation,
  poles,
  enseignementFacultes,
  rechercheEntites,
  laboratoires,
  projetsRecherche,
  documents,
};
