import { BaseLayout } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Articles, Home, PageNotFound, ArticleSingle } from "./screens";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/article" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleSingle />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
