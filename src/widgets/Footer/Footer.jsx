import classes from './Footer.module.css'
import logo from '../../images/logo.svg'
import logoMobile from '../../images/logoMobile.svg'
import {Link} from "react-router-dom";

const Footer = () => {
	return (
		 <footer className={classes.footer}>
			 <div className={classes.main}>
				 <div className={classes.contacts}>
					 <img className={classes.logo} src={logo} alt=""/>
					 <img className={classes.logoMobile} src={logoMobile} alt=""/>
					 <div className={classes.paragraph_block}>
						 <p>Адрес: ул. рроаып</p>
						 <p> Телефон</p>
						 <p>Почта</p>
						 <div className={classes.span_block}>
							 <span className={classes.span}></span>
							 <span className={classes.span}></span>
							 <span className={classes.span}></span>
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
							 <br/> программную модернизацию<br/>
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

				 <div className={classes.footer_mobile}>
					 <div className={classes.products_mobile}>
						 <h2>Продукция</h2>
						 <Link to="/robots">
							 <p>Модель 1</p>
						 </Link>
						 <Link to="/manipulators">
							 <p>Модель 2</p>
						 </Link>
						 <p>Модель 3</p>
						 <Link to="/panels">
							 <p>Модель 4</p>
						 </Link>


						 <h2 className={classes.company_title}>Компания</h2>
						 <p>О нас</p>
						 <p>Контакты</p>
						 <p>Политика  конфиденциальности</p>
						 <p>FAQ</p>


						 <h2 className={classes.company_title}>Услуги</h2>
						 <p>Сервис</p>
					 </div>
					 <div className={classes.products_mobile}>
						 {/*<h2>Услуги</h2>*/}
						 {/*<p>Сервис</p>*/}
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
				 <p>ООО “RCRobotics”</p>
				 <p>С 2024 Все права защищены</p>
			 </div>
		 </footer>
	);
};

export default Footer;
