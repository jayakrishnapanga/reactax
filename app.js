
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"// if you want to include you css file to page this is the way
import HeaderComponent,{title} from "./components/header";

import Body from "./components/body";

const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(<HeaderComponent/>)


const AppLayout=()=>{
  return (
    <>
    <HeaderComponent/>
    <Body/>
  </>
    
  )
  
}
root.render(<AppLayout/>)



// it is inline styling in jsxx i showed in both ways
// const styleobject={backgroundColor:"red",};
// // const heading=<h1 style ={styleobject}> learning how to style in jsx</h1>
// const heading=<h1 style ={{backgroundColor:"red"}}> learning how to style in jsx</h1>
// root.render(heading)