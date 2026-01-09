# CustomButton Component

Un composant bouton réutilisable et personnalisable pour l'application UNNiger.

## Caractéristiques

- ✅ **Style cohérent** : `rounded-sm` avec fond rempli par défaut
- ✅ **Effet hover** : Le fond disparaît pour laisser juste la bordure
- ✅ **Animations** : Effet de scale au hover/tap avec Framer Motion (désactivable)
- ✅ **Variantes de couleurs** : Primary (bleu foncé) ou Secondary
- ✅ **Tailles multiples** : sm, md, lg
- ✅ **Support d'icônes** : Intégration avec Lucide Icons
- ✅ **Responsive** : Option pleine largeur
- ✅ **Accessible** : Support complet des attributs HTML button

## Installation

Le composant est déjà disponible dans votre projet :
```tsx
import CustomButton from './components/ui/custom-button';
```

## Utilisation de base

```tsx
// Bouton simple
<CustomButton>
  Cliquez-moi
</CustomButton>

// Avec onClick
<CustomButton onClick={() => console.log('Cliqué!')}>
  Soumettre
</CustomButton>
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `React.ReactNode` | - | Contenu du bouton (requis) |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Variante de couleur |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Taille du bouton |
| `icon` | `LucideIcon` | - | Icône Lucide à afficher |
| `iconPosition` | `'left' \| 'right'` | `'right'` | Position de l'icône |
| `fullWidth` | `boolean` | `false` | Le bouton prend toute la largeur |
| `animate` | `boolean` | `true` | Active/désactive les animations |
| `disabled` | `boolean` | `false` | Désactive le bouton |
| `className` | `string` | `''` | Classes CSS additionnelles |
| ...autres | `ButtonHTMLAttributes` | - | Tous les attributs HTML button |

## Exemples

### Tailles

```tsx
<CustomButton size="sm">Petit</CustomButton>
<CustomButton size="md">Moyen</CustomButton>
<CustomButton size="lg">Grand</CustomButton>
```

### Variantes

```tsx
<CustomButton variant="primary">Primary</CustomButton>
<CustomButton variant="secondary">Secondary</CustomButton>
```

### Avec icônes

```tsx
import { ArrowRight, Download, Plus } from 'lucide-react';

// Icône à droite
<CustomButton icon={ArrowRight} iconPosition="right">
  Continuer
</CustomButton>

// Icône à gauche
<CustomButton icon={Download} iconPosition="left">
  Télécharger
</CustomButton>

// Icône avec petite taille
<CustomButton icon={Plus} iconPosition="left" size="sm">
  Ajouter
</CustomButton>
```

### Pleine largeur

```tsx
<CustomButton fullWidth>
  S'inscrire maintenant
</CustomButton>

<CustomButton fullWidth size="lg" icon={ArrowRight} iconPosition="right">
  Voir le programme complet
</CustomButton>
```

### Désactivé

```tsx
<CustomButton disabled>
  Bouton indisponible
</CustomButton>
```

### Sans animation

```tsx
<CustomButton animate={false}>
  Sans effet d'animation
</CustomButton>
```

### Dans un formulaire

```tsx
<form onSubmit={handleSubmit}>
  <CustomButton type="submit" fullWidth>
    Envoyer le formulaire
  </CustomButton>
</form>
```

## Personnalisation des couleurs

Pour modifier les couleurs, éditez le fichier `custom-button.tsx` :

```tsx
const variantClasses = {
  primary: 'bg-[#2f4858] text-white border-2 border-[#2f4858] hover:bg-white hover:text-[#2f4858]',
  secondary: 'bg-[#12283E] text-white border-2 border-[#12283E] hover:bg-white hover:text-[#12283E]',
};
```

## Cas d'usage dans le projet

### 1. Cards de formation
```tsx
<CustomButton 
  onClick={() => navigate('/formations/details')}
  size="sm"
  icon={ChevronRight}
  iconPosition="right"
  fullWidth
>
  Voir le programme
</CustomButton>
```

### 2. Call-to-action principal
```tsx
<CustomButton size="lg" icon={ArrowRight} iconPosition="right">
  Démarrer mon inscription
</CustomButton>
```

### 3. Boutons d'action dans un formulaire
```tsx
<div className="flex gap-4">
  <CustomButton variant="secondary" onClick={handleCancel}>
    Annuler
  </CustomButton>
  <CustomButton type="submit">
    Enregistrer
  </CustomButton>
</div>
```

## Fichiers

- **Composant** : `/src/components/ui/custom-button.tsx`
- **Exemples** : `/src/examples/ButtonExamples.tsx`
- **Documentation** : `/src/components/ui/custom-button.md`

## Notes techniques

- Utilise **Framer Motion** pour les animations
- Compatible avec **Lucide React** pour les icônes
- Support du **forwardRef** pour les refs React
- **TypeScript** complet avec types stricts
- Classes Tailwind CSS optimisées

## Dépendances

- React
- Framer Motion
- Lucide React (pour les icônes)
- Tailwind CSS

