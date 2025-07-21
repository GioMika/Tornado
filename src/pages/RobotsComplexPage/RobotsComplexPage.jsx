import classes from './index.module.css';
import Button from '../../helpers/Button/Button';
import robot from '../../images/robot2.svg';
import { useNavigate } from 'react-router-dom';
import img1 from './imgs/Sub-1.png'
import img2 from './imgs/Sub-2.png'

const robots = [
	{
		id: 1,
		path: '/tornado',
		title: 'Торнадо (колесно-шагающий)',
		subTitle: 'Торнадо',
		description: 'Колесно-шагающий мобильный робот малого класса с грузоподъемностью до 25кг.',
		image: robot,
	},
	{
		id: 2,
		path: '/typhoon',
		title: 'Тайфун (колесно-шагающий)',
		subTitle: 'Тайфун',
		description: 'Колесно-шагающий мобильный робот среднего класса с грузоподъемностью до 115кг.',
		image: img1,
	}
];

const RobotsComplexPage = () => {
	const navigate = useNavigate();

	return (
		 <div className={classes.container}>
			 <div className={classes.main_title}>
				 <h2 className={classes.h2}>Роботизированные <br /> комплексы</h2>
			 </div>

			 <div className={classes.topBlocks}>
				 {robots.map(({ id, path, title, subTitle, description, image }) => (
						<div key={id} onClick={() => navigate(path)} className={classes.block}>
							<div className={classes.textBlock}>
								<h2 className={classes.title_tornado}>{title}</h2>
								<div className={classes.paragraph}>
									<h2 className={classes.title_tornado2}>{subTitle}</h2>
									<span>{description}</span>
								</div>
								<Button className={classes.btns}>Подробнее</Button>
							</div>
							<div className={classes.imageBlock}>
								<img className={classes.robot} src={image} alt={subTitle} />
								<img className={classes.robot_2} src={image} alt={`${subTitle} 2`} />
							</div>
						</div>
				 ))}
			 </div>

			 <div className={classes.fullWidthBlock}>
				 <img src={img2} alt=""/>
				 <div className={classes.textBlock}>
					 <div className={classes.text}>
						 <h3>Архивные модели</h3>
						 <p>Эти модели роботов устарели и сняты с производства.</p>
						 <ul>
							 <li>Кобра</li>
							 <li>Мангуст</li>
							 <li>Верхолаз</li>
							 <li>Варан</li>
							 <li>Вездеход ТМ3</li>
							 <li>УТК</li>
						 </ul>
						 <Button className={classes.btn}>Подробнее</Button>
					 </div>
				 </div>
			 </div>
		 </div>
	);
};

export default RobotsComplexPage;
