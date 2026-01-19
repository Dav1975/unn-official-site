import AcademicHeader from "./components/AcademicHeader";
import { AccueilSection } from "./pages/Accueil";
import { EspaceNumeriqueSection } from "./pages/EspaceNumerique";
import { SupportSection } from "./pages/Support";
import AcademicFooter from "./components/AcademicFooter";
import { Route, Routes } from "react-router-dom";
import PolesSection from "./pages/Poles/PolesSection";
import EnseignementSection from "./pages/Poles/EnseignementSection";
import RechercheSectionf from "./pages/Poles/RechercheSectionf";
import MinistreSection from "./pages/Institutions/MinistreSection";
import RecteurSection from "./pages/Institutions/RecteurSection";
import Test from "./pages/Institutions/Test";
import PolesAndDirection from "./pages/Institutions/PolesAndDirection";
import FormationContinue from "./pages/Formations/FormationContinue";
import FormationInitiale from "./pages/Formations/FormationInitiale";
import PoleDetails from "./pages/Formations/PoleDetails";
import FormationDetails from "./pages/Formations/FormationDetails";
import PolesRecherche from "./pages/Recherche/PolesRecherche";
import LaboratoiresPage from "./pages/Recherche/Laboratoires";
import EquipesRecherche from "./pages/Recherche/EquipesRecherche";
import LamonIA from "./pages/Recherche/laboratoires/LamonIA";
import ReCyb from "./pages/Recherche/laboratoires/ReCyb";
import LefeER from "./pages/Recherche/laboratoires/LefeER";
import ModelePedagogique from "./pages/Formations/ModelePedagogique";
import Admission from "./pages/Formations/Admission";
import ActualitesPage from "./pages/Actualites";
import ActualiteDetail from "./pages/Actualites/ActualiteDetail";
import RechercheGlobale from "./pages/Recherche/RechercheGlobale";
import { DocumentsSection } from "./pages/Documents";
import DocumentDetail from "./pages/Documents/DocumentDetail";

export default function App() {
  return (
    <div className="min-h-screen">
      <AcademicHeader />
      <main>
        <Routes>
          <Route path="/" element={<AccueilSection />} />
          <Route path="/recherche-globale" element={<RechercheGlobale />} />
          <Route path="/formations" element={<FormationInitiale />} />
          <Route path="/formations/formations-continues" element={<FormationContinue />} />
          <Route path="/formations/initial-formation" element={<FormationInitiale />} />
          <Route path="/formations/modele-pedagogique" element={<ModelePedagogique />} />
          <Route path="/formations/admission" element={<Admission />} />
          <Route path="/formations/pole-details" element={<PoleDetails />} />
          <Route path="/formations/formation-details" element={<FormationDetails />} />
          <Route path="/actualité" element={<ActualitesPage />} />
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/actualites/:id" element={<ActualiteDetail />} />
          <Route path="/documents" element={<DocumentsSection />} />
          <Route path="/documents/:id" element={<DocumentDetail />} />
          <Route path="/institutions/mot-du-ministre" element={< MinistreSection/>} />
          <Route path="/institutions" element={< MinistreSection/>} />
          <Route path="/institutions/mot-du-recteur" element={< RecteurSection/>} />
          <Route path="/institutions" element={< RecteurSection/>} />
          <Route path="/institutions/organigramme" element={< Test/>} />
          <Route path="/institutions/directions-et-poles" element={< PolesAndDirection/>} />
          <Route path="/poles" element={<PolesSection />} />
          <Route path="/recherche" element={<PolesRecherche />} />
          <Route path="/recherche/laboratoire/lamon-ia" element={<LamonIA />} />
          <Route path="/recherche/laboratoire/recyb" element={<ReCyb />} />
          <Route path="/recherche/laboratoire/lefe-er" element={<LefeER />} />
          <Route path="/recherche/poles-de-recherche" element={<PolesRecherche />} />
          <Route path="/recherche/laboratoires" element={<LaboratoiresPage />} />
          <Route path="/recherche/equipes-de-recherche" element={<EquipesRecherche />} />
          <Route
            path="/espace-numerique"
            element={<EspaceNumeriqueSection />}
          />
          <Route path="/support" element={<SupportSection />} />
          <Route path="/poles/enseignement" element={<EnseignementSection />} />
          <Route path="/poles/recherche" element={<RechercheSectionf />} />
        </Routes>
      </main>
      <AcademicFooter />
    </div>
  );
}
