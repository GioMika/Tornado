import classes from './Products.module.css';
import robot from '../../images/robot2.svg';
import robot_2 from '../../images/robot_2.svg';
import oko from '../../images/oko.svg';
import Button from "../../helpers/Button/Button";
import Services from "../Services/Services";
import {useNavigate} from "react-router-dom";

const Products = () => {
	const navigate = useNavigate();
	const handelNavigate = (path) => {
		navigate(path)
	}


	return (
		 <>
			 <div className={classes.container}>
				 <div className={classes.main_title}>
					 <h2>Продукция</h2>
					 <p>Что мы предлагаем?</p>
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

				 <div onClick={() => handelNavigate('/oko')} className={classes.fullWidthBlock}>
					 <div className={classes.imageBlock}>
						 <img className={classes.oko} src={oko} alt="Placeholder"/>
					 </div>
					 <div className={classes.textBlock}>
						 <h2 className={classes.title_tornado_oko}>Око (Видеонаблюдение)</h2>
						 <h2 className={classes.title_tornado_oko2}>Око</h2>
						 <div className={classes.first_text}>
							 <p>Универсальная поворотная телекамера «Око» позволяет вести
								 круглосуточное наблюдение в самых суровых условиях окружающей среды.</p>
						 </div>
						 <div className={classes.text}>
							 <h3>Варианты поставки</h3>
							 <li> В составе наших робототехнических комплексов</li>
							 <li>Выносная система видеонаблюдения</li>
							 <li> Отдельное устройство для комплектации оборудования заказчика</li>
								 <Button className={classes.btns}>Подробнее</Button>
						 </div>
					 </div>
				 </div>
				 <div className={classes.block_btn}>
					 <Button className={classes.button}>Подробнее</Button>
				 </div>
			 </div>
			 <Services/>
		 </>
	);
};

export default Products;
