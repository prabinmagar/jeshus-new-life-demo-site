import staticImages from "../../utils/images";
import Title from "./Title";

const Ministries = () => {
  return (
    <section
      className="py-8 min-h-[80vh] flex items-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.ministries}) center/cover no-repeat fixed`,
      }}
    >
      <div className="container relative z-10">
        <Title
          classes={"text-white"}
          title={"our programmes"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat quod voluptatibus explicabo unde repellat corrupti delectus!"
          }
        />
        <div className="section-content mb-10 grid grid-cols-4 gap-4">
          <div className="shadow-normal shadow-dark/60">
            <div className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-dark/50 group">
              <img
                src={staticImages.ministry1}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white z-10 text-3xl font-medium group-hover:opacity-0 default-transition p-3 w-full">
                Seminars & Conferences
              </div>
              <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 translate-y-[150%] text-white z-10 default-transition group-hover:-translate-y-1/2 p-3 w-full capitalize">
                <h3 className="text-xl font-semibold capitalize">
                  Seminars & Conferences
                </h3>
                <p className="text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat, architecto.
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal shadow-dark/60">
            <div className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-dark/50 group">
              <img
                src={staticImages.ministry2}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white z-10 text-3xl font-medium group-hover:opacity-0 default-transition p-3 w-full">
                Study & Research
              </div>
              <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 translate-y-[150%] text-white z-10 default-transition group-hover:-translate-y-1/2 p-3 w-full capitalize">
                <h3 className="text-xl font-semibold capitalize">
                  Study & Research
                </h3>
                <p className="text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat, architecto.
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal shadow-dark/60">
            <div className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-dark/50 group">
              <img
                src={staticImages.ministry3}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white z-10 text-3xl font-medium group-hover:opacity-0 default-transition p-3 w-full">
                Help & Support
              </div>
              <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 translate-y-[150%] text-white z-10 default-transition group-hover:-translate-y-1/2 p-3 w-full capitalize">
                <h3 className="text-xl font-semibold capitalize">
                Help & Support
                </h3>
                <p className="text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat, architecto.
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal shadow-dark/60">
            <div className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-dark/50 group">
              <img
                src={staticImages.ministry4}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white z-10 text-3xl font-medium group-hover:opacity-0 default-transition p-3 w-full">
                Creativity
              </div>
              <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 translate-y-[150%] text-white z-10 default-transition group-hover:-translate-y-1/2 p-3 w-full capitalize">
                <h3 className="text-xl font-semibold capitalize">
                  Creativity
                </h3>
                <p className="text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat, architecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
