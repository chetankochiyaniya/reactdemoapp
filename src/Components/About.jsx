import React from "react";
import Common from "./Common";
import about from "../img/about_test.jpg"

const About=()=> {
  return (
   <>
        <Common 
        name="Welcome to About page" 
        visit="/contact" 
        img={about}
        btn="Contact Now" />
   </>
  );
}

export default About;