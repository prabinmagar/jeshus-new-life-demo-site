import { BaseLayout } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Articles, Home, PageNotFound, ArticleSingle, About, GalleryAlbum, GAlleryPhotos, Media, Donate, Request, Event } from "./screens";
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
            <Route path="/about" element={<About /> } />
            <Route path="/gallery" element={<GalleryAlbum /> } />
            <Route path="/gallery/:id" element={<GAlleryPhotos /> } />
            <Route path="/media" element={<Media /> } />
            <Route path="/donate" element={<Donate /> } />
            <Route path="/request" element={<Request /> } />
            <Route path="/event" element={<Event /> } />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
