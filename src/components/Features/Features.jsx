import classes from './Features.module.css';
import ru from '../../images/ru.svg';
import hammer from '../../images/hammer 1.svg';
import remoteControl from '../../images/remote-control.svg';
import modular from '../../images/modular.svg';
import waterProof from '../../images/water-proof.svg';
import Products from "../Products/Products";

const Features = () => {
	return (
		 <>
			 <section className={classes.main_section}>
				 <div className={classes.block_title}>
					 <h2>Особенности</h2>
					 <p>Передовые разработки в области инженерии</p>
				 </div>
				 <div className={classes.block_widgets}>
					 <div className={classes.widget}>
						 <img className={classes.img} src={ru} alt=""/>
						 <div className={classes.widgets_title}>
							 <h2>Сделано в России</h2>
							 <p>Полностью Российская разработка и сборка</p>
						 </div>
					 </div>

					 <div className={classes.widget}>
						 <img className={classes.img} src={hammer} alt=""/>
						 <div className={classes.widgets_title}>
							 <h2>Ударопрочность</h2>
							 <p>Каждый корпус изготовлен из износостойкого и ударопрочного материала</p>
						 </div>
					 </div>

					 <div className={classes.widget}>
						 <img className={classes.img} src={remoteControl} alt=""/>
						 <div className={classes.widgets_title}>
							 <h2>Дистанционное и автоматическое управление</h2>
							 <p>Доступны варианты управления по радио, кабелю или в автоматическом режиме</p>
						 </div>
					 </div>

					 <div className={classes.widget}>
						 <img className={classes.img} src={modular} alt=""/>
						 <div className={classes.widgets_title}>
							 <h2>Модульность</h2>
							 <p>Все отдельные узлы способны быть модифицированы под задачи клиентов</p>
						 </div>
					 </div>

					 <div className={classes.widget}>
						 <img className={classes.img} src={waterProof} alt=""/>
						 <div className={classes.widgets_title}>
							 <h2>Герметичность и морозоустойчивость</h2>
							 <p>Техника подготовлена к работе при температурах от -30 до +50°С и имеет класс защиты IPХ7</p>
						 </div>
					 </div>
				 </div>
			 </section>
			 <Products/>
		 </>
	)
};

export default Features;
