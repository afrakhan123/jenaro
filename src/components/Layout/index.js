import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
