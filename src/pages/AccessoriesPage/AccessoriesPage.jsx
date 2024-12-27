import classes from './index.module.css'

const AccessoriesPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.section}>
				 <h2>Комплектующие</h2>
				 <div className={classes.all_blocks}>
					 <div className={classes.blocks}><h3>Силовые установки</h3></div>
					 <div className={classes.blocks}><h3>Запасные части</h3></div>
					 <div className={classes.blocks}><h3>Комплектующие</h3></div>
				 </div>
			 </section>
		 </main>
	);
};

export default AccessoriesPage;
