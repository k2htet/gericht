import React from "react";
import { useState, useEffect } from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import { PuffLoader } from "react-spinners";

const App = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => setloading(false), []);

  return loading ? (
    <div className="loading-container">
      <PuffLoader color="#DCCA87" loading={loading} size={150} />
    </div>
  ) : (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
