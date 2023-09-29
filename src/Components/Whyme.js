import React from "react";
import GreenBackground from "./backgronds/GreenBackground";
import Lottie from "lottie-react";
import icon1 from "./../asset/icon1.json";
import icon2 from "./../asset/icon2.json";
import icon3 from "./../asset/icon3.json";
export default function Whyme() {
  return (
    <>
      <GreenBackground>
        <div className="whyme">
          <div className="container text-center py-5">
            <h2 className="mt-5">Why Me</h2>
            <h3 className="pt-3">
              As a front-end developer, I stand out from the rest because I not
              only possess a strong foundation in web development and design but
              also offer additional facilities that elevate my skills and
              services. Here's why I excel in the field:
            </h3>
            <div className="row my-5">
              <div className="col-md-4">
                <Lottie
                  animationData={icon1}
                  style={{ height: "200px" }}
                ></Lottie>
                <h3>Eye Catching Design</h3>
              </div>
              <div className="col-md-4">
                <Lottie
                  animationData={icon2}
                  style={{ height: "200px" }}
                ></Lottie>
                <h3>Consultation</h3>
              </div>
              <div className="col-md-4">
                <Lottie
                  animationData={icon3}
                  style={{ height: "200px" }}
                ></Lottie>
                <h3>Save Money</h3>
              </div>
            </div>
          </div>
        </div>
      </GreenBackground>
    </>
  );
}
