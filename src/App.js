import React from "react";
import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import SidebarNav from "./components/SidebarNav";



function App() {
  return (
    <main className="text-light-purple bg-jet body-font">
      <About /> 
      <Projects /> 
      {/*
      <Experience /> 

        <div> 
          <SidebarNav /> 
        </div>

      */}
      
    </main>
  );
}

export default App;
