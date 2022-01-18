import React from "react";
import web from "../img/homeimg.svg"
import Common from "./Common";


const Home=()=> {
  return (
   <>
   <Common
    name="Grow your business with" 
        visit="/service" 
        img={web}
        btn="Get Started"/>
   </>
  );
}

export default Home;