import React from "react";
import { SliderData } from "./data";
import "./styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImageSlider = () => {
  console.log(SliderData);
  return (
    <div>
      {SliderData.map((img, idx) => (
        <img src={img.image} alt={img.image} key={idx} className="images"/>
      ))}
    </div>
  );
};

export default ImageSlider;
