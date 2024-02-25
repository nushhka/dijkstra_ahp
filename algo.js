/*
Title : Code for the optimization of the Dijkstra's algorithm considering various paramters like :
        road conditons, shortes path, weather conditions and risk factors.

Author : Aditya Sahani(B22CS003), Saumitra Agrawal(B22AI054), Anushka (B22CS097)  

Methodoloy : Used the standard AHP( Analytic Hierarchy Process) and the Dijkstra's algorithm in combination to get most optimized path from source
             to destination.

Language : C++             

*/

function matrix_mul(matrix, dist_ctr, road_ctr, weather_ctr) {
    let ans = [];
    let ctr = [0.0, dist_ctr, road_ctr];

    for (let i = 0; i < matrix.length; i++) {
        let a2 = [];
        for (let j = 0; j < matrix[i].length; j++) {
            let pro = 0.0;
            let a1 = [];
            for (let k = 0; k < matrix[i][j].length; k++) {
                pro += matrix[i][j][k] * ctr[k];
            }
            a1.push(matrix[i][j][0] * 1.0);
            a1.push(pro);
            a2.push(a1);
        }
        ans.push(a2);
    }
    return ans;
}

function removeDuplicates(array) {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}


function shortestPath(matrix, source, destination) {
    let dist_ctr = 0.6115;
    let road_ctr = 0.2032;
    let weather_ctr = 0.142;
    let risk_ctr = 0.102;

    let ans = matrix_mul(matrix, dist_ctr, road_ctr, weather_ctr);

    let n = 8;
    let dist = new Array(n).fill(Infinity);
    let parent = new Array(n + 1);
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }
    dist[source] = 0;
    let pq = [[0.0, source]];

    while (pq.length > 0) {
        let curr = pq.pop();
        let node = curr[1];
        let dis = curr[0];

        for (let it of ans[node]) {
            let edgeWeight = it[1];
            let adjNode = it[0];

            if (dis + edgeWeight < dist[adjNode]) {
                dist[adjNode] = dis + edgeWeight;
                pq.push([dist[adjNode], adjNode]);
                parent[adjNode] = node;
            }
        }
    }

    if (dist[n] === Infinity)
        return [-1];

    let path = [];
    let node = destination;

    while (parent[node] !== node) {
        path.push(node);
        node = parent[node];
    }
    path.push(source);
    path.reverse();
    
    final_path = removeDuplicates(path);

    console.log("SHORTEST PATH :");
    console.log(final_path.join(" "));
    return 0;
}

// Input matrix
let matrix = [
    [[1, 5, 2], [2, 4, 2]],
    [[0, 5, 2], [3, 6, 1], [2, 12, 3], [4, 15, 3]],
    [[0, 4, 2], [1, 12, 3], [4, 3, 1], [6, 6, 1]],
    [[1, 6, 1], [4, 13, 3], [5, 9, 3]],
    [[6, 8, 3], [2, 3, 1], [1, 15, 3], [3, 13, 3], [5, 6, 2], [7, 2, 1]],
    [[3, 9, 2], [4, 6, 2]],
    [[2, 6, 1], [4, 8, 3]],
    [[4, 2, 1]]
];

shortestPath(matrix, 4,0);
