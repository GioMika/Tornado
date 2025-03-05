import React, {useState, useTransition} from "react";
import classes from "./Main.module.css";
import Button from "../../helpers/Button/Button";
import ScopeOfApplication from "../ScopeOfApplication/ScopeOfApplication";
import Loading from "../Loading/Loading";

const Main = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const [isPending, startTransition] = useTransition();

	const handleVideoLoad = () => {
		startTransition(() => {
			setVideoLoaded(true);
		});
	};

	return (
		 <>
			 <main>
				 <div className={classes.main}>
					 <video
							autoPlay
							loop
							muted
							playsInline
							preload="auto"
							className={classes.backgroundVideo}
							onLoadedData={handleVideoLoad}
							style={{display: videoLoaded ? "block" : "none"}}
					 >
						 <source src="/VID_20241028_145756_086.mp4" type="video/mp4"/>
					 </video>

					 <div className={classes.main__content}>
						 <h1 className={classes.title}>Дистанционно управляемые роботехнические решения</h1>
						 <p className={classes.sub_title}>
							 Техностудия разработки и дизайна роботехнических комплексов <br/>
							 телеуправляемых систем
						 </p>
						 <Button className={classes.btn}>Подробнее</Button>
					 </div>
				 </div>
			 </main>
			 <ScopeOfApplication/>
		 </>
	);
};

export default Main;
