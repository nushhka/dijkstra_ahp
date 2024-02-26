import React, {  useState ,useEffect, useCallback} from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Algo from "./components/Algo.jsx"
import Dataset from "./components/Dataset.jsx"
import NewGraph from "./components/NewGraph.jsx"

import data from './data/data.json';
import  ForceGraph  from "./components/forceGraph.jsx";
import GraphState from './context/GraphState.jsx'

function App() {

   const [graph,setgraph]=useState([]) 
   useEffect(()=>{
    console.log('this is graph',graph)

  },[graph])

  return (
    <>
     <div className='bg-gray-400'>
      
         <Navbar/>
         <Dataset setgraph={setgraph}/>
         <Home graph={graph}/>
         <Algo graph={graph} />
     
      
      {/* <Algo/> */}

      {/* <header className="App-header">
        Force Graph Example
      </header> */}
      {/* <section className="Main">
        <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
      </section> */}
      
     </div>
     
      
    </>
  )
}

export default App
