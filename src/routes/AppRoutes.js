import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import SampleImage from "../components/SampleImage/SampleImage";
import MainLayout from "../components/MainLayout/MainLayout";
import SampleVideo from "../components/SampleVideo/SampleVideo";
import SampleAudio from "../components/SampleAudio/SampleAudio";
import SampleDocument from "../components/SampleDocument/SampleDocument";
import ConvertPngToJpg from "../components/ConvertPngToJpg/ConvertPngToJpg";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="sample-images" element={<SampleImage />} />
        <Route path="/sample-images/:filePath" element={<SampleImage />} />
        <Route path="sample-videos" element={<SampleVideo />} />
        <Route path="sample-videos/:filePath" element={<SampleVideo />} />
        <Route path="sample-audios" element={<SampleAudio />} />
        <Route path="sample-audios/:filePath" element={<SampleAudio />} />
        <Route path="sample-documents" element={<SampleDocument />} />
        <Route path="sample-documents/:filePath" element={<SampleDocument />} />
        <Route path="convert-png-to-jpg" element={<ConvertPngToJpg />} />
        {/* Add other routes here */}
      </Route>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
