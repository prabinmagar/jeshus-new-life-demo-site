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
                  Our Vision and Beliefs
                </h2>
                <p className="text mb-3 text-justify">
                  At Yeshua New Life, we aspire to be a dynamic Pentecostal
                  community where people discover the life-changing power of
                  Jesus. We're committed to nurturing a strong, inclusive
                  fellowship that deepens their relationship with God and shares
                  the message of hope, salvation, and love with the world.
                </p>
                <h4 className="my-3 font-semibold text-lg">Our Beliefs</h4>
                <ul className="text">
                  <li className="mb-3">
                    <span className="font-semibold">Faith in Jesus Christ</span>: We believe in Jesus as the Son of
                    God, the way to salvation and eternal life through faith.
                    John 14:6
                  </li>
                  <li className="mb-3">
                    <span className="font-semibold">The Holy Spirit</span>: We embrace the active presence and work of
                    the Holy Spirit, empowering believers for service and
                    spiritual gifts. Acts 1:8
                  </li>
                  <li className="mb-3">
                    <span className="font-semibold">Worship and Praise</span>: We're committed to Spirit-led worship,
                    celebrating God's goodness, mercy, and grace. Psalm 150:6
                  </li>
                  <li className="mb-3">
                    <span className="font-semibold">Salvation by Grace</span>: Salvation is a gift of God's grace,
                    received through faith in Jesus Christ. Ephesians 2:8-9
                  </li>
                </ul>
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
