import CustomButton from '../components/ui/custom-button';
import { ArrowRight, Download, Save, Plus, Search, Trash2 } from 'lucide-react';

/**
 * EXEMPLES D'UTILISATION DU COMPOSANT CUSTOMBUTTON
 *
 * Ce composant est un bouton réutilisable avec les fonctionnalités suivantes :
 * - Style : rounded-sm avec fond rempli
 * - Hover : le fond disparaît pour laisser juste la bordure
 * - Animation : effet de scale au hover/tap (peut être désactivé)
 * - Variantes : primary (bleu foncé) ou secondary (bleu plus foncé)
 * - Tailles : sm, md, lg
 * - Icônes : support des icônes Lucide à gauche ou à droite
 * - Largeur : peut prendre toute la largeur (fullWidth)
 */

export default function ButtonExamples() {
  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#12283E] mb-8">Exemples CustomButton</h1>

      {/* Tailles */}
      <section>
        <h2 className="text-2xl font-bold text-[#12283E] mb-4">Tailles</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton size="sm">Petit bouton</CustomButton>
          <CustomButton size="md">Bouton moyen</CustomButton>
          <CustomButton size="lg">Grand bouton</CustomButton>
        </div>
      </section>

      {/* Variantes */}
      <section>
        <h2 className="text-2xl font-bold text-[#12283E] mb-4">Variantes</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton variant="primary">Primary Button</CustomButton>
          <CustomButton variant="secondary">Secondary Button</CustomButton>
        </div>
      </section>

      {/* Avec icônes */}
      <section>
        <h2 className="text-2xl font-bold text-[#12283E] mb-4">Avec icônes</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton icon={ArrowRight} iconPosition="right">
            Continuer
          </CustomButton>
          <CustomButton icon={Download} iconPosition="left">
            Télécharger
          </CustomButton>
          <CustomButton icon={Save} iconPosition="left" size="sm">
            Enregistrer
          </CustomButton>
          <CustomButton icon={Plus} iconPosition="left" variant="secondary">
            Ajouter
          </CustomButton>
        </div>
      </section>

      {/* Pleine largeur */}
      <section>
        <h2 className="text-2xl font-bold text-[#12283E] mb-4">Pleine largeur</h2>
        <div className="max-w-md space-y-3">
          <CustomButton fullWidth icon={Search} iconPosition="left">
            Rechercher
          </CustomButton>
          <CustomButton fullWidth icon={ArrowRight} iconPosition="right" size="lg">
            Voir le programme complet
          </CustomButton>
        </div>
      </section>

      {/* Désactivé */}
      <section>
        <h2 className="text-2xl font-bold text-[#12283E] mb-4">État désactivé</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton disabled>Bouton désactivé</CustomButton>
          <CustomButton disabled icon={Trash2} iconPosition="left">
            Supprimer
          </CustomButton>
        </div>
      </section>

      {/* Sans animation */}
      <section>
        <h2 className="text-2xl font-bold text-[#12283E] mb-4">Sans animation</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton animate={false}>Sans animation</CustomButton>
          <CustomButton>Avec animation</CustomButton>
        </div>
      </section>

      {/* Cas d'usage pratiques */}
      <section>
        <h2 className="text-2xl font-bold text-[#12283E] mb-4">Cas d'usage pratiques</h2>

        {/* Card de formation */}
        <div className="max-w-md bg-white p-6 rounded-sm border-2 border-[#D9D8D5] shadow-lg">
          <h3 className="text-xl font-bold text-[#12283E] mb-2">
            Licence Sciences Humaines et Sociales
          </h3>
          <p className="text-[#12283E]/70 text-sm mb-4">
            Formation complète en sciences humaines et sociales...
          </p>
          <CustomButton
            fullWidth
            icon={ArrowRight}
            iconPosition="right"
            size="sm"
          >
            Voir le programme
          </CustomButton>
        </div>

        {/* Section CTA */}
        <div className="mt-8 bg-gradient-to-br from-[#2f4858]/5 to-transparent rounded-sm p-8 border border-[#2f4858]/10">
          <h3 className="text-2xl font-bold text-[#12283E] mb-4 text-center">
            Prêt à commencer ?
          </h3>
          <p className="text-[#12283E]/70 text-center mb-6 max-w-2xl mx-auto">
            Inscrivez-vous dès maintenant et démarrez votre parcours académique
          </p>
          <div className="flex justify-center">
            <CustomButton size="lg" icon={ArrowRight} iconPosition="right">
              Démarrer mon inscription
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Code d'exemple */}
      <section>
        <h2 className="text-2xl font-bold text-[#12283E] mb-4">Exemples de code</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-sm overflow-x-auto">
          <pre className="text-sm">
{`// Bouton simple
<CustomButton>
  Mon bouton
</CustomButton>

// Bouton avec icône
<CustomButton icon={ArrowRight} iconPosition="right">
  Continuer
</CustomButton>

// Bouton pleine largeur
<CustomButton fullWidth size="lg">
  S'inscrire maintenant
</CustomButton>

// Bouton avec onClick
<CustomButton 
  onClick={() => console.log('Cliqué!')}
  variant="secondary"
>
  Cliquez-moi
</CustomButton>

// Bouton désactivé
<CustomButton disabled>
  Indisponible
</CustomButton>`}
          </pre>
        </div>
      </section>
    </div>
  );
}

