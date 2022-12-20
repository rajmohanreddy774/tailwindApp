import React from "react";
import "../index.css";

class Product extends React.Component {
  render() {
    return (
      <div>
        <section id="hero">
          <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 justify-between space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 mr-10 space-y-12 md:w-1/2">
              <h1 className="max-w-lg text-4xl font-bold text-center md:text-5xl md:textleft">
                Skyrocket Your Business With Our Products
              </h1>
              <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                We are the makers of popular WordPress products like the Astra
                theme, page builder addons, Schema Pro and a lot more. Our
                innovative tools and solutions empower people to achieve the
                freedom to get their business online and drive it forward.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="/"
                  className="p-3 px-6 pt-2 text-white bg-darkBlue rounded-full baseline hover:bag-brightRedLight"
                >
                  View All Products
                </a>
              </div>
            </div>
            <div className="md:w-full">
              <img
                src="https://miro.medium.com/max/1200/1*agJlls59odGPYicrGevyFA.jpeg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
