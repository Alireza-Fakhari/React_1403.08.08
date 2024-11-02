import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ImageGallery from "./component/image-gallery/image-gallery";

// Card01
const Card01 = ReactDOM.createRoot(document.getElementById("main"));
Card01.render(
  <React.StrictMode>
    <ImageGallery />
  </React.StrictMode>
);