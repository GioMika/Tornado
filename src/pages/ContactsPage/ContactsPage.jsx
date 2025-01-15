import classes from './index.module.css'
import backgroundForms from '../../images/BackgroundForm.png'

const ContactsPage = () => {
	return (
		 <main className={classes.main}>
			 <section className={classes.section}>
				<div className={classes.bgImg}>
				 <form className={classes.block_forms}>
					 <h2>Свяжитесь с нами или закажите обратный звонок</h2>
					 <div className={classes.block_form}>
						 <div className={classes.contacts}>
							 <p>Телефон</p>
							 <p>Почта</p>

							 <div className={classes.spans}>
								 <span></span>
								 <span></span>
								 <span></span>
							 </div>
						 </div>

						 <div className={classes.forms}>
							 <input type="text" placeholder='Имя'/>
							 <input type="text" placeholder='Номер телефона'/>
							 <textarea placeholder='Комментарий'/>
						 </div>
					 </div>
				 </form>
				 </div>
				 {/* <div className={classes.block_img}>
					 <img src={backgroundForms} alt=""/>
				 </div> */}
			 </section>
		 </main>
	);
};

export default ContactsPage;
