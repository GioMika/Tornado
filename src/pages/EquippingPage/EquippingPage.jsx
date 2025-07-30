import classes from './index.module.css';
import img1 from "./imgs/Sub-1.png";
import img2 from "./imgs/Sub-2.png";
import img3 from "./imgs/Sub-3.png";
import img4 from "./imgs/Sub-4.png";

const EQUIPPING_ADVANTAGES = [
	{
		id: 1,
		title: 'Дооснащение роботов сторонними устройствами',
		text: 'Добавьте на вашего робота собственное оборудование или любые дополнительные модули, чтобы расширить его функциональные возможности. Мы поддерживаем установку датчиков, манипуляторов, камер, систем связи и других компонентов',
		image: img1,
	},
	{
		id: 2,
		title: 'Интеграция наших продуктов в вашу систему',
		text: 'Если у вас уже есть собственное решение или техника, мы поможем вам интегрировать наши роботизированные модули, программное обеспечение и контроллеры в вашу инфраструктуру. Это позволит вам повысить эффективность и функциональность текущих процессов',
		image: img2,
	},
	{
		id: 3,
		title: 'Выбор из нашего каталога дооснащений',
		text: 'Подберите дополнительные элементы из нашего ассортимента - от специализированных манипуляторов и сенсорных систем до модулей расширения. Мы предлагаем только проверенные решения, чтобы ваш робот работал с максимальной отдачей',
		image: img3,
	},
	{
		id: 4,
		title: 'Индивидуальные <br/> проекты',
		text: 'Нужны нестандартные решения? Мы готовы разработать уникальные комплектации и адаптировать робота под конкретные задачи',
		image: img4,
	},
];

const AdvantageCard = ({ advantage }) => (
	 <div className={classes.card}>
		 <div className={classes.cardHeader}>
			 <img className={classes.cardIcon} src={advantage.image} alt="" />
			 <h3 dangerouslySetInnerHTML={{ __html: advantage.title }} />
		 </div>
		 <p className={classes.cardText}>{advantage.text}</p>
	 </div>
);

const EquippingPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.heroSection}>
				 <div className={classes.heroContent}>
					 <div className={classes.heroTitle}>
						 <h2>Дооснащение и модификация — создайте робота под ключ</h2>
					 </div>
					 <div className={classes.heroSubtitle}>
						 <p>Необходим индивидуальный подход? Мы адаптируем робот под ваши уникальные задачи</p>
					 </div>
				 </div>
			 </section>

			 <section className={classes.servicesSection}>
				 <div className={classes.servicesContent}>
					 <h2 className={classes.sectionTitle}>
						 Полный спектр  услуг по  модернизации  и интеграции  оборудования
					 </h2>
					 <div className={classes.cardsGrid}>
						 {EQUIPPING_ADVANTAGES.map(advantage => (
								<AdvantageCard key={advantage.id} advantage={advantage} />
						 ))}
					 </div>
				 </div>
				 <h2 className={classes.ctaTitle}>
					 RCRobotics — это ваш путь к созданию робота, который работает так, как вам нужно!
				 </h2>
				 <button className={classes.ctaButton}>Узнать условия</button>
			 </section>
		 </main>
	);
};

export default EquippingPage;
