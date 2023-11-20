import { Link } from "react-router-dom";
import staticImages from "../../utils/images";
import { IoMdPhotos } from "react-icons/io";

const GalleryAlbumScreen = () => {
  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album py-16">
        <div className="container">
          <div className="section-content mb-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 grid-cols-1 gap-4 lg:gap-6">
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery1}
                  alt=""
                />
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery2}
                  alt=""
                />
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery3}
                  alt=""
                />
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery4}
                  alt=""
                />
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery5}
                  alt=""
                />
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery6}
                  alt=""
                />
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery1}
                  alt=""
                />
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                  current events
                </div>
              </Link>
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery2}
                  alt=""
                />
                <div className="w-[48px] h-[48px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 default-transition group-hover:rotate-[360deg] shadow-lg">
                  <IoMdPhotos size={28} />
                </div>
                <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
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
