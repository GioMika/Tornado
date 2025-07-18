import classes from './index.module.css'
import img from './imgs/Sub.png'
import img1 from './imgs/Sub-1.png'

const services = [
	{ id: 1, title: "Ремонт", image: img },
	{ id: 2, title: "Лист модернизаций", image: img1 }
];
console.log(services)
const ServicePage = () => {
	return (
		 <main className={classes.main}>
			 <div className={classes.main_blocks}>
				 <h2>Сервис</h2>
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

export default ServicePage
