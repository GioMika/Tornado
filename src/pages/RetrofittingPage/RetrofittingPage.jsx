import classes from './index.module.css'


const RetrofittingPage = () => {
	return (
		 <main className={classes.main}>

			 <section className={classes.section}>
				 <h2>Дооснащение</h2>
				 <div className={classes.main_section}>
				 <div className={classes.blocks}><p>Вычислительный блок улучшенной системы безопасности</p></div>
				 <div className={classes.blocks}><p>Радио-модуль малого радиуса действия, для управления с телефона/планшета</p>
				 </div>
				 <div className={classes.blocks}><p>Беспроводная зарядная станция</p></div>
				 <div className={classes.blocks}><p>Крышка с процессорным блоком для устройств, требующих windows 10</p></div>
				 <div className={classes.blocks}><p>LiDAR - сканер с камерой</p></div>
				 <div className={classes.blocks}><p>Блок с газоанализатором</p></div>
				 <div className={classes.blocks}><p>Сменный модуль «Блок детектирования гамма-излучения»</p></div>
				 <div className={classes.blocks}><p>Сменная крышка с приспособлением для перевозки крупногабаритного груза</p>
				 </div>
				 <div className={classes.blocks}><p>Гамма-визор</p></div></div>
			 </section>
		 </main>
	);
};

export default RetrofittingPage;
