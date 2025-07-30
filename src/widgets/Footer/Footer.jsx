import classes from './Footer.module.css'
import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";
import tel from './icons/telegram 1.svg'
import What from './icons/What.svg'
import inst from './icons/Insta.svg'

const Footer = () => {
	return (
		 <footer className={classes.footer}>
			 <div className={classes.main}>
				 <div className={classes.contacts}>
					 <img className={classes.logo} src={logo} alt=""/>
					 <img className={classes.logoMobile} src={logo} alt=""/>
					 <div className={classes.paragraph_block}>
						 <h5>Адрес: ул. рроаып</h5>
						 <h5>Телефон : + 7 (499) 367 01 18</h5>
						 <h5>Почта : info@rcrobotics.ru</h5>
						 <div className={classes.span_block}>
							 <span className={classes.span}>
								 <img src={tel} alt=""/>
							 </span>
							 <span className={classes.span}> <img src={What} alt=""/></span>
							 <span className={classes.span}> <img src={inst} alt=""/></span>
						 </div>
					 </div>
				 </div>

				 <div className={classes.products}>
					 <h2>Продукция</h2>
					 <div className={classes.products_block}>
						 <Link to="/robots">
							 <p>Роботы</p>
						 </Link>
						 <Link to="/manipulators">
							 <p>Манипуляторы</p>
						 </Link>
						 <p>Системы видеонаблюдения</p>
						 <Link to="/panels">
							 <p>Пульты управления</p>
						 </Link>
						 <Link to="/retrofitting">
							 <p>Дооснащение</p>
						 </Link>
						 <Link to="/accessories">
							 <p>Комплектующие</p>
						 </Link>
					 </div>
				 </div>

				 <div className={classes.products}>
					 <h2>Услуги</h2>
					 <Link className={classes.link} to="/subscription">
						 <p className={classes.subtitle}>Годовая подписка на
							 программную  <br/> модернизацию
							 и мелкий ремонт</p>
					 </Link>
					 <div className={classes.products_block}>
						 <Link to="/rent">
							 <p>Аренда</p>
						 </Link>
						 <Link to="/leasing">
							 <p>Лизинг</p>
						 </Link>
						 <Link to="/equipping">
							 <p>Дооснащение и модификация</p>
						 </Link>
					 </div>
				 </div>

				 <div className={classes.products}>
					 <h2>Сервис</h2>
					 <div className={classes.products_block}>
						 <p>Ремонт</p>
						 <p>Лист модернизаций</p>
					 </div>
				 </div>
			 </div>
			 <div className={classes.line}></div>
			 <div className={classes.footer_block}>
				 <p>ООО "RCRobotics"</p>
				 <p>С 2024 Все права защищены</p>
			 </div>
		 </footer>
	);
};

export default Footer;
