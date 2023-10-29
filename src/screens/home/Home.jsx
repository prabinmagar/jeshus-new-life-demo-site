import { About, Branches, Events, Gallery, Intro, Members, Ministries, Notices, Training } from "../../components";
import Articles from "../../components/common/Articles";

const Home = () => {
  return (
    <div>
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
