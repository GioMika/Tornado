import classes from './index.module.css';
import service from '../../images/service1.png';
import digitalization from '../../images/digitalization1.png';
import puzzle from '../../images/puzzle.png';
import money_growth from '../../images/money-growth.png';

const advantages = [
	{
		id: 1,
		title: 'Неограниченные \n ремонты мелких поломок',
		text: 'Если ваши роботы столкнулись с легкими неисправностями или требуется быстрая настройка, наш сервисный центр всегда готов к оперативной помощи — и все это уже включено в стоимость подписки',
		image: service,
		headingTag: 'h3',
	},
	{
		id: 2,
		title: 'Регулярные обновления \n программного \n обеспечения',
		text: 'Получайте самые свежие оптимизации алгоритмов и исправления ошибок. Ваши устройства всегда будут работать на максимуме своих возможностей',
		image: digitalization,
		headingTag: 'h4',
		className: classes.digitalization_img,
	},
	{
		id: 3,
		title: 'Новые возможности и \n функции',
		text: 'Обновляйте свое оборудование с новыми программными решениями и функциями, которые делают ваших роботов умнее и эффективнее',
		image: puzzle,
		headingTag: 'h3',
	},
	{
		id: 4,
		title: 'Экономия времени и \n средств',
		text: 'Единоразовый годовой платеж предотвращает непредвиденные расходы и бюрократические процедуры, связанные с ремонтом и обновлениями',
		image: money_growth,
		headingTag: 'h3',
	},
];

const SubscriptionPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.first_block}>
				 <div className={classes.block_title}>
					 <h2>Годовая подписка на ремонт и обновление ПО — Ваша гарантия надежности и инноваций</h2>
				 </div>
				 <div className={classes.block_sub_title}>
					 <p>
						 Держите своих роботов на пике возможностей и производительности с нашей уникальной подпиской на сервисное
						 обслуживание и обновление программного обеспечения!
					 </p>
				 </div>
			 </section>

			 <section className={classes.second_block}>
				 <div className={classes.content_block}>
					 <h2>С этим планом <br /> вы получаете:</h2>
					 <div className={classes.all_blocks}>
						 {advantages.map(({ id, title, text, image, headingTag, className }) => {
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
					 Присоединяйтесь к программе подписки и подарите вашим роботам вторую жизнь!
				 </h2>
				 <button className={classes.btn}>Офрмить подписку</button>
			 </section>

			 <section className={classes.third_block}>
				 <div className={classes.block_subtitle}>
					 <h2>Почему это выгодно?</h2>
					 <p>В каких областях мы можем помочь</p>
				 </div>
				 <div className={classes.numbers_block}>
					 <div className={classes.blocks_paragraph}>
						 <p className={classes.nubber_1}>01</p>
						 <p className={classes.paragraph}>Уверенность в стабильной работе оборудования</p>
						 <p className={classes.small_paragraph}>Меньше простоев — больше эффективности!</p>
					 </div>
					 <div className={classes.blocks_paragraph}>
						 <p className={classes.nubber_2}>02</p>
						 <p className={classes.paragraph}>Минимизация расходов на обслуживание</p>
						 <p className={classes.small_paragraph}>Одна подписка — множество преимуществ!</p>
					 </div>
					 <div className={classes.blocks_paragraph}>
						 <p className={classes.nubber_2}>03</p>
						 <p className={classes.paragraph}>Простота и удобство</p>
						 <p className={classes.small_paragraph}>
							 Мы заботимся о ваших роботах, чтобы вы могли сосредоточиться на своём бизнесе
						 </p>
					 </div>
				 </div>
				 <p className={classes.text}>Оформите подписку сегодня и оставайтесь на шаг впереди!</p>
			 </section>
		 </main>
	);
};

export default SubscriptionPage;
