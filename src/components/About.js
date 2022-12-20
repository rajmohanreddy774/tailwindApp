import React from "react";
import "../index.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <section id="hero">
          <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:textleft">
                Helping Businesses Grow Online With Simplified Solutions
              </h1>
              <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                At Brainstorm Force, we believe creating a website shouldn’t be
                difficult or complicated. We build quality products and tools
                that are simple to use, affordable, and reliable to help
                entrepreneurs, professionals, and bloggers grow online.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="/"
                  className="p-3 px-6 pt-2 text-white  bg-darkBlue rounded-full baseline hover:bag-brightRedLight"
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://tekie.com/blog/wp-content/uploads/2019/04/new-office.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
