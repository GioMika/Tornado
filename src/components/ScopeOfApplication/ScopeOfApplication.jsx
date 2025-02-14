import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import Features from "../Features/Features";
import background2 from "../../images/Mask group.svg";
import icons1 from "../../images/image1.svg";
import icons2 from "../../images/image2.svg";
import icons3 from "../../images/image3.svg";
import icons4 from "../../images/image4.svg";
import icons5 from "../../images/image5.svg";
import icons6 from "../../images/image6.svg";
import icons7 from "../../images/image7.svg";
import icons8 from "../../images/image8.svg";
import mobileRobot from "../../images/mobile_robot.svg";

const ScopeOfApplication = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const updateIsMobile = (e) => setIsMobile(e.matches);
    updateIsMobile(mediaQuery);
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <main className={classes.main}>
        <div className={classes.main_title_block}>
          <h2>Сферы применения</h2>
          <p>В каких областях мы можем помочь</p>
        </div>
        {isMobile ? (
          <div className={classes.mobileContainer}>
            <img src={mobileRobot} alt="Robot" />
            <div className={classes.block_widgets}>
              <div className={classes.widget_left}>
                <img className={classes.img} src={icons7} alt="" />
                <div className={classes.widgets_title_left}>
                  <h2>Поисково-спасательные операции</h2>
                  <p>
                    Агрессивная среда не станет преградой для робота при
                    совершении спасательных миссий
                  </p>
                </div>
              </div>
              <div className={classes.widget_right}>
                <div className={classes.widgets_title_right}>
                  <h2>Доставка грузов</h2>
                  <p>
                    Роботы позволят автоматизировать маршрут доставки ваших
                    грузов или избавят человека от физической работы при ручном
                    управлении
                  </p>
                </div>
                <img className={classes.img} src={icons6} alt="" />
              </div>
              <div className={classes.widget_left}>
                <img className={classes.img} src={icons1} alt="" />
                <div className={classes.widgets_title_left}>
                  <h2>Разбор завалов</h2>
                  <p>
                    Роботы представляют из себя прочную конструкцию и не рискуют
                    жизнью при работе в хлипких конструкциях
                  </p>
                </div>
              </div>
              <div className={classes.widget_right}>
                <div className={classes.widgets_title_right}>
                  <h2>Визуальная/Радиационная/Инженерная разведка</h2>
                  <p>
                    Поворотные камеры с большим оптическим увеличением или
                    тепловизионным изображением, различные типы датчиков и
                    сенсоров позволяют адаптировать робота под любую задачу{" "}
                  </p>
                </div>
                <img className={classes.img} src={icons6} alt="" />
              </div>
              <div className={classes.widget_left}>
                <img className={classes.img} src={icons4} alt="" />
                <div className={classes.widgets_title_left}>
                  <h2>Измерение содержания хим. веществ</h2>
                  <p>
                    У вас химическое предприятие с большой территорией?
                    Запустите,оснащенного необходимым набором сенсоров, робота
                    контролировать периметр и он выполнит подготовленный набор
                    инструкций в случае утечки или аварии{" "}
                  </p>
                </div>
              </div>

              <div className={classes.widget_right}>
                <div className={classes.widgets_title_right}>
                  <h2>Создание фотореалистичных 3D карт местности</h2>
                  <p>
                    Есть задача построить точную 3д карту местности, туннеля или
                    шахты? Робот сможет сделать это в автоматическом режиме без
                    перерыва на обед или исключить риски здоровью оператору при
                    ручном управлении в небезопасных местах{" "}
                  </p>
                </div>
                <img className={classes.img} src={icons8} alt="" />
              </div>
              <div className={classes.widget_left}>
                <img className={classes.img} src={icons3} alt="" />
                <div className={classes.widgets_title_left }>
                  <h2>Патруль местности</h2>
                  <p>
                    Способность гибкой модификации системы позволяет настроить
                    робота под уникальные задачи вашей территории,
                    автоматизировать или дистанцировать необходимые процессы.
                  </p>
                </div>
              </div>
              <div className={classes.widget_right}>
                <div className={classes.widgets_title_right}>
                  <h2>Разминирование</h2>
                  <p>
                    Дистанционное управление по радио или кабелю позволяет
                    исключить риски при столь опасной работе, а бесчисленный
                    список доп. оснащения еще и ускорит этот процесс{" "}
                  </p>
                </div>
                <img className={classes.img} src={icons5} alt="" />
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.main_block}>
            <div className={classes.layout_container}>
              <div className={classes.top_row}>
                <div className={classes.icons_block}>
                  <img className={`${classes.icon_img} ${classes.initial_icon}`} src={icons1} alt="Icon 1" />
                  <div className={classes.hover_content}>
                    <div className={classes.icon_wrapper}>
                      <img className={classes.icon_img} src={icons1} alt="Icon 1" />
                      <h3>Разбор завалов</h3>
                    </div>
                    <p>
                      Роботы представляют из себя прочную конструкцию и не рискуют
                      жизнью при работе в хлипких конструкциях
                    </p>
                  </div>
                </div>
                <div className={classes.icons_block}>
                  <img className={`${classes.icon_img} ${classes.initial_icon}`} src={icons2} alt="Icon 2" />
                  <div className={classes.hover_content}>
                    <div className={classes.icon_wrapper}>
                      <img className={classes.icon_img} src={icons2} alt="Icon 2" />
                      <h3>Визуальная/Радиационная/Инженерная разведка</h3>
                    </div>
                    <p>
                      Поворотные камеры с большим оптическим увеличением или
                      тепловизионным изображением, различные типы датчиков и
                      сенсоров позволяют адаптировать робота под любую задачу
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.middle_section}>
                <div className={classes.left_side}>
                  <div className={classes.icons_block}>
                    <img className={`${classes.icon_img} ${classes.initial_icon}`} src={icons3} alt="Icon 3" />
                    <div className={classes.hover_content_left}>
                      <div className={classes.icon_wrapper}>
                        <img className={classes.icon_img} src={icons3} alt="Icon 3" />
                        <h3>Патруль местности</h3>
                      </div>
                      <p>
                        Способность гибкой модификации системы позволяет
                        настроить робота под уникальные задачи вашей территории,
                        автоматизировать или дистанцировать необходимые процессы.
                      </p>
                    </div>
                  </div>

                  <div className={classes.icons_block}>
                    <img className={`${classes.icon_img} ${classes.initial_icon}`} src={icons5} alt="Icon 5" />
                    <div className={classes.hover_content_left}>
                      <div className={classes.icon_wrapper}>
                        <img className={classes.icon_img} src={icons5} alt="Icon 5" />
                        <h3>Разминирование</h3>
                      </div>
                      <p>
                        Дистанционное управление по радио или кабелю позволяет
                        исключить риски при столь опасной работе, а бесчисленный
                        список доп. оснащения еще и ускорит этот процесс
                      </p>
                    </div>
                  </div>
                </div>

                <div className={classes.duble_images}>
                  <img src={background2} alt="Robot" />
                </div>

                <div className={classes.right_side}>
                  <div className={classes.icons_block}>
                    <img className={`${classes.icon_img} ${classes.initial_icon}`} src={icons4} alt="Icon 4" />
                    <div className={classes.hover_content}>
                      <div className={classes.icon_wrapper}>
                        <img className={classes.icon_img} src={icons4} alt="Icon 4" />
                        <h3>Измерение содержания хим. веществ</h3>
                      </div>
                      <p>
                        У вас химическое предприятие с большой территорией?
                        Запустите,оснащенного необходимым набором сенсоров, робота
                        контролировать периметр и он выполнит подготовленный набор
                        инструкций в случае утечки или аварии
                      </p>
                    </div>
                  </div>

                  <div className={classes.icons_block}>
                    <img className={`${classes.icon_img} ${classes.initial_icon}`} src={icons6} alt="Icon 6" />
                    <div className={classes.hover_content}>
                      <div className={classes.icon_wrapper}>
                        <img className={classes.icon_img} src={icons6} alt="Icon 6" />
                        <h3>Доставка грузов</h3>
                      </div>
                      <p>
                        Роботы позволят автоматизировать маршрут доставки ваших
                        грузов или избавят человека от физической работы при ручном
                        управлении
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className={classes.bottom_row}>
                <div className={classes.icons_block}>
                  <img className={`${classes.icon_img} ${classes.initial_icon}`} src={icons7} alt="Icon 7" />
                  <div className={classes.hover_content}>
                    <div className={classes.icon_wrapper}>
                      <img className={classes.icon_img} src={icons7} alt="Icon 7" />
                      <h3>Поисково-спасательные операции</h3>
                    </div>
                    <p>
                      Агрессивная среда не станет преградой для робота при
                      совершении спасательных миссий
                    </p>
                  </div>
                </div>

                <div className={classes.icons_block}>
                  <img className={`${classes.icon_img} ${classes.initial_icon}`} src={icons8} alt="Icon 8" />
                  <div className={classes.hover_content}>
                    <div className={classes.icon_wrapper}>
                      <img className={classes.icon_img} src={icons8} alt="Icon 8" />
                      <h3>Создание фотореалистичных 3D карт местности</h3>
                    </div>
                    <p>
                      Есть задача построить точную 3д карту местности, туннеля или
                      шахты? Робот сможет сделать это в автоматическом режиме без
                      перерыва на обед или исключить риски здоровью оператору при
                      ручном управлении в небезопасных местах
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Features />
    </>
  );
};

export default ScopeOfApplication;
