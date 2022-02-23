import React from "react";
import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import SidebarNav from "./components/SidebarNav";



function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About /> 
      {/*<Projects /> 
      <Experience /> 

        <div> 
          <SidebarNav /> 
        </div>

      */}
    </main>
  );
}

export default App;
