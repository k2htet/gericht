import React from "react";
import { useState, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";
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

const App = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => setloading(true));
    // setTimeout(() => {
    //   setloading(true);
    // }, 5000);
  }, []);

  return loading ? (
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
  ) : (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        background: "black",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default App;
