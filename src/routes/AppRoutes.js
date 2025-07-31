import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import FileListing from '../components/FileListing/FileListing';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fileListing" element={<FileListing />} />
    {/*  <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;
