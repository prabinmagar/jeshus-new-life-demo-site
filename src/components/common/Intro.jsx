import staticImages from "../../utils/images";

const Intro = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="block rounded-lg bg-white shadow-normal">
          <div className="grid lg:grid-cols-[auto_400px] xl:grid-cols-[auto_600px] xxl:grid-cols-[auto_720px]">
            <div className="p-6 lg:self-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold">
                  About Yeshua New Life
                </h2>
                <p className="text mb-3 text-justify">
                  Welcome to Yeshua New Life Church, a vibrant and thriving
                  Pentecostal congregation nestled in the heart of Nepal. With a
                  profound commitment to faith and spirituality, our church is a
                  welcoming haven for believers from all walks of life. Rooted
                  in the rich tradition of Pentecostalism, we serve as a source
                  of spiritual growth and community for the diverse population
                  of Nepal.{" "}
                </p>
                <p className="text mb-3 text-justify">
                  At Yeshua New Life Church, we are dedicated to fostering a
                  holistic Christian experience, offering an array of
                  ministries, including worship, prayer, gospel outreach, and a
                  variety of programs that enrich the lives of our members and
                  the communities we serve. Our mission is to spread the
                  teachings of Jesus Christ and nurture a deep and abiding faith
                  among the faithful in Nepal. Join us on this spiritual
                  journey, and discover the transformative power of Yeshua in
                  your life.
                </p>
              </div>
            </div>
            <div className="p-5 h-[400px] md:h-[500px]">
              <img
                src={staticImages.intro}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
