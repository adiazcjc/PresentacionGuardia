import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

function DiamondNode({ data }) {




  return (
    <div
      style={{
        width: 90,
        height: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <svg
        width="90"
        height="90"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      >
        <polygon
          points="45,5 85,45 45,85 5,45"
          style={{
            fill: "transparent",
            stroke: "#42c8ee",
            strokeWidth: 3,
            filter: "drop-shadow(0 0 8px #42c8ee99)",
          }}
        />
      </svg>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#42c8ee",
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "pre-line",
          padding: "0 8px",
          width: 70,
          wordBreak: "break-word",
        }}
      >
        {data.label}
      </div>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#42c8ee" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#42c8ee" }}
      />
      <Handle
        type="source"
        position={Position.Left}
        style={{ background: "#42c8ee" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#42c8ee" }}
      />
    </div>
  );
}

function Flujo() {
  const nodeStyle = {
    background: "transparent",
    border: "2px solid #42c8ee",
    borderRadius: 12,
    color: "#42c8ee",
    boxShadow: "0 0 16px #42c8ee99",
    fontWeight: 600,
    fontSize: 14,
    padding: 12,
    minWidth: 180,
    minHeight: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const nodeTypes = { diamond: DiamondNode };

  const nodes = [
    { id: '1', type: 'input', position: { x: 300, y: 0 }, data: { label: 'SONDA' }, style: nodeStyle },
    { id: '2', type: 'default', position: { x: 300, y: 80 }, data: { label: '¿FALLO?' }, style: nodeStyle },
    { id: '3', type: 'default', position: { x: 200, y: 160 }, data: { label: 'EVALUA ESC.' }, style: nodeStyle },
    { id: '4', type: 'default', position: { x: 80, y: 240 }, data: { label: 'ESCALA S.O.' }, style: nodeStyle },
    { id: '5', type: 'default', position: { x: 0, y: 320 }, data: { label: '¿SOLUCIÓN?' }, style: nodeStyle },
    { id: '6', type: 'default', position: { x: -100, y: 400 }, data: { label: 'INFORMA' }, style: nodeStyle },
    { id: '7', type: 'output', position: { x: -100, y: 480 }, data: { label: 'SOLUCIÓN' }, style: nodeStyle },
    { id: '8', type: 'default', position: { x: 100, y: 400 }, data: { label: 'INFORMA' }, style: nodeStyle },
    { id: '9', type: 'default', position: { x: 100, y: 480 }, data: { label: 'COORDINA EQUIPO' }, style: nodeStyle },
    { id: '10', type: 'default', position: { x: 400, y: 160 }, data: { label: 'REGISTRO' }, style: nodeStyle },
    { id: '11', type: 'default', position: { x: 400, y: 240 }, data: { label: 'RECLAMO' }, style: nodeStyle },
    { id: '12', type: 'default', position: { x: 400, y: 320 }, data: { label: 'SEGUIMIENTO' }, style: nodeStyle },
    { id: '13', type: 'output', position: { x: 200, y: 560 }, data: { label: 'INFORMA' }, style: nodeStyle },
  ];
  const edgeStyle = { stroke: "#42c8ee", strokeWidth: 2 };

  const edges = [
    { id: 'e1-2', source: '1', target: '2', type: 'step', style: edgeStyle },
    { id: 'e2-3', source: '2', target: '3', label: 'SI', type: 'step', style: edgeStyle },
    { id: 'e2-10', source: '2', target: '10', label: 'NO', type: 'step', style: edgeStyle },
    { id: 'e3-4', source: '3', target: '4', label: 'SI', type: 'step', style: edgeStyle },
    { id: 'e3-10', source: '3', target: '10', label: 'NO', type: 'step', style: edgeStyle },
    { id: 'e4-5', source: '4', target: '5', type: 'step', style: edgeStyle },
    { id: 'e5-6', source: '5', target: '6', label: 'SI', type: 'step', style: edgeStyle },
    { id: 'e5-8', source: '5', target: '8', label: 'NO', type: 'step', style: edgeStyle },
    { id: 'e6-7', source: '6', target: '7', type: 'step', style: edgeStyle },
    { id: 'e8-9', source: '8', target: '9', type: 'step', style: edgeStyle },
    { id: 'e9-13', source: '9', target: '13', type: 'step', style: edgeStyle },
    { id: 'e7-13', source: '7', target: '13', type: 'step', style: edgeStyle },
    { id: 'e10-11', source: '10', target: '11', type: 'step', style: edgeStyle },
    { id: 'e11-12', source: '11', target: '12', type: 'step', style: edgeStyle },
    { id: 'e12-13', source: '12', target: '13', type: 'step', style: edgeStyle },
  ];

  

  return (
    <div
      style={{
        width: "950px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style>
        {`
          .react-flow__attribution {
            display: none !important;
          }
        `}
      </style>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
        zoomOnScroll={true}
        zoomOnPinch={true}
        panOnScroll={false}
        panOnDrag={true}
        minZoom={0.5}
        maxZoom={2}
      >
        <Background gap={16} color="#42c8ee33" />
      </ReactFlow>
    </div>
  );
}

export default Flujo;
