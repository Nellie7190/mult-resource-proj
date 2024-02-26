import React from "react";
import { SliderData } from "./data";
import "./styles.css";

const ImageSlider = () => {
  console.log(SliderData);
  return (
    <div>
      {SliderData.map((img, idx) => (
        <img src={img.image} alt={img.image} className="images"/>
      ))}
    </div>
  );
};

export default ImageSlider;
