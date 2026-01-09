import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, Users, Building, FlaskConical } from 'lucide-react';

interface ContextMenuProps {
  id: string;
  top?: number | false;
  left?: number | false;
  right?: number | false;
  bottom?: number | false;
  onClick: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ id, top, left, right, bottom, onClick }) => {
  const navigate = useNavigate();

  const poleMapping: { [key: string]: string } = {
    'pole-shs': 'shs',
    'pole-mpc': 'mpc',
    'pole-sna': 'sna',
    'pole-sjp': 'sjp',
    'pole-seg': 'seg',
    'pole-mpo': 'mpo',
    'pole-sti': 'sti',
  };

  const rechercheMapping: { [key: string]: string } = {
    'pole-recherche': '/recherche/poles-recherche',
    'pole-formation': '/recherche/poles-recherche',
    'lamon-ia': '/recherche/laboratoire/lamon-ia',
    'recyb': '/recherche/laboratoire/recyb',
    'lefe-er': '/recherche/laboratoire/lefe-er',
    'liam': '/recherche/laboratoire/liam',
    'lcs': '/recherche/laboratoire/lcs',
    'cen': '/recherche/laboratoire/cen',
    'master-bdia': '/recherche/details-laboratoire',
    'master-adoc': '/recherche/details-laboratoire',
  };

  const handleNavigation = (path: string, state?: any) => {
    navigate(path, { state });
    onClick();
  };

  const getMenuItems = () => {
    const items = [];

    // Actions spécifiques selon le type de nœud
    if (poleMapping[id]) {
      items.push({
        icon: <Users className="w-4 h-4" />,
        label: 'Voir les formations',
        action: () => handleNavigation('/formations/pole-details', {
          poleId: poleMapping[id],
          returnTo: '/institutions/organigramme'
        }),
        description: 'Accéder aux formations de ce pôle'
      });
      items.push({
        icon: <Info className="w-4 h-4" />,
        label: 'Informations du pôle',
        action: () => console.log(`Informations sur le pôle ${id}`),
        description: 'Voir les détails et statistiques'
      });
    }

    if (rechercheMapping[id]) {
      const route = rechercheMapping[id];
      if (route === '/recherche/poles-recherche') {
        items.push({
          icon: <FlaskConical className="w-4 h-4" />,
          label: 'Explorer la recherche',
          action: () => handleNavigation(route),
          description: 'Découvrir les activités de recherche'
        });
      } else if (route.startsWith('/recherche/laboratoire/')) {
        items.push({
          icon: <FlaskConical className="w-4 h-4" />,
          label: 'Détails du laboratoire',
          action: () => handleNavigation(route, { returnTo: '/institutions/organigramme' }),
          description: 'Voir les projets et équipes'
        });
      } else if (route === '/recherche/details-laboratoire') {
        items.push({
          icon: <FlaskConical className="w-4 h-4" />,
          label: 'Programme de formation',
          action: () => handleNavigation(route, {
            labId: id,
            returnTo: '/institutions/organigramme'
          }),
          description: 'Détails du cursus et admission'
        });
      }
    }

    if (id === 'rectorat') {
      items.push({
        icon: <Building className="w-4 h-4" />,
        label: 'Vue d\'ensemble',
        action: () => console.log('Affichage vue d\'ensemble rectorat'),
        description: 'Structure complète de l\'université'
      });
      items.push({
        icon: <Info className="w-4 h-4" />,
        label: 'Mission et vision',
        action: () => console.log('Mission du rectorat'),
        description: 'Objectifs et orientation stratégique'
      });
    }

    if (id === 'ufad') {
      items.push({
        icon: <Users className="w-4 h-4" />,
        label: 'Tous les pôles UFAD',
        action: () => console.log('Vue ensemble pôles UFAD'),
        description: 'Parcourir tous les pôles de formation'
      });
    }

    if (id === 'uren') {
      items.push({
        icon: <FlaskConical className="w-4 h-4" />,
        label: 'Projets de recherche',
        action: () => handleNavigation('/recherche'),
        description: 'Explorer toute la recherche UREN'
      });
    }

    // Actions génériques toujours disponibles
    items.push({
      icon: <Info className="w-4 h-4" />,
      label: 'Informations générales',
      action: () => console.log(`Informations générales sur ${id}`),
      description: 'Présentation et contact'
    });

    return items;
  };

  const menuItems = getMenuItems();

  return (
    <div
      className="absolute z-50 bg-white border-2 border-[#2f4858] rounded-lg shadow-xl min-w-[250px] max-w-[300px] animate-in fade-in duration-200"
      style={{
        top: top !== false ? top : undefined,
        left: left !== false ? left : undefined,
        right: right !== false ? right : undefined,
        bottom: bottom !== false ? bottom : undefined,
      }}
    >
      <div className="p-2">
        <div className="px-3 py-2 text-sm font-semibold text-[#2f4858] border-b border-[#D9D8D5] flex items-center gap-2">
          <Building className="w-4 h-4" />
          Actions pour {id.replace('pole-', '').replace('-', ' ').toUpperCase()}
        </div>
        <div className="py-1 max-h-60 overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-start gap-3 px-3 py-3 text-sm text-[#12283E] hover:bg-[#2f4858] hover:text-white rounded transition-colors duration-200 group"
              onClick={item.action}
              title={item.description}
            >
              <div className="flex-shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-xs opacity-70 mt-1 group-hover:opacity-90">
                    {item.description}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        <div className="border-t border-[#D9D8D5] mt-1 pt-1">
          <button
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded transition-colors duration-200"
            onClick={onClick}
          >
            ✕ Fermer le menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContextMenu;
