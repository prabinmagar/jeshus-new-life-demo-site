import staticImages from "../../utils/images";
import Title from "./Title";

const Ministries = () => {
  return (
    <section className="py-8 min-h-[80vh] flex items-center">
      <div className="container relative z-10">
        <Title
          title={"our programmes"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat quod voluptatibus explicabo unde repellat corrupti delectus!"
          }
        />
        <div className="section-content mb-10 grid xl:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="shadow-normal rounded-xl">
            <div className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer group">
              <img
                src={staticImages.ministry1}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1/2 text-center bg-white -translate-x-1/2 w-[92%] py-3 px-2">
                <h3 className="text-xl font-semibold capitalize text-red mb-1">
                  Worships & Prayer
                </h3>
                <p className="text text-gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat, architecto.
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal rounded-xl">
            <div className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer group">
              <img
                src={staticImages.ministry2}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1/2 text-center bg-white -translate-x-1/2 w-[92%] py-3 px-2">
                <h3 className="text-xl font-semibold capitalize text-blue mb-1">
                  Scripture Study
                </h3>
                <p className="text text-gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat, architecto.
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal rounded-xl">
            <div className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer group">
              <img
                src={staticImages.ministry3}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1/2 text-center bg-white -translate-x-1/2 w-[92%] py-3 px-2">
                <h3 className="text-xl font-semibold capitalize text-green mb-1">
                  Conferences & Programmes
                </h3>
                <p className="text text-gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat, architecto.
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal rounded-xl">
            <div className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer group">
              <img
                src={staticImages.ministry4}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1/2 text-center bg-white -translate-x-1/2 w-[92%] py-3 px-2">
                <h3 className="text-xl font-semibold capitalize text-gray mb-1">
                  Gospel Ministry
                </h3>
                <p className="text text-gray">
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
