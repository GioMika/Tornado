import classes from './index.module.css'
import coin from "../../images/coin.svg";
import expenses from "../../images/expenses.svg";
import cash from "../../images/cash-payment.svg";
import automobile from "../../images/automobile.svg";
import russia from "../../images/russia.svg";

const LeasingPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.first_block}>
				 <div className={classes.block_title}>
					 <h2>Лизинг роботов — оптимальное решение для развития </h2>
				 </div>
				 <div className={classes.block_sub_title}>
					 <p>Откройте для себя новые возможности без необходимости крупных начальных инвестиций!</p>

					 <p>Лизинг роботов — это гибкий и удобный способ использования передовых технологий с
						 возможностью полного владения оборудованием в будущем. Подходит для компаний,
						 которые хотят внедрять инновации и при этом эффективно управлять своими финансами.</p>
				 </div>
			 </section>


			 <section className={classes.second_block}>
				 <div className={classes.content_block}>
					 <h2>Преимущества <br/> лизинга</h2>
					 <div className={classes.all_blocks}>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={coin} alt=""/>
								 <h3>Минимальные стартовые затраты</h3>
							 </div>
							 <p>Получите доступ к современному оборудованию без крупных первоначальных
								 вложений. Лизинг позволяет вам использовать самые актуальные
								 технологии, оплачивая робот частями на протяжении всего срока договора</p>
						 </div>


						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={expenses} alt=""/>
								 <h3>Гибкие финансовые <br/> условия</h3>
							 </div>
							 <p>Вы сами выбираете удобный график платежей, исходя из потребностей
								 вашего бизнеса. Снижение финансовой нагрузки помогает оптимизировать
								 бюджет и высвободить средства для других задач</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={cash} alt=""/>
								 <h3>Стабильные и <br/> предсказуемые платежи</h3>
							 </div>
							 <p>Забудьте о непредвиденных расходах. Ваша ежемесячная
								 плата фиксирована на весь срок лизинга,
								 что упрощает управление финансами и снижает риски</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={automobile} alt=""/>
								 <h3>Полное техническое сопровождение</h3>
							 </div>
							 <p>На протяжении всего срока лизинга мы предоставляем
								 техническое обслуживание и ремонт оборудования.
								 Вы можете быть уверены, что ваши роботы всегда будут в отличном рабочем состоянии</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={russia} alt=""/>
								 <h3>Переход к полной собственности</h3>
							 </div>
							 <p>По окончании лизингового срока вы получаете возможность выкупить
								 робот по остаточной стоимости, становясь его полноправным владельцем.
								 Это дает вам уверенность в будущем и позволяет планировать долгосрочное использование</p>
						 </div>

						 <div className={classes.blocks}>
							 <div className={classes.block_title_img}>
								 <img className={classes.imgs} src={russia} alt=""/>
								 <h3>Актуальность технологий</h3>
							 </div>
							 <p>Лизинг дает вам доступ к новейшим алгоритмам и
								 регулярным обновлениям программного обеспечения. Вы всегда будете пользоваться
								 самыми современными решениями, даже если технологии быстро меняются</p>
						 </div>
					 </div>
				 </div>
				 <h2 className={classes.sub_block_ttitle}>Выбирайте современное оборудование с перспективой полной
					 собственности и уверенности в стабильности вашего производства!</h2>
				 <button className={classes.btn}>Узнать условия</button>
			 </section>
		 </main>
	);
};

export default LeasingPage;
