import { Routes, Route } from "react-router-dom";

//link folder component
import NavbarComp from "./componets/NavbarComp";


//panggil link Homepage :
import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKentenPage from "./pages/SyaratKentenPage";
import FaqPage from "./pages/FaqPage";

import FooterComp from "./componets/FooterComp"




function App() {
  return<div>
    <NavbarComp />
    
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/kelas" Component={ClassPage} />
      <Route path="/testimonial" Component={TestimonialPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/syaratketen" Component={SyaratKentenPage} />
    </Routes>

    <FooterComp />
  </div>
}

export default App
