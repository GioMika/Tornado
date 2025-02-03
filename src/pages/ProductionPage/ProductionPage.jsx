import classes from './index.module.css'
import robots from "../../images/robots.svg";
import manipul from "../../images/manipul.svg";
import tel from "../../images/tel.svg";
import dose from "../../images/dos.svg";
import {useNavigate} from "react-router-dom";


const ProductionPage = () => {
	const navigate = useNavigate();
	const handelNavigate = (path) => {
		navigate(path)
	}

	return (
		 <section className={classes.main_section}>
			 <div className={classes.main_title_block}>
				 <h2>Продукция</h2>
			 </div>

			 <div className={classes.all_blocks}>
				 <div onClick={() => handelNavigate('/robots')} className={classes.robots}>
					 <h2>Роботы</h2>
					 <img className={classes.img_robots} src={robots} alt=""/>
				 </div>
				 <div onClick={() => handelNavigate('/retrofitting')} className={classes.dos}>
					 <h2>Дооснащение</h2>
					 <img className={classes.img_dose} src={dose} alt=""/>
				 </div>
				 <div onClick={() => handelNavigate('/manipulators')} className={classes.manipulation}>
					 <h2>Манипуляторы</h2>
					 <img className={classes.img_manipulation} src={dose} src={manipul} alt=""/>
				 </div>
				 <div onClick={() => handelNavigate('/panels')} className={classes.pults}>
					 <h2>Пульты <br/> управления</h2>
					 <img className={classes.img_tel} src={dose} src={tel} alt=""/>
				 </div>
				 <div onClick={() => handelNavigate('/accessories')} className={classes.complects}>
					 <h2>Комплектующие</h2>
				 </div>
			 </div>
		 </section>
	);
};

export default ProductionPage;
