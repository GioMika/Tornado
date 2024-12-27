import classes from './index.module.css'


const ManipulatorsPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.section}>
				 <h2>Манипуляторы</h2>
				 <div className={classes.all_blocks}>
					 <div className={classes.blocks}><h3>Манипипулятор <br/> Торнадо</h3></div>
					 <div className={classes.blocks}><h3>Манипулятор Тайфун</h3></div>
					 <div className={classes.blocks}><h3>Актуаттор наведения</h3></div>
					 <div className={classes.blocks}><h3>Манипулятор двойной</h3></div>
				 </div>
			 </section>
		 </main>
	);
};

export default ManipulatorsPage;
