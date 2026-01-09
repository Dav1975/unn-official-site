import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const AcademicFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#2f4858] rounded-sm flex items-center justify-center border-2 border-[#2f4858]">
                <span className="text-white font-bold text-xl">UN</span>
              </div>
              <span className="text-xl font-bold text-[#12283E]">
                Université Numérique
              </span>
            </div>
            <p className="text-[#12283E]/70 mb-6 leading-relaxed">
              Une institution d'excellence dédiée à l'enseignement supérieur
              numérique et à la formation de leaders innovants.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#2f4858] text-[#12283E] hover:text-white rounded-sm flex items-center justify-center transition-all border border-gray-200 hover:border-[#2f4858]"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#2f4858] text-[#12283E] hover:text-white rounded-sm flex items-center justify-center transition-all border border-gray-200 hover:border-[#2f4858]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#2f4858] text-[#12283E] hover:text-white rounded-sm flex items-center justify-center transition-all border border-gray-200 hover:border-[#2f4858]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#2f4858] text-[#12283E] hover:text-white rounded-sm flex items-center justify-center transition-all border border-gray-200 hover:border-[#2f4858]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-[#2f4858] text-[#12283E] hover:text-white rounded-sm flex items-center justify-center transition-all border border-gray-200 hover:border-[#2f4858]"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-bold text-[#12283E] mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Formations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Recherche
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Vie Étudiante
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Actualités
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services étudiants */}
          <div>
            <h4 className="text-lg font-bold text-[#12283E] mb-6">
              Services Étudiants
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Portail Étudiant
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Bibliothèque Numérique
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Plateforme E-learning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Support Technique
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Orientation Carrière
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12283E]/70 hover:text-[#2f4858] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#D9D8D5] group-hover:bg-[#2f4858] rounded-full mr-2 transition-colors"></span>
                  Réseau Anciens
                </a>
              </li>
            </ul>
          </div>

          {/* Contact et newsletter */}
          <div>
            <h4 className="text-lg font-bold text-[#12283E] mb-6">Contact</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#2f4858] mr-3 shrink-0 mt-1" />
                <span className="text-[#12283E]/70 text-sm">
                  Avenue de l'Université
                  <br />
                  Niamey, Niger
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#2f4858] mr-3 shrink-0" />
                <span className="text-[#12283E]/70 text-sm">
                  +227 xxx xxx xxx
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#2f4858] mr-3 shrink-0" />
                <span className="text-[#12283E]/70 text-sm">
                  contact@universitenumerique.ne
                </span>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-[#12283E] mb-3">Newsletter</h5>
              <p className="text-sm text-[#12283E]/70 mb-4">
                Recevez nos actualités et nouveautés
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2f4858] focus:border-[#2f4858] text-[#12283E] text-sm"
                />
                <button className="px-4 py-2 bg-[#2f4858] text-white rounded-sm hover:bg-[#D9D8D5] hover:text-[#12283E] transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#12283E]/70">
              © 2025 Université Numérique du Niger. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-[#12283E]/70 hover:text-[#2f4858] transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-sm text-[#12283E]/70 hover:text-[#12283E] transition-colors"
              >
                Conditions d'utilisation
              </a>
              <a
                href="#"
                className="text-sm text-[#12283E]/70 hover:text-[#12283E] transition-colors"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AcademicFooter;
