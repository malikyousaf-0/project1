import React from "react";
import { BulbOutlined, AntCloudOutlined } from "@ant-design/icons";
import WhiteBackground from "./backgronds/WhiteBackground";

export default function About() {
  return (
    <>
      <WhiteBackground>
        <div className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="about-content text-center p-4">
                <BulbOutlined style={{ fontSize: "3rem", color: "#20cd8d" }} />
                <h2>About This Service</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi quasi deleniti dolores laboriosam officiis, nihil enim
                  fugiat modi laborum facere dignissimos consequuntur mollitia,
                  blanditiis nam velit ad sunt quae iure?
                </p>
              </div>
            </div>
          </div>
        </div>
      </WhiteBackground>
    </>
  );
}
