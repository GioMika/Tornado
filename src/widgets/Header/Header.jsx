import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Button from '../../helpers/Button/Button';
import logo from '../../images/logo.svg';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth <= 768;
			setIsMobile(mobile);
			if (!mobile && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isMenuOpen]);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const navigationLinks = [
		{ to: '/production', text: 'Продукция' },
		{ to: '/services', text: 'Услуги' },
		{ to: '/service', text: 'Сервис' },
		{ to: '', text: 'О нас' },
		{ to: '/contacts', text: 'Контакты' },
	];

	return (
		 <header className={classes.header}>
			 <Link to="/" className={classes.logoContainer}>
				 <img src={logo} alt="Logo" className={classes.logo}/>
			 </Link>

			 {isMobile && (
					<button
						 className={`${classes.burgerButton} ${isMenuOpen ? classes.active : ''}`}
						 onClick={toggleMenu}
						 aria-label="Меню"
					>
						{isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
					</button>
			 )}

			 <div
					className={`${classes.overlay} ${isMenuOpen ? classes.active : ''}`}
					onClick={closeMenu}
			 />

			 <nav className={`${classes.headerNavigation} ${isMenuOpen ? classes.active : ''}`}>
				 {isMobile && (
						<button
							 className={classes.closeButton}
							 onClick={closeMenu}
							 aria-label="Закрыть меню"
						>
							<X size={24}/>
						</button>
				 )}

				 <div className={classes.navLinks}>
					 {navigationLinks.map((link) => (
							<Link
								 key={link.to}
								 to={link.to}
								 className={classes.link}
								 onClick={closeMenu}
							>
								{link.text}
							</Link>
					 ))}
				 </div>
			 </nav>

			 <div className={classes.contacts}>
				 <p className={classes.address}>Адрес и часы работы</p>
				 <a href="tel:+903-903-90-03" className={classes.phoneButton}>
					 <Phone size={16} className={classes.phoneIcon}/>
					 <span>Телефон</span>
				 </a>
			 </div>
		 </header>
	);
};

export default Header;
