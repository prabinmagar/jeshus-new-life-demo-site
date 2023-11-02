import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BiChevronDown } from "react-icons/bi";
import staticImages from "../../utils/images";
import { Link } from "react-router-dom";
import {
  BsBookHalf,
  BsFillCalendarCheckFill,
  BsFillEyeFill,
} from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";

const ArticlesScreen = () => {
  return (
    <main className="content-wrapper bg-whitesmoke/50">
      <div className="pg-article py-8">
        <div className="container grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="w-full">
            <div className="flex items-center justify-between pb-2 mb-6 border-b-[1px] border-dark/20">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                Articles To Read
              </h1>
              <Menu>
                <MenuHandler>
                  <div className="py-1 rounded text text-base font-semibold flex items-center gap-x-2 cursor-pointer">
                    <span>Latest</span>
                    <BiChevronDown size={22} />
                  </div>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="text text-base py-1">Latest</MenuItem>
                  <MenuItem className="text text-base py-1">Last Week</MenuItem>
                  <MenuItem className="text text-base py-1">Popular</MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="shadow-md rounded-lg">
                <div className="grid xl:grid-cols-[280px_auto] rounded-lg overflow-hidden">
                  <div className="relative h-[320px] xl:h-auto">
                    <img
                      src={staticImages.temp1}
                      className="w-full h-full object-cover absolute"
                    />
                  </div>
                  <div className="max-w-4xl p-6 mx-auto bg-white shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-x-4">
                        <div className="flex items-center gap-x-2.5">
                          <BsFillCalendarCheckFill
                            className="text-blue"
                            size={14}
                          />
                          <span className="font-normal text-sm text-dark/50">
                            10th Dec, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-x-2.5">
                          <BsFillEyeFill className="text-green" size={17} />
                          <span className="font-normal text-sm text-dark/50">
                            245
                          </span>
                        </div>
                      </div>
                      {/* <span
                        className="px-2 py-1 font-normal text-[13px] text-dark/70"
                      >
                        History & Archaeology
                      </span> */}
                    </div>
                    <div className="mt-2">
                      <Link
                        to="/"
                        className="text-2xl font-bold text-gray-700 hover:underline"
                      >
                        बाइडेनले भने- इजरायल-हमास युद्ध रोकिनुपर्छ
                      </Link>
                      <p className="mt-2 text">
                        अमेरिकी राष्ट्रपति जो बाइडेनले इजरायल र हमासबीचको युद्ध
                        रोकिनुपर्ने बताएका छन्। हमासले बन्धक बनाएका मानिसको
                        मुक्तिका लागि युद्ध रोकिनुपर्ने उनले बताएका हुन्।
                        मिनेसोटामा आयोजित कार्यक्रममा एक महिला...
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
                      <Link
                        to="/"
                        className="flex focus:outline-none focus:underline items-center cursor-pointer btn capitalize py-[6px] px-4 bg-red"
                      >
                        <p className="pr-2 text-base font-medium">Read More</p>
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
                      </Link>
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar"
                            className="hidden object-cover w-10 h-10 me-4 rounded-full sm:block"
                          />
                          <h1 className="font-semibold text-[15px]">
                            David Paul Limbu
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-lg">
                <div className="grid xl:grid-cols-[280px_auto] rounded-lg overflow-hidden">
                  <div className="relative h-[320px] xl:h-auto">
                    <img
                      src={staticImages.temp2}
                      className="w-full h-full object-cover absolute"
                    />
                  </div>
                  <div className="max-w-4xl p-6 mx-auto bg-white shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-x-4">
                        <div className="flex items-center gap-x-2.5">
                          <BsFillCalendarCheckFill
                            className="text-blue"
                            size={14}
                          />
                          <span className="font-normal text-sm text-dark/50">
                            10th Dec, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-x-2.5">
                          <BsFillEyeFill className="text-green" size={17} />
                          <span className="font-normal text-sm text-dark/50">
                            245
                          </span>
                        </div>
                      </div>
                      <Button className="bg-green py-1.5 px-2.5 rounded inline-flex gap-x-2 items-center">
                        {" "}
                        <FaShareAlt /> Share
                      </Button>
                    </div>
                    <div className="mt-2">
                      <Link
                        to="/"
                        className="text-2xl font-bold text-gray-700 hover:underline"
                      >
                        सञ्चारको पहुँच पुग्न नसकेको एउटा गाउँ
                      </Link>
                      <p className="mt-2 text text-np">
                        स्याङ्जा- सूचना एवम् प्रबिधिले निकै फड्को मारेको पाचौँ
                        जेनेरेसनको अवस्थामा आईपुगेको सञ्चार जगत् कुनै ठाउँ यस्ता
                        पनि छन् जहाँ सञ्चारबिहिन बन्न पुगेका छन् । त्यसैको
                        उदाहरणको रुपमा रहेको छ, स्याङजाको
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
                      <Link
                        to="/"
                        className="flex focus:outline-none focus:underline items-center cursor-pointer btn capitalize py-[6px] px-4 bg-red"
                      >
                        <p className="pr-2 text-base font-medium">
                          पुरा पढ्नुहोस्
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
                      </Link>
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar"
                            className="hidden object-cover w-10 h-10 me-4 rounded-full sm:block"
                          />
                          <h1 className="font-semibold text-[15px]">
                            डेविङ पावल लिम्बु
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-lg">
                <div className="grid xl:grid-cols-[280px_auto] rounded-lg overflow-hidden">
                  <div className="relative h-[320px] xl:h-auto">
                    <img
                      src={staticImages.temp3}
                      className="w-full h-full object-cover absolute"
                    />
                  </div>
                  <div className="max-w-4xl p-6 mx-auto bg-white shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-x-4">
                        <div className="flex items-center gap-x-2.5">
                          <BsFillCalendarCheckFill
                            className="text-blue"
                            size={14}
                          />
                          <span className="font-normal text-sm text-dark/50">
                            10th Dec, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-x-2.5">
                          <BsFillEyeFill className="text-green" size={17} />
                          <span className="font-normal text-sm text-dark/50">
                            245
                          </span>
                        </div>
                      </div>
                      {/* <span
                        className="px-2 py-1 font-normal text-[13px] text-dark/70"
                      >
                        History & Archaeology
                      </span> */}
                    </div>
                    <div className="mt-2">
                      <Link
                        to="/"
                        className="text-2xl font-bold text-gray-700 hover:underline"
                      >
                        आफ्नो इ‍च्छाअनुरूप पढ्ने कोठा यसरी सजाउनुस्
                      </Link>
                      <p className="mt-2 text">
                        पढ्ने कोठामा सकभर भोजन कहिल्यै नगर्नुस् । यदि,
                        कहिलेकाहीँ भोजन गरिहाल्नुभयो भने जुठो भाँडालाई तत्कालै
                        बाहिर लग्नुस् । अध्ययन कक्षमा जुठो भाँडा राख्दा पढाइमा
                        मन लाग्दैन । विद्यार्थीको ध्यानलाई यस्ता...
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
                      <Link
                        to="/"
                        className="flex focus:outline-none focus:underline items-center cursor-pointer btn capitalize py-[6px] px-4 bg-red"
                      >
                        <p className="pr-2 text-base font-medium">Read More</p>
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
                      </Link>
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar"
                            className="hidden object-cover w-10 h-10 me-4 rounded-full sm:block"
                          />
                          <h1 className="font-semibold text-[15px]">
                            David Paul Limbu
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-lg">
                <div className="grid xl:grid-cols-[280px_auto] rounded-lg overflow-hidden">
                  <div className="relative h-[320px] xl:h-auto">
                    <img
                      src={staticImages.article4}
                      className="w-full h-full object-cover absolute"
                    />
                  </div>
                  <div className="max-w-4xl p-6 mx-auto bg-white shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-x-4">
                        <div className="flex items-center gap-x-2.5">
                          <BsFillCalendarCheckFill
                            className="text-blue"
                            size={14}
                          />
                          <span className="font-normal text-sm text-dark/50">
                            10th Dec, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-x-2.5">
                          <BsFillEyeFill className="text-green" size={17} />
                          <span className="font-normal text-sm text-dark/50">
                            245
                          </span>
                        </div>
                      </div>
                      {/* <span
                        className="px-2 py-1 font-normal text-[13px] text-dark/70"
                      >
                        History & Archaeology
                      </span> */}
                    </div>
                    <div className="mt-2">
                      <Link
                        to="/"
                        className="text-2xl font-bold text-gray-700 hover:underline"
                      >
                        What does the natural reveal about its existence?
                      </Link>
                      <p className="mt-2 text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora expedita dicta totam aspernatur
                        doloremque. Excepturi iste iusto eos enim reprehenderit
                        nisi!
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
                      <Link
                        to="/"
                        className="flex focus:outline-none focus:underline items-center cursor-pointer btn capitalize py-[6px] px-4 bg-red"
                      >
                        <p className="pr-2 text-base font-medium">Read More</p>
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
                      </Link>
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar"
                            className="hidden object-cover w-10 h-10 me-4 rounded-full sm:block"
                          />
                          <h1 className="font-semibold text-[15px]">
                            David Paul Limbu
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid gap-6 items-start">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              <div className="">
                <h1 className="mb-4 text-xl font-bold text-gray-700">
                  Authors
                </h1>
                <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-md">
                  <ul className="-mx-4">
                    <li className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Alex John
                        </a>
                        <span className="text-sm font-light text">
                          - 23 Posts
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Jane Doe
                        </a>
                        <span className="text-sm font-light text">
                          - 52 Posts
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Lisa Way
                        </a>
                        <span className="text-sm font-light text">
                          - 73 Posts
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Steve Matt
                        </a>
                        <span className="text-sm font-light text">
                          - 245 Posts
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Khatab Wedaa
                        </a>
                        <span className="text-sm font-light text">
                          - 332 Posts
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Tags</h1>
                <div className="flex flex-col px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Study
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Spiritualism
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Archaeology
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - History
                      </a>
                    </li>
                    <li className="flex items-center mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Tribulation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="mb-4 text-xl font-bold text-gray-700">
                Recent Post
              </h1>
              <div className="flex flex-col p-6 mx-auto bg-white rounded-lg shadow-md">
                <div>
                  <span className="text-sm font-medium inline-flex items-center gap-x-2 px-2.5 py-1 bg-blue/10 text-blue rounded">
                    <BsBookHalf />
                    <span>Theoritical Studies</span>
                  </span>
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-700 hover:underline"
                  >
                    The New Age Theory impact on the socio-cultural life of
                    today.
                  </a>
                </div>
                <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar"
                      className="object-cover w-8 h-8 rounded-full"
                    />
                    <a href="#" className="mx-3 text-sm text hover:underline">
                      Alex John
                    </a>
                  </div>
                  <span className="text-sm text">Jun 1, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticlesScreen;
