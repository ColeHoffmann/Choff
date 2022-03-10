import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SidebarNav from "./components/SidebarNav";
import Bio from "./components/Bio";
import Bottom from "./components/Bottom";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Intro />
      <Bio />
      <Projects />

      <div>
        <SidebarNav />
      </div>
      <Bottom />
    </main>
  );
}

export default App;
