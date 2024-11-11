import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "./hero";

const Nav = () => {
  return (
    <nav className="w-full px-14 py-10 flex items-center justify-between
     bg-black text-white">
      <h1 className="font-semibold text-4xl tracking-wide text-green-500">
        <NavLink to="/">Logo</NavLink>
      </h1>
      <ul className="flex items-center gap-10 text-4xl font-semibold tracking-wide">
        <li className="border-b border-b-transparent hover:border-b-green-500 gap-7">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="border-b border-b-transparent hover:border-b-green-500">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="border-b border-b-transparent hover:border-b-green-500">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button
        className="text-4xl font-semibold px-8 py-4 hover:rounded-2xl
       transition-all duration-200 hover:scale-95 bg-green-500 shadow-xl tracking-wide"
      >
        <NavLink to="/login">Login</NavLink>
      </button> 
    </nav>

  );
};

export default Nav;
