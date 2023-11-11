import { Link } from "react-router-dom";
import staticImages from "../../utils/images";
import { Button } from "@material-tailwind/react";
import { FaShareAlt } from "react-icons/fa";

const ArticleSingleScreen = () => {
  return (
    <main className="content-wrapper">
      <div className="pg-article py-8">
        <div className="container">
          <div className="px-4 pt-10 grid lg:grid-cols-[2fr_1fr] gap-12">
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
                          <img
                            className="mr-4 w-14 h-14 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="Jese Leos"
                          />
                          <div className="flex flex-col">
                            <a
                              href="#"
                              rel="author"
                              className="text-[18px] font-bold text-gray-900 dark:text-white mb-1"
                            >
                              Jese Leos
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
                  <h2 className="text-2xl font-bold md:text-3xl">
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
              <div className="sticky top-0 left-0 py-8 lg:pl-4">
                <h2 className="text-lg text-dark font-medium mb-4">
                  More articles to read
                </h2>
                <div className="space-y-3">
                  <a
                    className="group flex items-center gap-x-6 border-[1px] border-gray/10 rounded-lg p-2"
                    href="#"
                  >
                    <div className="grow">
                      <span className="font-medium text-base">
                        5 Reasons to Not start a UX Designer Career in 2022/2023
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
                    className="group flex items-center gap-x-6 border-[1px] border-gray/10 rounded-lg p-2"
                    href="#"
                  >
                    <div className="grow">
                      <span className="font-medium text-base">
                        If your UX Portfolio has this 20% Well Done, it Will
                        Give You an 80% Result
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
                    className="group flex items-center gap-x-6 border-[1px] border-gray/10 rounded-lg p-2"
                    href="#"
                  >
                    <div className="grow">
                      <span className="font-medium text-base">
                        7 Principles of Icon Design
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
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                      About David Paul
                    </h3>
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio ad, quaerat labore sunt aut cum adipisci et earum
                    reprehenderit alias.
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

          <div className="sticky bottom-6 inset-x-0 text-center">
            <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
              <div className="flex items-center gap-x-1.5">
                <div className="hs-tooltip inline-block">
                  <button
                    type="button"
                    className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    875
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black"
                      role="tooltip"
                    >
                      Like
                    </span>
                  </button>
                </div>

                <div className="block h-3 border-r border-gray-300 mx-3 dark:border-gray-600"></div>

                <div className="hs-tooltip inline-block">
                  <button
                    type="button"
                    className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    </svg>
                    16
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black"
                      role="tooltip"
                    >
                      Comment
                    </span>
                  </button>
                </div>

                <div className="block h-3 border-r border-gray-300 mx-3 dark:border-gray-600"></div>

                <div className="hs-dropdown relative inline-flex">
                  <button
                    type="button"
                    id="blog-article-share-dropdown"
                    className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
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
                        fill-rule="evenodd"
                        d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
                      />
                    </svg>
                    Share
                  </button>
                  <div
                    className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-black"
                    aria-labelledby="blog-article-share-dropdown"
                  >
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      href="#"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      Copy link
                    </a>
                    <div className="border-t border-gray-600 my-2"></div>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      href="#"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                      Share on Twitter
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      href="#"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      Share on Facebook
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      href="#"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                      Share on LinkedIn
                    </a>
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

export default ArticleSingleScreen;
