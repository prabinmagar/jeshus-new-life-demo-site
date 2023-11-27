import { Link } from "react-router-dom";
import staticImages from "../../utils/images";
import { Button } from "@material-tailwind/react";
import { FaShareAlt } from "react-icons/fa";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { BsFillEyeFill } from "react-icons/bs";

const ArticleSingleScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <main className="content-wrapper">
      <div className="pg-article py-8">
        <div className="container">
          <div className="px-4 pt-4 grid lg:grid-cols-[2fr_1fr] gap-12">
            <div className="max-w-4xl">
              <Link
                to="/"
                className="inline-flex items-center gap-x-1.5 text-base text text-dark decoration-2 font-semibold mb-6"
                href="#"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                Back to Articles
              </Link>
              <div className="flex justify-between items-center mb-6">
                <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3 border-y-[1px] border-dashed border-gray/40 py-4">
                  <div className="grow">
                    <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center gap-5">
                      <address className="flex items-center not-italic">
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                          <div className="w-14 h-14 mr-4">
                            <img
                              className="w-full h-full object-cover object-top rounded-full"
                              src={staticImages.member1}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col">
                            <a
                              href="#"
                              rel="author"
                              className="text-[18px] font-bold text-gray-900 dark:text-white mb-1"
                            >
                              David Paul Limbu
                            </a>
                            <div className="inline-flex items-center">
                              <p className="text-[14px] text">Feb. 8, 2022</p>
                              <p className="w-[5px] mx-2 h-[5px] inline-block rounded-full bg-gray/50"></p>
                              <p className="text-[14px] text">5 min read</p>
                            </div>
                          </div>
                        </div>
                      </address>
                      <Button className="bg-green py-1.5 px-2.5 rounded inline-flex gap-x-2 items-center">
                        {" "}
                        <FaShareAlt /> Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl font-lora">
                    स्वास्थ्यको लागि घातक छन् यी फुड कम्बिनेशन
                  </h2>
                  {/* content stylings */}
                  <div className="content-stylings mt-6">
                    <p>
                      काठमाडौँ । हामी दिनहुँ अनेकौँ खानेकुरा खान्छौँ । सँगसँगै
                      खाँदा केही खानेकुरा हाम्रो शरीरका लागि लाभदायक पनि हुन्छन्
                      । जस्तै भिटामिड डी र क्याल्सियम, आइरन र भिटामिन सी आदि ।
                    </p>
                    <p>
                      तर केही फुड कम्बिनेशन भने यस्तो घातक हुन्छन् कि हाम्रो
                      स्वास्थ्यमा नराम्रो असर पनि पार्न सक्छ, क्षति पुर्याउन
                      सक्छ । यस्ता खानेकुरा खाँदा कहिलेकाहीँ पाचनमा समस्या, पेट
                      फुल्ने, अपच जस्ता समस्या देखिन सक्छन् । हाम्रो लागि घातक
                      यस्तै केही फुड कम्बिनेशनबारे कुरा गरौँ ।
                    </p>
                    <h3>अमिलो खानेकुराको साथमा दूध</h3>
                    <p>
                      सुन्तला, निबुआ जस्तो फलमा एसिड हुन्छ । यी खानेकुराहरुलाई
                      दूधसँगै खाँदा पाचनसम्बन्धी समस्याहरु उत्पन्न हुन सक्छ । यी
                      दुबैलाई एकै पटक सकेसम्म नखानु होला ।
                    </p>
                    <p>
                      खाना खाने बित्तिकै फलफूल फिटिक्कै नखानुहोला । खानाबाट
                      हाम्रो शरीरले पहिला नै धेरै क्यालोरी पाइसकेको हुन्छ । यो
                      नपच्दै खाना खाने बित्तिकै फलफूल खाँदा शरीरमा क्यालोरीको
                      मात्रा बढ्छ । यति धेरै क्यालोरीलाई कसरी ‘बर्न’ गर्ने ?
                    </p>
                    <p>
                      At preline, our mission has always been focused on
                      bringing openness and transparency to the design process.
                      We've always believed that by providing a space where
                      designers can share ongoing work not only empowers them to
                      make better products, it also helps them grow.
                    </p>
                    <p>
                      We're proud to be a part of creating a more open culture
                      and to continue building a product that supports this
                      vision.
                    </p>
                    <img src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                    <p>
                      As we've grown, we've seen how Preline has helped
                      companies such as Spotify, Microsoft, Airbnb, Facebook,
                      and Intercom bring their designers closer together to
                      create amazing things. We've also learned that when the
                      culture of sharing is brought in earlier, the better teams
                      adapt and communicate with one another.
                    </p>
                    <p>
                      <a href="#">free version of Preline</a>, which will allow
                      individual designers, startups and other small teams a
                      chance to create a culture of openness early on.
                    </p>
                    <blockquote>
                      <p>
                        To say that switching to Preline has been life-changing
                        is an understatement. My business has tripled and I got
                        my life back.
                      </p>
                      <p>Nicole Grazioso</p>
                    </blockquote>

                    <img src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />

                    <h3>Bringing the culture of sharing to everyone</h3>
                    <p>
                      We know the power of sharing is real, and we want to
                      create an opportunity for everyone to try Preline and
                      explore how transformative open communication can be. Now
                      you can have a team of one or two designers and unlimited
                      spectators (think PMs, management, marketing, etc.) share
                      work and explore the design process earlier.
                    </p>
                    <ul>
                      <li>
                        Preline allows us to collaborate in real time and is a
                        really great way for leadership on the team to stay
                        <a href="#">said</a> Stewart Scott-Curran, Intercom's
                        Director of Brand Design.
                      </li>
                      <li>
                        Preline opened a new way of sharing. It's a persistent
                        way for everyone to see and absorb each other's work,
                        said David Scott, Creative Director at
                        <a href="#">Eventbrite</a>.
                      </li>
                    </ul>
                  </div>
                  {/* end of content stylin gs */}
                </div>

                <div>
                  <a
                    className="m-1 inline-flex items-center gap-1.5 py-1 text-gray px-3 rounded-full text-sm bg-gray/5 text-gray-800 hover:bg-gray hover:text-white"
                    href="#"
                  >
                    Research
                  </a>
                  <a
                    className="m-1 inline-flex items-center gap-1.5 py-1 text-gray px-3 rounded-full text-sm bg-gray/5 text-gray-800 hover:bg-gray hover:text-white"
                    href="#"
                  >
                    Information
                  </a>
                  <a
                    className="m-1 inline-flex items-center gap-1.5 py-1 text-gray px-3 rounded-full text-sm bg-gray/5 text-gray-800 hover:bg-gray hover:text-white"
                    href="#"
                  >
                    History
                  </a>
                  <a
                    className="m-1 inline-flex items-center gap-1.5 py-1 text-gray px-3 rounded-full text-sm bg-gray/5 text-gray-800 hover:bg-gray hover:text-white"
                    href="#"
                  >
                    Pragmatic
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="sticky top-0 left-0 overflow-hidden bg-whitesmoke rounded-lg">
                <h2 className="text-lg font-medium px-4 py-3 blue-gradient text-white">
                  More articles to read
                </h2>
                <div className="space-y-3 px-4 py-6 border-[1px] border-gray/10">
                  <a
                    className="group flex items-center gap-x-2 border-[1px] border-gray/10 rounded-lg p-2 hover:bg-white bg-blue/5"
                    href="#"
                  >
                    <div className="grow px-2">
                      <span className="font-medium text-base">
                        अस्ट्रेलियाविरुद्ध टी-२० सिरिज खेल्ने भारतीय टिमको घोषणा
                      </span>
                    </div>

                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                      <img
                        className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="Image Description"
                      />
                    </div>
                  </a>
                  <a
                    className="group flex items-center gap-x-2 border-[1px] border-gray/10 rounded-lg p-2 hover:bg-white bg-blue/5"
                    href="#"
                  >
                    <div className="grow px-2">
                      <span className="font-medium text-base">
                        इजरेल–हमास युद्धविराम सम्झौता नजिक
                      </span>
                    </div>

                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                      <img
                        className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="Image Description"
                      />
                    </div>
                  </a>
                  <a
                    className="group flex items-center gap-x-2 border-[1px] border-gray/10 rounded-lg p-2 hover:bg-white bg-blue/5"
                    href="#"
                  >
                    <div className="grow px-2">
                      <span className="font-medium text-base">
                        अध्यक्षसहित राष्ट्रियसभाका एक तिहाइ बिदा हुँदै, निर्वाचन
                        माघमा
                      </span>
                    </div>

                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                      <img
                        className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="Image Description"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* author card */}
            <div className="rounded-lg p-4 bg-whitesmoke/50">
              <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
                <div className="relative mt-1 lg:h-[100px] lg:w-[100px] h-[72px] w-[72px] flex-shrink-0 mb-3 lg:mb-0">
                  <Link href={`/author}`}>
                    <img
                      src={staticImages.member1}
                      className="rounded-full object-cover w-full h-full"
                      sizes="96px"
                    />
                  </Link>
                </div>
                <div>
                  <div className="mb-2">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 font-lora">
                      About David Paul
                    </h3>
                  </div>
                  <div className="text text-sm">
                    पास्टर डेभिड पौल लिम्बु, प्रभुको सेवा गर्दै दुई दशक अघिदेखि,
                    विनम्रतामा, एक परमेश्वरका लागि प्रेरित जीवनमा, अचल
                    आत्मसमर्पण र विश्वासयोग्यताका साथ हाम्रो चर्चलाई अगाडि
                    बढाउँदैछन्।
                  </div>
                  <div className="mt-3">
                    <Link
                      href={`/author/`}
                      className="text-sm font-normal text-blue"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of author card */}
          </div>

          <div className="fixed mt-6 bottom-6 inset-x-0 text-center">
            <div className="inline-block blue-gradient text-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
              <div className="flex items-center gap-x-1.5">
                <div className="hs-tooltip inline-block">
                  <button
                    type="button"
                    className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <BsFillEyeFill size={16} />
                    875
                    <span
                      className="hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black"
                      role="tooltip"
                    >
                      Like
                    </span>
                  </button>
                </div>

                <div className="block h-3 border-r border-gray-300 mx-3 dark:border-gray-600"></div>

                <div className="relative inline-flex">
                  <button
                    type="button"
                    className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
                      />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticleSingleScreen;
