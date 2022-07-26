import React from "react";
import "./homepackage.css";
import Banner from "../Banner/Banner";
import Holiday from "../Holiday/Holiday";
import Topdestination from "../Topdestination/Topdestination";
import Topactivity from "../Topacitivity/Topactivity";
import Footer from "../Footer/Footer";


const homepackage = () => {
  return (
    <>
      <Banner />
      <Holiday />
      <Topdestination/>
      <Topactivity/>
      <Footer/>
    </>
  );
};

export default homepackage;
