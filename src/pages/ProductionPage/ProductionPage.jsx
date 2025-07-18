import classes from './index.module.css';
import { useNavigate } from "react-router-dom";

import robotsImg from './prodImg/SubtractProd.png';
import retrofittingImg from './prodImg/SubtractProd1.png';
import manipulatorsImg from './prodImg/SubtractProd2.png';
import panelsImg from './prodImg/SubtractProd3.png';
import accessoriesImg from './prodImg/SubtractPro4.png';

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
		 <div
				className={`${classes.first_blocks} ${classes[product.className]}`}
				onClick={handleClick}
				style={{ gridArea: product.gridArea }}
		 >
			 <p dangerouslySetInnerHTML={{ __html: product.title }} />
			 <img src={product.image} alt={product.title} className={classes.img} />
			 <div className={classes.overlay}>
				 <span>Товар не доступен</span>
			 </div>
		 </div>
	);
};

const ProductionPage = () => {
	const handleNavigate = (path) => {
		console.log(`Navigate to: ${path}`);
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
