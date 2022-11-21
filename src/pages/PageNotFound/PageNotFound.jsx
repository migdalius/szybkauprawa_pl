import "./pageNotFound.css";

import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

export const PageNotFound = () => {
  return (
    <div>
      <Navigation />
      <div className="app__PageNotFound-main-content">
        <div className="app__PageNotFound-title">
          Błąd 404 - Strona nie istnieje
        </div>
      </div>
      <Footer type="banner" />
    </div>
  );
};
export default PageNotFound;
