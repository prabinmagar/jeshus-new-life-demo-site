import {
  FaEnvelope,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-whitesmoke">
      <div className="container">
        <div className="footer-content py-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="uppercase font-bold text-3xl sm:text-start text-center">Yeshua New Life</div>
            <p className="text mt-4 max-w-[400px] mx-auto sm:ms-0 sm:text-start text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
            <div className="social-links">
              <ul className="flex items-center justify-center sm:justify-start gap-x-4 mt-6">
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

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg text-dark uppercase font-semibold">
              The Yeshua Church
              </p>
              <ul className="mt-4 space-y-4 font-normal">
                <li>
                  <a className="text-gray hover:text-dark" href="/">
                  Our beliefs
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-dark" href="/">
                    Mission & Vision
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-dark" href="/">
                    Pastors, Elders & Deacons
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-dark" href="/">
                    About Church
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg text-dark uppercase font-semibold">
                Ministries
              </p>
              <ul className="mt-4 space-y-4 font-normal">
                <li>
                  <a className="text-gray hover:text-dark" href="/">
                    Events
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-dark" href="/">
                    Branches
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-dark" href="/">
                    Notices
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-dark" href="/">
                    Trainings
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg text-dark uppercase font-semibold">
                Contact Us
              </p>
              <ul className="mt-4 space-y-4 font-normal flex items-center flex-col sm:items-start">
                <li>
                  <a
                    className="flex items-center justify-center gap-x-4"
                    href="/"
                  >
                    <FaEnvelope />
                    <span className="flex-1 text-gray hover:text-dark">
                      yeshuanewlife.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-x-4"
                    href="/"
                  >
                    <FaPhone />
                    <span className="flex-1 text-gray hover:text-dark">
                      +977 987700562200
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-x-4"
                    href="/"
                  >
                    <FaMapMarkerAlt />
                    <address className="flex-1 text-gray hover:text-dark not-italic">
                      213 Lane, London, United Kingdom
                    </address>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg text-dark uppercase font-semibold">
                Our Fellowship
              </p>
              <ul className="mt-4 space-y-4 font-normal">
                <li>
                  <span className="text-gray hover:text-dark" href="/">
                    Saturday: 10AM - 1PM
                  </span>
                </li>
                <li>
                  <span className="text-gray hover:text-dark" href="/">
                    Wendesday: 6PM - 7PM
                  </span>
                </li>
                <li>
                  <span className="text-gray hover:text-dark" href="/">
                    &copy; Yeshua New Life
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
