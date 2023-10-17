import staticImages from "../../utils/images";
import Title from "./Title";

const About = () => {
  return (
    <section
      className="py-20 bg-black/95"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.about_banner}) no-repeat fixed`,
        backgroundPosition: "top center",
        backgroundSize: "center",
      }}
    >
      <div className="container">
        {/* <Title /> */}
        <div className="section-content">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 z-10 lg:py-12">
              <div className="flex h-full lg:-mr-10 rounded-lg overflow-hidden max-h-[500px]">
                <img
                  src={staticImages.about}
                  className="w-full h-full object-cover object-top"
                  alt="image"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 bg-white text-dark rounded-lg">
              <div className="flex h-full items-center rounded-lg bg-primary p-6 text-center lg:pl-12 lg:text-left min-h-[400px]">
                <div className="lg:pl-12">
                  <h2 className="mb-6 text-3xl font-bold">
                    Our Pastor - David Paul Limbu
                  </h2>
                  <p className="text text-gray pb-3">
                  Pastor David Paul Limbu is a dedicated and passionate spiritual leader at our vibrant and faith-driven church community. With a profound commitment to serving and guiding our congregation, Pastor David brings a wealth of experience and wisdom to our spiritual journey. He is known for his inspiring sermons, heartfelt prayers, and unwavering dedication to spreading the message of love, hope, and faith. 
                  </p>
                  <p className="text">Pastor David's leadership has been instrumental in nurturing the spiritual growth of our church family and fostering a sense of togetherness. His warm and welcoming demeanor, combined with his profound understanding of the scriptures, make him a cherished figure within our congregation. Under Pastor David's guidance, we continue to embrace the Holy Spirit's presence in our lives, allowing our faith to flourish and our community to thrive. We are truly blessed to have Pastor David Paul Limbu as our spiritual shepherd, leading us on a path of spiritual growth, unity, and grace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
