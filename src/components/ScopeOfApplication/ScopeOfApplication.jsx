import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import Features from "../Features/Features";
import background2 from "../../images/Mask group.svg";
import mobileRobot from "../../images/mobile_robot.svg";
import icons1 from "../../images/image1.svg";
import icons2 from "../../images/image2.svg";
import icons3 from "../../images/image3.svg";
import icons4 from "../../images/image4.svg";
import icons5 from "../../images/image5.svg";
import icons6 from "../../images/image6.svg";
import icons7 from "../../images/image7.svg";
import icons8 from "../../images/image8.svg";

const applications = [
  {
    id: 1,
    icon: icons1,
    title: "Разбор завалов",
    description: "Роботы представляют из себя прочную конструкцию и не рискуют жизнью при работе в хлипких конструкциях"
  },
  {
    id: 2,
    icon: icons2,
    title: "Визуальная/Радиационная/Инженерная разведка",
    description: "Поворотные камеры с большим оптическим увеличением или тепловизионным изображением, различные типы датчиков и сенсоров позволяют адаптировать робота под любую задачу"
  },
  {
    id: 3,
    icon: icons3,
    title: "Патруль местности",
    description: "Способность гибкой модификации системы позволяет настроить робота под уникальные задачи вашей территории, автоматизировать или дистанцировать необходимые процессы."
  },
  {
    id: 4,
    icon: icons4,
    title: "Измерение содержания хим. веществ",
    description: "У вас химическое предприятие с большой территорией? Запустите,оснащенного необходимым набором сенсоров, робота контролировать периметр и он выполнит подготовленный набор инструкций в случае утечки или аварии"
  },
  {
    id: 5,
    icon: icons5,
    title: "Разминирование",
    description: "Дистанционное управление по радио или кабелю позволяет исключить риски при столь опасной работе, а бесчисленный список доп. оснащения еще и ускорит этот процесс"
  },
  {
    id: 6,
    icon: icons6,
    title: "Доставка грузов",
    description: "Роботы позволят автоматизировать маршрут доставки ваших грузов или избавят человека от физической работы при ручном управлении"
  },
  {
    id: 7,
    icon: icons7,
    title: "Поисково-спасательные операции",
    description: "Агрессивная среда не станет преградой для робота при совершении спасательных миссий"
  },
  {
    id: 8,
    icon: icons8,
    title: "Создание фотореалистичных 3D карт местности",
    description: "Есть задача построить точную 3д карту местности, туннеля или шахты? Робот сможет сделать это в автоматическом режиме без перерыва на обед или исключить риски здоровью оператору при ручном управлении в небезопасных местах"
  }
];

const MobileWidget = ({ application, isLeft }) => (
   <div className={isLeft ? classes.widget_left : classes.widget_right}>
     {isLeft ? (
        <>
          <img className={classes.img} src={application.icon} alt="" />
          <div className={classes.widgets_title_left}>
            <h2>{application.title}</h2>
            <p>{application.description}</p>
          </div>
        </>
     ) : (
        <>
          <div className={classes.widgets_title_right}>
            <h2>{application.title}</h2>
            <p>{application.description}</p>
          </div>
          <img className={classes.img} src={application.icon} alt="" />
        </>
     )}
   </div>
);

// Компонент для десктопной иконки
const DesktopIcon = ({ application, hoverContentClass = classes.hover_content }) => (
   <div className={classes.icons_block}>
     <img className={`${classes.icon_img} ${classes.initial_icon}`} src={application.icon} alt={application.title} />
     <div className={hoverContentClass}>
       <div className={classes.icon_wrapper}>
         <img className={classes.icon_img} src={application.icon} alt={application.title} />
         <h3>{application.title}</h3>
       </div>
       <p>{application.description}</p>
     </div>
   </div>
);

const ScopeOfApplication = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const updateIsMobile = (e) => setIsMobile(e.matches);

    updateIsMobile(mediaQuery);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const renderMobileView = () => (
     <div className={classes.mobileContainer}>
       <img src={mobileRobot} alt="Robot" />
       <div className={classes.block_widgets}>
         {applications.map((app, index) => (
            <MobileWidget
               key={app.id}
               application={app}
               isLeft={index % 2 === 0}
            />
         ))}
       </div>
     </div>
  );

  const renderDesktopView = () => (
     <div className={classes.main_block}>
       <div className={classes.layout_container}>
         {/* Верхний ряд */}
         <div className={classes.top_row}>
           <DesktopIcon application={applications[0]} />
           <DesktopIcon application={applications[1]} />
         </div>

         {/* Средняя секция */}
         <div className={classes.middle_section}>
           <div className={classes.left_side}>
             <DesktopIcon application={applications[2]} hoverContentClass={classes.hover_content_left} />
             <DesktopIcon application={applications[4]} hoverContentClass={classes.hover_content_left} />
           </div>

           <div className={classes.duble_images}>
             <img src={background2} alt="Robot" />
           </div>

           <div className={classes.right_side}>
             <DesktopIcon application={applications[3]} />
             <DesktopIcon application={applications[5]} />
           </div>
         </div>

         {/* Нижний ряд */}
         <div className={classes.bottom_row}>
           <DesktopIcon application={applications[6]} />
           <DesktopIcon application={applications[7]} />
         </div>
       </div>
     </div>
  );

  return (
     <>
       <main className={classes.main}>
         <div className={classes.main_title_block}>
           <h2>Сферы применения</h2>
           <p>В каких областях мы можем помочь</p>
         </div>
         {isMobile ? renderMobileView() : renderDesktopView()}
       </main>
       <Features />
     </>
  );
};

export default ScopeOfApplication;
