import React from "react";
import Cover from "./Cover/Cover";
import "./Home.css";
import Servicecart from "./ServiceCart/Servicecart";
import Supportcard from "./SupportCard/Supportcard";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <Supportcard></Supportcard>
      <Servicecart></Servicecart>
    </div>
  );
};

export default Home;
