import classes from './index.module.css';
import coin from "../../images/coin.svg";
import expenses from "../../images/expenses.svg";
import cash from "../../images/cash-payment.svg";
import automobile from "../../images/automobile.svg";
import russia from "../../images/russia.svg";

const leasingAdvantages = [
	{
		id: 1,
		title: 'Минимальные стартовые затраты',
		text: 'Получите доступ к современному оборудованию без крупных первоначальных вложений. Лизинг позволяет вам использовать самые актуальные технологии, оплачивая робот частями на протяжении всего срока договора',
		image: coin,
		headingTag: 'h3',
	},
	{
		id: 2,
		title: 'Гибкие финансовые <br/> условия',
		text: 'Вы сами выбираете удобный график платежей, исходя из потребностей вашего бизнеса. Снижение финансовой нагрузки помогает оптимизировать бюджет и высвободить средства для других задач',
		image: expenses,
		headingTag: 'h3',
	},
	{
		id: 3,
		title: 'Стабильные и <br/> предсказуемые платежи',
		text: 'Забудьте о непредвиденных расходах. Ваша ежемесячная плата фиксирована на весь срок лизинга, что упрощает управление финансами и снижает риски',
		image: cash,
		headingTag: 'h3',
	},
	{
		id: 4,
		title: 'Полное техническое сопровождение',
		text: 'На протяжении всего срока лизинга мы предоставляем техническое обслуживание и ремонт оборудования. Вы можете быть уверены, что ваши роботы всегда будут в отличном рабочем состоянии',
		image: automobile,
		headingTag: 'h3',
	},
	{
		id: 5,
		title: 'Переход к полной собственности',
		text: 'По окончании лизингового срока вы получаете возможность выкупить робот по остаточной стоимости, становясь его полноправным владельцем. Это дает вам уверенность в будущем и позволяет планировать долгосрочное использование',
		image: russia,
		headingTag: 'h3',
	},
	{
		id: 6,
		title: 'Актуальность технологий',
		text: 'Лизинг дает вам доступ к новейшим алгоритмам и регулярным обновлениям программного обеспечения. Вы всегда будете пользоваться самыми современными решениями, даже если технологии быстро меняются',
		image: russia,
		headingTag: 'h3',
	},
];

const LeasingPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.first_block}>
				 <div className={classes.block_title}>
					 <h2>Лизинг роботов — оптимальное решение для развития </h2>
				 </div>
				 <div className={classes.block_sub_title}>
					 <p>Откройте для себя новые возможности без необходимости крупных начальных инвестиций!</p>
					 <p>Лизинг роботов — это гибкий и удобный способ использования передовых технологий с возможностью полного владения оборудованием в будущем. Подходит для компаний, которые хотят внедрять инновации и при этом эффективно управлять своими финансами.</p>
				 </div>
			 </section>

			 <section className={classes.second_block}>
				 <div className={classes.content_block}>
					 <h2>Преимущества <br /> лизинга</h2>
					 <div className={classes.all_blocks}>
						 {leasingAdvantages.map(({ id, title, text, image, headingTag }) => {
							 const Heading = headingTag;
							 return (
									<div key={id} className={classes.blocks}>
										<div className={classes.block_title_img}>
											<img className={classes.imgs} src={image} alt="" />
											<Heading dangerouslySetInnerHTML={{ __html: title }} />
										</div>
										<p>{text}</p>
									</div>
							 );
						 })}
					 </div>
				 </div>
				 <h2 className={classes.sub_block_ttitle}>
					 Выбирайте современное оборудование с перспективой полной собственности и уверенности в стабильности вашего производства!
				 </h2>
				 <button className={classes.btn}>Узнать условия</button>
			 </section>
		 </main>
	);
};

export default LeasingPage;
