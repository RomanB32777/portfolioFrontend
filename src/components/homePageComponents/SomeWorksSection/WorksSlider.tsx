import React, { useContext, useState, useEffect, useCallback } from "react";
//import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Work } from "./Work";
import Slider from "react-slick";
import { IPost } from "../../../interfaces/contentInterfaces/posts/IPost";
//import ParallaxComponent from "react-parallax-component";
// const ParallaxComponent = require("react-parallax-component");
import Plx from "react-plx";
const Rellax = require("rellax");

const optionsWorks = {
  loop: true,
  margin: 10,
  items: 1,
  nav: true,
  // onInitialized  : 'counter', //When the plugin has initialized.
  //  onTranslated : 'counter' ,
  navText: ["", ""],
  navContainer: ".custom-nav",
};

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      role="presentation"
      className="owl-next"
    ></button>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      role="presentation"
      className="owl-prev"
    ></button>
  );
}

interface IPropsWorks {
  works: Array<IPost>;
}

export const WorksSlider: React.FC<IPropsWorks> = ({ works }) => {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },
      ],
    },
  ];

  const phoneData = [
    {
      start: "self",
      startOffset: 0,
      duration: 500,
      easing: [0.25, 0.1, 0.6, 1.5],
      properties: [
        {
          startValue: 90,
          endValue: 0,
          property: "rotate",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];

  const contentData = [
    {
      start: ".section__works",
      startOffset: 0,
      duration: 1000,
      properties: [
        {
          startValue: -90,
          endValue: -35,
          unit: "%",
          property: "translateY",
        },
      ],
    },
  ];

  const contentData1 = [
    {
      start: "self",
      startOffset: 0,
      duration: 1050,
      properties: [
        {
          startValue: -100,
          endValue: -50,
          unit: "%",
          property: "translateY",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState(1);

  useEffect(() => {
    var rellax = new Rellax(".rellax");
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (cur: any) => {
      setCurrent(cur + 1);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (!works.length) {
    return <p className="center">Работ пока нет</p>;
  }

  return (
    <>
      <div className="works__list">
        <Slider {...settings}>
          {works.map((work, index) => {
            return <Work work={work} key={index} />;
          })}
        </Slider>
        {/* <OwlCarousel onChange={changedItem} {...optionsWorks}>
                    {
                        works.map((work, index) => {
                            return (
                                <WorkSlide work={work} key={index} />
                            )
                        })
                    }
                </OwlCarousel> */}
      </div>
      <div className="work__counts">
        <p>
          <span className="current-slide">{current}</span>/
          <span className="total-slide">{works.length}</span>
        </p>
      </div>
      <div>
        <Plx className="current__slide-big" parallaxData={contentData}>
          {current}
        </Plx>

        <Plx className="works__circle" parallaxData={contentData1}>
          {current}
        </Plx>
        {/* <div
          className="works__circle "
          data-rellax-speed="-1"
          data-rellax-percentage="0.5"
        ></div>        */}
      </div>
    </>
  );
};
