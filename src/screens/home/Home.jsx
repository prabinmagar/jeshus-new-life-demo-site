import { Gallery, Ministries, SectionMinistry, Training } from "../../components";
import Articles from "../../components/common/Articles";

const Home = () => {
  return (
    <div>
      <SectionMinistry />
      <Ministries />
      <Gallery />
      <Articles />
      <Training />
    </div>
  );
};

export default Home;
