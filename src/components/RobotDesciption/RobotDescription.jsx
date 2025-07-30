import React, { useState } from "react";
import barbel from "../../images/dumpbll.png";
import remote from "../../images/remote.png";
import uneven2 from "../../images/sign.png";
import worktime from "../../images/time.png";
import resize from "../../images/arrow.png";
import speedometer from "../../images/speedometer.svg";
import "./RobotDescription.css";
import speedImage from "../../images/robotDescription/speed-01.png";
import loadCapacityImage from "../../images/robotDescription/loadcapacity-01.png";
import radioImage from "../../images/robotDescription/radio-01.png";
import obstaclesImage from "../../images/robotDescription/obstackes-01-01.png";
import durationImage from "../../images/robotDescription/duration-01.png";
import sizesImage from "../../images/robotDescription/sizes-01.png";

export default function RobotDescription() {
  const specsList = [
    {
      icon: speedometer,
      title: "Скорость",
      mainImage: speedImage,
      hoverData: {
        left: { title: "Скорость передвижения", value: "0–5 км/ч" },
        right: { title: "Диапазон регулирования скорости", value: "1000" },
      },
    },
    {
      icon: barbel,
      title: "Грузоподъемность",
      mainImage: loadCapacityImage,
      hoverData: {
        left: { title: "Грузоподъемность", value: "25 кг" },
        right: { title: "Максимальная нагрузка", value: "" },
      },
    },
    {
      icon: remote,
      title: "Управление по радио",
      mainImage: radioImage,
      hoverData: {
        left: { title: "Дальность связи", value: "500/300 м" },
        right: { title: "Открытая местность", value: "1200/600 м" },
      },
    },
    {
      icon: uneven2,
      title: "Допустимые препятствия",
      mainImage: obstaclesImage,
      hoverData: {
        left: { title: "Пороговое препятствие", value: "0,22 м" },
        right: { title: "Уклон", value: "до 40°" },
      },
    },
    {
      icon: worktime,
      title: "Продолжительность работы",
      mainImage: durationImage,
      hoverData: {
        left: { title: "Время работы", value: "5-24 часов" },
        right: { title: "Интервал работы", value: "120-900 минут" },
      },
    },
    {
      icon: resize,
      title: "Размеры",
      mainImage: sizesImage,
      hoverData: {
        left: { title: "Габариты", value: "0,74 x 0,43 x 0,31 м" },
        right: { title: "Масса", value: "36-42 кг" },
      },
    },
  ];

  const [activeSpecIndex, setActiveSpecIndex] = useState(0);
  const [specs, setSpecs] = useState(specsList[0].hoverData);
  const [animation, setAnimation] = useState(false);
  const [currentImage, setCurrentImage] = useState(specsList[0].mainImage);
  const [prevImage, setPrevImage] = useState(null);

  const handleHover = (hoverData, index) => {
    setAnimation(true);

    if (typeof index === "number") {
      const nextImage = specsList[index].mainImage;
      if (nextImage !== currentImage) {
        setPrevImage(currentImage);
        setTimeout(() => {
          setCurrentImage(nextImage);
        }, 50); // Small delay to allow fade-out of previous image
      }
      setActiveSpecIndex(index);
    }

    setTimeout(() => {
      setSpecs(hoverData);
      setAnimation(false);
      setPrevImage(null);
    }, 500); // Matches CSS transition duration (0.5s)
  };

  const handleMouseLeave = () => {
    const active = specsList[activeSpecIndex];
    handleHover(active.hoverData, activeSpecIndex);
  };

  return (
    <div className="specs-container">
      <section className="container">
        <div className="specs-display">
          <div
            key={specs.left.title}
            className={`specs-text ${animation ? "fade-out" : "fade-in"}`}
          >
            <p className="title">{specs.left.title}</p>
            {specs.left.value && <p className="value">{specs.left.value}</p>}
          </div>

          <div className="image-container">
            <div className="image-wrapper">
              {prevImage && (
                <img
                  key="prev"
                  src={prevImage}
                  alt="Previous"
                  className={`main-image ${animation ? "fade-out" : "fade-in"}`}
                />
              )}
              <img
                key="current"
                src={currentImage}
                alt="Current"
                className={`main-image ${animation ? "fade-out" : "fade-in"}`}
              />
            </div>
          </div>

          <div
            key={specs.right.title}
            className={`specs-text ${animation ? "fade-out" : "fade-in"}`}
          >
            <p className="title">{specs.right.title}</p>
            {specs.right.value && <p className="value">{specs.right.value}</p>}
          </div>
        </div>

        <div className="specs-grid">
          {specsList.map((spec, index) => (
            <div
              key={index}
              className="specs-item"
              onMouseEnter={() => handleHover(spec.hoverData, index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={spec.icon}
                alt={spec.title}
                className={`icon ${activeSpecIndex === index ? "active" : ""}`}
              />
              <p>{spec.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}