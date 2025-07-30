import classes from './index.module.css';
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

const rentAdvantages = [
	{
		id: 1,
		title: 'Минимальные стартовые вложения',
		text: 'Забудьте о высоких первоначальных затратах на покупку оборудования. Арендуйте робота и начните использовать его функционал с первого дня, оплачивая только фиксированную ежемесячную сумму',
		image: coin,
		headingTag: 'h3',
	},
	{
		id: 2,
		title: 'Регулярные обновления программного \n обеспечения',
		text: 'Используйте самые последние функции и исправления, чтобы роботы всегда соответствовали вашим требованиям и задачам. Все обновления включены в стоимость аренды',
		image: digitalization,
		headingTag: 'h4',
		className: classes.digitalization_img,
	},
	{
		id: 3,
		title: 'Гибкие условия аренды',
		text: 'Выбирайте сроки аренды, которые подходят вашему проекту: краткосрочная аренда для выполнения отдельных задач или долгосрочная аренда для постоянных процессов — мы готовы подстроиться под ваш ритм',
		image: rent_2,
		headingTag: 'h3',
	},
	{
		id: 4,
		title: 'Неограниченное обслуживание и ремонт',
		text: 'Наша техническая поддержка всегда на связи! Легкие поломки устраняются без дополнительных затрат, а оборудование регулярно проходит диагностику и техническое обслуживание',
		image: service,
		headingTag: 'h3',
	},
	{
		id: 5,
		title: 'Возможность быстрой замены',
		text: 'Если ваш робот выходит из строя или не соответствует новым требованиям, мы предоставляем замену без дополнительных затрат. Больше не нужно переживать за простой производства',
		image: alter,
		headingTag: 'h3',
	},
	{
		id: 6,
		title: 'Адаптивность и масштабируемость',
		text: 'Нужен дополнительный робот или смена моделей? Аренда позволяет вам легко масштабировать парк роботов, адаптируясь к меняющимся условиям и потребностям',
		image: maximize,
		headingTag: 'h3',
	},
	{
		id: 7,
		title: 'Свобода выбора',
		text: 'Тестируйте разные модели и функции, находите оптимальные решения и меняйте роботов по мере необходимости. Аренда — это идеальный способ протестировать новые технологии без риска',
		image: freedom,
		headingTag: 'h3',
	},
	{
		id: 8,
		title: 'Все расходы под \n контролем',
		text: 'Прозрачные условия аренды: один договор — одна сумма. Никаких скрытых платежей или непредвиденных расходов. Вы всегда знаете, сколько платите и за что',
		image: expenses,
		headingTag: 'h3',
	},
];

const RentPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.first_block}>
				 <div className={classes.block_title}>
					 <h2>Аренда роботов — максимальная выгода и гибкость для вас</h2>
				 </div>
				 <div className={classes.block_sub_title}>
					 <p>
						 Повысьте производительность и оптимизируйте расходы, используя наших роботов на условиях аренды! С арендой вы получаете доступ к передовым технологиям и полной технической поддержке без необходимости крупных капиталовложений
					 </p>
				 </div>
			 </section>

			 <section className={classes.second_block}>
				 <div className={classes.content_block}>
					 <h2>Преимущества <br /> аренды</h2>
					 <div className={classes.all_blocks}>
						 {rentAdvantages.map(({ id, title, text, image, headingTag, className }) => {
							 const Heading = headingTag;
							 return (
									<div key={id} className={classes.blocks}>
										<div className={classes.block_title_img}>
											<img className={className || classes.imgs} src={image} alt="" />
											<Heading dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }} />
										</div>
										<p>{text}</p>
									</div>
							 );
						 })}
					 </div>
				 </div>
				 <h2 className={classes.sub_block_ttitle}>
					 Оформите аренду сегодня и оцените все преимущества современных технологий без сложностей и дополнительных затрат
				 </h2>
				 <button className={classes.btn}>Офрмить подписку</button>
			 </section>
		 </main>
	);
};

export default RentPage;
