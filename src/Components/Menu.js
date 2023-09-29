import React from "react";
import Lottie from "lottie-react";
import DarkBackground from "./../Components/backgronds/DarkBackground";
import anim1 from "./../asset/1.json";
import anim2 from "./../asset/2.json";
import anim3 from "./../asset/3.json";
export default function Menu() {
  return (
    <>
      <DarkBackground>
        <div className="menu">
          <div className="container text-center">
            <h2 className="pt-4">Package Include</h2>
            <div className="row pb-5">
              <div className="col-md-4">
                <Lottie
                  animationData={anim2}
                  style={{ height: "350px" }}
                ></Lottie>
                <div className="menu-head">Complete website UI</div>
                <div className="menu-para">
                  Complete front-end website design is the art of crafting the
                  visual and interactive elements of a website
                </div>
              </div>
              <div className="col-md-4">
                <Lottie
                  animationData={anim1}
                  style={{ height: "350px" }}
                ></Lottie>
                <div className="menu-head">Responsive Design</div>
                <div className="menu-para">
                  Responsive design is the approach of designing a website or
                  application to adapt and optimize its layout and functionality
                  across various screen sizes and devices.
                </div>
              </div>
              <div className="col-md-4">
                <Lottie
                  animationData={anim3}
                  style={{ height: "350px" }}
                ></Lottie>
                <div className="menu-head">Deployment</div>
                <div className="menu-para">
                  Deployment is the crucial final step in the web development
                  process, where a fully developed website or application is
                  made accessible to the public or a specific audience
                </div>
              </div>
            </div>
          </div>
        </div>
      </DarkBackground>
    </>
  );
}
