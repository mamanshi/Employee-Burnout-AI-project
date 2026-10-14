import React from "react";
const Nav = () => {
  return (

      <div className="w-full bg-white mx-auto flex justify-between items-center px-8 py-4">

        {/* Left Side */}
        <div className="flex items-center gap-3">
          

          <div>
            <h1 className="text-3xl font-bold whitespace-nowrap">
              BurnoutPredict AI
            </h1>
            <p className="text-xs text-gray-500">
              Predict. Prevent. Protect.
            </p>
          </div>
        </div>

        {/* Center Menu */}
        <div className="flex items-center gap-8">
           <a href="/Home">Home</a>
          <a href="/Dashboard">Dashboard</a>
          <a href="/Hiddencost">Hiddencost</a>
          <a href="/OurSolution">Solutions</a>
          <a href="/Powerfulfeatures">Powerfulfeatures</a>
          <a href="/Pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/register">Register</a>

          
        </div>
  {/* Right Side */}
        <div className="flex items-center gap-2">
        <a href="login"><button className="border border-purple-600 px-5 py-2 rounded-lg text-purple-600 hover:bg-purple-600 hover:text-white transition">
            Login
          </button></a>

         <a href="Bookdemo"> <button className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition">
            Book Demo
          </button></a>
          
          
        </div>
      

      </div>
      
  
  );
};

export default Nav;