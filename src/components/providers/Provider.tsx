import React from "react";
import Navigation from "../stracture/Header/Navigation";
import Footer from "../stracture/Footer";

const Provider = ({ children } : any) => {
  return (
    <div className="mx-auto min-h-screen bg-white text-black ">
      <Navigation />
        {children}
      <Footer />
    </div>
  );
};

export default Provider;
