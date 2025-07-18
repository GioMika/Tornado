import classes from './index.module.css'
import img1 from './imgs/Sub-1.png'
import img2 from './imgs/Sub-2.png'
import img3 from './imgs/Sub-3.png'
import img4 from './imgs/Sub-4.png'

const manipulators = [
	{ id: 1, title: "Манипулятор Торнадо", image: img1 },
	{ id: 2, title: "Манипулятор Тайфун", image: img2 },
	{ id: 3, title: "Актуатор наведения", image: img3 },
	{ id: 4, title: "Манипулятор двойной", image: img4 }
];

const ManipulatorsPage = () => {
	return (
		 <main className={classes.main}>
			 <div className={classes.main_blocks}>
				 <h2>Манипуляторы</h2>
				 <div className={classes.blocksGrid}>
					 {manipulators.map(({ id, title, image }) => (
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
	)
}

export default ManipulatorsPage
