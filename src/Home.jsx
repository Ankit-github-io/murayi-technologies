import React from "react";
import Common from "./Common";
import pageImg from "./img/home.png";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business With"
        logo={pageImg}
        visite="/about"
        btnName="About Us"
      />
    </>
  );
};
export default Home;
