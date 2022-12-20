import React from "react";
import "../index.css";
import About from "./About";
import Founder from "./Founder";
import Navbar from "./Navbar";
import Product from "./Product";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <About />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Founder />
        </div>
      </div>
    );
  }
}

export default Home;
