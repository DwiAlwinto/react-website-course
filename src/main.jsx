import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//ini untuk setting react-router-dom
import { BrowserRouter } from "react-router-dom";

//link css untuk menjadi global untuk bisa diakses disemua ya
import "./diist/css/main.css";

//link global bootsrtap5
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./componets/ScrollToTop.jsx"; //ini untuk scroll ke atas

//ini untuk animate
import "animate.css";

// ini untuk animate scroll
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
