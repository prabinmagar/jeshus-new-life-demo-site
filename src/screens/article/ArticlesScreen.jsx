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
  BsFillEyeFill,
} from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { FiSearch } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

const ArticlesScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <main className="content-wrapper">
      <div className="pg-article py-8 bg-white">
        <div>
          <div className="container">
            <form className="max-w-[600px] mb-10 mx-auto border-2 border-gray/10 rounded-full">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  className="block w-full px-5 py-3 text-gray rounded-full"
                  placeholder="Search your keyword here ..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 right-4 font-medium rounded-full text-base text-dark"
                >
                  <FiSearch size={24} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="w-full">
            <div className="flex items-center justify-between pb-2 mb-6 border-b-[1px] border-dark/10">
              <h1 className="text-xl font-bold text-gray-700 font-lora">
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
                  <MenuItem className="text text-[14px] py-1">Latest</MenuItem>
                  <MenuItem className="text text-[14px] py-1">
                    Last Week
                  </MenuItem>
                  <MenuItem className="text text-[14px] py-1">Popular</MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1">
              <div className="border-b-[1px] border-b-gray/20 py-6" data-aos="fade-up">
                <div className="grid xl:grid-cols-[280px_auto] overflow-hidden">
                  <div className="relative h-[320px] xl:h-auto">
                    <img
                      src={staticImages.temp1}
                      className="w-full h-full object-cover absolute"
                    />
                  </div>
                  <div className="max-w-4xl mt-4 xl:mt-0 px-6 mx-auto bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-x-6">
                        <div className="flex items-center gap-x-1.5">
                          <FaCalendarAlt 
                            className="text-blue"
                            size={12}
                          />
                          <span className="text-[13px] text-dark font-medium">
                            10th Dec, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          <BsFillEyeFill className="text-red" size={14} />
                          <span className="text-[13px] text-dark font-medium">
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
                        to="/article/1"
                        className="text-xl font-bold text-dark hover:text-red hover:underline font-lora"
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
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar"
                            className="object-cover w-8 h-8 me-3 rounded-full"
                          />
                          <h1 className="font-semibold text-sm text-[15px] text-dark">
                            David Paul Limbu
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-b-gray/20 py-6" data-aos="fade-up">
                <div className="grid xl:grid-cols-[280px_auto] overflow-hidden">
                  <div className="relative h-[320px] xl:h-auto">
                    <img
                      src={staticImages.temp2}
                      className="w-full h-full object-cover absolute"
                    />
                  </div>
                  <div className="max-w-4xl mt-4 xl:mt-0 px-6 mx-auto bg-white">
                    <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-x-6">
                        <div className="flex items-center gap-x-1.5">
                          <FaCalendarAlt 
                            className="text-blue"
                            size={12}
                          />
                          <span className="text-[13px] text-dark font-medium">
                            10th Dec, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          <BsFillEyeFill className="text-red" size={14} />
                          <span className="text-[13px] text-dark font-medium">
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
                        to="/article/1"
                        className="text-xl font-bold text-dark hover:text-red hover:underline font-lora"
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
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar"
                            className="object-cover w-8 h-8 me-3 rounded-full"
                          />
                          <h1 className="font-semibold text-sm text-[15px] text-dark">
                            डेविङ पावल लिम्बु
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-b-gray/20 py-6" data-aos="fade-up">
                <div className="grid xl:grid-cols-[280px_auto] overflow-hidden">
                  <div className="relative h-[320px] xl:h-auto">
                    <img
                      src={staticImages.temp3}
                      className="w-full h-full object-cover absolute"
                    />
                  </div>
                  <div className="max-w-4xl mt-4 xl:mt-0 px-6 mx-auto bg-white">
                    <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-x-6">
                        <div className="flex items-center gap-x-1.5">
                          <FaCalendarAlt 
                            className="text-blue"
                            size={12}
                          />
                          <span className="text-[13px] text-dark font-medium">
                            10th Dec, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          <BsFillEyeFill className="text-red" size={14} />
                          <span className="text-[13px] text-dark font-medium">
                            245
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Link
                        to="/article/1"
                        className="text-xl font-bold text-dark hover:text-red hover:underline font-lora"
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
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar"
                            className="object-cover w-8 h-8 me-3 rounded-full"
                          />
                          <h1 className="font-semibold text-sm text-[15px] text-dark">
                            David Paul Limbu
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-b-gray/20 py-6" data-aos="fade-up">
                <div className="grid xl:grid-cols-[280px_auto] overflow-hidden">
                  <div className="relative h-[320px] xl:h-auto">
                    <img
                      src={staticImages.article4}
                      className="w-full h-full object-cover absolute"
                    />
                  </div>
                  <div className="max-w-4xl mt-4 xl:mt-0 px-6 mx-auto bg-white">
                    <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-x-6">
                        <div className="flex items-center gap-x-1.5">
                          <FaCalendarAlt 
                            className="text-blue"
                            size={12}
                          />
                          <span className="text-[13px] text-dark font-medium">
                            10th Dec, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          <BsFillEyeFill className="text-red" size={14} />
                          <span className="text-[13px] text-dark font-medium">
                            245
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Link
                        to="/article/1"
                        className="text-xl font-bold text-dark hover:text-red hover:underline font-lora"
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
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="avatar"
                            className="object-cover w-8 h-8 me-3 rounded-full"
                          />
                          <h1 className="font-semibold text-sm text-[15px] text-dark">
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
              <div data-aos="fade-up">
                <h1 className="mb-4 text-xl font-bold text-gray-700 font-lora">
                  Authors
                </h1>
                <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-md">
                  <ul className="-mx-4">
                    <li className="flex items-center bg-gray/5 py-2 rounded-md">
                      <img
                        src={staticImages.member1}
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p className="flex-1 flex justify-between items-center">
                        <a
                          href="#"
                          className="font-bold text-gray-700 hover:underline"
                        >
                          David Paul Limbu
                          <span className="block text-xs font-normal">
                            Founder of YNL
                          </span>
                        </a>
                        <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                          230 Articles
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-3.5 bg-gray/5 py-2 rounded-md">
                      <img
                        src={staticImages.member2}
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p className="flex-1 flex justify-between items-center">
                        <a
                          href="#"
                          className="font-bold text-gray-700 hover:underline"
                        >
                          John Doe
                          <span className="block text-xs font-normal">
                            Co-founder of YNL
                          </span>
                        </a>
                        <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                          52 Articles
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-3.5 bg-gray/5 py-2 rounded-md">
                      <img
                        src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p className="flex-1 flex justify-between items-center">
                        <a
                          href="#"
                          className="font-bold text-gray-700 hover:underline"
                        >
                          Lisa Way
                          <span className="block text-xs font-normal">
                            Women's leader
                          </span>
                        </a>
                        <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                          73 Articles
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-3.5 bg-gray/5 py-2 rounded-md">
                      <img
                        src={staticImages.member5}
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p className="flex-1 flex justify-between items-center">
                        <a
                          href="#"
                          className="font-bold text-gray-700 hover:underline"
                        >
                          Steve Matt
                          <span className="block text-xs font-normal">
                            Teacher / Preacher
                          </span>
                        </a>
                        <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                          245 Articles
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-3.5 bg-gray/5 py-2 rounded-md">
                      <img
                        src={staticImages.member4}
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p className="flex-1 flex justify-between items-center">
                        <a
                          href="#"
                          className="font-bold text-gray-700 hover:underline"
                        >
                          Rajiv Shrestha
                          <span className="block text-xs font-normal">
                            Service Leader
                          </span>
                        </a>
                        <span className="text-xs font-light text bg-blue text-white rounded px-2 py-1 drop-shadow me-3">
                          332 Articles
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up">
                <h1 className="mb-4 text-xl font-bold text-gray-700 font-lora">
                  Popular Topics / Tags
                </h1>
                <div className="flex flex-col px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <ul className="flex flex-wrap gap-2">
                    <li>
                      <a
                        href="#"
                        className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                      >
                        Study
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                      >
                        Spiritualism
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                      >
                        Archaeology
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                      >
                        History
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-bold text-gray-700 hover:text-gray-600 hover:underline bg-gray/5 px-3 py-1 inline-flex rounded"
                      >
                        Tribulation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div data-aos="fade-up">
              <h1 className="mb-4 text-xl font-bold text-gray-700 font-lora">
                Recent Post
              </h1>
              <div className="grid gap-4">
                <div className="flex w-full flex-col p-6 mx-auto bg-white rounded-lg shadow-md">
                  <div>
                    <span className="text-sm font-medium inline-flex items-center gap-x-2 px-2.5 py-1 bg-blue/10 text-blue rounded">
                      <BsBookHalf />
                      <span>Theoritical Studies</span>
                    </span>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-base font-semibold text-gray-700 hover:underline"
                    >
                      यी ७ खाने कुरालाई कहिल्यै फ्रिजमा नराख्नुस्
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

                <div className="flex w-full flex-col p-6 mx-auto bg-white rounded-lg shadow-md">
                  <div>
                    <span className="text-sm font-medium inline-flex items-center gap-x-2 px-2.5 py-1 bg-blue/10 text-blue rounded">
                      <BsBookHalf />
                      <span>Theoritical Studies</span>
                    </span>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-base font-semibold text-gray-700 hover:underline"
                    >
                      एमबीबीएस अध्ययनका लागि राक्सिराङ गाउँपालिकाले अनुदान दिने
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
      </div>
    </main>
  );
};

export default ArticlesScreen;
