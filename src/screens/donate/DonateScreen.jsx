import { AiFillCheckCircle } from "react-icons/ai";
import staticImages from "../../utils/images";
import { BiSolidDonateHeart } from "react-icons/bi";

const DonateScreen = () => {
  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album pb-12 bg-whitesmoke">
        <div className="py-16" style={{
          background: `url(${staticImages.bg_pattern1}) center/cover no-repeat`
        }}>
        <div className="container">
          <div className="section-content grid lg:grid-cols-2 shadow-normal min-h-[500px] max-w-[1000px] rounded-lg overflow-hidden mx-auto">
            <div className="px-8 py-8 bg-white border-b-[1px] border-b-gray/5 lg:border-r-[1px] lg:border-r-gray/10 lg:border-b-0">
              <h3 className="text-3xl font-semibold mb-4 text-green flex flex-wrap gap-x-4 items-center">
                <span>Help us do more!</span> <BiSolidDonateHeart />
              </h3>
              <div className="bg-gray/5 p-6 rounded">
                <p className="text">
                  Each of you should give what you have decided in your heart to
                  give, not reluctantly or under compulsion, for God loves a
                  cheerful giver. And God is able to bless you abundantly, so
                  that in all things at all times, having all that you need, you
                  will abound in every good work.
                </p>
                <p className="italic font-semibold mt-4 text-dark">
                  2 Corinthians 9:6-8
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-6">Ways to Give</h3>
              <div className="flex flex-wrap gap-4 my-5">
                <button
                  type="button"
                  className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition"
                >
                  <img
                    src={staticImages.pay_gateway1}
                    alt=""
                    className="object-center w-full h-full rounded"
                  />
                  <span className="absolute -top-[10px] -right-[10px]">
                    <AiFillCheckCircle size={24} className="text-green" />
                  </span>
                </button>
                <button
                  type="button"
                  className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition"
                >
                  <img
                    src={staticImages.pay_gateway2}
                    alt=""
                    className="object-center w-full h-full rounded"
                  />
                </button>
                <button
                  type="button"
                  className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition"
                >
                  <img
                    src={staticImages.pay_gateway3}
                    alt=""
                    className="object-center w-full h-full rounded"
                  />
                </button>
                <button
                  type="button"
                  className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition "
                >
                  <img
                    src={staticImages.pay_gateway4}
                    alt=""
                    className="object-center w-full h-full rounded"
                  />
                </button>
                <button
                  type="button"
                  className="max-w-[140px] rounded shadow h-[50px] p-1 relative hover:scale-110 default-transition"
                >
                  <img
                    src={staticImages.pay_gateway5}
                    alt=""
                    className="object-center w-full h-full rounded"
                  />
                </button>
              </div>
            </div>
            <div className="px-8 py-8 bg-white">
              <div className="rounded-full border-4 border-gray/10 w-20 h-20 overflow-hidden flex items-center justify-center mx-auto mb-6">
                <img
                  src={staticImages.donate}
                  className="w-16 mx-auto"
                  alt=""
                />
              </div>
              <div className="max-w-[240px] mx-auto border-gray/10 border-[1px]">
                <img src={staticImages.qr_sample} alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default DonateScreen;
