import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import FileListing from "../components/FileListing/FileListing";
import SampleImage from "../components/SampleImage/SampleImage";
import MainLayout from "../components/MainLayout/MainLayout";
import SampleVideo from "../components/SampleVideo/SampleVideo";
import SampleAudio from "../components/SampleAudio/SampleAudio";
import SampleDocument from "../components/SampleDocument/SampleDocument";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="sample-image" element={<SampleImage />} />
        <Route path="sample-video" element={<SampleVideo />} />
        <Route path="sample-audio" element={<SampleAudio />} />
        <Route path="sample-document" element={<SampleDocument />} />
        {/* Add other routes here */}
      </Route>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
