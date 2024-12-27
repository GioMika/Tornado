import classes from './index.module.css'

const ControlPanelsPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.section}>
				 <h2>Пульты управления</h2>
				 <div className={classes.all_blocks}>
					 <div className={classes.blocks}><h3>ПДУ</h3></div>
					 <div className={classes.blocks}><h3>ТПДУ</h3></div>
					 <div className={classes.blocks}><h3>ПДУ мини</h3></div>
					 <div className={classes.blocks}><h3>ТПДУ мини</h3></div>
				 </div>
			 </section>
		 </main>
	);
};

export default ControlPanelsPage;
