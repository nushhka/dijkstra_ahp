import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Graph = (props) => {
  const graph = props.graph;
  const svgRef = React.useRef();
  let size = 0;
  useEffect(() => {



  // Data for nodes and links
  const nodes = [
    { id: 1, x: 50, y: 50, label: '1' },
    { id: 2, x: 150, y: 50, label: '2' },
    { id: 3, x: 100, y: 150, label: '3' },
    { id: 4, x: 150, y: 150, label: '4' }
  ];

  const links = [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 1, target : 4},
    { source: 1, target : 3}
  ];

  size = links.length;

  const svg = d3.select(svgRef.current);

  // Draw links
  svg
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('x1', (d) => nodes[d.source - 1].x)
    .attr('y1', (d) => nodes[d.source - 1].y)
    .attr('x2', (d) => nodes[d.target - 1].x)
    .attr('y2', (d) => nodes[d.target - 1].y)
    .attr('stroke', 'black');

  // Draw nodes with labels
  const nodeGroup = svg
    .selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .attr('transform', (d) => `translate(${d.x},${d.y})`);

  nodeGroup
    .append('circle')
    .attr('r', 20)
    .attr('fill', 'green');

  nodeGroup
    .append('text')
    .attr('dy', 3)
    .attr('text-anchor', 'middle')
    .text((d) => d.label);
},[size])

  return <svg ref={svgRef} className='border-2 border-gray-800 w-[90%] h-screen m-auto'></svg>;
};

export default Graph;
