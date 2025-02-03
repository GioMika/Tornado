import classes from './index.module.css'
import Button from "../../helpers/Button/Button";
import robot from "../../images/robot2.svg";
import robot_2 from "../../images/robot_2.svg";
import {useNavigate} from "react-router-dom";

const RobotsComplexPage = () => {
	const navigate = useNavigate();
	const handelNavigate = (path) => {
		navigate(path)
	}

	return (
		 <div className={classes.container}>
			 <div className={classes.main_title}>
				 <h2 className={classes.h2}>Роботизированные <br/> комплексы</h2>
			 </div>
			 <div className={classes.topBlocks}>
				 <div onClick={() => handelNavigate('/tornado')} className={classes.block}>
					 <div className={classes.textBlock}>
						 <h2 className={classes.title_tornado}>Торнадо (колесно-шагающий)</h2>
						 <h2 className={classes.title_tornado2}>Торнадо</h2>
						 <div className={classes.paragraph}>
							 <span>Колесно-шагающий мобильный робот малого класса с грузоподъемностью до 25кг.</span>
						 </div>
						 <Button className={classes.btns}>Подробнее</Button>
					 </div>
					 <div className={classes.imageBlock}>
						 <img className={classes.robot} src={robot} alt="Placeholder"/>
						 <img className={classes.robot_2} src={robot_2} alt="Placeholder"/>
					 </div>
				 </div>
				 <div onClick={() => handelNavigate('/typhoon')} className={classes.block}>
					 <div className={classes.textBlock}>
						 <h2 className={classes.title_tornado}>Тайфун (колесно-шагающий)</h2>
						 <h2 className={classes.title_tornado2}>Тайфун</h2>
						 <div className={classes.para_robot}>
							 <span>Колесно-шагающий мобильный робот среднего класса с грузоподъемностью до 115кг.</span>
						 </div>
						 <Button className={classes.btns}>Подробнее</Button>
					 </div>
					 <div className={classes.imageBlock}>
						 <img className={classes.robot} src={robot} alt="Placeholder"/>
						 <img className={classes.robot_2} src={robot_2} alt="Placeholder"/>
					 </div>
				 </div>
			 </div>

			 <div className={classes.fullWidthBlock}>
				 <div className={classes.textBlock}>
					 <div className={classes.text}>
						 <h3>Архивные модели</h3>
						 <p>Эти модели роботов устарели и сняты с производства.</p>
						 <li>Кобра</li>
						 <li>Мангуст</li>
						 <li>Верхолаз</li>
						 <li>Варан</li>
						 <li>Вездеход ТМ3</li>
						 <li>УТК</li>
						 <Button className={classes.btn}>Подробнее</Button>
					 </div>
				 </div>
			 </div>
		 </div>
	);
};

export default RobotsComplexPage;
