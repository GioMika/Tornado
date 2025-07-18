import classes from './index.module.css'
import img1 from './imgs/Sub-1.png'
import img2 from './imgs/Sub-2.png'
import img3 from './imgs/Sub-3.png'
import img4 from './imgs/Sub-4.png'
import img5 from './imgs/Sub-5.png'
import img6 from './imgs/Sub-6.png'
import img7 from './imgs/Sub-7.png'
import img8 from './imgs/Sub-8.png'
import img9 from './imgs/Sub-9.png'

const RetrofittingPage = () => {
	const products = [
		{ id: 1, title: "Вычислительный блок улучшенной системы безопасности", image: img1 },
		{ id: 2, title: "Радио-модуль малого радиуса действия, для управления с телефона/планшета", image: img2 },
		{ id: 3, title: "Беспроводная зарядная станция", image: img3 },
		{ id: 4, title: "Крышка с процессорным блоком для устройств, требующих windows 10", image: img4 },
		{ id: 5, title: "LiDAR‑сканер с камерой", image: img5 },
		{ id: 6, title: "Блок с газоанализатором", image: img6 },
		{ id: 7, title: "Сменный модуль «Блок детектирования гамма-излучения»", image: img7 },
		{ id: 8, title: "Сменная крышка с приспособлением для перевозки крупногабаритного груза", image: img8 },
		{ id: 9, title: "Гамма‑визор", image: img9 },
	]

	return (
		 <main className={classes.main}>
			 <div className={classes.main_blocks}>
				 <h2>Дооснащение</h2>
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
	)
}

export default RetrofittingPage
