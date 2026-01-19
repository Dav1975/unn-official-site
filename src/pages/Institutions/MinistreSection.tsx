import { motion } from 'framer-motion';
import { Quote, Award, Target, Users } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const MinistreSection = () => {
  const valeurs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Académique",
      description: "Nous visons l'excellence dans tous nos programmes et recherches."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation Pédagogique",
      description: "Nous innovons constamment pour offrir la meilleure expérience d'apprentissage."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusion & Diversité",
      description: "Nous créons un environnement accueillant pour tous les étudiants."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section d'introduction améliorée */}
      <div className="relative bg-[#2f4858] text-white ">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-lg "
          style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

        {/* Contenu principal */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>
        </div>

        {/* Pancarte flottante */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px] ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white text-[#12283E] p-8 shadow-[12px_12px_0px_#2f4858] border-[#D9D8D5]"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-[#2f4858]">Message du Ministre</h2>
            </div>
            <p className="text-[#12283E]/80 text-base leading-relaxed">
              Découvrez le message du Ministre de l'Enseignement Supérieur, de la Recherche et de l' Innovation Technologique, porteur de la vision et des orientations stratégiques pour le developpement de l'Université Numérique du Niger.
            </p>
          </motion.div>
        </div>
      </div>

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
                <motion.div
                    className="absolute  bottom-4 -right-40 w-96 h-96 rounded-full bg-[#2f4858]/70"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20 relative">
                <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                    {/* Ministre Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-24 bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/images/ministre.jpg"
                                alt="Recteur"
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-[#12283E] mb-2">
                                    Pr. Mamadou Saïdou
                                </h3>
                                <p className="text-[#12283E]/70 text-sm">
                                    Ministre de l'Enseignement Supérieur, de la Recherche et de l'Innovation Technologique
                                </p>
                            </div>
                        </div>
                    </motion.div>

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
                        {/*    <p className="text-xl font-bold italic leading-relaxed">
                                "L'éducation est la clé qui ouvre les portes de l'avenir. À l'Université Numérique,
                                nous nous engageons à offrir une formation d'excellence qui prépare nos étudiants
                                aux défis du monde de demain."
                            </p>  */}
                        </div>

                        {/* Main Message */}
                        <div className="bg-white p-8   ]">
                            <div className="space-y-6 text-[#12283E] leading-relaxed text-lg font-medium">
                        {/*        <p className="text-xl font-bold text-[#2f4858]">
                                    Chers étudiants, chers collègues, chers partenaires,
                                </p>
                                <p>
                                    C'est avec un immense plaisir et une profonde fierté que je vous accueille au sein de
                                    l'Université Numérique. Notre institution représente bien plus qu'un établissement
                                    d'enseignement supérieur ; elle incarne une vision audacieuse de l'éducation du XXIe siècle.
                                </p>
                                <p>
                                    Dans un monde en constante évolution, où la technologie redéfinit les frontières du
                                    possible, notre université s'est donnée pour mission de former des leaders, des innovateurs
                                    et des penseurs critiques. Nous croyons fermement que l'éducation numérique n'est pas
                                    simplement une alternative à l'enseignement traditionnel, mais une opportunité unique
                                    d'enrichir l'expérience d'apprentissage et de la rendre accessible à tous.
                                </p>
                                <p>
                                    Notre approche pédagogique combine l'excellence académique, l'innovation technologique
                                    et un engagement profond envers le développement personnel de chaque étudiant. Nous
                                    investissons continuellement dans nos infrastructures, nos programmes et surtout dans
                                    notre corps professoral, composé d'experts reconnus dans leurs domaines respectifs.
                                </p>
                                <p>
                                    L'Université Numérique se distingue par sa capacité à anticiper les besoins du marché
                                    du travail et à adapter ses programmes en conséquence. Nous maintenons des partenariats
                                    étroits avec l'industrie, garantissant ainsi que nos diplômés possèdent les compétences
                                    et les connaissances recherchées par les employeurs.
                                </p>
                                <p>
                                    Au-delà de la formation académique, nous cultivons un environnement qui valorise la
                                    diversité, encourage la créativité et favorise l'esprit d'entrepreneuriat. Chaque
                                    étudiant est encouragé à explorer ses passions, à développer son leadership et à
                                    contribuer positivement à la société.
                                </p>
                                <p>
                                    Je vous invite à saisir pleinement les opportunités qui s'offrent à vous au sein de
                                    notre communauté universitaire. Que vous soyez étudiant, enseignant, chercheur ou
                                    partenaire, vous faites partie intégrante de notre réussite collective.
                                </p>
                                <p className="text-xl font-bold text-[#2f4858]">
                                    Ensemble, construisons l'avenir de l'éducation et formons les leaders de demain.
                                </p> */}
                                
                                {/* Signature */}
                                <div className="border-t border-[#D9D8D5] pt-6 mt-8">
                              {/*       <p className="font-black text-[#12283E] text-xl">Pr. Rachid Sani</p>
                                    <p className="text-[#2f4858] font-bold text-lg">Recteur de l'Université Numérique du Niger</p> */}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
        {/* Valeurs Section */}
      {/*   <div className=" bg-[#D9D8D5]/50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#12283E] mb-4">
                        Nos Valeurs Fondamentales
                    </h2>
                    <p className="text-lg text-[#12283E]/70 max-w-3xl mx-auto">
                        Les principes qui guident notre action au quotidien
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {valeurs.map((valeur, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                        >
                            <Card className="h-full border-2 border-[#D9D8D5] hover:border-[#2f4858] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-[#2f4858] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                        {valeur.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#12283E] mb-4">
                                        {valeur.title}
                                    </h3>
                                    <p className="text-[#12283E]/70 leading-relaxed">
                                        {valeur.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div> 
        </div> */}
    </div> 
  );
};

export default MinistreSection;