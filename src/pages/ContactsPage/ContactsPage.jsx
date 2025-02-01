import classes from "./ContactPage.module.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Social from '../../images/Social.svg';

const ContactsPage = () => {
  const form = useRef();
  const [errors, setErrors] = useState({
    user_name: '',
    phone: '',
    user_email: '',
    message: ''
  });

  const validateForm = (formData) => {
    const newErrors = {
      user_name: '',
      phone: '',
      user_email: '',
      message: ''
    };
    let isValid = true;

    const name = formData.get('user_name');
    if (!name || name.trim().length < 2) {
      newErrors.user_name = 'Имя должно содержать минимум 2 символа';
      isValid = false;
    }

    const phone = formData.get('phone');
    if (!phone || !/^[0-9]{10,12}$/.test(phone)) {
      newErrors.phone = 'Введите корректный номер телефона (10-12 цифр)';
      isValid = false;
    }

    const email = formData.get('user_email');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.user_email = 'Введите корректный email адрес';
      isValid = false;
    }

    const message = formData.get('message');
    if (!message || message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    
    if (!validateForm(formData)) {
      return;
    }

    emailjs
      .sendForm(
        "service_1387zas",
        "template_qw6qi9d",
        form.current,
        "igmFMBxkgSrdraz1C"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Ваше сообщение отправлено!");
          form.current.reset();
          setErrors({
            user_name: '',
            phone: '',
            user_email: '',
            message: ''
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Ошибка отправки сообщения. Попробуйте позже.");
        }
      );
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h2 className={classes.conect}>Свяжитесь с нами или закажите обратный звонок</h2>
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <div className={classes.input_settings}>
            <label>Имя</label>
            <div className={classes.input_wrapper}>
              <input 
                className={`${classes.input} ${errors.user_name ? classes.error_input : ''}`}
                type="text" 
                name="user_name" 
                required
              />
              <span 
                className={classes.error_message}
                style={{ visibility: errors.user_name ? 'visible' : 'hidden' }}
              >
                {errors.user_name || ' '}
              </span>
            </div>
          </div>

          <div className={classes.input_settings}>
            <label>Телефон</label>
            <div className={classes.input_wrapper}>
              <input 
                className={`${classes.input} ${errors.phone ? classes.error_input : ''}`}
                type="tel" 
                name="phone" 
                required
              />
              <span 
                className={classes.error_message}
                style={{ visibility: errors.phone ? 'visible' : 'hidden' }}
              >
                {errors.phone || ' '}
              </span>
            </div>
          </div>

          <div className={classes.input_settings}>
            <label>Почта</label>
            <div className={classes.input_wrapper}>
              <input 
                className={`${classes.input} ${errors.user_email ? classes.error_input : ''}`}
                type="email" 
                name="user_email" 
                required
              />
              <span 
                className={classes.error_message}
                style={{ visibility: errors.user_email ? 'visible' : 'hidden' }}
              >
                {errors.user_email || ' '}
              </span>
            </div>
          </div>

          <div className={classes.input_settings}>
            <label>Сообщение</label>
            <div className={classes.input_wrapper}>
              <textarea 
                className={`${classes.textarea} ${errors.message ? classes.error_input : ''}`}
                name="message" 
                required
              />
              <span 
                className={classes.error_message}
                style={{ visibility: errors.message ? 'visible' : 'hidden' }}
              >
                {errors.message || ' '}
              </span>
            </div>
          </div>

          <div className={classes.btn_settings}>
            <img src={Social} alt=""/>
            <button className={classes.button} type="submit">Заказать звонок</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactsPage;
