import React from "react";
import "../index.css";

class Founder extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="hidden: flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 mb-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5gw02_4yy0WfNs6Ol79Df52ssiwkxQIWxJAINOmmgQ66W-SBoGzRZWbVSzkU_byg_ls&usqp=CAU"
              alt=""
              className="w-28 -mt-14"
            />
            <h5 className="text-lg font-bold">Abhijeet Kaladate</h5>
            <p className="text-sm text-darkGrayishBlue mb-10">
              Abhijeet oversees the operations of the company including HR,
              marketing, finance and design. He is the guy who gets things done.
            </p>
          </div>
          <div className="hidden: flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 mb-10">
            <img
              src="https://pbs.twimg.com/profile_images/1547262173243740162/m_7m0CFu_400x400.jpg"
              alt=""
              className="w-28 -mt-14"
            />
            <h5 className="text-lg font-bold">Sujay Pawar</h5>
            <p className="text-sm text-darkGrayishBlue mb-10">
              "A unique blend of technology, business & marketing, Sujay has
              repeatedly built innovative products"
            </p>
          </div>
          <div className="hidden: flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 mb-10">
            <img
              src="https://pbs.twimg.com/profile_images/1566729616923865088/IEiUlKpS_400x400.jpg"
              alt=""
              className="w-28 -mt-14"
            />
            <h5 className="text-lg font-bold">Prateek Chaskar</h5>
            <p className="text-sm text-darkGrayishBlue mb-10">
              Pratik is the backbone of the company. He is a strategist, problem
              solver & specialist in leading and executing plans.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Founder;
