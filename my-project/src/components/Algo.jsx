import {React, useEffect, useState} from "react"

const Algo = (props) =>  {
    // console.log(props.graph.length);

    /* Priority : distance , road, weather */

    const [node1, setNode1] = useState("");
    const [node2, setNode2] = useState("");
    
    const handleChangeNode1 = (e) => {
        setNode1(e.target.value);
        // console.log(node1);
    }
    const handleChangeNode2 = (e) => {
        setNode2(e.target.value);
        // console.log(node2);
    }

    //handleSubmit function to handle the submit of fields

    const handleSubmit = () => {
        setNode1("");
        setNode2("");  
    }
    
    /* Code for the Dijkstra's Algorithm */
      
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
        
        let final_path = removeDuplicates(path);
    
        console.log("SHORTEST PATH :");
        console.log(final_path.join(" "));
        return 0;
    }
    
    // Input matrix
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
    
    // let matrix = [
    //     [[1, 5, 2], [2, 4, 2]],
    //     [[0, 5, 2], [3, 6, 1], [2, 12, 3], [4, 15, 3]],
    //     [[0, 4, 2], [1, 12, 3], [4, 3, 1], [6, 6, 1]],
    //     [[1, 6, 1], [4, 13, 3], [5, 9, 3]],
    //     [[6, 8, 3], [2, 3, 1], [1, 15, 3], [3, 13, 3], [5, 6, 2], [7, 2, 1]],
    //     [[3, 9, 2], [4, 6, 2]],
    //     [[2, 6, 1], [4, 8, 3]],
    //     [[4, 2, 1]]
    // ];
    
    useEffect(() => {
        if(props.graph.length > 0){
            // console.log("apple");
            let matrix = convertToMatrix(props.graph);
            // console.log(matrix);
        }
        // console.log("happened")
    }, [props.graph.length]);
    
    
    
    // shortestPath(matrix, 4,0);

    /* End of Algorithm */


    return (
        <>
          <div className="algo-container m-auto bg-gray-400 p-5">
            <div className="algo algo-header">
                <h1 className="bg-gray-700 sm:text-3xl md:text-4xl border-l-4 border-gray-800 inline-block mb-2 border-r-4 p-2">Alogrithm Demonstration</h1>
            </div>
            <div className="algo input-container flex flex-row">
                <div className="node-item node1 w-1/6 p-1">
                    <input type="text" placeholder="Source" name="node1" className="border-black p-1 w-full md:text-3xl" value={node1} onChange={handleChangeNode1}/>
                </div>

                <div className="node-item node2 w-1/6 p-1">
                    <input type="text" placeholder="Destination" name="node2" className="border-black p-1 w-full md:text-3xl" value={node2} onChange={handleChangeNode2}/>
                </div>

                <div className="add-node text-center w-full p-3">
                    <button type="submit" className="bg-gray-700 text-gray-300 w-1/4 md:text-3xl border-2 border-black" onClick={handleSubmit}>Run Algorithm</button>
                </div>
            </div>

            <div className="algo algo-output">
                <h2 className="sm:text-2xl md:text-3xl mt-4 "> OPTIMUM PATH : <span className="text-gray-700">{"NODE1 -> NODE2 -> NODE3"}</span></h2>
            </div>
          </div>
        </>
    )
}

export default Algo;