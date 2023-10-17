import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import useNavbarBackground from "../../hooks/useNavbarBackground";
import { BiMenu } from "react-icons/bi";
import { Drawer, IconButton } from "@material-tailwind/react";
import { useState } from "react";

const Navbar = () => {
  // ### HEADER CHANGE ON SCROLL
  const scrollThreshold = 100;
  const hasBackground = useNavbarBackground(scrollThreshold);
  const navbarStyle = hasBackground
    ? "bg-white shadow-normal scrolled-navbar"
    : "bg-transparent";
  const [openRight, setOpenRight] = useState(false);
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
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium border-b-[1px] border-gray"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium"
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium"
              >
                events
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium"
              >
                notices
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium"
              >
                gallery
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-base capitalize py-1 block hover:opacity-80 font-inter tracking-[0.5px] font-medium"
              >
                branches
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
        className={`${navbarStyle} fixed top-0 left-0 right-0 z-[999] h-[84px] flex items-center`}
      >
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="text-white font-bold text-2xl border-[3px] border-white inline-flex items-stretch rounded navbar-brand"
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
            <ul className="items-center gap-x-4 nav-list hidden lg:flex">
              <li>
                <Link
                  to=""
                  className="text-white uppercase py-1 px-3 hover:opacity-80 font-inter tracking-[0.5px] font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-white uppercase py-1 px-3 hover:opacity-80 font-inter tracking-[0.5px] font-medium"
                >
                  events
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-white uppercase py-1 px-3 hover:opacity-80 font-inter tracking-[0.5px] font-medium"
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-white uppercase py-1 px-3 hover:opacity-80 font-inter tracking-[0.5px] font-medium"
                >
                  gallery
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-white uppercase py-1 px-3 hover:opacity-80 font-inter tracking-[0.5px] font-medium"
                >
                  branches
                </Link>
              </li>
            </ul>
          </div>
          <div className="social-links hidden xl:block">
            <ul className="flex items-center gap-x-6">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
