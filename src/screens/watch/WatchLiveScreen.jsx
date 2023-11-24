import { useEffect } from "react";
import staticImages from "../../utils/images";
import { scrollToTop } from "../../utils/scrollToTop";
import { FaPlay } from "react-icons/fa";

const WatchLiveScreen = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <main className="content-wrapper">
      <div className="pg-watch-live pb-12">
        <div
          className="mb-8 h-[200px] flex items-center"
          style={{
            background: `linear-gradient(rgba(36, 110, 185, 0.4), rgba(0, 0, 0, 0.5)), url(${staticImages.live_banner}) center/cover no-repeat fixed`,
          }}
        >
          <div className="container">
            <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">
              Media Library
            </h2>
            <p className="text text-white drop-shadow-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
              laudantium!
            </p>
          </div>
        </div>
        <div className="container">
          <div className="section-content mb-10 mt-10">
            <div className="grid max-w-[1000px] mx-auto mb-12">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg relative"
                    title="YouTube Video"
                    // src={`https://www.youtube.com/embed/Hhw5676RCco`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  >
                    <div className="absolute top-0 left-0 w-full h-full">
                      <img src={staticImages.watch_live} />
                    </div>
                  </iframe>

                  <div className="inline-flex items-center gap-x-3 bg-red text-white px-4 py-2 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <FaPlay />
                    <span className="font-medium">Watch Now</span>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-xl font-semibold text-dark">
                    Satruday Live Watch
                  </h5>
                  <p className="text">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WatchLiveScreen;
