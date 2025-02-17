import classes from "./index.module.css";
import tornado_img from "../../images/tornado_bg.png";
import ru from "../../images/ru.svg";
import uneven from "../../images/uneven.svg";
import remoteControl from "../../images/remote-control.svg";
import modular from "../../images/modular.svg";
import waterProof from "../../images/water-proof.svg";
import shield from "../../images/shield.svg";
import chassis from "../../images/chassis.svg";
import adaptive from "../../images/adaptive.svg";
import robot_2 from "../../images/robot_2.svg";
import speedometer from "../../images/speedometer.svg";
import barbel from "../../images/barbel.svg";
import remote from "../../images/remote.png";
import uneven2 from "../../images/uneven _2.svg";
import worktime from "../../images/work-time.svg";
import resize from "../../images/resize.svg";
import oko from "../../images/ok.svg";
import backgroundForms from "../../images/BackgroundForm.png";
import ContactsPage from "../ContactsPage/ContactsPage";
import RobotDescription from "../../components/RobotDesciption/RobotDescription";

const TyphoonPage = () => {
  return (
    <>
      <main className={classes.main}>
        <section className={classes.tornado_block}>
          <div className={classes.title_and_img}>
            <h2>ТАЙФУН</h2>
            <img src={tornado_img} alt="" />
          </div>
          <div className={classes.tornado_subtitle}>
            <p>
              Мобильный робототехнический комплекс (МРК) «Тайфун» состоит из
              «Колесно-шагающего» транспортного средства, телевизионной
              (тепло-телевизионной) системы видеонаблюдения, пульта
              дистанционного управления, манипулятора и/или другого
              дополнительного оборудования.
            </p>
          </div>
          <div className={classes.sample}>
            <button className={classes.down_arrow}>↓</button>
            <p>Скачать брошюру</p>
          </div>
        </section>

        <section className={classes.peculiarities_block}>
          <div className={classes.peculiarities_title}>
            <h2>Особенности</h2>
            <p>Передовые разработки в области инженерии</p>
          </div>

          <div className={classes.all_blocks}>
            <div className={classes.block}>
              <img src={ru} alt="" />
              <div className={classes.block_title_subtitle}>
                <h2>Сделано в России</h2>
                <p>Полностью Российская разработка и сборка</p>
              </div>
            </div>

            <div className={classes.block}>
              <img src={uneven} alt="" />
              <div className={classes.block_title_subtitle}>
                <h2>Повышенная проходимость</h2>
                <p>По сравнению с обычными колесными и гусеничными машинами</p>
              </div>
            </div>

            <div className={classes.block}>
              <img src={remoteControl} alt="" />
              <div className={classes.block_title_subtitle}>
                <h2>Легкое управление</h2>
                <p>
                  Простое управление, не требующее продолжительного обучения
                </p>
              </div>
            </div>

            <div className={classes.block}>
              <img src={modular} alt="" />
              <div className={classes.block_title_subtitle}>
                <h2>Модульность</h2>
                <p>
                  Все отдельные узлы способны быть модифицированы под задачи
                  клиента
                </p>
              </div>
            </div>

            <div className={classes.block}>
              <img src={waterProof} alt="" />
              <div className={classes.block_title_subtitle}>
                <h2>
                  Герметичность и <br /> морозоустойчивость
                </h2>
                <p>
                  Все отдельные узлы способны быть модифицированы под задачи
                  клиента
                </p>
              </div>
            </div>

            <div className={classes.block}>
              <img src={shield} alt="" />
              <div className={classes.block_title_subtitle}>
                <h2>Безопасность в управлении</h2>
                <p>
                  Системы безопасности, упреждающие критические ошибки оператора
                </p>
              </div>
            </div>

            <div className={classes.block}>
              <img src={chassis} alt="" />
              <div className={classes.block_title_subtitle}>
                <h2>Умное шасси</h2>
                <p>Автоматическая адаптация шасси к рельефу</p>
              </div>
            </div>

            <div className={classes.block}>
              <img src={adaptive} alt="" />
              <div className={classes.block_title_subtitle}>
                <h2>Адаптивность</h2>
                <p>Широкий спектр оснащения</p>
              </div>
            </div>
          </div>
        </section>

        <div className={classes.tech_block}>
          <div className={classes.peculiarities_title}>
            <h2>Технические характеристики</h2>
            <p>Параметры робота</p>
          </div>
          <RobotDescription />
        </div>

        <section className={classes.modifications}>
          <div className={classes.peculiarities_title}>
            <h2>Модификации</h2>
            <p>Добавьте навесное оборудование под ваши уникальные задачи</p>
          </div>

          <div className={classes.block_oko}>
            <div className={classes.oko}>
              <div className={classes.oko_title}>
                <h2>Око</h2>
                <p>
                  Универсальная поворотная телекамера «Око» позволяет вести
                  круглосуточное наблюдение в самых суровых условиях окружающей
                  среды.
                </p>
              </div>
              <img src={oko} alt="" />
            </div>

            <div className={classes.oko}>
              <div className={classes.oko_title}>
                <h2>Модуль технического зрения для обхода препятствий</h2>
                <p>
                  Универсальная поворотная телекамера «Око» позволяет вести
                  круглосуточное наблюдение в самых суровых условиях окружающей
                  среды.
                </p>
              </div>
              <img src={oko} alt="" />
            </div>
          </div>
        </section>
        <section className={classes.gallery_block}>
          <div className={classes.peculiarities_title}>
            <h2>Галерея</h2>
            <p>Посмотрите на роботов в работе</p>
          </div>
        </section>
      </main>
      <section className={classes.contacts_page}>
        <ContactsPage />
      </section>
    </>
  );
};

export default TyphoonPage;

//test
