import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";

const Home = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {/* <HeroSection /> */}
    </>
  );
};

export default Home;
