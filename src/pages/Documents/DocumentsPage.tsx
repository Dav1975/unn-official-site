import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Search,
  Filter,
  Calendar,
  HardDrive,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Badge } from "../../components/ui/badge";
import { documents } from "../../constants";
import { useState, useMemo } from "react";

export function DocumentsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extraire les catégories uniques
  const categories = useMemo(() => {
    const cats = [...new Set(documents.map((doc) => doc.category))];
    return cats.sort();
  }, []);

  // Filtrer les documents
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch = doc.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleDownload = (url: string, title: string) => {
    // Créer un lien temporaire pour télécharger le fichier
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section inspiré de RecteurSection */}
      <div className="relative bg-[#2f4858] text-white">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-lg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

        {/* Contenu principal */}
        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
          </motion.div>
        </div>

        {/* Pancarte flottante */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white text-[#12283E] p-8 shadow-[12px_12px_0px_#2f4858] border-[#D9D8D5]"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-[#2f4858]">Bibliothèque Numérique</h2>
            </div>
            <p className="text-[#12283E]/80 text-base leading-relaxed text-center">
              Explorez notre collection complète de documents officiels, guides et ressources
              pédagogiques disponibles en téléchargement libre.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section de recherche et filtres */}
      <div className="py-8 pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4"
          >
            {/* Barre de recherche */}
            <div className="relative my-4 py-4 flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher un document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 border-2 border-[#D9D8D5] focus:border-[#2f4858] rounded-lg"
              />
            </div>

            {/* Filtre par catégorie */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 border-2 border-[#D9D8D5] focus:border-[#2f4858]">
                  <SelectValue placeholder="Toutes catégories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes catégories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Statistiques de recherche */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-center text-gray-600"
          >
            {filteredDocuments.length} document{filteredDocuments.length > 1 ? "s" : ""} trouvé{filteredDocuments.length > 1 ? "s" : ""}
          </motion.div>
        </div>
      </div>

      {/* Grille des documents */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDocuments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">
                Aucun document trouvé
              </h3>
              <p className="text-gray-400">
                Essayez avec d'autres termes de recherche ou changez de catégorie
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {filteredDocuments.map((doc) => (
                <motion.div
                  key={doc.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-[#D9D8D5] hover:border-[#2f4858]/50 group">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Header avec icône et catégorie */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-[#2f4858]/10 rounded-lg text-[#2f4858] group-hover:bg-[#2f4858] group-hover:text-white transition-all duration-300">
                          {doc.icon}
                        </div>
                        <Badge
                          variant="outline"
                          className="border-[#2f4858]/30 text-[#2f4858] hover:bg-[#2f4858] hover:text-white"
                        >
                          {doc.category}
                        </Badge>
                      </div>

                      {/* Titre et description */}
                      <div className="flex-1 mb-4">
                        <h3 className="text-xl font-bold text-[#12283E] mb-3 group-hover:text-[#2f4858] transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3 leading-relaxed">
                          {doc.description}
                        </p>
                      </div>

                      {/* Métadonnées */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>Publié en {doc.datePublication}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <HardDrive className="w-4 h-4" />
                          <span>{doc.taille}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button
                          onClick={() => handleDownload(doc.url, doc.title)}
                          className="flex-1 bg-[#2f4858] hover:bg-[#21363F] text-white gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Télécharger
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.open(doc.url, '_blank')}
                          className="border-[#2f4858] text-[#2f4858] hover:bg-[#2f4858] hover:text-white"
                        >
                          <FileText className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Section informative */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#12283E] mb-6">
              À Propos de nos Documents
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#D9D8D5]">
                <FileText className="w-8 h-8 text-[#2f4858] mb-4 mx-auto" />
                <h3 className="font-semibold text-[#12283E] mb-2">
                  Documents Officiels
                </h3>
                <p className="text-gray-600 text-sm">
                  Tous nos documents sont officiels et régulièrement mis à jour pour garantir l'exactitude des informations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-[#D9D8D5]">
                <Download className="w-8 h-8 text-[#2f4858] mb-4 mx-auto" />
                <h3 className="font-semibold text-[#12283E] mb-2">
                  Accès Libre
                </h3>
                <p className="text-gray-600 text-sm">
                  Téléchargez librement tous les documents en format PDF pour consultation hors ligne.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DocumentsSection;
