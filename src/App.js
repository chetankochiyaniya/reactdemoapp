import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import About from "./Components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"



import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const App=()=> {
  return (
   <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/service' component={Service}/>
        <Route exact path='/contact' component={Contact}/>
        <Route component={Home}/>
      </Switch>
      <Footer/>
   </>
  );
}

export default App;
