import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  FaServer,
  FaNetworkWired,
  FaUserCog,
  FaBug,
  FaDatabase,
  FaReact,
  FaTools,
  FaBuilding,
  FaLaptopCode,
  FaBrain,
  FaMailBulk,
  FaMicrochip,
  FaParagraph,
  FaPaperPlane,
  FaChartBar,
} from "react-icons/fa";

function getIcon(label) {
  const icons = {
   
    "PING FLOW": FaTools,
    "DB HEALTH FLOW": FaDatabase,
    "HTTP | API FLOW": FaServer,

    "IA AGENTE BOOT": FaBrain,
    "RAG": FaServer,

    "IA AGENTE DISTRIBUIDOR": FaMicrochip,
    "IA AGENTE NOTIFICADOR": FaBrain,
    "EVOLUTION API": FaParagraph ,
    "EMAIL": FaMailBulk,
    "ESCALAMIENTO": FaLaptopCode,
    "OPERADOR": FaUserCog,
    "RECLAMO CARGA DE TICKET": FaPaperPlane,
    "SGA APP (C#)": FaServer,
    "ENLACES DE\n COMUNICACIONES": FaNetworkWired,
    "SGA DB\nSQL SERVER": FaDatabase,
    "SQL": FaDatabase,
    "IA AGENTE REPORTES": FaChartBar,
  };

  const Icon = icons[label] || FaServer;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        color: "#42c8ee",
        fontWeight: 600,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Icon style={{ color: "#42c8ee", fontSize: 24, flexShrink: 0 }} />
      <span
        style={{
          color: "#42c8ee",
          fontWeight: 600,
          fontSize: "0.9rem",
          lineHeight: "1.2",
          whiteSpace: "pre-line",
          textAlign: "left",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function DiagramaN8n() {
  const nodeStyle = {
    background: "transparent",
    border: "2px solid #42c8ee",
    borderRadius: 12,
    color: "#42c8ee",
    boxShadow: "0 0 16px #42c8ee99",
    fontWeight: 600,
    fontSize: 14,
    padding: 12,
    minWidth: 160,
    minHeight: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const initialNodes = [
    {
      id: "ping",
      position: { x: 40, y: 40 },
      data: { label: getIcon("PING FLOW") },
      style: nodeStyle,
      sourcePosition: "right",
      targetPosition: "right",
      draggable: false,
    },
    {
      id: "db",
      position: { x: 40, y: 120 },
      data: { label: getIcon("DB HEALTH FLOW") },
      style: nodeStyle,
      sourcePosition: "right",
      targetPosition: "right",
      draggable: false,
    },
    {
      id: "http",
      position: { x: 40, y: 200 },
      data: { label: getIcon("HTTP | API FLOW") },
      style: nodeStyle,
      sourcePosition: "right",
      targetPosition: "right",
      draggable: false,
    },
    {
      id: "boot",
      position: { x: 40, y: 300 },
      data: { label: getIcon("IA AGENTE BOOT") },
      style: nodeStyle,
      sourcePosition: "bottom",
      targetPosition: "bottom",
      draggable: false,
    },
    {
      id: "rag",
      position: { x: 40, y: 420 },
      data: { label: getIcon("RAG") },
      style: nodeStyle,
      sourcePosition: "top",
      targetPosition: "top",
      draggable: false,
    },
    {
      id: "distribuidor",
      position: { x: 310, y: 100 },
      data: { label: getIcon("IA AGENTE DISTRIBUIDOR") },
      style: nodeStyle,
      sourcePosition: "bottom",
      targetPosition: "left",
      draggable: false,
    },
    {
      id: "notificador",
      position: { x: 310, y: 240 },
      data: { label: getIcon("IA AGENTE NOTIFICADOR") },
      style: nodeStyle,
      sourcePosition: "bottom",
      targetPosition: "top",
      draggable: false,
    },
    {
      id: "evolution",
      position: { x: 215, y: 370 },
      data: { label: getIcon("EVOLUTION API") },
      style: nodeStyle,
      draggable: false,
    },
    {
      id: "email",
      position: { x: 415, y: 370 },
      data: { label: getIcon("EMAIL") },
      style: nodeStyle,
      draggable: false,
    },
    {
      id: "escalamiento",
      position: { x: 200, y: 480 },
      data: { label: getIcon("ESCALAMIENTO") },
      style: nodeStyle,
      draggable: false,
    },
    {
      id: "operador",
      position: { x: 390, y: 480 },
      data: { label: getIcon("OPERADOR") },
      style: nodeStyle,
      draggable: false,
    },
    {
      id: "reclamo",
      position: { x: 390, y: 590 },
      data: { label: getIcon("RECLAMO CARGA DE TICKET") },
      style: nodeStyle,
      draggable: false,
    },
    {
      id: "reportes",
      position: { x: 620, y: 370 },
      data: { label: getIcon("IA AGENTE REPORTES") },
      style: nodeStyle,
      sourcePosition: "top",
      targetPosition: "top",
      draggable: false,
    },
    {
      id: "sql",
      position: { x: 620, y: 200 },
      data: { label: getIcon("SQL") },
      style: nodeStyle,
      targetPosition: "top",
      sourcePosition: "bottom",
      draggable: false,
    },
  ];

  const edgeStyle = { stroke: "#42c8ee", strokeWidth: 2 };

  const initialEdges = [
    {
      id: "e-ping-dist",
      source: "ping",
      target: "distribuidor",
      style: edgeStyle,
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      animated: true,
    },
    {
      id: "e-db-dist",
      source: "db",
      target: "distribuidor",
      style: edgeStyle,
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
  
      animated: true,
    },
    {
      id: "e-http-dist",
      source: "http",
      target: "distribuidor",
      style: edgeStyle,
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
  
      animated: true,
    },
    {
      id: "e-boot-not",
      source: "boot",
      target: "rag",
      style: edgeStyle,
      
      animated: true,
    },
    {
      id: "e-rag-not",
      
      style: edgeStyle,
      
      animated: true,
    },
    
    {
      id: "e-dist-not",
      source: "distribuidor",
      target: "notificador",
      style: edgeStyle,
  
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      animated: true,
    },
    {
        id: "e-dist-sql",
        source: "distribuidor",
        target: "sql",
        style: edgeStyle,
    
        markerEnd: { type: "arrowclosed", color: "#42c8ee" },
        animated: true,
      },
    {
      id: "e-rep-sql",
      source: "sql",
      target: "reportes",
      style: edgeStyle,
      markerStart: { type: "arrowclosed", color: "#42c8ee" },
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      animated: true,
    },
    {
      id: "e-not-ev",
      source: "notificador",
      target: "evolution",
      style: edgeStyle,
   
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      animated: true,
    },
    {
      id: "e-not-email",
      source: "notificador",
      target: "email",
      style: edgeStyle,
      
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      animated: true,
    },
    {
        id: "e-email-op",
        source: "email",
        target: "operador",
        style: edgeStyle,
        
        markerEnd: { type: "arrowclosed", color: "#42c8ee" },
        animated: true,
      },
    {
      id: "e-ev-esc",
      source: "evolution",
      target: "escalamiento",
      style: edgeStyle,
     
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      animated: true,
    },
    {
      id: "e-ev-op",
      source: "evolution",
      target: "operador",
      style: edgeStyle,
      
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      animated: true,
    },
    {
      id: "e-op-rec",
      source: "operador",
      target: "reclamo",
      style: edgeStyle,
      
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      animated: true,
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, animated: true, style: edgeStyle, type: "step" },
          eds
        )
      ),
    [setEdges]
  );

  return (
    <div
      style={{
        width: "950px",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          color: "#42c8ee",
          fontWeight: 700,
          fontSize: 32,
          marginBottom: 12,
          textAlign: "right",
          width: "100%",
          textShadow: "0 0 8px #42c8ee",
        }}
      >
        N8N
      </div>
      <style>
        {`
          .react-flow__attribution {
            display: none !important;
          }
        `}
      </style>
      <div style={{ width: "100%", height: "90%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
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
    </div>
  );
}

export default DiagramaN8n;
