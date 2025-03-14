import classes from "./index.module.css";
import updating from "../../images/updating.svg";
import leasing from "../../images/leasing.svg";
import improvement from "../../images/improvement.svg";
import rent from "../../images/rent.svg";
import {useNavigate} from "react-router-dom";

const ServicesPage = () => {
	const navigate = useNavigate();
	const handelNavigate = (path) => {
		navigate(path)
	}

	return (
		 <section className={classes.main_section}>
			 <div className={classes.main_title_block}>
				 <h2>Услуги</h2>
			 </div>
			 <div className={classes.blocks}>

				 <div onClick={() => handelNavigate('/subscription')} className={classes.block_updating}>
					 <div className={classes.title_updating}>
						 <h2>Годовая подписка на программную модернизацию и мелкий ремонт</h2>
					 </div>
					 <img className={classes.img_updating} src={updating} alt=""/>
				 </div>

				 <div onClick={() => handelNavigate('/leasing')} className={classes.block_leasing}>
					 <div className={classes.title_leasing}>
						 <h2>Лизинг</h2>
					 </div>
					 <img className={classes.img_leasing} src={leasing} alt=""/>
				 </div>
				 <div onClick={() => handelNavigate('/equipping')} className={classes.block_improvement}>
					 <div className={classes.title_improvement}>
						 <h2>Дооснащение техники оборудованием клиента</h2>
					 </div>
					 <img className={classes.img_improvement} src={improvement} alt=""/>
				 </div>
				 <div onClick={() => handelNavigate('/rent')} className={classes.block_rent}>
					 <img className={classes.img_rent} src={rent} alt=""/>
					 <div className={classes.title_rent}>
						 <h2>Аренда техники</h2>
					 </div>
				 </div>
			 </div>
		 </section>
	);
};

export default ServicesPage;
