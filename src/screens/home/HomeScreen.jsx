import { useEffect } from "react";
import { About, Banner, Branches, Events, Gallery, Intro, Members, Ministries, Notices, Training } from "../../components";
import Articles from "../../components/common/Articles";
import { scrollToTop } from "../../utils/scrollToTop";

const Home = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <div>
      <Banner />
      <Intro />
      <About />
      <Events />
      <Ministries />
      <Gallery />
      <Articles />
      <Members />
    </div>
  );
};

export default Home;
