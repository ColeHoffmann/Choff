import React from "react";
import Typewriter from "typewriter-effect";
import Model from "./Model";

// src/components/About.js



export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-xl title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm 
              <span className = "text-6xl text-red-700 hover:text-red-600"> 
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter.typeString("Cole Hoffmann.").start();
                    }}
                /> 
                  
         
                    </span> 
       
            <span className= "text-gray-50 text-xl ">     I like to build things. </span> 
          </h1>
          <p className="mb-8 leading-relaxed">
            Bio. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Contact Me.
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-white rounded text-lg">
              Check out my projects. 
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          
          <div id = "cole-model"> 
                  <Model />
          </div>
        </div>
      </div>
    </section>
  );
}


