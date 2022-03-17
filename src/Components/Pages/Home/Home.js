import React from "react";
import AgentList from "./AgentList";
import CreatNew from "./CreatNew";
import HeaderQuik from "./HeaderQuik";
import "./Home.css";
import Section4 from "./Section4";

const Home = () => {
  return (
    <div className="home">
      <HeaderQuik />
      <CreatNew />
      <AgentList />
      <Section4 />
    </div>
  );
};

export default Home;
