import React from "react";
import Logo from './brain.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to='/' className="btn btn-ghost text-xl">InvestIQ
        <img src={Logo} alt="Company Logo" />
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;