import React from "react";
import "../index.css";

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="relative container mx-auto p-6">
          <div class="flex items-center justify-between">
            <div class="pt-2">
              <img
                className="object-contain max-h-full w-36"
                src="https://imgs.search.brave.com/yfVL2oCQV3JYnH3uJdQ9Dp-bO-1NXbUf389ZkCsa-TM/rs:fit:590:242:1/g:ce/aHR0cHM6Ly9zMy5l/bnZhdG8uY29tL2Zp/bGVzLzYxNTc5ODY4/L1Byb2ZpbGUlMjBi/YW5uZXIlMjAwNC5w/bmc"
                alt=""
              />
            </div>

            <div className="hidden md:flex space-x-14">
              <a href="/" className="hover:text-darkGrayishBlue">
                Pricing
              </a>
              <a href="/" className="hover:text-darkGrayishBlue">
                Product
              </a>
              <a href="/" className="hover:text-darkGrayishBlue">
                About Us
              </a>
              <a href="/" className="hover:text-darkGrayishBlue">
                Careers
              </a>
              <a href="/" className="hover:text-darkGrayishBlue">
                Community
              </a>
            </div>
            <a
              href="/"
              className="p-3 px-6 pt-2 text-white bg-darkBlue rounded-full baseline hover:bag-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </nav>
            </div>
        )
    }
}

export default Navbar;