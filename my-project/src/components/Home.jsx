import React, { useState } from "react"
import Graph from "./Graph.jsx"
import "./Home.css"
const Home = () => {
    const graph = []
    const [node1, setNode1] = useState("");
    const [node2, setNode2] = useState("");
    const [distance, setDistance] = useState("");
    const [road, setRoad] = useState("");
    const [weather, setWeather] = useState("");
    const [risk, setRisk] = useState("");
    const handleChangeNode1 = (e) => {
        setNode1(e.target.value);
        // console.log(node1);
    }
    const handleChangeNode2 = (e) => {
        setNode2(e.target.value);
        // console.log(node2);
    }
    const handleChangeRoad = (e) => {
        setRoad(e.target.value);
        // console.log(road);
    }
    const handleChangeDistance = (e) => {
        setDistance(e.target.value);
        // console.log(distance);
    }
    const handleChangeWeather = (e) => {
        setWeather(e.target.value);
        // console.log(weather);
    }
    const handleChangeRisk = (e) => {
        setRisk(e.target.value);
        // console.log(risk);
    }

    //handleSubmit function to handle the submit of fields

    const handleSubmit = () => {
        console.log("entered");
        const node = {
            "node1" : node1,
            "node2" : node2,
            "distance" : distance,
            "road" : road,
            "weather" : weather, 
            "risk" : risk
        }
        graph.push(node);
        setNode1("");
        setNode2("");
        setDistance("");
        setRisk("");
        setRoad("");
        setWeather("");

        console.log(
            "node1 : " + node1 + " node2 : " + node2 + " distance  : " + distance + " road : " + road + " weather : " + weather + " risk : " + risk
        )
    }
    
    return (
        <>
         <div className="home p-3 flex flex-col">
            {/* container that has all the input field for the algorithm. */}
            <div className="node-container flex flex-row">
                <div className="node-item node1 w-1/6 p-1">
                    <input type="text" placeholder="node1" name="node1" className="border-black p-1 w-full" value={node1} onChange={handleChangeNode1}/>
                </div>
                <div className="node-item node2 w-1/6 p-1">
                    <input type="text" placeholder="node2" name="node2" className="border-black p-1 w-full" value={node2} onChange={handleChangeNode2}/>
                </div>
                <div className="node-item distance w-1/6 p-1">
                    <input type="text" placeholder="distance" name="distance" className="border-black p-1 w-full" value={distance} onChange={handleChangeDistance}/>
                </div>
                <div className="node-item weather w-1/6 p-1">
                    <input type="text" placeholder="weather" name="weather" className="border-black p-1 w-full" value={weather} onChange={handleChangeWeather}/>
                </div>
                <div className="node-item road w-1/6 p-1">
                    <input type="text" placeholder="road" name="road" className="border-black p-1 w-full" value={road} onChange={handleChangeRoad}/>
                </div>
                <div className="node-item risk w-1/6 p-1">
                    <input type="text" placeholder="risk" name="risk" className="border-black p-1 w-full" value={risk} onChange={handleChangeRisk}/>
                </div>
            </div>
            {/* adding a button to add the node in the graph */}
            <div className="add-node text-center w-full p-3">
                <button type="submit" className="bg-green-800 w-1/4" onClick={handleSubmit}>Add Node</button>
            </div>
            {/* this is the main container for the graph file and graph visualization */}
            <div className="main-container flex flex-row p-1">
               <div className="main-item graph-text w-1/4 bg-gray-600 p-2">
                <div className="graph-text-item graph-title"><h2 className="text-center border-b-[1px] border-gray-900">Graph</h2></div>
                <div className="graph-text-item graph-nodes"></div>
               </div>
               <div className="main-item graphcontainer w-3/4 bg-gray-500 p-2 text-center">
                Graph Container
                
                <Graph graph={graph}/>
               </div>
            </div>
         </div>
        </>
    );
}

export default Home