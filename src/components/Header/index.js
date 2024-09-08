import React , {useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";


const Header = () => {
  

  return (
    
      <header className="bg-gray-100 shadow-md rounded-md flexjustify-center p-4">
      
        
        <nav className="flex flex-row w-full ">
          <ul className="flex flex-row gap-3 w-full  justify-center items-center">
            <li>
              <Link to="/" className="text-[#252b61] px-2 py-2 rounded-lg hover:bg-[#B3BEF2] hover:font-bold">Home</Link>
            </li>
           
            <li>
              <Link to="/" className="text-[#252b61] px-2 py-2 rounded-lg hover:bg-[#B3BEF2] hover:font-bold">Find hospitals</Link>
            </li>
           
           
            <li>

              <Link to="/" className="text-[#252b61] hover:bg-[#B3BEF2] hover:font-bold rounded-lg  px-2 py-2">Therapy Chatbot & Report Generator</Link>
            </li>
            <li>

              <Link to="/" className="text-[#252b61] hover:bg-[#B3BEF2] hover:font-bold rounded-lg  px-2 py-2">Medical Assistance </Link>
            </li>
            <li>

              <Link to="/" className="text-[#252b61] hover:bg-[#B3BEF2] hover:font-bold rounded-lg  px-2 py-2">ML Predictor</Link>
            </li>
            
            <li>
              <Link to="/caremateplus" className="text-[#252b61] hover:bg-[#B3BEF2] hover:font-bold hover:font-bold rounded-lg  px-2 py-2 ">Subscription Plans</Link>
            </li>
            
            
            
            <li>
              <Link to="/modelresults" className="text-[#252b61] hover:bg-[#B3BEF2] hover:font-bold rounded-lg  px-2 py-2">Model Results</Link>
            </li>
            
            <li>
              <Link to="/team" className="text-[#252b61] hover:bg-[#B3BEF2] hover:font-bold hover:font-bold rounded-lg  px-2 py-2 ">Team</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header;
