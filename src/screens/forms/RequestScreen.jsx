import { AiFillCheckCircle } from "react-icons/ai";
import staticImages from "../../utils/images";

const RequestScreen = () => {
  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album pb-12 bg-whitesmoke">
        <div
          className="py-20"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${staticImages.prayer_bg}) center/cover no-repeat fixed`,
          }}
        >
          <div className="container">
            <div className="section-content grid lg:grid-cols-[2fr_3fr] lg:min-h-[500px] max-w-[1200px] rounded-lg overflow-hidden mx-auto shadow-normal">
              <div
                className="px-8 lg:pe-12 py-8 bg-white"
                style={{
                  background: `url(${staticImages.bubbles}) center/cover no-repeat`,
                }}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Express your request to us!
                </h3>
                <div className="bg-green/5 p-6 rounded relative after:absolute after:bg-green/20 after:content-[''] after:w-full after:h-full after:-bottom-2 after:-right-2 after:top-2 after:left-2 after:rounded">
                  <p className="text">
                    Remember, you don’t have to go through difficult times
                    alone. There is a spiritual battle happening on the heavenly
                    battlefield. Your prayers–when aligned with God’s Word and
                    will–can dispatch warring angels.
                  </p>
                  <br />
                  <p className="text">
                    While these angels are fighting, we will keep praying. Trust
                    what God is doing in the circumstances of your life.
                  </p>
                </div>
                <blockquote className="relative border-s-4 ps-4 sm:ps-6 border-red mt-8">
                  <p className="text">
                    <em>
                      I just wanted to say that I'm very happy with my purchase
                      so far. The documentation is outstanding - clear and
                      detailed.
                    </em>
                  </p>
                  <footer className="mt-3">
                    <div className="flex items-center">
                      <div>
                        <div className="text-base font-semibold text-dark">
                          Quoted part
                        </div>
                        <div className="text-sm text">Source title</div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
                <img src={staticImages.arrow} alt="" />
              </div>
              <div className="px-8 py-8 bg-white/10">
                <h3 className="text-xl font-semibold mb-3 text-white py-3">
                  Fill out the form below and share your requests.
                </h3>
                <form>
                  <div className="w-full my-6 grid gap-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block capitalize tracking-wide text-white text font-medium mb-1">
                          First Name
                        </label>
                        <div className="border-b-[1px] border-b-white/60">
                          <input
                            className="appearance-none block w-full bg-transparent text-white py-3 px-4 leading-tight outline-none focus:bg-gray/10 default-transition"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <p className="text-red text-xs italic hidden">
                          Please fill out this field.
                        </p>
                      </div>
                      <div>
                        <label className="block capitalize tracking-wide text-white text font-medium mb-1">
                          last Name
                        </label>
                        <div className="border-b-[1px] border-b-white/60">
                          <input
                            className="appearance-none block w-full bg-transparent text-white py-3 px-4 leading-tight outline-none focus:bg-gray/10 default-transition"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block capitalize tracking-wide text-white text font-medium mb-1">
                        Email Address
                      </label>
                      <div className="border-b-[1px] border-b-white/60">
                        <input
                          className="appearance-none block w-full bg-transparent text-white py-3 px-4 leading-tight outline-none focus:bg-gray/10 default-transition"
                          type="text"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block capitalize tracking-wide text-white text font-medium mb-1">
                        Phone Number
                      </label>
                      <div className="border-b-[1px] border-b-white/60">
                        <input
                          className="appearance-none block w-full bg-transparent text-white py-3 px-4 leading-tight outline-none focus:bg-gray/10 default-transition"
                          type="text"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block capitalize tracking-wide text-white text font-medium mb-1">
                        Request Message
                      </label>
                      <textarea
                        className="appearance-none block w-full bg-white/20 text-white border h-[120px] py-3 px-4 leading-tight outline-none focus:bg-gray/10 default-transition resize-none"
                        type="text"
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-lg bg-green">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
            <img src={staticImages.peaks} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestScreen;
