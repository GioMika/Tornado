import classes from './index.module.css'
import russia from "../../images/russia.svg";

const EquippingPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.first_block}>
				 <div className={classes.block_title}>
					 <h2>Дооснащение и модификация — создайте робота под ключ</h2>
				 </div>
				 <div className={classes.block_sub_title}>
					 <p>Необходим индивидуальный подход? Мы адаптируем робот под ваши уникальные задачи</p>
				 </div>
			 </section>
			 <section className={classes.second_block}>
				 <div className={classes.content_block}>
					 <h2>Полный спектр <br/> услуг по <br/> модернизации <br/> и интеграции <br/> оборудования</h2>
					 <div className={classes.all_blocks}>
						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={russia} alt=""/>
								 <h3>Дооснащение роботов сторонними устройствами</h3>
							 </div>
							 <p>Добавьте на вашего робота собственное оборудование или любые
								 дополнительные модули, чтобы расширить его функциональные возможности.
								 Мы поддерживаем установку датчиков, манипуляторов, камер, систем связи и других компонентов</p>
						 </div>
						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={russia} alt=""/>
								 <h3>Интеграция наших продуктов в вашу систему</h3>
							 </div>
							 <p>Если у вас уже есть собственное решение или техника,
								 мы поможем вам интегрировать наши роботизированные модули, программное обеспечение и контроллеры в вашу
								 инфраструктуру.
								 Это позволит вам повысить эффективность и функциональность текущих процессов</p>
						 </div>
						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={russia} alt=""/>
								 <h3>Выбор из нашего каталога дооснащений</h3>
							 </div>
							 <p>Подберите дополнительные элементы из нашего ассортимента - от
								 специализированных манипуляторов и сенсорных систем до модулей расширения.
								 Мы предлагаем только проверенные решения, чтобы ваш робот работал с максимальной отдачей</p>
						 </div>
						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={russia} alt=""/>
								 <h3>Индивидуальные <br/> проекты</h3>
							 </div>
							 <p>Нужны нестандартные решения?
								 Мы готовы разработать уникальные комплектации и адаптировать робота под конкретные задачи</p>
						 </div>
					 </div>
				 </div>
				 <h2 className={classes.sub_block_ttitle}>RCRobotics — это ваш путь
					 к созданию робота, который работает так, как вам нужно!</h2>
				 <button className={classes.btn}>Узнать условия</button>
			 </section>
		 </main>
	);
};

export default EquippingPage;
