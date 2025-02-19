import classes from './Partners.module.css'
import partners1 from '../../images/partners1.svg'
import partners2 from '../../images/partners2.svg'
import partners3 from '../../images/partners3.svg'
import partners4 from '../../images/partners4.svg'
import partners5 from '../../images/partner5.svg'
import partners6 from '../../images/partner6.svg'
import partners7 from '../../images/partners7.svg'
import partners8 from '../../images/partners8.svg'
import patriot from '../../images/patriot.svg'

const Partners = () => {
	return (
			 <section className={classes.main_block}>
				 <div className={classes.block_title}>
					 <h2>Партнеры</h2>
					 <p>Нам доверяют компании</p>
				 </div>

				 <div className={classes.partners}>
					 <img className={classes.img_partners1} src={partners1} alt=""/>
					 <img className={classes.img_partners3} src={partners3} alt=""/>
					 <img className={classes.img_partners5} src={partners5} alt=""/>
					 <img className={classes.img_partners2_1} src={partners2} alt=""/>
					 <img className={classes.img_partners7} src={partners7} alt=""/>
					 <img className={classes.img_partners2_2} src={partners4} alt=""/>
				 </div>
				 <div className={classes.partners_down}>
					 <img className={classes.img_partners2} src={partners2} alt=""/>
					 <img className={classes.img_partners4} src={partners4} alt=""/>
					 <img className={classes.img_patriot} src={patriot} alt=""/>
					 <img className={classes.img_partners6} src={partners6} alt=""/>
					 <img className={classes.img_partners8} src={partners8} alt=""/>
					 <img className={classes.img_partners7_3} src={partners7} alt=""/>
					 <img className={classes.img_partners7_1} src={partners7} alt=""/>
				 </div>
			 </section>
	);
};

export default Partners;
