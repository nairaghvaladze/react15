import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Registration from "./components/Registration";
import Avtorisation from "./components/Avtorisation";


class App extends React.Component {
  
    avtor = () => {
        alert ("button click");
    }
    render(){
        return (
            <BrowserRouter>

            <Routes>
               
                <Route index path="/"  element={<Layout />} />
                <Route  path="registration" element={<Registration />} />
                <Route  path="avtorisation" element={<Avtorisation />} />               
                
              
    
            </Routes>
    
             </BrowserRouter>
            
        );
    }
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);