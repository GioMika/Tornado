import classes from './index.module.css'
import img1 from './imgs/Sub-1.png'
import img2 from './imgs/Sub-2.png'
import img3 from './imgs/Sub-3.png'

const accessoriesItems = [
	{ id: 1, title: "Силовые установки", image: img1 },
	{ id: 2, title: "Запасные части", image: img2 },
	{ id: 3, title: "Комплектующие", image: img3 }
];

const AccessoriesPage = () => {
	return (
		 <main className={classes.main}>
			 <div className={classes.main_blocks}>
				 <h2>Комплектующие</h2>
				 <div className={classes.blocksGrid}>
					 {accessoriesItems.map(({ id, title, image }) => (
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

export default AccessoriesPage;
