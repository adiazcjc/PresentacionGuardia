import React from "react";
import ReactFlow, { Background, Handle, Position } from "reactflow";
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
        background: "transparent",
        border: "none",
        boxShadow: "none",
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
          background: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        {data.label}
      </div>
      {/* Handles con id explícito */}
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{ background: "#42c8ee" }}
      />

      <Handle
        id="left"
        type="source"
        position={Position.Left}
        style={{ background: "#42c8ee" }}
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{ background: "#42c8ee" }}
      />
    </div>
  );
}

function DiamondNodeDos({ data }) {
  return (
    <div
      style={{
        width: 90,
        height: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "transparent",
        border: "none",
        boxShadow: "none",
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
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "pre-line",
          padding: "0 8px",
          width: 70,
          wordBreak: "break-word",
          background: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        {data.label}
      </div>
      {/* Handles con id explícito */}
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{ background: "#42c8ee" }}
      />

      <Handle
        id="left"
        type="source"
        position={Position.Left}
        style={{ background: "#42c8ee" }}
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{ background: "#42c8ee" }}
      />
    </div>
  );
}

function CustomNode({ data }) {
  return (
    <div
      style={{
        background: "transparent",
        border: "2px solid #42c8ee",
        borderRadius: 12,
        color: "#42c8ee",
        boxShadow: "0 0 16px #42c8ee99",
        fontWeight: 600,
        fontSize: 14,
        padding: 12,
        minWidth: 150,
        minHeight: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {data.label}

      {/* Handles */}
      {/* TARGET derecha */}
      <Handle
        id="right"
        type="target"
        position={Position.Right}
        style={{ background: "#42c8ee" }}
      />

      {/* SOURCES abajo y derecha */}
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ background: "#42c8ee" }}
      />
      <Handle
        id="right-out"
        type="source"
        position={Position.Right}
        style={{ background: "#42c8ee" }}
      />
    </div>
  );
}
function CustomNodeFinal({ data }) {
  return (
    <div
      style={{
        background: "transparent",
        border: "2px solid #42c8ee",
        borderRadius: 12,
        color: "#42c8ee",
        boxShadow: "0 0 16px #42c8ee99",
        fontWeight: 600,
        fontSize: 14,
        padding: 12,
        minWidth: 150,
        minHeight: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {data.label}

      {/* Handles */}
      {/* TARGET derecha */}
      <Handle
        id="right"
        type="target"
        position={Position.Right}
        style={{ background: "#42c8ee" }}
      />
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        style={{ background: "#42c8ee" }}
      />

      {/* SOURCES abajo y derecha */}
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ background: "#42c8ee" }}
      />
      <Handle
        id="right-out"
        type="source"
        position={Position.Right}
        style={{ background: "#42c8ee" }}
      />
    </div>
  );
}
function TransparentNode() {
  return (
    <div
      style={{
        width: 1,
        height: 1,
        background: "transparent",
        border: "none",
        boxShadow: "none",
        padding: 0,
      }}
    >
      {/* Handles invisibles */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          width: 0,
          height: 0,
          background: "transparent",
          border: "none",
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          width: 0,
          height: 0,
          background: "transparent",
          border: "none",
        }}
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
    minWidth: 150,
    minHeight: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const nodeTypes = {
    diamond: DiamondNode,
    diamondDos: DiamondNodeDos,
    custom: CustomNode,
    customFinal: CustomNodeFinal,
    transparent: TransparentNode,
  };

  const nodes = [
    {
      id: "1",
      type: "custom",
      position: { x: 315, y: -20 },
      data: { label: "SONDA" },
    },
    {
      id: "2",
      type: "diamond",
      position: { x: 345, y: 80 },
      data: { label: "FALLO" },
    },
    {
      id: "3",
      type: "diamond",
      position: { x: 200, y: 160 },
      data: { label: "EVALUA ESC." },
    },

    {
      id: "4",
      type: "default",
      position: { x: 0, y: 250 },
      data: { label: "ESCALA S.O." },
      style: nodeStyle,
    },
    {
      id: "5",
      type: "diamondDos",
      position: { x: 30, y: 350 },
      data: { label: "SOLUCIÓN" },
      
    },
    {
      id: "6",
      type: "default",
      position: { x: -130, y: 450 },
      data: { label: "INFORMA" },
      style: nodeStyle,
    },
    {
      id: "7",
      type: "default",
      position: { x: -130, y: 570 },
      data: { label: "SOLUCIÓN" },
      style: nodeStyle,
    },
    {
      id: "8",
      type: "default",
      position: { x: 130, y: 450 },
      data: { label: "INFORMA" },
      style: nodeStyle,
    },
    {
      id: "9",
      type: "default",
      position: { x: 130, y: 550 },
      data: { label: "COORDINA EQUIPO" },
      style: nodeStyle,
    },
    {
      id: "10",
      type: "default",
      position: { x: 330, y: 250 },
      data: { label: "REGISTRO" },
      style: nodeStyle,
    },
    {
      id: "11",
      type: "default",
      position: { x: 330, y: 350 },
      data: { label: "RECLAMO" },
      style: nodeStyle,
    },
    {
      id: "12",
      type: "default",
      position: { x: 330, y: 450 },
      data: { label: "SEGUIMIENTO" },
      style: nodeStyle,
    },
    {
      id: "13",
      type: "customFinal",
      position: { x: 160, y: 710 },
      data: { label: "INFORMA" },
    },
    {
      id: "14",
      type: "transparent",
      position: { x: 60, y: 680 },
      data: {},
    },
  ];

  const edgeStyle = { stroke: "#42c8ee", strokeWidth: 2 };

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "step",
      style: edgeStyle,
      animated: true,
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "step",
      style: edgeStyle,
      animated: true,
      label: "SI",
      labelStyle: {
        fill: "#000000",
        fontWeight: 700,
        fontSize: 12,
      },
      sourceHandle: "left",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      type: "step",
      style: edgeStyle,
      animated: true,
      label: "SI",
      labelStyle: {
        fill: "#000000",
        fontWeight: 700,
        fontSize: 12,
      },
      sourceHandle: "left",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e3-10",
      source: "3",
      target: "10",
      label: "NO",
      labelStyle: {
        fill: "#000000",
        fontWeight: 700,
        fontSize: 12,
      },
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "right",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      label: "SI",
      labelStyle: {
        fill: "#000000",
        fontWeight: 700,
        fontSize: 12,
      },
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "left",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e7-14",
      source: "7",
      target: "14",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "bottom",
    },
    {
      id: "e14-13",
      source: "14",
      target: "13",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "left",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e9-14",
      source: "9",
      target: "14",
      type: "step",
      style: edgeStyle,
      animated: true,

      sourceHandle: "bottom",
      targetHandle: "bottom",
    },
    {
      id: "e5-8",
      source: "5",
      target: "8",
      label: "NO",
      labelStyle: {
        fill: "#000000",
        fontWeight: 700,
        fontSize: 12,
      },
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "right",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e6-7",
      source: "6",
      target: "7",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },

    {
      id: "e10-11",
      source: "10",
      target: "11",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e11-12",
      source: "11",
      target: "12",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "top",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e12-13",
      source: "12",
      target: "13",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "right",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e13-1",
      source: "13",
      target: "1",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "right",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
    },
    {
      id: "e2-1",
      source: "2",
      target: "1",
      label: "NO",
      type: "step",
      style: edgeStyle,
      animated: true,
      sourceHandle: "right",
      targetHandle: "right",
      markerEnd: { type: "arrowclosed", color: "#42c8ee" },
      labelStyle: {
        fill: "#000000",
        fontWeight: 700,
        fontSize: 12,
      }
    },
  ];

  return (
    <div
      style={{
        width: "880px",
        height: "950px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style>{`.react-flow__attribution { display: none !important; }`}</style>
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
        nodeTypes={nodeTypes}
      >
        <Background gap={16} color="transparent" />
      </ReactFlow>
    </div>
  );
}

export default Flujo;
