import React from "react";

import HeaderHome from "./pages/HeaderHome";
import LandingPage from "./pages/LandingPage";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Contactus from "./pages/Contact";
import User from "./pages/User";
import Footer from "./pages/Footer";
import MapPage  from "./pages/MapPage ";
import To from "./pages/To";
import OurTeam from "./pages/OurTeam";

const App = () => {
  return (
    <div className=" font-Montserrat">
      <HeaderHome />
      <LandingPage />
      <Aboutus />
      <Services />
      <Contactus />
      <To />
      <MapPage />
      <User />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default App;
