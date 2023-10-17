import staticImages from "../../utils/images";
import Title from "./Title";

const Members = () => {
  return (
    <section className="py-8">
      <div className="container">
        <Title title={"our teams"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, quod!"} />
        <div className="section-content flex justify-center gap-8">
          <div className="shadow-normal w-[320px] rounded-lg">
            <div className="block rounded-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat h-[300px]">
                <img
                  src={staticImages.member1}
                  className="w-full h-full object-cover object-top"
                />
                <svg
                  className="absolute text-white dark:text-neutral-700 left-0 -bottom-0.5 scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#246EB9"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="px-6 py-2 bg-blue text-white">
                <h5 className="text-lg font-bold">Luther Smith</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                Director of the company
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal w-[320px] rounded-lg">
            <div className="block rounded-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat h-[300px]">
                <img
                  src={staticImages.member2}
                  className="w-full h-full object-cover object-top"
                />
                <svg
                  className="absolute text-white dark:text-neutral-700 left-0 -bottom-0.5 scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#B31901"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="px-6 py-2 bg-red text-white">
                <h5 className="text-lg font-bold">Luther Smith</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                Director of the company
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal w-[320px] rounded-lg">
            <div className="block rounded-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat h-[300px]">
                <img
                  src={staticImages.member3}
                  className="w-full h-full object-cover object-top"
                />
                <svg
                  className="absolute text-white dark:text-neutral-700 left-0 -bottom-0.5 scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#246EB9"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="px-6 py-2 bg-blue text-white">
                <h5 className="text-lg font-bold">Luther Smith</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                Director of the company
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-normal w-[320px] rounded-lg">
            <div className="block rounded-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat h-[300px]">
                <img
                  src={staticImages.member4}
                  className="w-full h-full object-cover object-top"
                />
                <svg
                  className="absolute text-white dark:text-neutral-700 left-0 -bottom-0.5 scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#B31901"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="px-6 py-2 bg-red text-white">
                <h5 className="text-lg font-bold">Luther Smith</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                Director of the company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
