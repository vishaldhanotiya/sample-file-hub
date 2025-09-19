import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// Layout component wraps sidebar + main content
export default function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}
