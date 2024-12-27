import classes from './index.module.css'
import service from "../../images/service1.png";
import digitalization from "../../images/digitalization1.png";
import puzzle from "../../images/puzzle.png";
import money_growth from "../../images/money-growth.png";
import coin from "../../images/coin.svg";
import rent_2 from "../../images/rent_2.svg";
import alter from "../../images/alter.svg";
import maximize from "../../images/maximize.svg";
import freedom from "../../images/freedom.svg";
import expenses from "../../images/expenses.svg";



const RentPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.first_block}>
				 <div className={classes.block_title}>
					 <h2>Аренда роботов — максимальная выгода и гибкость для вас</h2>
				 </div>
				 <div className={classes.block_sub_title}>
					 <p>Повысьте производительность и оптимизируйте расходы, используя наших роботов
						 на условиях аренды! С арендой вы получаете доступ к передовым технологиям и
						 полной технической поддержке без необходимости крупных капиталовложений</p>
				 </div>
			 </section>


			 <section className={classes.second_block}>
				 <div className={classes.content_block}>
					 <h2>Преимущества <br/> аренды</h2>
					 <div className={classes.all_blocks}>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={coin} alt=""/>
								 <h3>Минимальные стартовые вложения</h3>
							 </div>
							 <p>Забудьте о высоких первоначальных затратах на покупку оборудования. Арендуйте робота и начните
								 использовать его
								 функционал с первого дня, оплачивая только фиксированную ежемесячную сумму</p>
						 </div>


						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.digitalization_img} src={digitalization} alt=""/>
								 <h4>Регулярные обновления программного <br/> обеспечения</h4>
							 </div>
							 <p>Используйте самые последние функции и исправления, чтобы роботы всегда соответствовали вашим
								 требованиям и задачам. Все обновления включены в стоимость аренды</p>
						 </div>


						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={rent_2} alt=""/>
								 <h3>Гибкие условия аренды</h3>
							 </div>
							 <p>Выбирайте сроки аренды, которые подходят вашему проекту: краткосрочная
								 аренда для выполнения отдельных задач или
								 долгосрочная аренда для постоянных процессов — мы готовы подстроиться под ваш ритм</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={service} alt=""/>
								 <h3>Неограниченное обслуживание и ремонт</h3>
							 </div>
							 <p>Наша техническая поддержка всегда на связи! Легкие поломки устраняются без дополнительных
								 затрат, а оборудование регулярно проходит диагностику и техническое обслуживание</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={alter} alt=""/>
								 <h3>Возможность быстрой замены</h3>
							 </div>
							 <p>Если ваш робот выходит из строя или не соответствует новым требованиям, мы предоставляем замену
								 без дополнительных затрат. Больше не нужно переживать за простой производства</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={maximize} alt=""/>
								 <h3>Адаптивность и масштабируемость</h3>
							 </div>
							 <p>Нужен дополнительный робот или смена моделей? Аренда позволяет вам легко
								 масштабировать парк роботов, адаптируясь к меняющимся условиям и потребностям</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={freedom} alt=""/>
								 <h3>Свобода выбора</h3>
							 </div>
							 <p>Тестируйте разные модели и функции, находите оптимальные решения и меняйте роботов по мере
								 необходимости. Аренда — это идеальный способ протестировать новые технологии без риска</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={expenses} alt=""/>
								 <h3>Все расходы под <br/> контролем</h3>
							 </div>
							 <p>Прозрачные условия аренды: один договор — одна сумма.
								 Никаких скрытых платежей или непредвиденных расходов.
								 Вы всегда знаете, сколько платите и за что</p>
						 </div>

					 </div>
				 </div>
				 <h2 className={classes.sub_block_ttitle}>Оформите аренду сегодня и оцените все преимущества современных
					 технологий без сложностей и дополнительных затрат</h2>
				 <button className={classes.btn}>Офрмить подписку</button>
			 </section>
		 </main>
	);
};

export default RentPage;
