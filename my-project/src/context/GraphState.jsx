import React, { useEffect, useState } from "react";
import GraphContext from "./GraphContext";

const GraphState = (props) => {
      useEffect(()=>{
             console.log(props.graph);
      },[props.graph])
      return(
        <GraphContext.Provider value={(props.graph != undefined && props.graph != null) ? props.graph : {}}>
            {props.children}
        </GraphContext.Provider>
      )
}

export default GraphState;