function convertToMatrix(graph) {
    // Find the maximum node number
    let maxNode = 0;
    graph.forEach(edge => {
        maxNode = Math.max(maxNode, edge.node1, edge.node2);
    });

    // Initialize the matrix
    let matrix = Array.from({ length: maxNode + 1 }, () => []);

    // Populate the matrix
    graph.forEach(edge => {
        matrix[edge.node1].push([edge.node2, edge.distance, edge.road]);
    });

    return matrix;
}

// Example usage:
let graph = [
    {"node1": 0, "node2": 1, "distance": 5, "weather": 2, "road": 3, "risk": 6 },
    {"node1": 0, "node2": 2, "distance": 4, "weather": 1, "road": 2, "risk": 3 },
    {"node1": 1, "node2": 3, "distance": 6, "weather": 3, "road": 1, "risk": 2 },
    {"node1": 2, "node2": 3, "distance": 9, "weather": 2, "road": 2, "risk": 1 },
    {"node1": 2, "node2": 4, "distance": 3, "weather": 2, "road": 3, "risk": 4 }
];

let matrix = convertToMatrix(graph);
console.log(matrix);
