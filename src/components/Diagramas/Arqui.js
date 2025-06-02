import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { FaServer, FaNetworkWired, FaUserCog, FaBug, FaDatabase, FaReact, FaTools, FaBuilding, FaLaptopCode } from 'react-icons/fa';

function getIcon(label) {
  const icons = {
    'INFRAESTRUCTURA': FaNetworkWired,
    'ATM\'s': FaTools,
    'SUCURSALES': FaBuilding,
    'SERVICIOS Y APLICACIONES': FaLaptopCode,
    'SGA APP (C#)': FaServer,
    'ENLACES DE COMUNICACIONES': FaNetworkWired,
    'SGA DB\nSQL SERVER': FaDatabase,
    'OPERADOR': FaUserCog,
    'REACT DASHBOARD': FaReact,
    'RECLAMOS: carga de tickets en proveedores': FaBug,
    'ESCALAMIENTO 1° NIVEL (SERGIO ORTIZ)': FaUserCog,
    'SEGUIMIENTO: consulta periódica de tickets abiertos o escalamiento': FaBug
  };

  const Icon = icons[label] || FaServer;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#42c8ee', fontWeight: 600 }}>
      <Icon style={{ color: '#42c8ee', fontSize: 18 }} />
      <span style={{ color: '#42c8ee', fontWeight: 600 }}>{label}</span>
    </div>
  );
}

function DiagramaSGAConIconos() {
  const nodeStyle = {
    background: 'transparent',
    border: '2px solid #42c8ee',
    borderRadius: 12,
    color: '#42c8ee',
    boxShadow: '0 0 16px #42c8ee99',
    fontWeight: 600,
    fontSize: 14,
    padding: 8,
    minWidth: 120,
    minHeight: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const initialNodes = [
    { id: 'servicios', position: { x: 60, y: 40 }, data: { label: getIcon('SERVICIOS\nY APLICACIONES') }, style: nodeStyle, type: 'default' },
    { id: 'sucursales', position: { x: 60, y: 140 }, data: { label: getIcon('SUCURSALES') }, style: nodeStyle, type: 'default' },
    { id: 'atms', position: { x: 60, y: 240 }, data: { label: getIcon("AT'S") }, style: nodeStyle, type: 'default' },
    { id: 'infra', position: { x: 60, y: 340 }, data: { label: getIcon('INFRAESTRUCTURA') }, style: nodeStyle, type: 'default' },
    { id: 'enlaces', position: { x: 60, y: 480 }, data: { label: getIcon('ENLACES\nDE COMUNICACIONES') }, style: nodeStyle, type: 'default' },
    { id: 'sga', position: { x: 320, y: 180 }, data: { label: getIcon('SGA APP\nC#') }, style: nodeStyle, type: 'default' },
    { id: 'sgadb', position: { x: 320, y: 340 }, data: { label: getIcon('SGA DB\nSQL SERVER') }, style: nodeStyle, type: 'default' },
    { id: 'operador', position: { x: 600, y: 180 }, data: { label: getIcon('OPERADOR') }, style: nodeStyle, type: 'default' },
    { id: 'reclamos', position: { x: 900, y: 60 }, data: { label: getIcon('RECLAMOS:\nCARGA DE TICKETS\nEN PROVEEDORES') }, style: nodeStyle, type: 'default' },
    { id: 'escalamiento', position: { x: 900, y: 160 }, data: { label: getIcon('ESCALAMIENTO:\n1° NIVEL (SERGIO ORTIZ)') }, style: nodeStyle, type: 'default' },
    { id: 'seguimiento', position: { x: 900, y: 260 }, data: { label: getIcon('SEGUIMIENTO:\nCONSULTA PERIÓDICA\nSOBRE TICKETS ABIERTOS\nO ESCALAMIENTO.') }, style: nodeStyle, type: 'default' },
    { id: 'dashboard', position: { x: 600, y: 340 }, data: { label: getIcon('REACT\nDASHBOARD') }, style: nodeStyle, type: 'default' },
  ];

  const edgeStyle = { stroke: '#42c8ee', strokeWidth: 2 };

  const initialEdges = [
    // Sensores hacia SGA APP
    { id: 'e-servicios-sga', source: 'servicios', target: 'sga', animated: true, style: edgeStyle },
    { id: 'e-sucursales-sga', source: 'sucursales', target: 'sga', animated: true, style: edgeStyle },
    { id: 'e-atms-sga', source: 'atms', target: 'sga', animated: true, style: edgeStyle },
    { id: 'e-infra-sga', source: 'infra', target: 'sga', animated: true, style: edgeStyle },
    { id: 'e-enlaces-sga', source: 'enlaces', target: 'sga', animated: true, style: edgeStyle },
    // SGA APP a SGA DB
    { id: 'e-sga-sgadb', source: 'sga', target: 'sgadb', animated: true, style: edgeStyle },
    // SGA APP a OPERADOR
    { id: 'e-sga-operador', source: 'sga', target: 'operador', animated: true, style: edgeStyle },
    // SGA DB a OPERADOR
    { id: 'e-sgadb-operador', source: 'sgadb', target: 'operador', animated: true, style: edgeStyle },
    // OPERADOR a RECLAMOS
    { id: 'e-operador-reclamos', source: 'operador', target: 'reclamos', animated: true, style: edgeStyle },
    // OPERADOR a ESCALAMIENTO
    { id: 'e-operador-escalamiento', source: 'operador', target: 'escalamiento', animated: true, style: edgeStyle },
    // OPERADOR a SEGUIMIENTO
    { id: 'e-operador-seguimiento', source: 'operador', target: 'seguimiento', animated: true, style: edgeStyle },
    // SGA DB a DASHBOARD
    { id: 'e-sgadb-dashboard', source: 'sgadb', target: 'dashboard', animated: true, style: edgeStyle },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: edgeStyle }, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '950px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll
        panOnDrag
        minZoom={1}
        maxZoom={1}
      >
        <Background gap={16} color="#42c8ee33" />
      </ReactFlow>
    </div>
  );
}

export default DiagramaSGAConIconos;
