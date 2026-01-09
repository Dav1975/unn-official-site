import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  FileText,
  Download,
  ArrowLeft,
  Calendar,
  HardDrive,
  Eye,
  Share2,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { documents } from "../../constants";

export function DocumentDetail() {
  const { id } = useParams<{ id: string }>();
  const documentData = documents.find((doc) => doc.id === id);

  if (!documentData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-500 mb-2">
            Document non trouvé
          </h2>
          <p className="text-gray-400 mb-6">
            Le document demandé n'existe pas ou a été supprimé.
          </p>
          <Link to="/documents">
            <Button className="bg-[#2f4858] hover:bg-[#21363F] text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux documents
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    const link = window.document.createElement("a");
    link.href = documentData.url;
    link.download = documentData.title;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: documentData.title,
        text: documentData.description,
        url: window.location.href,
      });
    } else {
      // Fallback pour copier l'URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#21363F] to-[#2f4858] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/documents">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-[#D9D8D5] hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux documents
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg mb-4">
              {documentData.icon}
              <span className="text-white font-semibold">{documentData.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {documentData.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {documentData.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 border-[#D9D8D5] shadow-xl">
              <CardContent className="p-8">
                {/* Métadonnées du document */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#2f4858]" />
                      <div>
                        <p className="text-sm text-gray-500">Date de publication</p>
                        <p className="font-semibold text-[#12283E]">
                          {documentData.datePublication}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-5 h-5 text-[#2f4858]" />
                      <div>
                        <p className="text-sm text-gray-500">Taille du fichier</p>
                        <p className="font-semibold text-[#12283E]">{documentData.taille}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#2f4858]" />
                      <div>
                        <p className="text-sm text-gray-500">Type de document</p>
                        <Badge variant="outline" className="border-[#2f4858] text-[#2f4858]">
                          {documentData.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    onClick={handleDownload}
                    className="flex-1 bg-[#2f4858] hover:bg-[#21363F] text-white gap-2 py-3"
                  >
                    <Download className="w-5 h-5" />
                    Télécharger le document
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(documentData.url, '_blank')}
                    className="flex-1 border-[#2f4858] text-[#2f4858] hover:bg-[#2f4858] hover:text-white gap-2 py-3"
                  >
                    <Eye className="w-5 h-5" />
                    Aperçu
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 gap-2 py-3"
                  >
                    <Share2 className="w-5 h-5" />
                    Partager
                  </Button>
                </div>

                {/* Informations détaillées */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-[#12283E] mb-4">
                    À propos de ce document
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {documentData.description}
                  </p>

                  <div className="bg-[#D9D8D5]/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-[#12283E] mb-2">
                      Information importante
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ce document est officiel et fait autorité. Il est régulièrement mis à jour
                      pour refléter les dernières modifications réglementaires et procédurales
                      de l'Université Numérique du Niger.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Documents connexes */}
      <div className="py-16 bg-[#D9D8D5]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#12283E] mb-8 text-center">
              Documents connexes
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {documents
                .filter((doc) => doc.id !== documentData.id && doc.category === documentData.category)
                .slice(0, 3)
                .map((relatedDoc) => (
                  <Card
                    key={relatedDoc.id}
                    className="hover:shadow-lg transition-all duration-300 border border-[#D9D8D5]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-[#2f4858]/10 rounded-lg text-[#2f4858]">
                          {relatedDoc.icon}
                        </div>
                        <Badge variant="outline" className="border-[#2f4858]/30 text-[#2f4858]">
                          {relatedDoc.category}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-[#12283E] mb-2">
                        {relatedDoc.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedDoc.description}
                      </p>
                      <Link to={`/documents/${relatedDoc.id}`}>
                        <Button
                          variant="outline"
                          className="w-full border-[#2f4858] text-[#2f4858] hover:bg-[#2f4858] hover:text-white"
                        >
                          Voir le document
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DocumentDetail;
