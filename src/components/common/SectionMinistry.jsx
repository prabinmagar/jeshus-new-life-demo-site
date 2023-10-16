import { FaMapMarkerAlt } from "react-icons/fa";
import staticImages from "../../utils/images";
import Title from "./Title";

const Ministries = () => {
  return (
    <section className="py-8 bg-gray/10">
      <div className="container">
        <Title title={"upcoming events"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam labore fuga non, itaque id eaque obcaecati illum odit incidunt."} />

        <div className="section-content grid grid-cols-4 gap-6 mb-10">
          <div className="notice-card relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-normal font-cera">
            <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 red-overlay">
              <img
                src={staticImages.notice1}
              />
            </div>
            <div className="px-6 pt-5 pb-5 flex flex-col justify-between flex-1">
              <div className="mb-3 flex items-start flex-col">
                <div className="flex flex-col">
                  <div className="w-full text-2xl leading-8 text-gray-200 font-bold mb-3">
                    2073 Annual Seminar With Congregation
                  </div>
                  <div className="flex-auto text-gray-400 my-1">
                    <span className="mr-3">December 35, 2023</span>
                    <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                    <span>Friday</span>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-2 px-3 w-full">
                  <div className="inline-flex items-center gap-x-3">
                    <FaMapMarkerAlt />
                    <p>New Street, Highland Province</p>
                  </div>
                </div>
              </div>
              <button
                className="btn bg-blue w-full py-3.5 px-3 text-center shadow-md hover:shadow-lg hover:shadow-blue/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none default-transition mt-3"
                type="button"
              >
                learn more
              </button>
            </div>
          </div>

          <div className="notice-card relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-normal font-cera">
            <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 red-overlay">
              <img
                src={staticImages.notice2}
              />
            </div>
            <div className="px-6 pt-5 pb-5 flex flex-col justify-between flex-1">
              <div className="mb-3 flex items-start flex-col">
                <div className="flex flex-col">
                  <div className="w-full text-2xl leading-8 text-gray-200 font-bold mb-3">
                    New Location Visit 2023
                  </div>
                  <div className="flex-auto text-gray-400 my-1">
                    <span className="mr-3">December 35, 2023</span>
                    <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                    <span>Friday</span>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-2 px-3 w-full">
                  <div className="inline-flex items-center gap-x-3">
                    <FaMapMarkerAlt />
                    <p>New Street, Highland Province</p>
                  </div>
                </div>
              </div>
              <button
                className="btn bg-blue w-full py-3.5 px-3 text-center shadow-md hover:shadow-lg hover:shadow-blue/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none default-transition mt-3"
                type="button"
              >
                learn more
              </button>
            </div>
          </div>

          <div className="notice-card relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-normal font-cera">
            <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 red-overlay">
              <img
                src={staticImages.notice3}
              />
            </div>
            <div className="px-6 pt-5 pb-5 flex flex-col justify-between flex-1">
              <div className="mb-3 flex items-start flex-col">
                <div className="flex flex-col">
                  <div className="w-full text-2xl leading-8 text-gray-200 font-bold mb-3">
                    Photo Shoot in the Local tribe village
                  </div>
                  <div className="flex-auto text-gray-400 my-1">
                    <span className="mr-3">December 35, 2023</span>
                    <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                    <span>Friday</span>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-2 px-3 w-full">
                  <div className="inline-flex items-center gap-x-3">
                    <FaMapMarkerAlt />
                    <p>New Street, Highland Province</p>
                  </div>
                </div>
              </div>
              <button
                className="btn bg-blue w-full py-3.5 px-3 text-center shadow-md hover:shadow-lg hover:shadow-blue/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none default-transition mt-3"
                type="button"
              >
                learn more
              </button>
            </div>
          </div>
          <div className="notice-card relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-normal font-cera">
            <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 red-overlay">
              <img
                src={staticImages.notice4}
              />
            </div>
            <div className="px-6 pt-5 pb-5 flex flex-col justify-between flex-1">
              <div className="mb-3 flex items-start flex-col">
                <div className="flex flex-col">
                  <div className="w-full text-2xl leading-8 text-gray-200 font-bold mb-3">
                    Resuming Classes After The Summer Vacation
                  </div>
                  <div className="flex-auto text-gray-400 my-1">
                    <span className="mr-3">December 35, 2023</span>
                    <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                    <span>Friday</span>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-2 px-3 w-full">
                  <div className="inline-flex items-center gap-x-3">
                    <FaMapMarkerAlt />
                    <p>New Street, Highland Province</p>
                  </div>
                </div>
              </div>
              <button
                className="btn bg-blue w-full py-3.5 px-3 text-center shadow-md hover:shadow-lg hover:shadow-blue/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none default-transition mt-3"
                type="button"
              >
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
