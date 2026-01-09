import {
  FileText,
  Calendar,
  CheckCircle,
  Users,
  GraduationCap,
  ClipboardCheck,
  AlertCircle,
  Download,
  Upload,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { motion } from "framer-motion";

export default function Admission() {
  const steps = [
    {
      number: 1,
      title: "Vérification des critères",
      description:
        "Assurez-vous de remplir les conditions d'admission pour le programme choisi",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Inscription en ligne",
      description:
        "Créez votre compte et remplissez le formulaire d'inscription sur notre plateforme",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: 3,
      title: "Soumission des documents",
      description:
        "Téléchargez tous les documents requis dans votre espace personnel",
      icon: <Upload className="w-6 h-6" />,
    },
    {
      number: 4,
      title: "Étude du dossier",
      description:
        "Votre candidature sera examinée par notre commission d'admission",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: 5,
      title: "Notification",
      description:
        "Vous recevrez une réponse par email concernant votre admission",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const requiredDocuments = [
    "Copie certifiée du diplôme de baccalauréat ou équivalent",
    "Relevés de notes des années précédentes",
    "Acte de naissance ou pièce d'identité",
    "Certificat de nationalité",
    "4 photos d'identité récentes",
    "Lettre de motivation",
    "Curriculum Vitae (CV)",
    "Certificat médical",
  ];

  const criteria = [
    {
      title: "Formation Initiale - Licence",
      requirements: [
        "Être titulaire d'un baccalauréat ou diplôme équivalent",
        "Avoir moins de 25 ans (dérogation possible)",
        "Réussir le test d'admission (selon les filières)",
      ],
    },
    {
      title: "Formation Initiale - Master",
      requirements: [
        "Être titulaire d'une Licence ou diplôme équivalent (Bac+3)",
        "Avoir une moyenne minimale de 12/20",
        "Présenter un projet de recherche pour certaines filières",
      ],
    },
    {
      title: "Formation Continue",
      requirements: [
        "Être en activité professionnelle",
        "Justifier d'une expérience professionnelle d'au moins 2 ans",
        "Niveau académique selon la formation souhaitée",
      ],
    },
  ];

  const importantDates = [
    {
      period: "1er Septembre - 30 Novembre",
      event: "Ouverture des inscriptions pour la rentrée académique",
    },
    {
      period: "1er - 15 Décembre",
      event: "Étude des dossiers et entretiens de sélection",
    },
    {
      period: "20 Décembre",
      event: "Publication des résultats d'admission",
    },
    {
      period: "1er - 31 Janvier",
      event: "Confirmation d'inscription et paiement des frais",
    },
    {
      period: "1er Février",
      event: "Début des cours",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2f4858] text-white  flex items-center justify-center ">
        {/* Image de fond avec blur */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm brightness-50"
          style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

          {/* Contenu principal */}
          <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

          </div>
        {/* Pancarte flottante */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px]"
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
                <CheckCircle className="w-4 h-4 text-[#2f4858]" />
              </motion.div>
              <h2 className="text-2xl font-bold text-[#2f4858]">Rejoignez-nous</h2>
            </div>
            <p className="text-[#12283E]/80 text-base leading-relaxed text-center">
              Suivez nos étapes d'admission pour intégrer l'une des formations de l'Université
              Numérique du Niger. Un processus simple et transparent.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Alert Section */}
      <div className="py-8 bg-white mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Alert className="border-[#2f4858] bg-[#2f4858]/5">
              <AlertCircle className="h-5 w-5 text-[#2f4858]" />
              <AlertDescription className="text-gray-700 ml-2">
                <span className="font-semibold">Attention :</span> Les
                inscriptions pour l'année académique 2025-2026 sont ouvertes.
                N'attendez pas la dernière minute pour soumettre votre dossier !
              </AlertDescription>
            </Alert>
          </motion.div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-12 text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Les Étapes d'Admission
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-2 border-[#D9D8D5] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="bg-[#2f4858] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold text-2xl"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-[#2f4858]">{step.icon}</div>
                          <h3 className="text-xl font-bold text-[#2f4858]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Criteria Section */}
      <div className="py-16 bg-[#D9D8D5]/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Critères d'Admission
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {criteria.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-2 border-[#D9D8D5] hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#2f4858] mb-6 text-center">
                      {category.title}
                    </h3>
                    <ul className="space-y-4">
                      {category.requirements.map((req, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-[#2f4858] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{req}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Required Documents Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
              >
                <FileText className="w-12 h-12 text-[#2f4858] mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-4">
                Documents Requis
              </h2>
              <p className="text-lg text-gray-700">
                Préparez les documents suivants pour votre dossier d'inscription
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#D9D8D5]/20 border-2 border-[#D9D8D5]">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {requiredDocuments.map((doc, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 bg-white p-4 rounded-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#2f4858] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{doc}</span>
                      </motion.div>
                    ))}
                  </div>
                <div className="mt-6 p-4 bg-white rounded-sm">
                  <p className="text-sm text-gray-600 flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-[#2f4858] flex-shrink-0" />
                    <span>
                      Tous les documents doivent être scannés en format PDF et
                      ne doivent pas dépasser 2 Mo par fichier.
                    </span>
                  </p>
                  </div>
                  <motion.div
                    className="mt-6 p-4 bg-white rounded-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-[#2f4858] flex-shrink-0" />
                      <span>
                        Tous les documents doivent être scannés en format PDF et
                        ne doivent pas dépasser 2 Mo par fichier.
                      </span>
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="py-16 bg-[#D9D8D5]/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
              >
                <Calendar className="w-12 h-12 text-[#2f4858] mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-4">
                Calendrier Important
              </h2>
              <p className="text-lg text-gray-700">
                Dates clés du processus d'admission
              </p>
            </motion.div>
            <div className="space-y-4">
              {importantDates.map((date, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white border-2 border-[#D9D8D5] hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="bg-[#2f4858] text-white px-4 py-2 rounded-sm font-semibold text-center min-w-[240px]">
                          {date.period}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 font-medium">{date.event}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-[#2f4858] to-[#3d5a6d] border-0">
              <CardContent className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <Download className="w-16 h-16 text-white mx-auto mb-6" />
                </motion.div>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Prêt à Commencer ?
                </motion.h2>
                <motion.p
                  className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Téléchargez le dossier d'inscription et commencez votre parcours
                  à l'Université Numérique du Niger
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="px-8 py-4 bg-white text-[#2f4858] border-2 border-white rounded-sm font-semibold hover:bg-transparent hover:text-white transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Télécharger le dossier
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-sm font-semibold hover:bg-white hover:text-[#2f4858] transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    S'inscrire en ligne
                  </motion.button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-[#D9D8D5]/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#2f4858] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Besoin d'Aide ?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Notre équipe d'admission est disponible pour répondre à toutes vos
              questions
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-2 border-[#D9D8D5]">
                <CardContent className="p-6">
                  <div className="text-[#2f4858] mb-2">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#2f4858] mb-2">Email</h3>
                  <p className="text-sm text-gray-600">
                    admission@unniger.ne
                  </p>
                </CardContent>
              </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-2 border-[#D9D8D5]">
                  <CardContent className="p-6">
                    <div className="text-[#2f4858] mb-2">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#2f4858] mb-2">Téléphone</h3>
                    <p className="text-sm text-gray-600">+227 XX XX XX XX</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-2 border-[#D9D8D5]">
                <CardContent className="p-6">
                  <div className="text-[#2f4858] mb-2">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#2f4858] mb-2">Adresse</h3>
                  <p className="text-sm text-gray-600">Niamey, Niger</p>
                </CardContent>
              </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

