import React, { useEffect, useRef } from "react";
import { DataSet } from "vis-data/peer";
import { Network } from "vis-network/peer";

const Graph = ({ graph }) => {
  const container = useRef(null);
  const nodes = useRef(new DataSet());
  const edges = useRef(new DataSet());

  useEffect(() => {
    if (graph) {
      const nodesSet = new Set();
      graph.forEach(({ node1, node2 }) => {
        nodesSet.add(node1);
        nodesSet.add(node2);
      });

      // Generate nodes with unique IDs and labels
      const nodesArray = Array.from(nodesSet).map((nodeId) => ({
        id: nodeId,
        label: `Node ${nodeId}`,
      }));

      // Extract edges and map node IDs to corresponding nodes
      const edgesArray = graph.map(({ node1, node2 }) => ({
        from: node1,
        to: node2,
      }));

      // Update nodes and edges datasets
      nodes.current.clear();
      nodes.current.add(nodesArray);
      edges.current.clear();
      edges.current.add(edgesArray);

      console.log("Nodes:", nodesArray);
      console.log("Edges:", edgesArray);
    }
  }, [graph]);

  const options = {
    layout: {
      hierarchical: {
        direction: "UD",
      },
    },
    physics: {
      enabled: true,
      hierarchicalRepulsion: {
        nodeDistance: 200,
      },
      solver: "repulsion",
    },
    nodes: {
      color: {
        border: "black", // border color of nodes
        background: "#97C2FC", // fill color of nodes
        highlight: {
          border: "#2B7CE9",
          background: "#D2E5FF",
        },
      },
    },
    edges: {
      color: "black", // color of edges
    },
  };

  useEffect(() => {
    const network = new Network(container.current, { nodes: nodes.current, edges: edges.current }, options);
    return () => {
      network.destroy();
    };
  }, []);

  return <div ref={container} style={{ width: "100%", height: "600px" }}></div>;
};

export default Graph;

