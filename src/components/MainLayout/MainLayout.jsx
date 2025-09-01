//import React from "react";
import { Outlet } from "react-router-dom";
//import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//import NewHome from "../Home/NewHome";
import NewHeader from "../Header/NewHeader";
//import NewFooter from "../Footer/NewFooter";

// Layout component wraps sidebar + main content
export default function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Header /> */}

      <NewHeader/>

      <Outlet />
      {/* <NewFooter/> */}

      <Footer />
    </div>
  );
}
