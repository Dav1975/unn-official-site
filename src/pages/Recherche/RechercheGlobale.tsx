import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X, FileText, GraduationCap, Beaker, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { 
  actualites, 
  poles, 
  enseignementFacultes, 
  rechercheEntites, 
  laboratoires,
  projetsRecherche,
  polesData 
} from "../../constants";

interface SearchResult {
  type: 'actualite' | 'pole' | 'formation' | 'laboratoire' | 'projet';
  title: string;
  description: string;
  link: string;
  category?: string;
  icon?: React.ReactNode;
  date?: string;
}

export default function RechercheGlobale() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'Tout', icon: <Search className="w-4 h-4" /> },
    { id: 'actualite', label: 'Actualités', icon: <Calendar className="w-4 h-4" /> },
    { id: 'formation', label: 'Formations', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'laboratoire', label: 'Laboratoires', icon: <Beaker className="w-4 h-4" /> },
    { id: 'projet', label: 'Projets', icon: <FileText className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [searchParams]);

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Enlève les accents
  };

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const normalizedQuery = normalizeText(query);
    const allResults: SearchResult[] = [];

    // Recherche dans les actualités
    actualites.forEach((actu) => {
      const searchableText = normalizeText(
        `${actu.title} ${actu.description} ${actu.category}`
      );
      if (searchableText.includes(normalizedQuery)) {
        allResults.push({
          type: 'actualite',
          title: actu.title,
          description: actu.description,
          link: '/actualité',
          category: actu.category,
          date: actu.date,
          icon: <Calendar className="w-5 h-5" />,
        });
      }
    });

    // Recherche dans les pôles d'enseignement
    enseignementFacultes.forEach((pole) => {
      const searchableText = normalizeText(
        `${pole.title} ${pole.description} ${pole.code}`
      );
      if (searchableText.includes(normalizedQuery)) {
        allResults.push({
          type: 'formation',
          title: pole.title,
          description: pole.description,
          link: pole.href || '/formations',
          category: pole.code,
          icon: <GraduationCap className="w-5 h-5" />,
        });
      }
    });

    // Recherche dans les pôles détaillés
    Object.values(polesData).forEach((pole) => {
      const searchableText = normalizeText(
        `${pole.title} ${pole.description} ${pole.acronym} ${pole.formations.join(' ')}`
      );
      if (searchableText.includes(normalizedQuery)) {
        allResults.push({
          type: 'pole',
          title: pole.title,
          description: pole.description,
          link: '/formations',
          category: pole.acronym,
          icon: <GraduationCap className="w-5 h-5" />,
        });
      }
    });

    // Recherche dans les laboratoires
    laboratoires.forEach((lab) => {
      const searchableText = normalizeText(
        `${lab.nom} ${lab.acronyme} ${lab.description} ${lab.domaines.join(' ')}`
      );
      if (searchableText.includes(normalizedQuery)) {
        allResults.push({
          type: 'laboratoire',
          title: lab.nom,
          description: lab.description,
          link: '/recherche',
          category: lab.acronyme,
          icon: <Beaker className="w-5 h-5" />,
        });
      }
    });

    // Recherche dans les entités de recherche
    rechercheEntites.forEach((entite) => {
      const searchableText = normalizeText(
        `${entite.title} ${entite.description} ${entite.code}`
      );
      if (searchableText.includes(normalizedQuery)) {
        allResults.push({
          type: 'laboratoire',
          title: entite.title,
          description: entite.description,
          link: entite.href || '/recherche',
          category: entite.code,
          icon: <Beaker className="w-5 h-5" />,
        });
      }
    });

    // Recherche dans les projets de recherche
    projetsRecherche.forEach((projet) => {
      const searchableText = normalizeText(
        `${projet.titre} ${projet.description} ${projet.laboratoire} ${projet.partenaires.join(' ')}`
      );
      if (searchableText.includes(normalizedQuery)) {
        allResults.push({
          type: 'projet',
          title: projet.titre,
          description: projet.description,
          link: '/recherche',
          category: projet.laboratoire,
          icon: <FileText className="w-5 h-5" />,
        });
      }
    });

    setResults(allResults);
    setIsSearching(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
      performSearch(searchQuery);
    }
  };

  const filteredResults = selectedFilter === 'all' 
    ? results 
    : results.filter(result => result.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#D9D8D5]/20 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec barre de recherche */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#12283E] mb-4">
              Recherche
            </h1>
            <p className="text-lg text-[#12283E]/70">
              Trouvez des informations sur les formations, actualités, laboratoires et projets
            </p>
          </div>

          {/* Barre de recherche principale */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher des formations, actualités, laboratoires..."
                className="w-full px-6 py-4 pr-32 bg-white text-[#12283E] placeholder:text-[#12283E]/40 transition-all duration-300 focus:outline-none focus:shadow-2xl border-2 border-[#D9D8D5] focus:border-[#2f4858]"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setResults([]);
                      setSearchParams({});
                    }}
                    className="p-2 text-[#12283E]/50 hover:text-[#12283E] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#2f4858] text-white hover:bg-[#2f4858]/90 transition-all duration-300 font-semibold"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 transition-all duration-300 flex items-center gap-2 ${
                  selectedFilter === filter.id
                    ? 'bg-[#2f4858] text-white shadow-lg'
                    : 'bg-white text-[#12283E] hover:bg-[#D9D8D5]/50'
                }`}
              >
                {filter.icon}
                <span className="font-medium">{filter.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Résultats */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#12283E]">
                {filteredResults.length} résultat{filteredResults.length !== 1 ? 's' : ''} 
                {searchQuery && ` pour "${searchQuery}"`}
              </h2>
            </div>

            {isSearching ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#2f4858]"></div>
                <p className="mt-4 text-[#12283E]/70">Recherche en cours...</p>
              </div>
            ) : filteredResults.length === 0 ? (
              <Card className="p-12 text-center border-[#D9D8D5]">
                <div className="max-w-md mx-auto">
                  <Search className="w-16 h-16 text-[#12283E]/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#12283E] mb-2">
                    Aucun résultat trouvé
                  </h3>
                  <p className="text-[#12283E]/70">
                    Essayez avec d'autres mots-clés ou vérifiez l'orthographe
                  </p>
                </div>
              </Card>
            ) : (
              <div className="grid gap-6">
                {filteredResults.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={result.link}>
                      <Card className="hover:shadow-2xl transition-all duration-300 border-[#D9D8D5] hover:border-[#2f4858] group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#2f4858]/10 flex items-center justify-center text-[#2f4858]">
                              {result.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                {result.category && (
                                  <span className="px-3 py-1 bg-[#2f4858] text-white text-xs font-semibold">
                                    {result.category}
                                  </span>
                                )}
                                {result.date && (
                                  <span className="text-sm text-[#12283E]/60">
                                    {result.date}
                                  </span>
                                )}
                              </div>
                              <h3 className="text-xl font-bold text-[#12283E] mb-2 group-hover:text-[#2f4858] transition-colors">
                                {result.title}
                              </h3>
                              <p className="text-[#12283E]/70 line-clamp-2 mb-3">
                                {result.description}
                              </p>
                              <div className="flex items-center gap-2 text-[#2f4858] font-semibold group-hover:gap-3 transition-all">
                                En savoir plus
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Message initial si pas de recherche */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="w-20 h-20 text-[#12283E]/20 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-[#12283E] mb-4">
              Commencez votre recherche
            </h3>
            <p className="text-[#12283E]/70 max-w-md mx-auto">
              Utilisez la barre de recherche ci-dessus pour trouver des informations sur nos formations, actualités, laboratoires et projets de recherche.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

