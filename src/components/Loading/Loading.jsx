import classes from "./Loading.module.css"; // ✅ Правильное название файла

const Loading = () => {
	return (
		 <div className={classes.loading_container}>
			 <div className={classes.spinner}></div>
			 <p className={classes.loading_text}>Загрузка...</p>
		 </div>
	);
};

export default Loading;
