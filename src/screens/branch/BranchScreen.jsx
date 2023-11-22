import { Link } from "react-router-dom";
import staticImages from "../../utils/images";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";

const BranchScreen = () => {
  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album bg-whitesmoke">
        <div
          className="mb-8 h-[200px] flex items-center"
          style={{
            background: `linear-gradient(rgba(36, 110, 185, 0.4), rgba(0, 0, 0, 0.5)), url(${staticImages.location_banner}) center/cover no-repeat fixed`,
          }}
        >
          <div className="container">
            <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">
              Our Locations
            </h2>
            <p className="text text-white drop-shadow-lg">
              The photo albums of all the events and celebrations.
            </p>
          </div>
        </div>
        <div>
        <div className="container">
          <div className="section-content max-w-[1200px] mx-auto py-10">
            <section className="flex flex-col justify-center">
              <div className="grid md:grid-cols-2 border border-gray/10 rounded-lg shadow-md mb-8 blue-gradient">
                <div className="text-white px-6 md:py-6 py-4">
                  <div className="block mb-6 text-xl font-semibold border-l-4 border-l-white ps-3">
                    Yeshua New Life
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <div className="px-3 py-1 rounded-full bg-white/10 flex items-center flex-wrap text-white gap-x-2">
                      <FaLocationDot />
                      <span>Lamachour Marg, Jhamsikhel, Lalitpur</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 flex items-center flex-wrap text-white gap-x-2">
                      <FaBuilding />
                      <span>Main branch</span>
                    </div>
                  </div>

                  <p className="mt-4 text text-white">
                    YNL is located in the Lamachour Marga of Lalitpur city and
                    is serving as the home or mother branch since 1990. The YNL
                    consists of about 300 members and has been continously
                    working with other branches for fellowship.
                  </p>
                  <div className="bg-white rounded shadow-normal mt-6 relative p-2">
                    <div className="px-3">
                      <h2 className="font-semibold text-dark mt-3 text-lg">
                        Contact Details:
                      </h2>
                      <p className="mt-1 text">
                        You can contact us at any time within or outside the
                        service time. YNL will reachout to you as soon as
                        possible.
                      </p>
                    </div>
                    <div className="px-3 mt-4 grid gap-4 md:grid-cols-2 md:py-2">
                      <div>
                        <h2 className="font-semibold text-dark">
                          Email Address
                        </h2>
                        <a className="text-gray">ynlcom@email.com</a>
                      </div>
                      <div>
                        <h2 className="font-semibold text-dark">
                          Phone Number
                        </h2>
                        <a className="text-gray">+977-9855667840</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 md:py-6 py-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.2272254576922!2d85.30913120182586!3d27.67563198695175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1984019cf53f%3A0x2951eca0301687e8!2sYeshua%20new%20life!5e0!3m2!1sen!2snp!4v1700392781764!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                    className="min-h-[320px]"
                  ></iframe>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
                <div className="p-4 flex flex-col justify-between border border-gray/10 rounded-lg shadow-md bg-white">
                  <div className="block mb-6 text-xl font-semibold border-l-4 border-l-red ps-3">
                    Yeshua New Life
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <div className="px-3 py-1 rounded-full bg-gray/5 flex items-center flex-wrap text-dark/70 gap-x-2">
                      <FaLocationDot />
                      <span>Damak, Jhapa</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray/5 flex items-center flex-wrap text-dark/70 gap-x-2">
                      <FaBuilding />
                      <span>Sub branch</span>
                    </div>
                  </div>

                  <p className="mt-4 text">
                    YNL is located in the Lamachour Marga of Lalitpur city and
                    is serving as the home or mother branch since 1990. The YNL
                    consists of about 300 members and has been continously
                    working with other branches for fellowship.
                  </p>
                </div>

                <div className="p-4 flex flex-col justify-between border border-gray/10 rounded-lg shadow-md bg-white">
                  <div className="block mb-6 text-xl font-semibold border-l-4 border-l-red ps-3">
                    Yeshua New Life
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <div className="px-3 py-1 rounded-full bg-gray/5 flex items-center flex-wrap text-dark/70 gap-x-2">
                      <FaLocationDot />
                      <span>Surunga, Jhapa</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray/5 flex items-center flex-wrap text-dark/70 gap-x-2">
                      <FaBuilding />
                      <span>Sub branch</span>
                    </div>
                  </div>

                  <p className="mt-4 text">
                    YNL is located in the Lamachour Marga of Lalitpur city and
                    is serving as the home or mother branch since 1990. The YNL
                    consists of about 300 members and has been continously
                    working with other branches for fellowship.
                  </p>
                </div>
                <div className="p-4 flex flex-col justify-between border border-gray/10 rounded-lg shadow-md bg-white">
                  <div className="block mb-6 text-xl font-semibold border-l-4 border-l-red ps-3">
                    Yeshua New Life
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <div className="px-3 py-1 rounded-full bg-gray/5 flex items-center flex-wrap text-dark/70 gap-x-2">
                      <FaLocationDot />
                      <span>Birtamod, Jhapa</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray/5 flex items-center flex-wrap text-dark/70 gap-x-2">
                      <FaBuilding />
                      <span>Sub branch</span>
                    </div>
                  </div>

                  <p className="mt-4 text">
                    YNL is located in the Lamachour Marga of Lalitpur city and
                    is serving as the home or mother branch since 1990. The YNL
                    consists of about 300 members and has been continously
                    working with other branches for fellowship.
                  </p>
                </div>
                <div className="p-4 flex flex-col justify-between border border-gray/10 rounded-lg shadow-md bg-white">
                  <div className="block mb-6 text-xl font-semibold border-l-4 border-l-red ps-3">
                    Yeshua New Life
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <div className="px-3 py-1 rounded-full bg-gray/5 flex items-center flex-wrap text-dark/70 gap-x-2">
                      <FaLocationDot />
                      <span>Urlabari, Morang</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray/5 flex items-center flex-wrap text-dark/70 gap-x-2">
                      <FaBuilding />
                      <span>Sub branch</span>
                    </div>
                  </div>

                  <p className="mt-4 text">
                    YNL is located in the Lamachour Marga of Lalitpur city and
                    is serving as the home or mother branch since 1990. The YNL
                    consists of about 300 members and has been continously
                    working with other branches for fellowship.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default BranchScreen;
