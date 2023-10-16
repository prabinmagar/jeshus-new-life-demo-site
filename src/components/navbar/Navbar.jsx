import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import useNavbarBackground from "../../hooks/useNavbarBackground";

const Navbar = () => {
  // ### HEADER CHANGE ON SCROLL
  const scrollThreshold = 100;
  const hasBackground = useNavbarBackground(scrollThreshold);
  const navbarStyle = hasBackground ? "bg-white shadow-normal scrolled-navbar" : "bg-transparent";

  return (
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
        <div>
          <ul className="flex items-center gap-x-4 nav-list">
            <li>
              <Link
                to=""
                className="text-white uppercase py-1 px-3 hover:opacity-80 font-inter tracking-[0.5px] font-medium"
              >
                we we are
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
                location
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
        <div className="social-links">
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
  );
};

export default Navbar;
