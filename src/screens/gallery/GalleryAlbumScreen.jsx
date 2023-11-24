import { Link } from "react-router-dom";
import staticImages from "../../utils/images";
import { IoMdPhotos } from "react-icons/io";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";

const GalleryAlbumScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album pb-12">
        <div className="mb-8 h-[200px] flex items-center" style={{
          background: `linear-gradient(rgba(36, 110, 185, 0.4), rgba(0, 0, 0, 0.5)), url(${staticImages.album_banner}) center/cover no-repeat fixed`
        }}>
          <div className="container">
            <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">Our Photo Albums</h2>
            <p className="text text-white drop-shadow-lg">The photo albums of all the events and celebrations.</p>
          </div>
        </div>
        <div className="container">
          <div className="section-content mb-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 grid-cols-1 gap-4 lg:gap-6">
              <Link
                to="/gallery/1"
                className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up"
              >
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery1}
                  alt=""
                />
                <span className="absolute top-3 right-3 drop-shadow-lg text-white text-sm font-medium bg-dark/10 shadow-md px-2 rounded py-0.5">10 Photos</span>
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-base font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  Worship 2022, Summer
                </div>
              </Link>
              <Link
                to="/gallery/1"
                className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up"
              >
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery2}
                  alt=""
                />
                <span className="absolute top-3 right-3 drop-shadow-lg text-white text-sm font-medium bg-dark/10 shadow-md px-2 rounded py-0.5">20 Photos</span>
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-base font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  Worship 2023
                </div>
              </Link>
              <Link
                to="/gallery/1"
                className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up"
              >
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery3}
                  alt=""
                />
                <span className="absolute top-3 right-3 drop-shadow-lg text-white text-sm font-medium bg-dark/10 shadow-md px-2 rounded py-0.5">2 Photos</span>
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-base font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link
                to="/gallery/1"
                className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up"
              >
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery4}
                  alt=""
                />
                <span className="absolute top-3 right-3 drop-shadow-lg text-white text-sm font-medium bg-dark/10 shadow-md px-2 rounded py-0.5">5 Photos</span>
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-base font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link
                to="/gallery/1"
                className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up"
              >
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery5}
                  alt=""
                />
                <span className="absolute top-3 right-3 drop-shadow-lg text-white text-sm font-medium bg-dark/10 shadow-md px-2 rounded py-0.5">10 Photos</span>
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-base font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link
                to="/gallery/1"
                className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up"
              >
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery6}
                  alt=""
                />
                <span className="absolute top-3 right-3 drop-shadow-lg text-white text-sm font-medium bg-dark/10 shadow-md px-2 rounded py-0.5">12 Photos</span>
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-base font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link
                to="/gallery/1"
                className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up"
              >
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery1}
                  alt=""
                />
                <span className="absolute top-3 right-3 drop-shadow-lg text-white text-sm font-medium bg-dark/10 shadow-md px-2 rounded py-0.5">1 Photos</span>
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-base font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link
                to="/gallery/1"
                className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up"
              >
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery2}
                  alt=""
                />
                <span className="absolute top-3 right-3 drop-shadow-lg text-white text-sm font-medium bg-dark/10 shadow-md px-2 rounded py-0.5">6 Photos</span>
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-base font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryAlbumScreen;
