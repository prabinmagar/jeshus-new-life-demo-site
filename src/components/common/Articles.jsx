import Title from "./Title";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../";
import staticImages from "../../utils/images";

const Articles = () => {
  return (
    <section className="py-8">
      <div className="container">
        <Title
          title={"Latest articles to read"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit aliquid quaerat. Aut, quas optio?"
          }
        />
        {/* <div className="section-content mb-20 grid lg:grid-cols-2 gap-8">
          <div className="px-3 h-full">
            <div className="relative flex flex-col w-full xl:flex-row rounded-lg text-white bg-clip-border text-gray-700 h-full">
              <div className="relative m-0 xl:w-2/5 shrink-0 overflow-hidden rounded-xl xl:rounded-r-none rounded-b-none xl:rounded-l-xl bg-white bg-clip-border text-gray-700 xl:h-auto h-[320px]">
                <img
                  src={staticImages.article1}
                  className="w-full h-full object-cover absolute"
                />
              </div>
              <div className="p-6 red-gradient xl:rounded-r-lg rounded-b-lg xl:rounded-l-none">
                <h6 className="mb-3 block text-base font-semibold uppercase leading-relaxed tracking-normal text-white border-b-[1px] border-white pb-1 antialiased">
                  Blog
                </h6>
                <span className="italic text-sm block mb-3">
                  Pastor David Paul Limbu, Sept 30, 2023
                </span>
                <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased text-white">
                  The Daily Habit of Reading
                </h4>
                <p className="mb-4 text text-white">
                  “It is our response, it is our urgency to invite people into
                  the family of God.” In this message, Pastor Kirk Graham shares
                  the power of an invitation!
                </p>
                <a className="inline-block" href="#">
                  <button
                    className="text-blue flex items-center gap-x-3 font-medium"
                    type="button"
                  >
                    <span className="mb-1 text-white/80 hover:text-white/100 capitalize default-transition">
                      Read More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="relative flex flex-col w-full xl:flex-row rounded-lg text-white bg-clip-border text-gray-700">
              <div className="relative m-0 xl:w-2/5 shrink-0 overflow-hidden rounded-xl xl:rounded-r-none rounded-b-none xl:rounded-l-xl bg-white bg-clip-border text-gray-700 xl:h-auto h-[320px]">
                <img
                  src={staticImages.article2}
                  className="w-full h-full object-cover absolute"
                  alt="image"
                />
              </div>
              <div className="p-6 blue-gradient xl:rounded-r-lg rounded-b-lg xl:rounded-l-none">
                <h6 className="mb-3 block text-base font-semibold uppercase leading-relaxed tracking-normal text-white border-b-[1px] border-white pb-1 antialiased">
                  History
                </h6>
                <span className="italic text-sm block mb-3">
                  Pastor David Paul Limbu, Sept 30, 2023
                </span>
                <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased text-white">
                  Present Scenario of the Promised Land!
                </h4>
                <p className="mb-4 text text-white">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses. Yet its own business model
                  disruption is only part of the story.
                </p>
                <a className="inline-block" href="#">
                  <button
                    className="text-blue flex items-center gap-x-3 font-medium"
                    type="button"
                  >
                    <span className="mb-1 text-white/80 hover:text-white/100 capitalize default-transition">
                      Read More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="relative flex flex-col w-full xl:flex-row rounded-lg text-white bg-clip-border text-gray-700">
              <div className="relative m-0 xl:w-2/5 shrink-0 overflow-hidden rounded-xl xl:rounded-r-none rounded-b-none xl:rounded-l-xl bg-white bg-clip-border text-gray-700 xl:h-auto h-[320px]">
                <img
                  src={staticImages.article3}
                  className="w-full h-full object-cover absolute"
                  alt="image"
                />
              </div>
              <div className="p-6 red-gradient xl:rounded-r-lg rounded-b-lg xl:rounded-l-none">
                <h6 className="mb-3 block text-base font-semibold uppercase leading-relaxed tracking-normal text-white border-b-[1px] border-white pb-1 antialiased">
                  Study Materials
                </h6>
                <span className="italic text-sm block mb-3">
                  Pastor David Paul Limbu, Sept 30, 2023
                </span>
                <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased text-white">
                  Most Treasured Commentary & Handbooks
                </h4>
                <p className="mb-4 text text-white">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses. Yet its own business model
                  disruption is only part of the story
                </p>
                <a className="inline-block" href="#">
                  <button
                    className="text-blue flex items-center gap-x-3 font-medium"
                    type="button"
                  >
                    <span className="mb-1 text-white/80 hover:text-white/100 capitalize default-transition">
                      Read More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="relative flex flex-col w-full xl:flex-row rounded-lg text-white bg-clip-border text-gray-700">
              <div className="relative m-0 xl:w-2/5 shrink-0 overflow-hidden rounded-xl xl:rounded-r-none rounded-b-none xl:rounded-l-xl bg-white bg-clip-border text-gray-700 xl:h-auto h-[320px]">
                <img
                  src={staticImages.article4}
                  className="w-full h-full object-cover absolute"
                  alt="image"
                />
              </div>
              <div className="p-6 blue-gradient xl:rounded-r-lg rounded-b-lg xl:rounded-l-none">
                <h6 className="mb-3 block text-base font-semibold uppercase leading-relaxed tracking-normal text-white border-b-[1px] border-white pb-1 antialiased">
                  Study
                </h6>
                <span className="italic text-sm block mb-3">
                  Pastor David Paul Limbu, Sept 30, 2023
                </span>
                <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased text-white">
                  Revival Like in the Day of Pentecost
                </h4>
                <p className="mb-4 text text-white">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses. Yet its own business model
                  disruption is only part of the story
                </p>
                <a className="inline-block" href="#">
                  <button
                    className="text-blue flex items-center gap-x-3 font-medium"
                    type="button"
                  >
                    <span className="mb-1 text-white/80 hover:text-white/100 capitalize default-transition">
                      Read More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-4 grid-rows-3 gap-6">
          <div className="cursor-pointer shadow-lg h-[260px] col-span-4 group md:col-span-2 xl:col-span-1 xl:row-span-1 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  History
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-2.5 bg-black/20 w-full">
                  <h2 className="text-xl font-semibold 5 text-white">
                  सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      David Paul Limbu
                    </span>
                  </p>
                  <a
                    href="/"
                    className="focus:outline-none focus:underline items-center cursor-pointer text-white hover:text-gray-200 hover:underline -mb-5 flex opacity-0 group-hover:opacity-100 group-hover:mb-0 group-hover:mt-4"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={staticImages.article3}
                className="w-full h-full object-cover"
                alt="chair"
              />
            </div>
          </div>
          <div className="cursor-pointer shadow-lg h-[260px] col-span-4 group md:col-span-2 xl:col-span-1 xl:row-span-1 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  History
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-2.5 bg-black/20 w-full">
                  <h2 className="text-xl font-semibold 5 text-white">
                    Lorem ipsum dolor sit amet consectetur.
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      David Paul Limbu
                    </span>
                  </p>
                  <a
                    href="/"
                    className="focus:outline-none focus:underline items-center cursor-pointer text-white hover:text-gray-200 hover:underline -mb-5 flex opacity-0 group-hover:opacity-100 group-hover:mb-0 group-hover:mt-4"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={staticImages.article2}
                className="w-full h-full object-cover"
                alt="wall design"
              />
            </div>
          </div>
          <div className="cursor-pointer shadow-lg h-[260px] xl:h-[545px] col-span-4 group md:col-span-2 xl:col-span-2 xl:row-span-2 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  History
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-2.5 bg-black/20 w-full">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Comparison of Past With New Era
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      David Paul Limbu
                    </span>
                  </p>
                  <a
                    href="/"
                    className="focus:outline-none focus:underline items-center cursor-pointer text-white hover:text-gray-200 hover:underline -mb-5 flex opacity-0 group-hover:opacity-100 group-hover:mb-0 group-hover:mt-4"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={staticImages.temp2}
                alt="sitting place"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="cursor-pointer shadow-lg h-[260px] xl:h-[545px] col-span-4 group md:col-span-2 xl:col-span-2 xl:row-span-2 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  History
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-2.5 bg-black/20 w-full">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Comparison of Past With New Era
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      David Paul Limbu
                    </span>
                  </p>
                  <a
                    href="/"
                    className="focus:outline-none focus:underline items-center cursor-pointer text-white hover:text-gray-200 hover:underline -mb-5 flex opacity-0 group-hover:opacity-100 group-hover:mb-0 group-hover:mt-4"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={staticImages.article4}
                alt="sitting place"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="cursor-pointer shadow-lg h-[260px] col-span-4 group md:col-span-2 xl:col-span-1 xl:row-span-1 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  History
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-2.5 bg-black/20 w-full">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Comparison of Past With New Era
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      David Paul Limbu
                    </span>
                  </p>
                  <a
                    href="/"
                    className="focus:outline-none focus:underline items-center cursor-pointer text-white hover:text-gray-200 hover:underline -mb-5 flex opacity-0 group-hover:opacity-100 group-hover:mb-0 group-hover:mt-4"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={staticImages.article2}
                className="w-full h-full object-cover"
                alt="chair"
              />
            </div>
          </div>
          <div className="cursor-pointer shadow-lg h-[260px] col-span-4 group md:col-span-2 xl:col-span-1 xl:row-span-1 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  History
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-2.5 bg-black/20 w-full">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Comparison of Past With New Era
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      David Paul Limbu
                    </span>
                  </p>
                  <a
                    href="/"
                    className="focus:outline-none focus:underline items-center cursor-pointer text-white hover:text-gray-200 hover:underline -mb-5 flex opacity-0 group-hover:opacity-100 group-hover:mb-0 group-hover:mt-4"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={staticImages.temp3}
                className="w-full h-full object-cover"
                alt="wall design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
