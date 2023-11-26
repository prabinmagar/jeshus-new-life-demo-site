import {
  FaEnvelope,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-whitesmoke" id="map">
      <div className="container">
        <div className="footer-content py-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="uppercase font-bold text-3xl sm:text-start text-center mb-4">
              Yeshua New Life
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.2272254576922!2d85.30913120182586!3d27.67563198695175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1984019cf53f%3A0x2951eca0301687e8!2sYeshua%20new%20life!5e0!3m2!1sen!2snp!4v1700392781764!5m2!1sen!2snp"
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
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
                      Lamachaur Marg, Lalitpur
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
