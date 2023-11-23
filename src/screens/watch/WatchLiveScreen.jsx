import { useEffect } from "react";
import staticImages from "../../utils/images";
import { scrollToTop } from "../../utils/scrollToTop";

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
            <div className="grid lg:grid-cols-[auto_320px] gap-8 mb-12">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/Hhw5676RCco`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-xl font-semibold text-dark">
                    Satruday Live Watch
                  </h5>
                  <p className="text">
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold">
                  More videos to watch:
                </h3>
                <div className="grid gap-6 lg:max-h-[690px] overflow-y-scroll scrollbar-y-dir p-3 bg-whitesmoke rounded-lg">
                  <div className="block rounded-lg bg-white shadow-lg">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-lg"
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/V-xr9RJvzlQ`}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>

                  <div className="block rounded-lg bg-white shadow-lg">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-lg"
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/aX6WTAYSz-s`}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>

                  <div className="block rounded-lg bg-white shadow-lg">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-lg"
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/V-xr9RJvzlQ`}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>

                  <div className="block rounded-lg bg-white shadow-lg">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-lg"
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/LUexXsF14Z0`}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>

                  <div className="block rounded-lg bg-white shadow-lg">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-lg"
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/Hhw5676RCco`}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6 lg:gap-6">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/V-xr9RJvzlQ`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-xl font-semibold text-dark">
                    मेरो शौक गीत गाउनु हो।
                  </h5>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
                  </p>
                </div>
              </div>

              <div className="block rounded-lg bg-white shadow-lg">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/aX6WTAYSz-s`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-xl font-semibold text-dark">
                    नेपाली व्यंजनहरू स्वादिष्ट रहन्छन्।
                  </h5>
                  <p className="text text-np">
                    काठमाडौं नेपालको राजधानी हो। हामीले नेपालमा बालबालिकाको
                    शिक्षाको अधिकार सुनिश्चित गर्नु पर्छ।
                  </p>
                </div>
              </div>

              <div className="block rounded-lg bg-white shadow-lg">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/LUexXsF14Z0`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-xl font-semibold text-dark">
                    New released Song 2023
                  </h5>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
                  </p>
                </div>
              </div>

              <div className="block rounded-lg bg-white shadow-lg">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/Hhw5676RCco`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-xl font-semibold text-dark">
                    New released Song 2023
                  </h5>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
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
