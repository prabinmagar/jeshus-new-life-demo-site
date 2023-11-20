import { BsBookFill } from "react-icons/bs";
import Title from "./Title";
import { AiFillHeart } from "react-icons/ai";
import staticImages from "../../utils/images";
import { Link } from "react-router-dom";

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

        {/* <div className="grid grid-cols-4 grid-rows-3 gap-4">
          <div className="cursor-pointer shadow-lg h-[260px] col-span-4 group md:col-span-2 xl:col-span-1 xl:row-span-1 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  इतिहास
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-3 bg-black/30 w-full">
                  <h2 className="text-lg font-semibold text-white">
                    सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
                  </h2>
                  <div className="focus:outline-none focus:underline items-center cursor-pointer text-white -mb-10 flex justify-between opacity-0 group-hover:opacity-100 group-hover:mb-0 default-transition group-hover:mt-4">
                    <p className="text-sm leading-4 text-white flex items-center gap-x-2">
                      <div className="flex-shrink-0 flex">
                        <img
                          className="h-8 w-8 border-2 border-white rounded-full"
                          src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        />
                      </div>
                      <span className="italic font-semibold">
                        डेविङ पावल लिम्बु
                      </span>
                    </p>

                    <div className="flex">
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
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={staticImages.temp1}
                className="w-full h-full object-cover"
                alt="chair"
              />
            </div>
          </div>
          <div className="cursor-pointer shadow-lg h-[260px] col-span-4 group md:col-span-2 xl:col-span-1 xl:row-span-1 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  इतिहास
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-3 bg-black/30 w-full">
                  <h2 className="text-lg font-semibold text-white">
                    आफ्नो इ‍च्छाअनुरूप पढ्ने कोठा यसरी सजाउनुस्
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
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
          <div className="cursor-pointer shadow-lg h-[260px] xl:h-[540px] col-span-4 group md:col-span-2 xl:col-span-2 xl:row-span-2 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  इतिहास
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-3 bg-black/30 w-full">
                  <h2 className="text-lg font-semibold text-white">
                    एकीकृत विकास कार्ययोजना बनाउँदै काभ्रेपलाञ्चोकका चार स्थानीय
                    तह
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
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
          <div className="cursor-pointer shadow-lg h-[260px] xl:h-[540px] col-span-4 group md:col-span-2 xl:col-span-2 xl:row-span-2 rounded-lg overflow-hidden">
            <div className="relative h-full">
              <div>
                <p className="px-4 py-2 rounded uppercase text-sm font-medium leading-3 text-white absolute top-3 right-3 bg-red">
                  इतिहास
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-3 bg-black/30 w-full">
                  <h2 className="text-lg font-semibold text-white">
                    नयाँ स्मार्टवाच र इयरबड ल्याउँदै अल्टिमा, सार्वजनिक हुने
                    बित्तिकै खरिद गर्दा २ हजार छुट
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
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
                  इतिहास
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-3 bg-black/30 w-full">
                  <h2 className="text-lg font-semibold text-white">
                    खाना पुग्ने अन्न पाएपछि कुमाल परिवार खुशी
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
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
                  इतिहास
                </p>
                <div className="absolute bottom-0 left-0 px-5 pb-5 pt-3 bg-black/30 w-full">
                  <h2 className="text-lg font-semibold text-white">
                    निर्वाचन शिक्षा स्वयंसेवकमा वैदेशिक रोजगारीबाट फर्किएकालाई
                    प्राथमिकता
                  </h2>
                  <p className="text-sm leading-4 text-white mt-2">
                    By{" "}
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
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
        </div> */}

        <div className="grid xxl:grid-cols-2 gap-4">
          <div className="relative flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 border border-white bg-white">
            <div className="relative w-full md:w-1/3 bg-white grid place-items-center h-[320px] lg:h-auto">
              <img
                src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="tailwind logo"
                className="rounded-xl w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full md:w-2/3 red-gradient rounded-lg flex flex-col px-5 py-6 text-white">
              <div className="flex justify-between item-center mb-5">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <BsBookFill />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  इतिहास तथा भूगोल
                </div>
              </div>
              <h3 className="font-bold text-gray-800 md:text-2xl text-xl">
                सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
              </h3>
              <div className="my-5">
                <p className="text-base text text-white">
                  स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                  जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि
                  छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा
                  रहेको छ, स्याङजाको ...
                </p>
              </div>
              <div className="flex items-end justify-between gap-x-3 flex-wrap mt-2">
                <div className="text-sm leading-4 text-white flex items-center gap-x-3">
                  <div className="flex-shrink-0 flex">
                    <img
                      className="h-10 w-10 border-2 object-cover border-white rounded-full"
                      src={staticImages.member1}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
                    </span>
                    <span className="text-[13px]">Jan 4, 2023</span>
                  </div>
                </div>
                <Link
                  to="/article"
                  className="btn capitalize bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark py-1 px-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 border border-white bg-white">
            <div className="relative w-full md:w-1/3 bg-white grid place-items-center h-[320px] lg:h-auto">
              <img
                src={staticImages.temp1}
                alt="tailwind logo"
                className="rounded-xl w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full md:w-2/3 blue-gradient rounded-lg flex flex-col px-5 py-6 text-white">
              <div className="flex justify-between item-center mb-5">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <BsBookFill />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  इतिहास तथा भूगोल
                </div>
              </div>
              <h3 className="font-bold text-gray-800 md:text-2xl text-xl">
                सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
              </h3>
              <div className="my-5">
                <p className="text-base text text-white">
                  स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                  जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि
                  छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा
                  रहेको छ, स्याङजाको ...
                </p>
              </div>
              <div className="flex items-end justify-between gap-x-3 flex-wrap mt-2">
                <div className="text-sm leading-4 text-white flex items-center gap-x-3">
                  <div className="flex-shrink-0 flex">
                    <img
                      className="h-10 w-10 border-2 object-cover border-white rounded-full"
                      src={staticImages.member1}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
                    </span>
                    <span className="text-[13px]">Jan 4, 2023</span>
                  </div>
                </div>
                <Link
                  to="/article"
                  className="btn capitalize bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark py-1 px-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 border border-white bg-white">
            <div className="relative w-full md:w-1/3 bg-white grid place-items-center h-[320px] lg:h-auto">
              <img
                src={staticImages.temp2}
                alt="tailwind logo"
                className="rounded-xl w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full md:w-2/3 red-gradient rounded-lg flex flex-col px-5 py-6 text-white">
              <div className="flex justify-between item-center mb-5">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <BsBookFill />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  इतिहास तथा भूगोल
                </div>
              </div>
              <h3 className="font-bold text-gray-800 md:text-2xl text-xl">
                सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
              </h3>
              <div className="my-5">
                <p className="text-base text text-white">
                  स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                  जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि
                  छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा
                  रहेको छ, स्याङजाको ...
                </p>
              </div>
              <div className="flex items-end justify-between gap-x-3 flex-wrap mt-2">
                <div className="text-sm leading-4 text-white flex items-center gap-x-3">
                  <div className="flex-shrink-0 flex">
                    <img
                      className="h-10 w-10 border-2 object-cover border-white rounded-full"
                      src={staticImages.member1}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
                    </span>
                    <span className="text-[13px]">Jan 4, 2023</span>
                  </div>
                </div>
                <Link
                  to="/article"
                  className="btn capitalize bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark py-1 px-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 border border-white bg-white">
            <div className="relative w-full md:w-1/3 bg-white grid place-items-center h-[320px] lg:h-auto">
              <img
                src={staticImages.temp1}
                alt="tailwind logo"
                className="rounded-xl w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full md:w-2/3 blue-gradient rounded-lg flex flex-col px-5 py-6 text-white">
              <div className="flex justify-between item-center mb-5">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <BsBookFill />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart />
                    <p className="text-gray-600 font-medium text-sm">4,485</p>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  इतिहास तथा भूगोल
                </div>
              </div>
              <h3 className="font-bold text-gray-800 md:text-2xl text-xl">
                Every Next Level of Your Life Will Demand a Different You
              </h3>
              <div className="my-5">
                <p className="text-base text text-white">
                  स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                  जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता पनि
                  छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको उदाहरणको रुपमा
                  रहेको छ, स्याङजाको ...
                </p>
              </div>
              <div className="flex items-end justify-between gap-x-3 flex-wrap mt-2">
                <div className="text-sm leading-4 text-white flex items-center gap-x-3">
                  <div className="flex-shrink-0 flex">
                    <img
                      className="h-10 w-10 border-2 object-cover border-white rounded-full"
                      src={staticImages.member1}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="italic font-semibold">
                      डेविङ पावल लिम्बु
                    </span>
                    <span className="text-[13px]">Jan 4, 2023</span>
                  </div>
                </div>
                <Link
                  to="/article"
                  className="btn capitalize bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark py-1 px-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <Link
            to="/article"
            className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-base font-medium text-gray-500 hover:bg-red hover:text-white hover:border-white"
            href="/archive"
          >
            <span>See All Articles</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;
