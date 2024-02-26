import React, { useState , useEffect, useContext} from "react"
import NewGraph from "./NewGraph.jsx"
import "./Home.css"
const Home = ({graph}) => {
    useEffect(() => {
        console.log("Graph:", graph);
    }, [graph]);
    
    return (
        <>
         <div className="home p-3 flex flex-col">
            {/* this is the main container for the graph file and graph visualization */}
            <div className="main-container flex flex-row p-1">
               <div className="main-item graph-text w-1/3 bg-gray-300 p-2">
                <div className="graph-text-item graph-title"><h2 className="text-center border-b-[1px] border-gray-500">Graph</h2></div>
                <div className="graph-text-item graph-nodes">{graph && graph.map((data, key) => {
                    return <span key={key}> {JSON.stringify(data)} </span>
                })}</div>
               </div>
               <div className="main-item graphcontainer w-2/3 bg-gray-200 p-2 text-center">
               <h2 className="text-center border-b-[1px] border-gray-500">Graph Container</h2>
                <NewGraph graph={graph}/>
               
               </div>
            </div>
         </div>
        </>
    );
}

export default Home