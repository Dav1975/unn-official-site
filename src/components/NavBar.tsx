import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, X, ChevronDown, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { navigation } from "../constants";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Code pour la gestion de la barre active supprimé car non utilisé
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recherche-globale?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery("");
    }
  };

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Délai de 200ms avant fermeture
  };

  const isActiveLink = (item: typeof navigation[0]) => {
    // Décoder les URLs pour gérer les caractères spéciaux comme les accents
    const currentPath = decodeURIComponent(location.pathname);
    const itemPath = decodeURIComponent(item.href);
    
    // Vérifie si le chemin actuel correspond exactement au lien
    if (currentPath === itemPath) {
      return true;
    }
    
    // Vérifie si le chemin actuel correspond à l'un des sous-menus
    if (item.children) {
      return item.children.some(child => {
        const childPath = decodeURIComponent(child.href);
        return currentPath === childPath;
      });
    }
    
    return false;
  };

  return (
    <nav className="shadow-lg bg-gradient-to-r from-white via-[#D9D8D5]/20 to-white sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Navigation principale */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-1 sm:space-x-2 relative">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to={item.href}
                  ref={(el) => { linksRef.current[index] = el; }}
                  className={`px-3 sm:px-4 py-2.5 text-sm font-medium transition-all duration-300 inline-flex items-center gap-1 ${
                    isActiveLink(item)
                      ? "text-white bg-[#2f4858] font-semibold shadow-md" 
                      : "text-[#12283E]/70 hover:text-white hover:bg-[#2f4858]/90 hover:shadow-md"
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {/* Sous-menu déroulant */}
                {item.children && openDropdown === item.name && (
                  <div
                    className="absolute left-0 top-full w-64 bg-white shadow-2xl overflow-hidden animate-fadeIn z-50"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className={`block px-4 py-3 text-sm transition-all duration-200 border-l-4 ${
                          location.pathname === sub.href
                            ? "bg-[#2f4858]/10 text-[#12283E] font-semibold pl-6 border-[#2f4858]"
                            : "text-[#12283E]/80 hover:bg-[#2f4858]/10 hover:text-[#12283E] hover:pl-6 border-transparent hover:border-[#2f4858]"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="flex items-center gap-2 relative">
            {/* Bouton Moodle */}
            <a
              href="http://192.168.1.104/moodle/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 text-sm font-medium text-white bg-[#2f4858] hover:bg-[#2f4858]/90 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105"
              title="Accéder à Moodle"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Moodle</span>
            </a>

            {/* Zone de recherche */}
            <div className="relative">
              {searchOpen ? (
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 bg-white shadow-lg border border-gray-200">
                    <div className="relative">
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearchKeyDown}
                        placeholder="Rechercher sur le site..."
                        className="w-64 sm:w-80 px-4 py-3 pr-11 text-[#12283E] placeholder:text-[#12283E]/50 focus:outline-none"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Search className="w-4 h-4 text-[#2f4858]" />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={toggleSearch}
                      className="p-3 text-[#12283E] hover:text-white hover:bg-[#2f4858] transition-all duration-300"
                      aria-label="Fermer la recherche"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Menu déroulant de recherche */}
                  <motion.div
                    className="absolute top-full left-0 right-0 bg-white shadow-xl border border-gray-200 border-t-0 max-h-80 overflow-y-auto z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {/* Suggestions rapides */}
                    <div className="p-4 border-b border-gray-100">
                      <h4 className="text-sm font-semibold text-[#12283E] mb-3">Recherches populaires</h4>
                      <div className="grid grid-cols-1 gap-2">
                        <button
                          onClick={() => {
                            setSearchQuery("formations");
                            navigate(`/recherche-globale?q=${encodeURIComponent("formations")}`);
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="text-left px-3 py-2 text-sm text-[#12283E]/70 hover:bg-[#2f4858]/10 hover:text-[#12283E] transition-colors duration-200"
                        >
                          📚 Formations disponibles
                        </button>
                        <button
                          onClick={() => {
                            setSearchQuery("admission");
                            navigate(`/recherche-globale?q=${encodeURIComponent("admission")}`);
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="text-left px-3 py-2 text-sm text-[#12283E]/70 hover:bg-[#2f4858]/10 hover:text-[#12283E] transition-colors duration-200"
                        >
                          🎓 Procédures d'admission
                        </button>
                        <button
                          onClick={() => {
                            setSearchQuery("recherche");
                            navigate(`/recherche-globale?q=${encodeURIComponent("recherche")}`);
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="text-left px-3 py-2 text-sm text-[#12283E]/70 hover:bg-[#2f4858]/10 hover:text-[#12283E] transition-colors duration-200"
                        >
                          🔬 Projets de recherche
                        </button>
                      </div>
                    </div>

                    {/* Accès rapide */}
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-[#12283E] mb-3">Accès rapide</h4>
                      <div className="grid grid-cols-1 gap-2">
                        <Link
                          to="/formations"
                          onClick={toggleSearch}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-[#12283E]/70 hover:bg-[#2f4858]/10 hover:text-[#12283E] transition-colors duration-200"
                        >
                          🎯 Toutes les formations
                        </Link>
                        <Link
                          to="/recherche"
                          onClick={toggleSearch}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-[#12283E]/70 hover:bg-[#2f4858]/10 hover:text-[#12283E] transition-colors duration-200"
                        >
                          🔍 Recherche avancée
                        </Link>
                        <Link
                          to="/contact"
                          onClick={toggleSearch}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-[#12283E]/70 hover:bg-[#2f4858]/10 hover:text-[#12283E] transition-colors duration-200"
                        >
                          📞 Nous contacter
                        </Link>
                        <button
                          onClick={() => {
                            navigate('/recherche-globale');
                            toggleSearch();
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-[#12283E]/70 hover:bg-[#2f4858]/10 hover:text-[#12283E] transition-colors duration-200 w-full text-left"
                        >
                          🌐 Page de recherche complète
                        </button>
                      </div>
                    </div>

                    {/* Option de recherche globale */}
                    {searchQuery.trim() && (
                      <div className="border-t border-gray-100 p-4">
                        <button
                          onClick={handleSearch}
                          className="w-full flex items-center gap-3 px-4 py-3 bg-[#2f4858] text-white font-medium hover:bg-[#2f4858]/90 transition-colors duration-200"
                        >
                          <Search className="w-4 h-4" />
                          Rechercher "{searchQuery}" sur tout le site
                        </button>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ) : (
                <button
                  onClick={toggleSearch}
                  className="p-2.5 text-[#12283E] hover:text-white hover:bg-[#2f4858] transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Rechercher"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
