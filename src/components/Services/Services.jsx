import classes from './Services.module.css';
import updating from '../../images/updating.svg';
import updating2 from '../../images/updating2.svg';
import improvement from '../../images/improvement.svg';
import rent from '../../images/rent.svg';
import leasing from '../../images/leasing.svg';
import Partners from "../Partners/Partners";

const Services = () => {
	return (
		 <>
			 <section className={classes.main_section}>
				 <div className={classes.main_title_block}>
					 <h2>Услуги</h2>
					 <p>Воспользуйтесь уникальными предложениями</p>
				 </div>
				 <div className={classes.blocks}>

					 <div className={classes.block_updating}>
						 <div className={classes.title_updating}>
							 <h2>Годовая подписка на программную модернизацию и мелкий ремонт</h2>
						 </div>
						 <img className={classes.img_updating} src={updating} alt=""/>
					 </div>

					 <div className={classes.block_leasing}>
						 <div className={classes.title_leasing}>
							 <h2>Лизинг</h2>
						 </div>
						 <img className={classes.img_leasing} src={leasing} alt=""/>
					 </div>
					 <div className={classes.block_improvement}>
						 <div className={classes.title_improvement}>
							 <h2>Дооснащение техники оборудованием клиента</h2>
						 </div>
						 <img className={classes.img_improvement} src={improvement} alt=""/>
					 </div>
					 <div className={classes.block_rent}>
						 <img className={classes.img_rent} src={rent} alt=""/>
						 <div className={classes.title_rent}>
							 <h2>Аренда техники</h2>
						 </div>
					 </div>
				 </div>
			 </section>
			 <Partners/>
		 </>
	);
};

export default Services;
