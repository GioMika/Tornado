import classes from './index.module.css'
import img from './imgs/Sub-1.png'
import img1 from './imgs/Sub-2.png'
import img2 from './imgs/Sub-3.png'

const services = [
	{ id: 1, title: "ЭДК", image: img },
	{ id: 2, title: "ЭДК-100", image: img1 },
	{ id: 3, title: "ЭДК", image: img2 }
];

const DriveSystemsPage = () => {
	return (
		 <main className={classes.main}>
			 <div className={classes.main_blocks}>
				 <h2>Силовые установки</h2>
				 <div className={classes.blocksGrid}>
					 {services.map(({ id, title, image }) => (
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

export default DriveSystemsPage
