import { About, Banner, Branches, Events, Gallery, Intro, Members, Ministries, Notices, Training } from "../../components";
import Articles from "../../components/common/Articles";

const Home = () => {
  return (
    <div>
      <Banner />
      <Intro />
      <About />
      <Events />
      <Ministries />
      <Gallery />
      <Articles />
      {/* <Training /> */}
      {/* <Branches /> */}
      <Members />
      {/* <Notices /> */}
    </div>
  );
};

export default Home;
