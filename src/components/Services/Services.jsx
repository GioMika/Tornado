import classes from './Services.module.css';
import updating from '../../images/updating.svg';
import improvement from '../../images/improvement.svg';
import rent from '../../images/rent.svg';
import leasing from '../../images/leasing.svg';
import Partners from "../Partners/Partners";
import { useNavigate } from "react-router-dom";


const servicesData = [
	{
		id: 1,
		path: '/subscription',
		title: "Годовая подписка на программную модернизацию и мелкий ремонт",
		image: updating,
		className: 'block_updating',
		titleClass: 'title_updating',
		imageClass: 'img_updating'
	},
	{
		id: 2,
		path: '/leasing',
		title: "Лизинг",
		image: leasing,
		className: 'block_leasing',
		titleClass: 'title_leasing',
		imageClass: 'img_leasing'
	},
	{
		id: 3,
		path: '/equipping',
		title: "Дооснащение техники оборудованием клиента",
		image: improvement,
		className: 'block_improvement',
		titleClass: 'title_improvement',
		imageClass: 'img_improvement'
	},
	{
		id: 4,
		path: '/rent',
		title: "Аренда техники",
		image: rent,
		className: 'block_rent',
		titleClass: 'title_rent',
		imageClass: 'img_rent',
		imageFirst: true
	}
];


const ServiceBlock = ({ service, onNavigate }) => (
	 <div
			onClick={() => onNavigate(service.path)}
			className={classes[service.className]}
	 >
		 {service.imageFirst ? (
				<>
					<img className={classes[service.imageClass]} src={service.image} alt={service.title} />
					<div className={classes[service.titleClass]}>
						<h2>{service.title}</h2>
					</div>
				</>
		 ) : (
				<>
					<div className={classes[service.titleClass]}>
						<h2>{service.title}</h2>
					</div>
					<img className={classes[service.imageClass]} src={service.image} alt={service.title} />
				</>
		 )}
	 </div>
);

const Services = () => {
	const navigate = useNavigate();

	const handleNavigate = (path) => {
		navigate(path);
	};

	return (
		 <>
			 <section className={classes.main_section}>
				 <div className={classes.main_title_block}>
					 <h2>Услуги</h2>
					 <p>Воспользуйтесь уникальными предложениями</p>
				 </div>
				 <div className={classes.blocks}>
					 {servicesData.map(service => (
							<ServiceBlock
								 key={service.id}
								 service={service}
								 onNavigate={handleNavigate}
							/>
					 ))}
				 </div>
			 </section>
			 <Partners />
		 </>
	);
};

export default Services;
