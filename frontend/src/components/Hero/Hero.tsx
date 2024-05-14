import React from "react";
import heroImage from './Stocks.jpg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImage}
          className="max-w-sm rounded-lg shadow-2xl w-full"
        />
        <div>
          <h1 className="text-5xl font-bold">InvestIQ</h1>
          <p className="py-6"> 
          Empower your investment decisions with real-time data and insightful analytics – welcome to InvestIQ.
          </p>
          <Link to='/search' className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
