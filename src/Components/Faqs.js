import React from "react";
import WhiteBackground from "./backgronds/WhiteBackground";
import Card from "./Card";
export default function Faqs() {
  return (
    <>
      <WhiteBackground>
        <div className="faqs py-5">
          <div className="container my-5 text-center">
            <h2>Frequently Asked Questions</h2>
            <div className="row  py-5">
              <div className="col-md-4">
                <Card
                  color="#F4F4F4"
                  title="How long do your products take to be shipped?"
                  description="We understand that every project has its own distinct demands, and as such, the delivery time can be customized to align precisely with your needs and preferences. Your satisfaction is our priority."
                />
              </div>
              <div className="col-md-4">
                <Card
                  color="#F4F4F4"
                  title="Do you offer any refunds or returns?"
                  description="Yes, we value your satisfaction. If you're not satisfied with our service, we have a refund policy in place to ensure your peace of mind and confidence in choosing our services."
                />
              </div>
              <div className="col-md-4">
                <Card
                  color="#F4F4F4"
                  title="What about deployment?"
                  description="Yes, after you purchase the domain, we will handle the deployment of your website, ensuring a seamless and hassle-free process for you."
                />
              </div>
            </div>
          </div>
        </div>
      </WhiteBackground>
    </>
  );
}
