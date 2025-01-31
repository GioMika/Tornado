import classes from './Main.module.css';
import Button from "../../helpers/Button/Button";
import ScopeOfApplication from "../ScopeOfApplication/ScopeOfApplication";
import Features from "../Features/Features";
import React from "react";

const Main = () => {

	return (
		 <>
			 <main>
				 <div className={classes.main}>
					 <div className={classes.main__content}>
						 <h1 className={classes.title}>
							 Дистанционно управляемые
							 роботехнические решения</h1>
						 <p className={classes.sub_title}>Техностудия разработки и дизайна
							 роботехнических комплексов <br/>
							 телеуправляемых систем</p>
						 <Button className={classes.btn}>Подробнее</Button>
					 </div>
				 </div>
			 </main>
			 {/*<Features />*/}
			 <ScopeOfApplication/>
		 </>
	);
};

export default Main;
