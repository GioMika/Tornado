import classes from './Partners.module.css';
import partners1 from '../../images/partners1.svg';
import partners2 from '../../images/partners2.svg';
import partners3 from '../../images/partners3.svg';
import partners4 from '../../images/partners4.svg';
import partners5 from '../../images/partner5.svg';
import partners6 from '../../images/partner6.svg';
import partners7 from '../../images/partners7.svg';
// import partners8 from '../../images/partners8.svg';
import patriot from '../../images/patriot.svg';

// Данные партнеров с конфигурацией отображения
const partnersData = {
	desktop: {
		top: [
			{ id: 1, src: partners1, alt: "Партнер 1", className: 'partners1' },
			{ id: 2, src: partners3, alt: "Партнер 3", className: 'partners3' },
			{ id: 3, src: partners5, alt: "Партнер 5", className: 'partners5' },
			{ id: 4, src: partners2, alt: "Партнер 2", className: 'partners2_1' },
			{ id: 5, src: partners7, alt: "Партнер 7", className: 'partners7' },
			{ id: 6, src: partners4, alt: "Партнер 4", className: 'partners2_2' }
		],
		bottom: [
			{ id: 7, src: partners2, alt: "Партнер 2", className: 'partners2' },
			{ id: 8, src: partners4, alt: "Партнер 4", className: 'partners4' },
			{ id: 9, src: patriot, alt: "Patriot", className: 'patriot' },
			{ id: 10, src: partners6, alt: "Партнер 6", className: 'partners6' },

			{ id: 12, src: partners7, alt: "Партнер 7", className: 'partners7_3' },
			{ id: 13, src: partners7, alt: "Партнер 7", className: 'partners7_1' }
		]
	},
	mobile: {
		top: [
			{ id: 1, src: partners1, alt: "Партнер 1", className: 'partners1' },
			{ id: 2, src: partners3, alt: "Партнер 3", className: 'partners3' },
			{ id: 3, src: partners2, alt: "Партнер 2", className: 'partners2_1' },
			{ id: 4, src: partners4, alt: "Партнер 4", className: 'partners2_2' }
		],
		bottom: [
			{ id: 5, src: patriot, alt: "Patriot", className: 'patriot' },
			{ id: 6, src: partners6, alt: "Партнер 6", className: 'partners6' },
			{ id: 7, src: partners7, alt: "Партнер 7", className: 'partners7_1' }
		]
	}
};

// Компонент для отдельного партнера
const PartnerImage = ({ partner }) => (
	 <img
			className={classes[`img_${partner.className}`]}
			src={partner.src}
			alt={partner.alt}
			loading="lazy"
	 />
);

// Компонент для ряда партнеров
const PartnersRow = ({ partners, className }) => (
	 <div className={classes[className]}>
		 {partners.map(partner => (
				<PartnerImage key={partner.id} partner={partner} />
		 ))}
	 </div>
);

const Partners = () => {
	return (
		 <section className={classes.main_block}>
			 <div className={classes.block_title}>
				 <h2>Партнеры</h2>
				 <p>Нам доверяют компании</p>
			 </div>

			 {/* Десктопная версия */}
			 <div className={classes.desktop_version}>
				 <PartnersRow
						partners={partnersData.desktop.top}
						className="partners"
				 />
				 <PartnersRow
						partners={partnersData.desktop.bottom}
						className="partners_down"
				 />
			 </div>

			 {/* Мобильная версия */}
			 <div className={classes.mobile_version}>
				 <PartnersRow
						partners={partnersData.mobile.top}
						className="partners"
				 />
				 <PartnersRow
						partners={partnersData.mobile.bottom}
						className="partners_down"
				 />
			 </div>
		 </section>
	);
};

export default Partners;
