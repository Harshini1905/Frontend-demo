/*import Hook from './Hook';
import Hook1 from './Hook1';
import Hen from './Hen';
import {createContext,useState} from 'react';

function App() {
    return (
        <div>
            <Hen name="water"/>
        </div>
    )
}

export default App;
*/
 /*

export let nameContext=createContext();
function App(){
  let [color,setColor]=useState("black");
  let [bgcolor,setBgcolor]=useState("white");
  const onchange=()=>{
    setColor(color==="black"?"blue":"black");
    setBgcolor(bgcolor==="white"?"lightblue":"white");
  }
    return(
        <nameContext.Provider value={{color,bgcolor}}> 
            <div>
                <button onClick={onchange}>Click me</button>
                <Hen/>
            </div>
        </nameContext.Provider>
    )
}

export default App;
*/

import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Params from "./Params.jsx";
function example(){
  return(
  
  
<Router>
<h1>
  <Routes>
  <Route path="/:id" element={<Params/>}/>
</Routes>
</h1>
</Router>

  
  
  );
}
export default example;


