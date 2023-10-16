import Title from "./Title";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../";

const Articles = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-8 bg-gray/10">
      <div className="container">
        <Title
          title={"Latest articles to read"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit aliquid quaerat. Aut, quas optio?"
          }
        />
        <div className="section-content mb-20 gap-8">
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
          >
            <div className="px-3">
              <div className="relative flex flex-col w-full xl:flex-row rounded-lg text-white bg-clip-border text-gray-700">
                <div className="relative m-0 xl:w-2/5 shrink-0 overflow-hidden rounded-xl xl:rounded-r-none rounded-b-none xl:rounded-l-xl bg-white bg-clip-border text-gray-700 xl:h-auto h-[320px]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 red-gradient xl:rounded-r-lg rounded-b-lg xl:rounded-l-none">
                  <h6 className="mb-4 block text-base font-semibold uppercase leading-relaxed tracking-normal text-white border-b-[1px] border-white pb-1 antialiased">
                    visit 2023
                  </h6>
                  <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased text-white">
                    New Reunion With The Fellow Partners
                  </h4>
                  <p className="mb-4 text text-white">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses. Yet its own business
                    model disruption is only part of the story
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 blue-gradient xl:rounded-r-lg rounded-b-lg xl:rounded-l-none">
                  <h6 className="mb-4 block text-base font-semibold uppercase leading-relaxed tracking-normal text-white border-b-[1px] border-white pb-1 antialiased">
                    visit 2023
                  </h6>
                  <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased text-white">
                    New Reunion With The Fellow Partners
                  </h4>
                  <p className="mb-4 text text-white">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses. Yet its own business
                    model disruption is only part of the story
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 red-gradient xl:rounded-r-lg rounded-b-lg xl:rounded-l-none">
                  <h6 className="mb-4 block text-base font-semibold uppercase leading-relaxed tracking-normal text-white border-b-[1px] border-white pb-1 antialiased">
                    visit 2023
                  </h6>
                  <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased text-white">
                    New Reunion With The Fellow Partners
                  </h4>
                  <p className="mb-4 text text-white">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses. Yet its own business
                    model disruption is only part of the story
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 blue-gradient xl:rounded-r-lg rounded-b-lg xl:rounded-l-none">
                  <h6 className="mb-4 block text-base font-semibold uppercase leading-relaxed tracking-normal text-white border-b-[1px] border-white pb-1 antialiased">
                    visit 2023
                  </h6>
                  <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased text-white">
                    New Reunion With The Fellow Partners
                  </h4>
                  <p className="mb-4 text text-white">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses. Yet its own business
                    model disruption is only part of the story
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
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Articles;
