import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
