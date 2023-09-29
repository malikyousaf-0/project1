import React from "react";
import Lottie from "lottie-react";
import animation from "./../asset/G5qLAsIF8t.json";
import saleanim from "./../asset/animation_ln2tyuxn.json";
import GreenBackground from "./backgronds/GreenBackground";
import logo from "./../asset/logo.png";
export default function HeroSection() {
  return (
    <GreenBackground>
      <div className="heroSection">
        <div className="container">
          <div className="logo pt-5">
            <img style={{ height: "2.6rem" }} src={logo} alt="" />
          </div>
          <div className="heroSection-content">
            <div className="row">
              <div className="heroSection-text col-md-6 mt-5  d-flex justify-content-center align-items-center flex-column">
                <h1 className="mainHeading text-center text-white">
                  Complete Website Flash Sale
                </h1>
                <h2>75% off</h2>
               
                <Lottie
                  style={{ width: "10rem" }}
                  animationData={saleanim}
                ></Lottie>
                <div className="btn btn-primary">Book Know</div>
              </div>
              <div className="col-md-6">
                <Lottie animationData={animation}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GreenBackground>
  );
}
