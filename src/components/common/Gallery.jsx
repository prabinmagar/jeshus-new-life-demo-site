import { Link } from "react-router-dom";
import staticImages from "../../utils/images";
import Title from "./Title";

const Gallery = () => {
  return (
    <section className="py-8 bg-whitesmoke/50">
      <div className="container">
        <Title
          title={"our gallery"}
          description={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ad esse sunt est corporis error ipsam consequuntur dicta."
          }
        />
        <div className="section-content mb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-6">
            <Link to="/gallery" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up">
              <img
                className="h-full w-full object-cover group-hover:scale-110 default-transition"
                src={staticImages.gallery1}
                alt=""
              />
              <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                current events
              </div>
            </Link>
            <Link to="/gallery" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up">
              <img
                className="h-full w-full object-cover group-hover:scale-110 default-transition"
                src={staticImages.gallery2}
                alt=""
              />
              <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                current events
              </div>
            </Link>
            <Link to="/gallery" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up">
              <img
                className="h-full w-full object-cover group-hover:scale-110 default-transition"
                src={staticImages.gallery3}
                alt=""
              />
              <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                current events
              </div>
            </Link>
            <Link to="/gallery" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up">
              <img
                className="h-full w-full object-cover group-hover:scale-110 default-transition"
                src={staticImages.gallery4}
                alt=""
              />
              <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                current events
              </div>
            </Link>
            <Link to="/gallery" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up">
              <img
                className="h-full w-full object-cover group-hover:scale-110 default-transition"
                src={staticImages.gallery5}
                alt=""
              />
              <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                current events
              </div>
            </Link>
            <Link to="/gallery" className="h-[300px] overflow-hidden rounded-lg shadow-normal relative dark-overlay cursor-pointer group" data-aos="fade-up">
              <img
                className="h-full w-full object-cover group-hover:scale-110 default-transition"
                src={staticImages.gallery6}
                alt=""
              />
              <div className="absolute bottom-4 left-0 px-6 py-2.5 text-white z-10 uppercase text-xl font-semibold shadow-normal red-gradient -translate-x-full group-hover:translate-x-0 default-transition">
                current events
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
