import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useNavigate } from "react-router-dom";
// import "index.css";

function Home() {

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold ml-14 mt-8 mb-1">Latest Blogs</h1>
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;
