import { About, Branches, Gallery, Members, Ministries, Notices, SectionMinistry, Training } from "../../components";
import Articles from "../../components/common/Articles";

const Home = () => {
  return (
    <div>
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
