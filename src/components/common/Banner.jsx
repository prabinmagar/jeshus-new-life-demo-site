import staticImages from "../../utils/images";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <div className="min-h-screen">
      <Slider
        {...settings}
        nextArrow={<CustomNextArrow />}
        prevArrow={<CustomPrevArrow />}
      >
        <div className="banner-slider-item">
          <div
            className="min-h-screen text-white flex items-center justify-start pt-[80px]"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.banner2}) center/cover no-repeat fixed`,
            }}
          >
            <div className="container">
              <h1 className="uppercase text-7xl font-semibold drop-shadow-lg">
                worship with the{" "}
              </h1>
              <h3 className="text-5xl drop-shadow-lg mt-4 uppercase font-medium mb-10">
                second family
              </h3>
              <p className="text-xl max-w-[620px] text-center opacity-90">
                We gather online each Sunday at 9:30a and 11:45a ET and would
                love for you to join us!
              </p>
              <Link to="" className="btn btn-lg bg-red mt-8">
                learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="banner-slider-item">
          <div
            className="min-h-screen text-white flex items-center justify-start pt-[80px]"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.banner1}) center/cover no-repeat fixed`,
            }}
          >
            <div className="container">
              <h1 className="uppercase text-7xl font-semibold drop-shadow-lg">
                worship with the{" "}
              </h1>
              <h3 className="text-5xl drop-shadow-lg mt-4 uppercase font-medium mb-10">
                second family
              </h3>
              <p className="text-xl max-w-[620px] text-center opacity-90">
                We gather online each Sunday at 9:30a and 11:45a ET and would
                love for you to join us!
              </p>
              <Link to="" className="btn btn-lg bg-red mt-8">
                join us
              </Link>
            </div>
          </div>
        </div>
        <div className="banner-slider-item">
          <div
            className="min-h-screen text-white flex items-center justify-start pt-[80px]"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.banner3}) center/cover no-repeat fixed`,
            }}
          >
            <div className="container">
              <h1 className="uppercase text-7xl font-semibold drop-shadow-lg">
                THE POWER OF CHANGE{" "}
              </h1>
              <h3 className="text-5xl drop-shadow-lg mt-4 uppercase font-medium mb-10">
                connect us
              </h3>
              <p className="text-xl max-w-[620px] text-center opacity-90">
                We gather online each Sunday at 9:30a and 11:45a ET and would
                love for you to join us!
              </p>
              <Link to="" className="btn btn-lg bg-red mt-8">
                visit us
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
