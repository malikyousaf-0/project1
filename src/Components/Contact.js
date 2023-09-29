import DarkBackground from "./backgronds/DarkBackground";
import Lottie from "lottie-react";
import anim from "./../asset/contact.json";
import {
  InstagramFilled,
  FacebookFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
export default function Contact() {
  return (
    <DarkBackground>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Lottie style={{ height: "100vh" }} animationData={anim}></Lottie>
            </div>
            <div className="col-md-6 contact-text">
              <h2>Contact Us Now</h2>
              <p>Phone</p>
              <span>03007917729</span>
              <p>Email</p>
              <span>malikyousaf.live@gmail.com</span>
              <p>Social</p>
              <span>
                <InstagramFilled className="a"/>
                <FacebookFilled className="a" />
                <TwitterCircleFilled className="a"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </DarkBackground>
  );
}
