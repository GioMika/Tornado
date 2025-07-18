import classes from './index.css'
import img1 from "./imgs/Sub-1.png";
import img2 from "./imgs/Sub-2.png";
import img3 from "./imgs/Sub-3.png";
import img4 from "./imgs/Sub-4.png";
import img5 from "./imgs/Sub-5.png";
import img6 from "./imgs/Sub-6.png";
import img7 from "./imgs/Sub-7.png";
import img8 from "./imgs/Sub-8.png";
const PowerPartsPage = () => {


	const products = [
		{ id: 1, title: "Кабели", image: img1 },
		{ id: 2, title: "Аккумуляторы", image: img2 },
		{ id: 3, title: "Антенны", image: img3 },
		{ id: 4, title: "Колеса", image: img4 },
		{ id: 5, title: "Стойки для телекамер", image: img5 },
		{ id: 6, title: "Зарядки", image: img6 },
		{ id: 7, title: "Бампера", image: img7 },
		{ id: 8, title: "Крышки/колпачки", image: img8 },
	]


	return (
		 <main className={classes.main}>
			 <div className={classes.main_blocks}>
				 <h2>Запасные части</h2>
				 <div className={classes.blocksGrid}>
					 {products.map(({ id, title, image }) => (
							<div key={id} className={classes.first_blocks}>
								<p>{title}</p>
								<img src={image} alt={title} className={classes.img} />
								<div className={classes.overlay}>
									<span>Товар не доступен</span>
								</div>
							</div>
					 ))}
				 </div>
			 </div>
		 </main>
	);
};

export default PowerPartsPage;
