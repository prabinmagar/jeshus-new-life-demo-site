import { About, Branches, Gallery, Intro, Members, Ministries, Notices, SectionMinistry, Training } from "../../components";
import Articles from "../../components/common/Articles";

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <SectionMinistry />
      <Ministries />
      <Gallery />
      <Articles />
      <Training />
      {/* <Branches /> */}
      <Members />
      {/* <Notices /> */}
    </div>
  );
};

export default Home;
