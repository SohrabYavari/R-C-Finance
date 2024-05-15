import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Outlet } from "react-router";
import DesignGuide from "./Pages/DesignGuide/DesignGuide";

export default function App() {

  return (
    <>
    <div className="w-full">
        <Navbar />
      <div className="container w-full flex flex-col items-center justify-center gap-y-5">
        <Outlet />
      </div>
    </div>
    </>
  );
}
