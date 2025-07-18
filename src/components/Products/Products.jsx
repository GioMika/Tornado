import classes from './Products.module.css';
import robot from '../../images/robot2.svg';
import robot_2 from '../../images/robot_2.svg';
import oko from '../../images/oko.svg';
import Button from "../../helpers/Button/Button";
import Services from "../Services/Services";
import { useNavigate } from "react-router-dom";

// Данные продуктов
const productsData = [
	{
		id: 1,
		path: '/tornado',
		titleClass: 'title_tornado',
		title: "Торнадо (колесно-шагающий)",
		mobileTitle: "Торнадо",
		description: "Колесно-шагающий мобильный робот малого класса с грузоподъемностью до 25кг.",
		descriptionClass: 'paragraph'
	},
	{
		id: 2,
		path: '/typhoon',
		titleClass: 'title_tornado',
		title: "Тайфун (колесно-шагающий)",
		mobileTitle: "Тайфун",
		description: "Колесно-шагающий мобильный робот среднего класса с грузоподъемностью до 115кг.",
		descriptionClass: 'para_robot'
	}
];

const ProductBlock = ({ product, onNavigate }) => (
	 <div onClick={() => onNavigate(product.path)} className={classes.block}>
		 <div className={classes.textBlock}>
			 <h2 className={classes[product.titleClass]}>{product.title}</h2>
			 <div className={classes[product.descriptionClass]}>
				 <h2 className={classes.title_tornado2}>{product.mobileTitle}</h2>
				 <span>{product.description}</span>
			 </div>
			 <Button className={classes.btns}>Подробнее</Button>
		 </div>
		 <div className={classes.imageBlock}>
			 <img className={classes.robot} src={robot} alt={product.title} />
			 <img className={classes.robot_2} src={robot_2} alt={product.title} />
		 </div>
	 </div>
);

// Компонент для блока "Око"
const OkoBlock = ({ onNavigate }) => (
	 <div onClick={() => onNavigate('/oko')} className={classes.fullWidthBlock}>
		 <div className={classes.imageBlock}>
			 <img className={classes.oko} src={oko} alt="Око камера видеонаблюдения" />
		 </div>
		 <div className={classes.textBlock}>
			 <h2 className={classes.title_tornado_oko}>Око (Видеонаблюдение)</h2>
			 <div className={classes.first_text}>
				 <h2 className={classes.title_tornado_oko2}>Око</h2>
				 <p>Универсальная поворотная телекамера «Око» позволяет вести
					 круглосуточное наблюдение в самых суровых условиях окружающей среды.</p>
			 </div>

			 <div className={classes.text}>
				 <h3>Варианты поставки</h3>
				 <li>В составе наших робототехнических комплексов</li>
				 <li>Выносная система видеонаблюдения</li>
				 <li>Отдельное устройство для комплектации оборудования заказчика</li>
				 <Button className={classes.btns}>Подробнее</Button>
			 </div>
		 </div>
	 </div>
);

const Products = () => {
	const navigate = useNavigate();

	const handleNavigate = (path) => {
		navigate(path);
	};

	return (
		 <>
			 <div className={classes.container}>
				 <div className={classes.main_title}>
					 <h2>Продукция</h2>
					 <p>Что мы предлагаем?</p>
				 </div>

				 <div className={classes.topBlocks}>
					 {productsData.map(product => (
							<ProductBlock
								 key={product.id}
								 product={product}
								 onNavigate={handleNavigate}
							/>
					 ))}
				 </div>

				 <OkoBlock onNavigate={handleNavigate} />

				 <div className={classes.block_btn}>
					 <Button className={classes.button}>Все модели</Button>
				 </div>
			 </div>
			 <Services />
		 </>
	);
};

export default Products;
