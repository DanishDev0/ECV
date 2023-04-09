import Slider from "react-slick";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/slider.module.css";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

function MySlider({ items }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SlArrowRight />,
    prevArrow: <SlArrowLeft />,
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className={style.main_slider}>
      <div className={style.slider_head}>
        <h3>
          Soptlight Of the <span style={{ color: "#8d8f00" }}>month</span>
        </h3>
      </div>
      <div style={{ width: "90%" }}>
        <Slider {...settings} ref={sliderRef}>
          {items.map((item) => (
            <div key={item.id} className={style.slider_wrap}>
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
              />
              <div className={style.slider_content}>
                <h3>{item.title}</h3>
                <p className={style.slider_description}>{item.description}</p>
                <p className={style.slider_description2}>{item.description2}</p>
                <span className={style.slider_price}>{item.price}</span>
                <button>Buy Now</button>
              </div>
            </div>
          ))}
        </Slider>
        {/* <div style={{ textAlign: "center" }}>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div> */}
      </div>
    </div>
  );
}

export default MySlider;
