import { Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import useNavbarBackground from "../../hooks/useNavbarBackground";
import { BiMenu } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";
import {
  Drawer,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const location = useLocation();
  // ### HEADER CHANGE ON SCROLL
  const scrollThreshold = 100;
  const hasBackground = useNavbarBackground(scrollThreshold);
  const navbarStyle = hasBackground
    ? "bg-white shadow-normal scrolled-navbar h-[72px]"
    : "bg-transparent h-[84px]";

  const [openRight, setOpenRight] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [openMenu4, setOpenMenu4] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 sidebar-drawer"
      >
        <div className="mb-6 flex items-center justify-between">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#000"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="grid gap-y-6">
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium border-b-[1px] border-gray outline-none"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium outline-none"
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium outline-none"
              >
                Missionary
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium outline-none"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium outline-none"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium outline-none"
              >
                Articles
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-x-4">
            <li>
              <Link
                to=""
                className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded bg-blue"
              >
                <FaFacebookSquare size={24} />
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded bg-green"
              >
                <FaEnvelope size={24} />
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded bg-red"
              >
                <TbBrandYoutubeFilled size={27} className="me-[1px]" />
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>

      <nav
        className={`${navbarStyle} ${
          location.pathname !== "/" && "non-index-navbar default-transition"
        } fixed top-0 left-0 right-0 z-[999] flex items-center`}
      >
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="text-white font-bold text-xl border-[3px] border-white inline-flex items-stretch rounded navbar-brand"
          >
            <span className="bg-white px-3 py-2 text-dark">Yeshua</span>{" "}
            <span className="px-3 py-2 ">New Life</span>
          </Link>
          <button
            onClick={openDrawerRight}
            type="button"
            className="text-white lg:hidden ms-auto navbar-open-btn"
          >
            <BiMenu size={36} />
          </button>
          <div>
            <ul className="items-center gap-x-3 nav-list hidden lg:flex">
              <li>
                <Menu
                  placement="top-end"
                  open={openMenu3}
                  handler={setOpenMenu3}
                  allowHover
                >
                  <MenuHandler>
                    <Link className="text-white capitalize py-1 xl:mx-3 mx-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium flex items-center gap-x-2 outline-none">
                      <span>About</span>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                          openMenu3 ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </MenuHandler>
                  <MenuList className="hidden min-w-[auto] w-12rem grid-cols-7 lg:grid p-0 m-0  border-none bg-white">
                    <ul className="col-span-7 flex w-full flex-col gap-1 py-2 outline-none border-0">
                      <Link
                        to="/about"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-3"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Who we are
                          </h4>
                        </div>
                      </Link>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Our beliefs
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Leadership
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Ministries
                          </h4>
                        </div>
                      </MenuItem>
                    </ul>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Menu
                  placement="top-end"
                  open={openMenu}
                  handler={setOpenMenu}
                  allowHover
                >
                  <MenuHandler>
                    <Link className="text-white capitalize py-1 xl:mx-3 mx-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium flex items-center gap-x-2 outline-none">
                      <span>Locations</span>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                          openMenu ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </MenuHandler>
                  <MenuList className="hidden w-[10rem] grid-cols-7 lg:grid p-0 m-0  border-none">
                    <ul className="col-span-7 flex w-full flex-col gap-1 py-2 outline-none border-0">
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Lamachour Marg, Jhamsikhel, Lalitpur
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Damak, Jhapa
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Surunga, Jhapa
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Birtamod, Jhapa
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">
                            Urlabari, Morang
                          </h4>
                        </div>
                      </MenuItem>
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text-sm font-medium text">See ALL</h4>
                        </div>
                      </MenuItem>
                    </ul>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Menu
                  placement="top-end"
                  open={openMenu2}
                  handler={setOpenMenu2}
                  allowHover
                >
                  <MenuHandler>
                    <Link className="text-white capitalize py-1 xl:mx-3 mx-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium flex items-center gap-x-2 outline-none">
                      <span>Services</span>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                          openMenu2 ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </MenuHandler>
                  <MenuList className="hidden min-w-[auto] w-12rem grid-cols-7 lg:grid p-0 m-0  border-none bg-white">
                    <ul className="col-span-7 flex w-full flex-col gap-1 py-2 outline-none border-0">
                      <MenuItem className="w-full hover:bg-transparent active:bg-transparent py-0">
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">
                            Worship Service
                          </h4>
                        </div>
                      </MenuItem>
                      <Link
                        to="/event"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-3"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">Events</h4>
                        </div>
                      </Link>
                      <Link
                        to="/request"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-3"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">
                            Prayer Request
                          </h4>
                        </div>
                      </Link>
                    </ul>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Menu
                  placement="top-end"
                  open={openMenu4}
                  handler={setOpenMenu4}
                  allowHover
                >
                  <MenuHandler>
                    <Link className="text-white capitalize py-1 xl:mx-3 mx-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium flex items-center gap-x-2 outline-none">
                      <span>Media</span>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                          openMenu4 ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </MenuHandler>
                  <MenuList className="hidden min-w-[auto] w-12rem grid-cols-7 lg:grid p-0 m-0 border-none bg-white">
                    <ul className="col-span-7 flex w-full flex-col gap-1 py-2 outline-none border-0">
                      <Link
                        to="/gallery"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-3"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">Photos</h4>
                        </div>
                      </Link>
                      <Link
                        to="/media"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-3"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">Sermons</h4>
                        </div>
                      </Link>
                      <Link
                        to="/media"
                        className="w-full hover:bg-transparent active:bg-transparent py-0 px-3"
                      >
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">
                            Testimonials
                          </h4>
                        </div>
                      </Link>
                      <Link to="/watch" className="w-full hover:bg-transparent active:bg-transparent py-0 px-3">
                        <div className="px-1 py-1">
                          <h4 className="text text-sm font-medium">
                            Watch Live
                          </h4>
                        </div>
                      </Link>
                    </ul>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Link
                  to="/event"
                  className="text-white capitalize py-1 xl:px-3 px-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/article"
                  className="text-white capitalize py-1 xl:px-3 px-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-white capitalize py-1 xl:px-3 px-2 hover:opacity-80 font-inter tracking-[0.5px] font-medium inline-flex items-center gap-x-2"
                >
                  <span>Contribute</span>
                  <FaHandHoldingHeart />
                </Link>
              </li>
            </ul>
          </div>
          <div className="social-links hidden xxl:block">
            <ul className="flex items-center gap-x-4">
              <li>
                <Link
                  to=""
                  className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full bg-blue group"
                >
                  <FaFacebookSquare
                    size={20}
                    className="group-hover:scale-90 default-transition"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full bg-green group"
                >
                  <FaEnvelope
                    size={20}
                    className="group-hover:scale-90 default-transition"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-white w-[38px] h-[36px] shadow-md inline-flex items-center justify-center rounded-full bg-red group"
                >
                  <TbBrandYoutubeFilled
                    size={23}
                    className="me-[1px] group-hover:scale-90 default-transition"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
