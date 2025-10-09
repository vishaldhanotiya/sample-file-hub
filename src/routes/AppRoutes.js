import { Routes, Route } from "react-router-dom";
import SampleImage from "../components/SampleImage/SampleImage";
import MainLayout from "../components/MainLayout/MainLayout";
import SampleVideo from "../components/SampleVideo/SampleVideo";
import SampleAudio from "../components/SampleAudio/SampleAudio";
import SampleDocument from "../components/SampleDocument/SampleDocument";
import ConvertJpgToPng from "../components/ConvertJpgToPng/ConvertJpgToPng";
import NewHome from "../components/Home/NewHome";
import SampleArchives from "../components/SampleArchives/SampleArchives";
import SampleCode from "../components/SampleCode/SampleCode";
import PlaceholderImageGenerator from "../components/PlaceholderImageGenerator/PlaceholderImageGenerator";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../components/TermsOfService/TermsOfService";
import ConvertJpgToPngBlog from "../components/BlogSection/ConvertJpgToPngBlog/ConvertJpgToPngBlog";
import SampleFilesGuide from "../components/BlogSection/SampleFilesGuide/SampleFilesGuide";
import ImageFormatComparison from "../components/BlogSection/ImageFormatComparison/ImageFormatComparison";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<NewHome />} />
        {/* <Route path="home" element={<Home />} /> */}
        <Route path="sample-images" element={<SampleImage />} />
        <Route path="sample-images/:filePath" element={<SampleImage />} />
        <Route path="sample-videos" element={<SampleVideo />} />
        <Route path="sample-videos/:filePath" element={<SampleVideo />} />
        <Route path="sample-audios" element={<SampleAudio />} />
        <Route path="sample-audios/:filePath" element={<SampleAudio />} />
        <Route path="sample-documents" element={<SampleDocument />} />
        <Route path="sample-documents/:filePath" element={<SampleDocument />} />
        <Route path="sample-archives/" element={<SampleArchives />} />
        <Route path="sample-archives/:filePath" element={<SampleArchives />} />
        <Route path="sample-code/" element={<SampleCode />} />
        <Route path="sample-code/:filePath" element={<SampleCode />} />
        <Route path="convert-jpg-to-png" element={<ConvertJpgToPng />} />
        <Route
          path="placeholder-image-generator"
          element={<PlaceholderImageGenerator />}
        />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route
          path="blog/how-to-convert-jpg-to-png"
          element={<ConvertJpgToPngBlog />}
        />
        <Route
          path="blog/how-to-use-sample-files-for-testing"
          element={<SampleFilesGuide />}
        />
        <Route
          path="blog/compare-png-webp-and-nine-patch-images"
          element={<ImageFormatComparison />}
        />

        {/* Add other routes here */}
      </Route>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
