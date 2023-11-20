import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import staticImages from "../../utils/images";

const AboutScreen = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <main className="content-wrapper">
      <div className="pg-about py-8">
        <div className="container">
          <div className="grid max-w-[1000px] mx-auto gap-y-12">
            <div className="flex gap-8 flex-col md:flex-row md:items-center bg-gray/5 p-6">
              <div className="sm:w-[420px] h-[400px] sm:h-[420px] sm:min-w-[420px] overflow-hidden rounded-md">
                <img
                  src={staticImages.member1}
                  className="w-full h-full object-cover object-top"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-700 md:text-4xl">
                  John Hagee
                </h3>
                <h5 className="text-lg font-bold text-red md:text-xl mt-3 mb-1">
                  Founder & Senior Pastor
                </h5>
                <p className="text bg-white p-6 mt-3">
                  Pastor John C. Hagee is the founder and Senior Pastor of
                  Cornerstone Church in San Antonio, Texas, a non-denominational
                  evangelical church with more than 22,000 active members.
                  Pastor Hagee has served the Lord in the gospel ministry for
                  over 60 years.
                </p>
              </div>
            </div>

            <div className="flex gap-8 flex-col md:flex-row-reverse md:items-center">
              <div className="sm:w-[420px] h-[400px] sm:h-[420px] sm:min-w-[420px] overflow-hidden rounded-md">
                <img
                  src={staticImages.member2}
                  className="w-full h-full object-cover object-top"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-700 md:text-4xl">
                Matt Hagee
                </h3>
                <h5 className="text-lg font-bold text-red md:text-xl mt-3 mb-1">
                Lead Pastor
                </h5>
                <p className="text bg-gray/5 p-6 mt-3">
                Pastor Matt Hagee is the Lead Pastor of the 22,000-member Cornerstone Church in San Antonio, Texas where he partners with his father, founder Pastor John Hagee. Pastor Matt and his wife Kendal are committed to sharing the Gospel of Jesus Christ with the nations of the world and committed to building bridges between generations.
                </p>
              </div>
            </div>

            <div className="flex gap-8 flex-col md:flex-row md:items-center bg-gray/5 p-6">
              <div className="sm:w-[420px] h-[400px] sm:h-[420px] sm:min-w-[420px] overflow-hidden rounded-md">
                <img
                  src={staticImages.member3}
                  className="w-full h-full object-cover object-top"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-700 md:text-4xl">
                  John Hagee
                </h3>
                <h5 className="text-lg font-bold text-red md:text-xl mt-3 mb-1">
                  Founder & Senior Pastor
                </h5>
                <p className="text bg-white p-6 mt-3">
                  Pastor John C. Hagee is the founder and Senior Pastor of
                  Cornerstone Church in San Antonio, Texas, a non-denominational
                  evangelical church with more than 22,000 active members.
                  Pastor Hagee has served the Lord in the gospel ministry for
                  over 60 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutScreen;
