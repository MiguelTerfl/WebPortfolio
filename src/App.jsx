/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Miguel Terrones",
  title: "Physiotherapist and Computer Systems Student",
  email: "miguelterfl@gmail.com",
  gitHub: "MiguelTerfl",
  linkedIn: "miguelterrones",
  medium: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const highlightedStyle = {
  color: "black",
  backgroundColor: "rgba(255, 255, 255, 0.35)",
};

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home 
        name={<span style={highlightedStyle}>{siteProps.name}</span>}
        title={<span style={highlightedStyle}>{siteProps.title}</span>}
      />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
