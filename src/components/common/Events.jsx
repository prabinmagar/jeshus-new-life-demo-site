import { FaMapMarkerAlt } from "react-icons/fa";
import staticImages from "../../utils/images";
import Title from "./Title";
import { EventDialog } from "./EventDialog";
import { useState } from "react";

const Events = () => {
  const [eventDialogOpen, setEventDialogOpen] = useState(false);
  const handleEventDialogOpen = () => setEventDialogOpen((cur) => !cur);

  const onEventDialogOpen = (e) => {
    e.preventDefault();
    handleEventDialogOpen();
  };

  return (
    <>
      <EventDialog
        eventDialogOpen={eventDialogOpen}
        handleEventDialogOpen={handleEventDialogOpen}
      />
      <section className="py-8 bg-whitesmoke">
        <div className="container">
          <Title
            title={"upcoming events"}
            description={
              "Explore our upcoming church services and events schedule."
            }
          />

          <div className="section-content grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-10">
            <div
              className="notice-card group relative flex w-full md:max-w-[26rem] mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-normal font-cera cursor-pointer"
              onClick={onEventDialogOpen}
            >
              <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 h-[220px] red-overlay">
                <img
                  src={staticImages.notice1}
                  className="w-full h-full object-cover group-hover:scale-110 default-transition"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/50 rounded px-3 py-1 drop-shadow opacity-0 group-hover:opacity-100 default-transition whitespace-nowrap">
                  Click for details
                </div>
                <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-red border-r-[36px] border-r-red border-b-[80px] border-b-red shadow-lg">
                  <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                    <span className="text-3xl">29</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
              <div className="lg:px-6 px-4 pt-5 pb-5 flex flex-col justify-between flex-1">
                <div className="mb-3 flex items-start flex-col">
                  <div className="flex flex-col">
                    <div className="w-full xl:text-2xl text-xl xl:leading-8 text-gray-200 font-bold mb-3">
                      2073 Annual Seminar With Congregation
                    </div>
                    <div className="flex-auto text-gray-400 mb-1 text-sm">
                      <span className="mr-3">December 35, 2023</span>
                      <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                      <span>Friday</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-2 px-3 w-full">
                    <div className="inline-flex items-center gap-x-3">
                      <FaMapMarkerAlt />
                      <p className="text-sm">House of God, Lalitpur, NP</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-3 mt-3">
                  <button
                    className="btn bg-red w-full py-3 px-3 text-center shadow-md hover:shadow-lg hover:shadow-blue/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none default-transition"
                    type="button"
                  >
                    Register Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="notice-card group relative flex w-full md:max-w-[26rem] mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-normal font-cera cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 h-[220px] red-overlay">
                <img
                  src={staticImages.notice2}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/50 rounded px-3 py-1 drop-shadow opacity-0 group-hover:opacity-100 default-transition whitespace-nowrap">
                  Click for details
                </div>
                <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-red border-r-[36px] border-r-red border-b-[80px] border-b-red shadow-lg">
                  <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                    <span className="text-3xl">29</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
              <div className="lg:px-6 px-4 pt-5 pb-5 flex flex-col justify-between flex-1">
                <div className="mb-3 flex items-start flex-col">
                  <div className="flex flex-col">
                    <div className="w-full xl:text-2xl text-xl xl:leading-8 text-gray-200 font-bold mb-3">
                      Christian Hymns Seminar
                    </div>
                    <div className="flex-auto text-gray-400 mb-1 text-sm">
                      <span className="mr-3">December 35, 2023</span>
                      <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                      <span>Friday</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-2 px-3 w-full">
                    <div className="inline-flex items-center gap-x-3">
                      <FaMapMarkerAlt />
                      <p className="text-sm">House of God, Lalitpur, NP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="notice-card group relative flex w-full md:max-w-[26rem] mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-normal font-cera">
              <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 h-[220px] red-overlay">
                <img
                  src={staticImages.notice3}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/50 rounded px-3 py-1 drop-shadow opacity-0 group-hover:opacity-100 default-transition whitespace-nowrap">
                  Click for details
                </div>
                <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-green border-r-[36px] border-r-green border-b-[80px] border-b-green shadow-lg">
                  <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                    <span className="text-3xl">29</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
              <div className="lg:px-6 px-4 pt-5 pb-5 flex flex-col justify-between flex-1">
                <div className="mb-3 flex items-start flex-col">
                  <div className="flex flex-col">
                    <div className="w-full xl:text-2xl text-xl xl:leading-8 text-gray-200 font-bold mb-3">
                      Bible Study: Book of Romans
                    </div>
                    <div className="flex-auto text-gray-400 mb-1 text-sm">
                      <span className="mr-3">December 35, 2023</span>
                      <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                      <span>Friday</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-2 px-3 w-full">
                    <div className="inline-flex items-center gap-x-3">
                      <FaMapMarkerAlt />
                      <p className="text-sm">House of God, Lalitpur, NP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="notice-card group relative flex w-full md:max-w-[26rem] mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-normal font-cera">
              <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 h-[220px] red-overlay">
                <img
                  src={staticImages.notice4}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/50 rounded px-3 py-1 drop-shadow opacity-0 group-hover:opacity-100 default-transition whitespace-nowrap">
                  Click for details
                </div>
                <div className="absolute z-10 top-0 rotate-180 left-3 border-t-[20px] border-t-transparent border-l-[36px] border-l-red border-r-[36px] border-r-red border-b-[80px] border-b-red shadow-lg">
                  <div className="absolute top-5 rotate-180 flex text-center right-1/2 translate-x-1/2 leading-[6px] gap-y-2 font-bold uppercase flex-col">
                    <span className="text-3xl">29</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
              <div className="lg:px-6 px-4 pt-5 pb-5 flex flex-col justify-between flex-1">
                <div className="mb-3 flex items-start flex-col">
                  <div className="flex flex-col">
                    <div className="w-full xl:text-2xl text-xl xl:leading-8 text-gray-200 font-bold mb-3">
                      Elevate Christmas Party
                    </div>
                    <div className="flex-auto text-gray-400 mb-1 text-sm">
                      <span className="mr-3">December 35, 2023</span>
                      <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                      <span>Friday</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-2 px-3 w-full">
                    <div className="inline-flex items-center gap-x-3">
                      <FaMapMarkerAlt />
                      <p className="text-sm">House of God, Lalitpur, NP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
