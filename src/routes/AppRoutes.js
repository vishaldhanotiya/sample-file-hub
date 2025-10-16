import { Routes, Route } from "react-router-dom";
import SampleImage from "../components/SampleImage/SampleImage";
import MainLayout from "../components/MainLayout/MainLayout";
import SampleVideo from "../components/SampleVideo/SampleVideo";
import SampleAudio from "../components/SampleAudio/SampleAudio";
import SampleDocument from "../components/SampleDocument/SampleDocument";
import ConvertJpgToPng from "../components/ConvertJpgToPng/ConvertJpgToPng";
import Home from "../components/Home/Home";
import SampleArchives from "../components/SampleArchives/SampleArchives";
import SampleCode from "../components/SampleCode/SampleCode";
import PlaceholderImageGenerator from "../components/PlaceholderImageGenerator/PlaceholderImageGenerator";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../components/TermsOfService/TermsOfService";
import ConvertJpgToPngBlog from "../components/BlogSection/ConvertJpgToPngBlog/ConvertJpgToPngBlog";
import SampleFilesGuide from "../components/BlogSection/SampleFilesGuide/SampleFilesGuide";
import ImageFormatComparison from "../components/BlogSection/ImageFormatComparison/ImageFormatComparison";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import NotFound from "../components/NotFound/NotFound";
import Blogs from "../components/Blogs/Blogs";
import BlogImageOptimization from "../components/BlogSection/BlogImageOptimization";
import BlogFileUploadSecurity from "../components/BlogSection/BlogFileUploadSecurity";
import PNGTroubleshooter from "../components/BlogSection/PNGTroubleshooter/PNGTroubleshooter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
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
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route
          path="placeholder-image-generator"
          element={<PlaceholderImageGenerator />}
        />
        <Route path="blogs" element={<Blogs />} />

        <Route
          path="how-to-convert-image-from-jpg-to-png"
          element={<ConvertJpgToPngBlog />}
        />
         <Route
          path="how-to-use-sample-files-for-testing"
          element={<SampleFilesGuide />}
        />
         <Route
          path="compare-png-webp-and-nine-patch-images"
          element={<ImageFormatComparison />}
        />
        <Route
          path="image-optimization-best-practices-for-web-performance"
          element={<BlogImageOptimization />}
        />
        <Route
          path="file-upload-security-a-complete-guide-for-developers"
          element={<BlogFileUploadSecurity />}
        />
        <Route
          path="the-png-paradox-fixing-common-transparency-file-size-and-quality-mistakes"
          element={<PNGTroubleshooter />}
        />

       
       
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        {/* Add other routes here */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
