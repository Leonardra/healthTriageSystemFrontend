import React from "react";
import { Container, Typography } from "@mui/material";
import Hero from "./Hero";
import Partners from "./Partners";
import Benefit from "./Benefit";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Benefit />
      <Footer />
    </>
  );
};

export default LandingPage;
