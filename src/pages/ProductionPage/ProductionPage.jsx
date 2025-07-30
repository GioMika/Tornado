import classes from './index.module.css';
import { useNavigate } from "react-router-dom";

import robotsImg from './prodImg/Sub-1.png';
import retrofittingImg from './prodImg/Sub-2.png';
import manipulatorsImg from './prodImg/Sub-3.png';
import panelsImg from './prodImg/Sub-4.png';
import accessoriesImg from './prodImg/Sub-5.png';

const productionData = [
	{ id: 1, path: '/robots', title: 'Роботы', image: robotsImg, className: 'robotsCard', gridArea: 'robots' },
	{ id: 2, path: '/retrofitting', title: 'Дооснащение', image: retrofittingImg, className: 'retrofittingCard', gridArea: 'retrofitting' },
	{ id: 3, path: '/manipulators', title: 'Манипуляторы', image: manipulatorsImg, className: 'manipulatorsCard', gridArea: 'manipulators' },
	{ id: 4, path: '/panels', title: 'Пульты<br/>управления', image: panelsImg, className: 'panelsCard', gridArea: 'panels' },
	{ id: 5, path: '/accessories', title: 'Комплектующие', image: accessoriesImg, className: 'accessoriesCard', gridArea: 'accessories' }
];

const ProductCard = ({ product, onNavigate }) => {
	const handleClick = () => onNavigate(product.path);

	return (
		 <div className={`${classes.imageContainer} ${classes[product.className]}`}
					onClick={handleClick}
					style={{ gridArea: product.gridArea }}>
			 <p className={classes.title} dangerouslySetInnerHTML={{ __html: product.title }} />
			 <img src={product.image} alt={product.title} className={classes.img} />
		 </div>
	);
};

const ProductionPage = () => {
	const navigate = useNavigate();

	const handleNavigate = (path) => {
		navigate(path);
	};

	return (
		 <main className={classes.main}>
			 <div className={classes.main_blocks}>
				 <h2>Продукция</h2>
				 <div className={classes.productGrid}>
					 {productionData.map(product => (
							<ProductCard
								 key={product.id}
								 product={product}
								 onNavigate={handleNavigate}
							/>
					 ))}
				 </div>
			 </div>
		 </main>
	);
};

export default ProductionPage;
