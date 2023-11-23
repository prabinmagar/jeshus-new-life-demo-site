import staticImages from "../../utils/images";
import { MdVideoLibrary } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";

const MediaScreen = () => {
  const vidId = "aqz-KE-bpKQ";

  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album pb-12">
        <div
          className="mb-8 h-[200px] flex items-center"
          style={{
            background: `linear-gradient(rgba(36, 110, 185, 0.4), rgba(0, 0, 0, 0.5)), url(${staticImages.media_banner}) center/cover no-repeat fixed`,
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
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Recent Videos</h3>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6 lg:gap-6">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${vidId}`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="px-6 py-4">
                  <div className="flex flex-col items-start gap-y-3 mb-3">
                    <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                      <FaRegCirclePlay size={32} className="text-green" />
                      <span>New released Song 2023</span>
                    </h5>
                  </div>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
                  </p>
                </div>
                <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between">
                  <div className="flex text text-sm items-center flex-wrap gap-x-2">
                    <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                  </div>
                  <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                    <span className="font-medium">Lectures</span> - Watch on
                    YouTube
                  </div>
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
                <div className="px-6 py-4">
                  <div className="flex flex-col items-start gap-y-3 mb-3">
                    <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                      <FaRegCirclePlay size={32} className="text-green" />
                      <span>New released Song 2023</span>
                    </h5>
                  </div>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
                  </p>
                </div>
                <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between">
                  <div className="flex text text-sm items-center flex-wrap gap-x-2">
                    <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                  </div>
                  <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                    <span className="font-medium">Lectures</span> - Watch on
                    YouTube
                  </div>
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
                <div className="px-6 py-4">
                  <div className="flex flex-col items-start gap-y-3 mb-3">
                    <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                      <FaRegCirclePlay size={32} className="text-green" />
                      <span>New released Song 2023</span>
                    </h5>
                  </div>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
                  </p>
                </div>
                <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between">
                  <div className="flex text text-sm items-center flex-wrap gap-x-2">
                    <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                  </div>
                  <div className="bg-green text-white rounded px-3 text-sm py-1 border-[1px] border-green">
                    <span className="font-medium">Lectures</span> - Watch on
                    YouTube
                  </div>
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
                <div className="px-6 py-4">
                  <div className="flex flex-col items-start gap-y-3 mb-3">
                    <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                      <FaRegCirclePlay size={32} className="text-green" />
                      <span>New released Song 2023</span>
                    </h5>
                  </div>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
                  </p>
                </div>
                <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between">
                  <div className="flex text text-sm items-center flex-wrap gap-x-2">
                    <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                  </div>
                  <div className="bg-red text-white rounded px-3 text-sm py-1 border-[1px] border-red">
                    <span className="font-medium">Lectures</span> - Watch on
                    YouTube
                  </div>
                </div>
              </div>

              <div className="block rounded-lg bg-white shadow-lg">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg"
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${vidId}`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="px-6 py-4">
                  <div className="flex flex-col items-start gap-y-3 mb-3">
                    <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                      <FaRegCirclePlay size={32} className="text-green" />
                      <span>New released Song 2023</span>
                    </h5>
                  </div>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
                  </p>
                </div>
                <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between">
                  <div className="flex text text-sm items-center flex-wrap gap-x-2">
                    <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                  </div>
                  <div className="bg-red text-white rounded px-3 text-sm py-1 border-[1px] border-red">
                    <span className="font-medium">Lectures</span> - Watch on
                    YouTube
                  </div>
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
                <div className="px-6 py-4">
                  <div className="flex flex-col items-start gap-y-3 mb-3">
                    <h5 className="text-xl font-semibold text-dark flex items-center flex-wrap gap-x-3">
                      <FaRegCirclePlay size={32} className="text-green" />
                      <span>New released Song 2023</span>
                    </h5>
                  </div>
                  <p className="text text-np">
                    सही समयमा सही काम गर्ने गरी जीवन योजना बनाउनु पर्छ। मलाई
                    यात्रा गर्न मन पर्छ, त्यसले मलाई नयाँ चीजहरू सिक्न मदत गर्छ।
                    म नेपाली हुँ।
                  </p>
                </div>
                <div className="px-6 py-3 border-t-[1px] border-t-gray/10 flex items-center flex-wrap gap-3 justify-between">
                  <div className="flex text text-sm items-center flex-wrap gap-x-2">
                    <MdVideoLibrary /> <span>27th Jan, 2023,</span>
                  </div>
                  <div className="bg-red text-white rounded px-3 text-sm py-1 border-[1px] border-red">
                    <span className="font-medium">Lectures</span> - Watch on
                    YouTube
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MediaScreen;
