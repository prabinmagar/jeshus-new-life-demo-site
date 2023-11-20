import { Link } from "react-router-dom"
import staticImages from "../../utils/images"

const GalleryPhotosScreen = () => {
  return (
    <main className="content-wrapper">
      <div className="pg-gallery-album py-16 bg-gray/5">
        <div className="container">
          <div className="section-content mb-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 grid-cols-1 gap-4 lg:gap-6">
              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery1}
                  alt=""
                />
              </Link>

              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery2}
                  alt=""
                />
              </Link>

              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery3}
                  alt=""
                />
              </Link>

              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery4}
                  alt=""
                />
              </Link>

              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery5}
                  alt=""
                />
              </Link>

              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery6}
                  alt=""
                />
              </Link>

              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery1}
                  alt=""
                />
              </Link>

              <Link to="/gallery/1" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group border-8 border-white">
                <img
                  className="h-full w-full object-cover group-hover:scale-110 default-transition"
                  src={staticImages.gallery2}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default GalleryPhotosScreen
