import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import DescriptionPage from "./pages/DescriptionPage";
import FinalSchedulePage from "./pages/FinalSchedulePage";
import ScrollToTop from "./pages/ScrollToTop";
import GalleryLandingPage from "./pages/GalleryLandingPage";
import MexicoGalleryPage from "./pages/MexicoGalleryPage";
import Forum from "./pages/Forum";

function App() {
  return (
    <BrowserRouter basename="/wander-prototype">
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/schedule" element={<FinalSchedulePage />} />
        <Route path="/gallery" element={<GalleryLandingPage />} />
        <Route path="/gallery/mexico" element={<MexicoGalleryPage />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
