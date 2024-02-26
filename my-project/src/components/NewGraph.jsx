import React, { useEffect, useRef } from 'react';
import { DataSet } from 'vis-data/peer';
import { Network } from 'vis-network/peer';

const Graph = () => {
  const container = useRef(null);
  const nodes = useRef(new DataSet([
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },
    { id: 7, label: 'Node 7' }
  ]));
  const edges = useRef(new DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 5 },
    { from: 1, to: 6 },
    { from : 4, to: 7}
  ]));
  const options = useRef({
    layout: {
      hierarchical: {
        direction: 'UD'
      }
    },
    physics: {
      enabled: true,
      hierarchicalRepulsion: {
        nodeDistance: 200
      },
      solver: 'repulsion'
    },
    nodes: {
        color: {
          border: 'black', // border color of nodes
          background: '#97C2FC', // fill color of nodes
          highlight: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          }
        }
      },
      edges: {
        color: 'black' // color of edges
      }
  });

  useEffect(() => {
    const network = new Network(container.current, { nodes: nodes.current, edges: edges.current }, options.current);
    return () => {
      network.destroy();
    };
  }, []);

  return <div ref={container} style={{ width: '100%', height: '600px' }}></div>;
};

export default Graph;
