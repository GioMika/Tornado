import classes from './index.module.css'
import service from '../../images/service.svg'

const ServicePage = () => {
	return (
		 <main className={classes.main}>
			 <div className={classes.main_blocks}>
				 <h2>Сервис</h2>
				 <div className={classes.blocks}>
					 <div className={classes.first_blocks}><p>Ремонт</p></div>
					 <div className={classes.second_blocks}><p>Лист модернизаций</p></div>
				 </div>
			 </div>
		 </main>
	);
};

export default ServicePage;
