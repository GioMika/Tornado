import classes from './index.module.css'
import ru from "../../images/ru.svg";
import uneven from "../../images/uneven.svg";
import remoteControl from "../../images/remote-control.svg";
import modular from "../../images/modular.svg";
import oko from "../../images/ok.svg";
import video from "../../images/video.png";
import robot from "../../images/robot2.svg";
import camera from "../../images/camera.png";
import camera1 from "../../images/camera1.png";


const OkoPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.tornado_block}>
				 <div className={classes.title_and_img}>
					 <h2 className={classes.oko_tit}>OKO</h2>
					 <img src={video} alt=""/>
				 </div>
				 <div className={classes.tornado_subtitle}>
					 <p>Механизм наведения телекамер «Око» — это универсальная поворотная
						 система для высокоточного видеонаблюдения, обеспечивающая надежность
						 и качество съемки в самых экстремальных условиях. Подходит для использования
						 в охранных системах, на промышленных объектах,
						 в транспортных комплексах и в любых сценариях,
						 где требуется детализированное видеонаблюдение</p>
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
						 <img src={ru} alt=""/>
						 <div className={classes.block_title_subtitle}>
							 <h2>Две FHD телекамеры в базовой комплектации</h2>
							 <p>Одна широкоугольная камера для общего обзора и вторая камера
								 с оптическим зумом, обеспечивающая 160-кратное оптическое и до
								 1600-кратное цифровое приближение.
								 Такое сочетание позволяет получать и общее представление,
								 и детализированное изображение одновременно</p>
						 </div>
					 </div>

					 <div className={classes.block}>
						 <img src={uneven} alt=""/>
						 <div className={classes.block_title_subtitle}>
							 <h2>Высокая точность и скорость поворота</h2>
							 <p>Плавное и быстрое наведение с углом поворота до
								 350°/сек и точностью до 0,009°,
								 что позволяет мгновенно реагировать на изменения
								 и обеспечивать точное отслеживание объектов</p>
						 </div>
					 </div>

					 <div className={classes.block}>
						 <img src={remoteControl} alt=""/>
						 <div className={classes.block_title_subtitle}>
							 <h2>Прочная конструкция и высокая устойчивость</h2>
							 <p>Механизм защищен от внешних воздействий,
								 выдерживает усилия до 30 кгс и рассчитан на эксплуатацию
								 при температурах от -40 до +40°C. Идеален для
								 работы в суровых погодных условиях</p>
						 </div>
					 </div>

					 <div className={classes.block}>
						 <img src={modular} alt=""/>
						 <div className={classes.block_title_subtitle}>
							 <h2>Светодиодный осветитель</h2>
							 <p>Встроенный мощный осветитель с яркостью
								 900 люмен позволяет вести съемку даже в
								 полной темноте, обеспечивая четкое изображение
								 при низкой освещенности</p>
						 </div>
					 </div>

					 <div className={classes.block}>
						 <img src={ru} alt=""/>
						 <div className={classes.block_title_subtitle}>
							 <h2>Полная модульность и гибкость</h2>
							 <p>Механизм может комплектоваться различными видеоблоками:
								 телевизионными, тепловизионными или комбинированными модулями.
								 Возможны варианты с одним или двумя объективами, различными фокусными расстояниями,
								 а также оснащение микрофоном, дальномером или осветителем видимого/ИК диапазона</p>
						 </div>
					 </div>

					 <div className={classes.block}>
						 <img src={remoteControl} alt=""/>
						 <div className={classes.block_title_subtitle}>
							 <h2>Готовность к нестандартным задачам</h2>
							 <p>Модульное исполнение и возможность доработки под
								 требования заказчика позволяют использовать устройство как в
								 наших робототехнических комплексах, так и в
								 составе выносных систем или стационарных объектов</p>
						 </div>
					 </div>
				 </div>
			 </section>


			 <section className={classes.modifications}>
				 <div className={classes.peculiarities_title}>
					 <h2>Варианты поставки</h2>
					 <p>Выберите модификацию под ваши уникальные задачи</p>
				 </div>

				 <div className={classes.block_oko}>
					 <div className={classes.oko}>
						 <div className={classes.oko_title}>
							 <h2>В составе наших робототехнических комплексов</h2>
							 <p>Полностью готовое решение для роботизированных систем
								 видеонаблюдения с интеграцией механизма «Око»</p>
						 </div>
						 <img src={robot} alt=""/>
					 </div>

					 <div className={classes.oko}>
						 <img src={camera} alt=""/>
						 <div className={classes.oko_title}>
							 <h2>Отдельное устройство для комплектации оборудования заказчика</h2>
							 <p>Используйте наши разработки для оснащения ваших систем — добавляйте универсальные
								 модули «Око» для получения качественного изображения и надежного управления
							 </p>
						 </div>
					 </div>


					 <div className={classes.oko}>
						 <div className={classes.oko_title}>
							 <h2>Модуль технического зрения для обхода препятствий</h2>
							 <p>Универсальная поворотная телекамера «Око» позволяет
								 вести круглосуточное наблюдение в самых
								 суровых условиях окружающей среды.
							 </p>
						 </div>
						 <img src={camera1} alt=""/>
					 </div>
				 </div>
			 </section>
		 </main>
	);
};

export default OkoPage;
