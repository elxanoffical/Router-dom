import React from "react";
import Nav from "../../components/nav";
import Hero from "../../components/hero";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero
        title={"Home"}
        subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse"}
      />
    </div>
  );
};

export default HomePage;
