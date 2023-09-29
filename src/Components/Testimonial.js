import GreyBackground from "./backgronds/GreyBackground";
import Card from "./Card";
import img1 from "./../asset/testimonial1.jpg";
export default function Testimonial() {
  return (
    <>
      <GreyBackground>
        <div className="testimonial py-5">
          <div className="container my-5 text-center">
            <h2>Beta Test Review</h2>
            <div className="row  py-5">
              <div className="col-md-4">
                <Card
                  img={img1}
                  color="#F4F4F4"
                  description="Impressive front-end work, transformed our online presence with modern design and seamless UX."
                />
              </div>
              <div className="col-md-4">
                <Card
                  img={img1}
                  color="#F4F4F4"
                  description="Top-notch expertise in HTML, CSS, and JavaScript, consistently delivers pixel-perfect, responsive websites."
                />
              </div>
              <div className="col-md-4">
                <Card
                  img={img1}
                  color="#F4F4F4"
                  description="Revamped our e-commerce site, boosting performance and conversions with a mobile-responsive, visually engaging design."
                />
              </div>
            </div>
          </div>
        </div>
      </GreyBackground>
    </>
  );
}
