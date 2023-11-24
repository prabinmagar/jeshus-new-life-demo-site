import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import staticImages from "../../utils/images";
import { Intro } from "../../components";

const AboutScreen = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <main className="content-wrapper">
      <div className="pg-about relative after:absolute after:content-[''] after:top-0 after:right-0 after:w-[400px] after:h-[240px] after:bg-blue/10 after:hidden lg:after:block">
        <div className="bg-white">
          <div className="container">
            <div className="max-w-[1200px] min-h-[240px] mx-auto grid lg:grid-cols-2 gap-10 py-12">
              <div className="text-justify" data-aos="fade-right">
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  YNL Community
                </h2>
                <p className="text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <br />
                <p className="text">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
              </div>
              <div className="h-[320px] overflow-hidden rounded-lg shadow-normal z-10" data-aos="fade-left">
                <img
                  src={staticImages.temp2}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-whitesmoke py-16"
          style={{
            background: `linear-gradient(rgb(179, 25, 1, 0.8), rgb(179, 25, 1, 0.9)), url(${staticImages.about_banner}) center/cover no-repeat`,
          }}
        >
          <div className="container">
            <div className="grid max-w-[1200px] mx-auto gap-y-8">
              <div className="flex gap-8 flex-col md:flex-row md:items-center">
                <div className="h-[280px] w-[280px] mx-auto md:ms-0 min-w-[280px] rounded-full shadow-normal border-4 border-white relative after:absolute after:content-[''] after:w-[60px] after:h-[60px] after:bg-white after:right-2 after:bottom-3 after:rounded-full" data-aos="fade-right">
                  <img
                    src={staticImages.member1}
                    className="w-full h-full object-cover object-top rounded-full"
                    alt=""
                  />
                </div>
                <div className="shadow-shadow4 px-6 py-8 rounded-lg border-2 border-gray/5 bg-whitesmoke" data-aos="fade-left">
                  <h3 className="text-2xl font-bold text-gray-700 md:text-3xl">
                    John Hagee
                  </h3>
                  <h5 className="font-bold text mt-3 mb-1">
                    Founder & Senior Chariman
                  </h5>
                  <p className="text mt-3">
                    Pastor John C. Hagee is the founder and Senior Pastor of
                    Cornerstone Foundation in San Antonio, Texas, a
                    non-denominational evangelical society with more than 22,000
                    active members. Pastor Hagee has served the Lord in the
                    gospel ministry for over 60 years.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 flex-col md:flex-row-reverse md:items-center">
                <div className="h-[280px] w-[280px] mx-auto md:ms-0 min-w-[280px] overflow-hidden rounded-full shadow-normal border-4 border-white" data-aos="fade-left">
                  <img
                    src={staticImages.member4}
                    className="w-full h-full object-cover object-top"
                    alt=""
                  />
                </div>
                <div className="text-white" data-aos="fade-right">
                  <h3 className="text-3xl font-bold text-gray-700 md:text-4xl">
                    Matt Hagee
                  </h3>
                  <h5 className="font-bold text text-white mt-3 mb-1">
                    Founder & Senior Chariman
                  </h5>
                  <p className="text bg-white/10 p-6 mt-3 text-white">
                    Pastor Matt Hagee is the Lead Pastor of the 22,000-member
                    Cornerstone community in San Antonio, Texas where he
                    partners with his father, founder Pastor John Hagee. Pastor
                    Matt and his wife Kendal are committed to sharing the Gospel
                    of Jesus Christ with the nations of the world and committed
                    to building bridges between generations.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 flex-col md:flex-row md:items-center">
                <div className="h-[280px] w-[280px] mx-auto md:ms-0 min-w-[280px] rounded-full shadow-normal border-4 border-white relative" data-aos="fade-right">
                  <img
                    src={staticImages.member5}
                    className="w-full h-full object-cover object-top rounded-full z-10 relative"
                    alt=""
                  />
                  <img src={staticImages.twinkle} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]" />
                </div>
                <div className="shadow-shadow4 px-6 py-8 rounded-lg border-2 border-gray/5 bg-whitesmoke" data-aos="fade-left">
                  <h3 className="text-2xl font-bold text-gray-700 md:text-3xl">
                    John Hagee
                  </h3>
                  <h5 className="font-bold text mt-3 mb-1">
                    Founder & Senior Chariman
                  </h5>
                  <p className="text mt-3">
                    Pastor John C. Hagee is the founder and Senior Pastor of
                    Cornerstone Foundation in San Antonio, Texas, a
                    non-denominational evangelical society with more than 22,000
                    active members. Pastor Hagee has served the Lord in the
                    gospel ministry for over 60 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Intro />
        <img src={staticImages.wave} className="lg:-mt-[100px]" />
      </div>
    </main>
  );
};

export default AboutScreen;
