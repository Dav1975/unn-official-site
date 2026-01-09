import { useCallback, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ELK from 'elkjs/lib/elk.bundled.js';
import { Building2, GraduationCap, Lightbulb, FlaskConical, BookOpen } from 'lucide-react';
import {
    Background,
    ReactFlow,
    addEdge,
    Panel,
    useNodesState,
    useEdgesState,
    useReactFlow,
    Node,
    Edge,
    Connection,
    OnConnect,
    ReactFlowProvider,
    Handle,
    Position,
    NodeProps
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Types pour les options ELK
interface ElkOptions {
    [key: string]: string;
}

// Interface pour les données des nœuds
interface NodeData {
    title: string;
    label: string;
    subtitle: string;
    description: string;
    navigationType?: 'pole' | 'recherche' | string;
    originalId?: string;
}

// Type pour les résultats du layout
interface LayoutedElements {
    nodes: Node[];
    edges: Edge[];
}

const poleMapping: { [key: string]: string } = {
    'pole-shs': 'shs',
    'pole-mpc': 'mpc',
    'pole-sna': 'sna',
    'pole-sjp': 'sjp',
    'pole-seg': 'seg',
    'pole-mpo': 'mpo',
    'pole-sti': 'sti',
    'pole-recherche': 'recherche',
    'pole-formation': 'formation_expertise',
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

function useNodeNavigation(data: NodeData) {
    const navigate = useNavigate();

    const handleClick = useCallback((): void => {
        if (!data?.navigationType || !data?.originalId) {
            console.warn('Navigation skipped: navigationType or originalId manquant', data);
            return;
        }

        if (data.navigationType === 'pole') {
            const poleId = poleMapping[data.originalId];
            if (poleId) {
                navigate('/formations/pole-details', {
                    state: { poleId, returnTo: '/institutions/organigramme' },
                });
                return;
            }
            console.warn('Pole mapping introuvable pour', data.originalId);
            return;
        }

        // Navigation pour les formations (ex: masters) — ouvre la page de détail de formation
        if (data.navigationType === 'formation') {
            const formationId = data.originalId;
            if (formationId) {
                navigate('/formations/formation-details', {
                    state: { formationId, returnTo: '/institutions/organigramme' },
                });
                return;
            }
            console.warn('Formation id manquant pour la navigation', data);
            return;
        }

        if (data.navigationType === 'recherche') {
            const route = rechercheMapping[data.originalId];
            if (!route) {
                console.warn('Recherche mapping introuvable pour', data.originalId);
                return;
            }

            if (route === '/recherche/poles-recherche') {
                navigate(route);
                return;
            }

            if (route.startsWith('/recherche/laboratoire/')) {
                navigate(route, { state: { returnTo: '/institutions/organigramme' } });
                return;
            }

            if (route === '/recherche/details-laboratoire') {
                navigate(route, { state: { labId: data.originalId, returnTo: '/institutions/organigramme' } });
                return;
            }

            // fallback
            navigate(route);
        }
    }, [data, navigate]);

    return { handleClick };
}

// Composants de nœuds personnalisés
function RectoratNode({ data }: NodeProps) {
    const nodeData = data as unknown as NodeData;
    return (
        <div className="px-6 py-4  bg-[#2f4858] text-white border-2 border-[#2f4858] rounded-sm shadow-lg min-w-[200px]">
            <Handle type="target" position={Position.Top} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
            <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5" />
                <div className="font-bold text-lg">{nodeData.label}</div>
            </div>
            <div className="text-xs text-white/80">{nodeData.subtitle}</div>
            <Handle type="source" position={Position.Bottom} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
        </div>
    );
}

function UnitNode({ data }: NodeProps) {
    const nodeData = data as unknown as NodeData;
    const icon = nodeData.label.includes('UFAD') ? <GraduationCap className="w-5 h-5" /> : <Lightbulb className="w-5 h-5" />;
    return (
        <div className="px-5 py-3 bg-white text-[#12283E] border-2 border-[#2f4858] rounded-sm shadow-lg hover:shadow-xl transition-all min-w-[180px]">
            <Handle type="target" position={Position.Top} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
            <div className="flex items-center gap-2 mb-1">
                <div className="text-[#2f4858]">{icon}</div>
                <div className="font-bold text-base">{nodeData.label}</div>
            </div>
            <div className="text-xs text-[#12283E]/70">{nodeData.subtitle}</div>
            <Handle type="source" position={Position.Bottom} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
        </div>
    );
}

function PoleNode({ data }: NodeProps) {
    const nodeData = data as unknown as NodeData;
    const { handleClick } = useNodeNavigation(nodeData);
    
    return (
        <div 
            onClick={handleClick}
            onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
            role="button"
            tabIndex={0} 
            className="cursor-pointer px-5 py-3 bg-[#f4f3f2] text-[#12283E] border-2 border-[#D9D8D5] rounded-sm shadow-md hover:shadow-lg hover:border-[#2f4858] transition-all min-w-[200px] w-auto inline-block"
        >
            <Handle type="target" position={Position.Top} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
            <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-[#2f4858] flex-shrink-0" />
                <div className="font-semibold text-sm min-w-0 flex-1 whitespace-nowrap overflow-hidden">
                    {nodeData.label}
                </div>
            </div>
            <div className="text-xs text-[#12283E]/60">{nodeData.subtitle}</div>
            <Handle type="source" position={Position.Bottom} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
        </div>

    );
}

function LabNode({ data }: NodeProps) {
    const nodeData = data as unknown as NodeData;
    const { handleClick } = useNodeNavigation(nodeData);
    
    return (
        <div 
            onClick={handleClick}
            onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
            role="button"
            tabIndex={0}
            className="cursor-pointer px-4 py-2 bg-white text-[#12283E] border-2 border-[#2f4858] rounded-sm shadow-md hover:shadow-lg hover:bg-[#2f4858] hover:text-white transition-all min-w-[140px] group"
        >
            <Handle type="target" position={Position.Top} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
            <div className="flex items-center gap-2 mb-1">
                <FlaskConical className="w-4 h-4 text-[#2f4858] group-hover:text-white" />
                <div className="font-semibold text-sm">{nodeData.label}</div>
            </div>
            <div className="text-xs text-[#12283E]/60 group-hover:text-white/80">{nodeData.subtitle}</div>
            <Handle type="source" position={Position.Bottom} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
        </div>
    );
}

function FormationNode({ data }: NodeProps) {
    const nodeData = data as unknown as NodeData;
    const { handleClick } = useNodeNavigation(nodeData);
    
    return (
        <div 
            onClick={handleClick}
            onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
            role="button"
            tabIndex={0}
            className="cursor-pointer px-4 py-2 bg-gradient-to-br from-white to-[#D9D8D5]/20 text-[#12283E] border-2 border-[#2f4858] rounded-sm shadow-md hover:shadow-lg transition-all min-w-[140px] w-auto inline-block"
        >
            <Handle type="target" position={Position.Top} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
            <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-4 h-4 text-[#2f4858]" />
                <div className="font-semibold text-sm min-w-0 flex-1 whitespace-nowrap overflow-hidden">
                    {nodeData.label}
                </div>
            </div>
            <div className="text-xs text-[#12283E]/60">{nodeData.subtitle}</div>
            <Handle type="source" position={Position.Bottom} className="!bg-[#2f4858] !w-0 !h-0 !min-w-0 !min-h-0 !opacity-0" />
        </div>
    );
}


const nodeTypes = {
    rectorat: RectoratNode as any,
    unit: UnitNode as any,
    pole: PoleNode as any,
    lab: LabNode as any,
    formation: FormationNode as any,
};

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';
const elk = new ELK();

const elkOptions = {
    'elk.algorithm': 'layered',
    'elk.layered.spacing.nodeNodeBetweenLayers': '100',
    'elk.spacing.nodeNode': '80',
};

const initialNodes = [
    // Rectorat (niveau 0)
    {
        id: '1',
        type: 'rectorat',
        data: {
            title: 'RECTORAT',
            label: 'RECTORAT',
            subtitle: 'Direction Générale',
            description: 'Administration centrale de l\'Université Numérique du Niger',
        },
        position,
    },
    // UFAD (niveau 1)
    {
        id: '2',
        type: 'unit',
        data: {
            title: 'UFAD',
            label: 'UFAD',
            subtitle: 'Unité de Formation à Distance',
            description: '7 pôles de formation couvrant tous les domaines académiques',
        },
        position,
    },
    // UREN (niveau 1)
    {
        id: '3',
        type: 'unit',
        position,
        data: {
            title: 'UREN',
            label: 'UREN',
            subtitle: 'Unité de Recherche et Expertise Numérique',
            description: 'Recherche, innovation et développement technologique',
        },
    },
    // Pôles UFAD (niveau 2)
    {
        id: '2a',
        type: 'pole',
        position,
        data: {
            title: 'Pôle SHS',
            label: 'Pôle SHS',
            subtitle: 'Sciences Humaines et Sociales',
            description: 'Sociologie, Psychologie, Anthropologie, Histoire, Géographie',
            navigationType: 'pole',
            originalId: 'pole-shs'
        }
    },
    {
        id: '2b',
        type: 'pole',
        position,
        data: {
            title: 'Pôle MPC',
            label: 'Pôle MPC',
            subtitle: 'Mathématiques Physiques Chimie',
            description: 'Mathématiques pures et appliquées, Physique, Chimie',
            navigationType: 'pole',
            originalId: 'pole-mpc'
        }
    },
    {
        id: '2c',
        type: 'pole',
        position,
        data: {
            title: 'Pôle SNA',
            label: 'Pôle SNA',
            subtitle: 'Sciences Naturelles Agronomiques',
            description: 'Biologie, Sciences de la Terre, Agriculture, Environnement',
            navigationType: 'pole',
            originalId: 'pole-sna'
        }
    },
    {
        id: '2d',
        type: 'pole',
        position,
        data: {
            title: 'Pôle SJP',
            label: 'Pôle SJP',
            subtitle: 'Sciences Juridiques et Politiques',
            description: 'Droit, Science politique, Relations internationales',
            navigationType: 'pole',
            originalId: 'pole-sjp'
        }
    },
    {
        id: '2e',
        type: 'pole',
        position,
        data: {
            title: 'Pôle SEG',
            label: 'Pôle SEG',
            subtitle: 'Sciences Économiques de Gestion',
            description: 'Économie, Gestion, Management, Commerce',
            navigationType: 'pole',
            originalId: 'pole-seg'
        }
    },
    {
        id: '2f',
        type: 'pole',
        position,
        data: {
            title: 'Pôle MPO',
            label: 'Pôle MPO',
            subtitle: 'Médecine Pharmacie et Odontostomatologie',
            description: 'Sciences médicales, Pharmacie, Dentisterie',
            navigationType: 'pole',
            originalId: 'pole-mpo'
        }
    },
    {
        id: '2g',
        type: 'pole',
        position,
        data: {
            title: 'Pôle STI',
            label: 'Pôle STI',
            subtitle: "Sciences Techniques de l'Ingénierie",
            description: 'Ingénierie, Technologie, Sciences appliquées',
            navigationType: 'pole',
            originalId: 'pole-sti'
        }
    },
    // Pôles UREN (niveau 2)
    {
        id: '3a',
        type: 'pole',
        position,
        data: {
            title: 'Pôle de Recherche',
            label: 'Pôle Recherche',
            subtitle: 'Innovation et Découverte',
            description: 'Laboratoires de recherche, projets R&D, publications scientifiques',
            navigationType: 'pole',
            originalId: 'pole-recherche'
        }
    },
    {
        id: '3b',
        type: 'pole',
        position,
        data: {
            title: "Pôle de Formation et d'Expertise",
            label: 'Pôle Formation & Expertise',
            subtitle: 'Renforcement des compétences',
            description: 'Formation continue, certification, conseil et expertise',
            navigationType: 'pole',
            originalId: 'pole-formation'
        }
    },
    // Laboratoires UREN (niveau 3)
    {
        id: '3a1',
        type: 'lab',
        position,
        data: {
            title: 'LaMoN & IA',
            label: 'LaMoN & IA',
            subtitle: 'Laboratoire de Modélisation Numérique et IA',
            description: 'Intelligence artificielle, modélisation, simulation numérique',
            navigationType: 'recherche',
            originalId: 'lamon-ia'
        }
    },
    {
        id: '3a2',
        type: 'lab',
        position,
        data: {
            title: 'RéCyb',
            label: 'RéCyb',
            subtitle: 'Laboratoire Réseaux et CyberSécurité',
            description: 'Sécurité informatique, réseaux, cryptographie',
            navigationType: 'recherche',
            originalId: 'recyb'
        }
    },
    {
        id: '3a3',
        type: 'lab',
        position,
        data: {
            title: 'LEFE&ER',
            label: '2E R',
            subtitle: 'Labo Énergies Fossiles & Énergies Renouvelables',
            description: 'Énergies renouvelables, développement durable',
            navigationType: 'recherche',
            originalId: 'lefe-er'
        }
    },
    // Formations spécialisées UREN (niveau 3)
    {
        id: '3b1',
        type: 'formation',
        position,
        data: {
            title: 'Master Pro BDIA',
            label: 'Master Pro BDIA',
            subtitle: 'Big Data et Intelligence Artificielle',
            description: 'Formation professionnelle en science des données et IA',
            navigationType: 'formation',
            originalId: 'master-bdia'
        }
    },
    {
        id: '3b2',
        type: 'formation',
        position,
        data: {
            title: 'Master Recherche ADOC',
            label: 'Master Recherche ADOC',
            subtitle: 'Aide à la Décision et Optimisation Combinatoire',
            description: 'Recherche en optimisation et aide à la décision',
            navigationType: 'formation',
            originalId: 'master-adoc'
        }
    },
];

const initialEdges = [
    // Connections principales
    { id: 'e12', source: '1', target: '2', type: edgeType, animated: true },
    { id: 'e13', source: '1', target: '3', type: edgeType, animated: true },

    // UFAD vers pôles
    { id: 'e22a', source: '2', target: '2a', type: edgeType, animated: true },
    { id: 'e22b', source: '2', target: '2b', type: edgeType, animated: true },
    { id: 'e22c', source: '2', target: '2c', type: edgeType, animated: true },
    { id: 'e2a2d', source: '2a', target: '2d', type: edgeType, animated: true },
    { id: 'e2b2e', source: '2b', target: '2e', type: edgeType, animated: true },
    { id: 'e2c2f', source: '2c', target: '2f', type: edgeType, animated: true },
    { id: 'e2e2g', source: '2e', target: '2g', type: edgeType, animated: true },

    // UREN vers pôles
    { id: 'e33a', source: '3', target: '3a', type: edgeType, animated: true },
    { id: 'e33b', source: '3', target: '3b', type: edgeType, animated: true },

    // Pôle Recherche vers laboratoires
    { id: 'e3a3a1', source: '3a', target: '3a1', type: edgeType, animated: true },
    { id: 'e3a3a2', source: '3a', target: '3a2', type: edgeType, animated: true },
    { id: 'e3a3a3', source: '3a', target: '3a3', type: edgeType, animated: true },

    // Pôle Formation vers formations spécialisées
    { id: 'e3b3b1', source: '3b', target: '3b1', type: edgeType, animated: true },
    { id: 'e3b3b2', source: '3b', target: '3b2', type: edgeType, animated: true },
];



const getLayoutedElements = (
    nodes: Node[], 
    edges: Edge[], 
    options: ElkOptions = {}
): Promise<LayoutedElements> => {
    const isHorizontal = options?.['elk.direction'] === 'RIGHT';
    const graph = {
        id: 'root',
        layoutOptions: options,
        children: nodes.map((node: Node) => ({
            ...node,
            // Adjust the target and source handle positions based on the layout
            // direction.
            targetPosition: isHorizontal ? 'left' : 'top',
            sourcePosition: isHorizontal ? 'right' : 'bottom',

            // Hardcode a width and height for elk to use when layouting.
            width: 150,
            height: 50,
        })),
        edges: edges.map(edge => ({
            id: edge.id,
            sources: [edge.source],
            targets: [edge.target]
        })),
    };

    return elk
        .layout(graph)
        .then((layoutedGraph) => {
            const layoutedNodes = layoutedGraph.children?.map((node: any) => ({
                ...node,
                // React Flow expects a position property on the node instead of `x`
                // and `y` fields.
                position: { x: node.x || 0, y: node.y || 0 },
            })) || [];

            return {
                nodes: layoutedNodes,
                edges: edges, // Retourner les edges originaux
            };
        })
        .catch((error) => {
            console.error('Layout error:', error);
            return { nodes, edges }; // Retourner les nœuds et edges originaux en cas d'erreur
        });
};

function LayoutFlow() {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    const { fitView } = useReactFlow();

    const onConnect: OnConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)), 
        [setEdges]
    );
    
    const onLayout = useCallback(
        ({ direction, useInitialNodes = false }: { direction: string; useInitialNodes?: boolean }) => {
            const opts = { 'elk.direction': direction, ...elkOptions };
            const ns = useInitialNodes ? initialNodes : nodes;
            const es = useInitialNodes ? initialEdges : edges;

            getLayoutedElements(ns, es, opts).then((result) => {
                setNodes(result.nodes);
                setEdges(result.edges);
                fitView();
            });
        },
        [nodes, edges, setNodes, setEdges, fitView],
    );

    // Calculate the initial layout on mount.
    useLayoutEffect(() => {
        onLayout({ direction: 'DOWN', useInitialNodes: true });
    }, []);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            defaultEdgeOptions={{
                animated: true,
                style: { stroke: '#2f4858', strokeWidth: 2 },
            }}
        >
            <Panel position="top-right" className="flex gap-2">
                <button
                    className="px-4 py-2 bg-[#2f4858] text-white border-2 border-[#2f4858] rounded-sm font-semibold hover:bg-white hover:text-[#2f4858] transition-all shadow-md"
                    onClick={() => onLayout({ direction: 'DOWN' })}
                >
                    Layout Vertical
                </button>

                <button
                    className="px-4 py-2 bg-white text-[#2f4858] border-2 border-[#2f4858] rounded-sm font-semibold hover:bg-[#2f4858] hover:text-white transition-all shadow-md"
                    onClick={() => onLayout({ direction: 'RIGHT' })}
                >
                    Layout Horizontal
                </button>
            </Panel>
            <Background className="bg-[#D9D8D5]/10" gap={20} />
        </ReactFlow>
    );
}

const Test = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Section d'introduction */}
            <div className="relative bg-[#2f4858] text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center blur-lg z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1950&q=80')",
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-6 py-32 text-center z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Structure Organisationnelle
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            Découvrez l'organisation de l'Université Numérique du Niger
                        </p>
                    </motion.div>
                </div>

                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px]">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="bg-white text-[#12283E] p-8 shadow-[12px_12px_0px_#2f4858] border-[#D9D8D5]"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <h2 className="text-2xl font-bold text-[#2f4858]">Structure Organisationnelle</h2>
                        </div>
                        <p className="text-[#12283E]/80 text-base leading-relaxed">
                            Cette section illustre les différentes unités, pôles et laboratoires composant
                            l'Université Numérique. Elle met en lumière la dynamique entre la formation et la recherche.
                        </p>
                    </motion.div>
                </div>
            </div>


            {/* Section organigramme */}
            <div className="mt-32 mb-20 bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white border-2 border-[#2f4858] rounded-sm shadow-xl overflow-hidden"
                        style={{ height: '600px' }}
                    >
                        <ReactFlowProvider>
                        <LayoutFlow />
                        </ReactFlowProvider>
                    </motion.div>
                </div>
            </div>

            {/* Legend */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white border-2 border-[#2f4858] rounded-lg p-8 shadow-xl"
                >
                    <h3 className="text-2xl font-bold text-[#2f4858] mb-6 flex items-center gap-3">
                        <Building2 className="w-6 h-6 text-[#2f4858]" />
                        Légende
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold text-[#2f4858] mb-3">Acronymes des Pôles UFAD</h4>
                            <ul className="space-y-2 text-[#12283E]/80">
                                <li><strong>SHS:</strong> Sciences Humaines et Sociales</li>
                                <li><strong>MPC:</strong> Mathématiques Physiques Chimie</li>
                                <li><strong>SNA:</strong> Sciences Naturelles Agronomiques</li>
                                <li><strong>SJP:</strong> Sciences Juridiques et Politiques</li>
                                <li><strong>SEG:</strong> Sciences Économiques de Gestion</li>
                                <li><strong>MPO:</strong> Médecine Pharmacie et Odontostomatologie</li>
                                <li><strong>STI:</strong> Sciences Techniques de l'Ingénierie</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#2f4858] mb-3">Unités & Laboratoires</h4>
                            <ul className="space-y-2 text-[#12283E]/80">
                                <li><strong>UFAD:</strong> Unité de Formation à Distance</li>
                                <li><strong>UREN:</strong> Unité de Recherche et d'Expertise Numérique</li>
                                <li><strong>LaMoN & IA:</strong> Lab. de Modélisation Numérique et IA</li>
                                <li><strong>RéCyb:</strong> Lab. de Réseaux et CyberSécurité</li>
                                <li><strong>2E R:</strong> Lab. Énergies Fossiles & Renouvelables</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#2f4858] mb-3">Formations spécialisées</h4>
                            <ul className="space-y-2 text-[#12283E]/80">
                                <li><strong>Master Pro BDIA:</strong> Data & Intelligence — Big Data, IA et applications</li>
                                <li><strong>Master Recherche ADOC:</strong> Aide à la Décision & Optimisation Combinatoire</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Test;
