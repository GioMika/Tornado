import React, { useState } from 'react';
import robot_2 from '../../images/Mask group (1).svg';
import barbel from '../../images/dumpbll.png';
import remote from '../../images/remote.png';
import uneven2 from '../../images/sign.png';
import worktime from '../../images/time.png';
import resize from '../../images/arrow.png';
import speedometer from '../../images/speedometer.svg';
import './RobotDescription.css';

export default function RobotDescription() {
  const [specs, setSpecs] = useState({
    left: { title: 'Диапазон регулирования', value: '1000' },
    right: { title: 'Скорость', value: '0-5 км/ч' },
  });

  const [animation, setAnimation] = useState(false);

  const specsList = [
    {
      icon: speedometer,
      title: 'Скорость',
      hoverData: {
        left: { title: 'Скорость передвижения', value: '0–5 км/ч' },
        right: { title: 'Диапазон регулирования скорости', value: '1000' },
      },
    },
    {
      icon: barbel,
      title: 'Грузоподъемность',
      hoverData: {
        left: { title: 'Грузоподъемность', value: '25 кг' },
        right: { title: 'Максимальная нагрузка', value: '' },
      },
    },
    {
      icon: remote,
      title: 'Управление по радио',
      hoverData: {
        left: { title: 'Дальность связи', value: '500/300 м' },
        right: { title: 'Открытая местность', value: '1200/600 м' },
      },
    },
    {
      icon: uneven2,
      title: 'Допустимые препятствия',
      hoverData: {
        left: { title: 'Пороговое препятствие', value: '0,22 м' },
        right: { title: 'Уклон', value: 'до 40°' },
      },
    },
    {
      icon: worktime,
      title: 'Продолжительность работы',
      hoverData: {
        left: { title: 'Время работы', value: '5-24 часов' },
        right: { title: 'Интервал работы', value: '120-900 минут' },
      },
    },
    {
      icon: resize,
      title: 'Размеры',
      hoverData: {
        left: { title: 'Габариты', value: '0,74 x 0,43 x 0,31 м' },
        right: { title: 'Масса', value: '36-42 кг' },
      },
    },
  ];

  const handleHover = (hoverData) => {
    setAnimation(true);
    setTimeout(() => {
      setSpecs(hoverData);
      setAnimation(false);
    }, 200);
  };

  return (
    <div className="specs-container">
      <section className="container">
        <div className="specs-display">
          <div className={`specs-text ${animation ? 'fade-out' : 'fade-in'}`}>
            <p className="title">{specs.left.title}</p>
            {specs.left.value && <p className="value">{specs.left.value}</p>}
          </div>

          <div className="image-container">
            <div className="image-wrapper">
              <img src={robot_2} alt="Robot" />
            </div>
          </div>

          <div className={`specs-text ${animation ? 'fade-out' : 'fade-in'}`}>
            <p className="title">{specs.right.title}</p>
            {specs.right.value && <p className="value">{specs.right.value}</p>}
          </div>
        </div>

        <div className="specs-grid">
          {specsList.map((spec, index) => (
            <div
              key={index}
              className="specs-item"
              onMouseEnter={() => handleHover(spec.hoverData)}
              onMouseLeave={() =>
                handleHover({
                  left: { title: 'Диапазон регулирования', value: '1000' },
                  right: { title: 'Скорость', value: '0-5 км/ч' },
                })
              }
            >
              <img src={spec.icon} alt={spec.title} className="icon" />
              <p>{spec.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
