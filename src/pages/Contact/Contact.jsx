import React, { useState } from "react";
import './Contact.scss'
const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your API request logic here
    alert("Form submitted successfully!");
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="info-contact" data-aos="zoom-in">
          <h2 data-aos="fade-right">Контакты</h2>
          <b>Адрес:</b>
          <p>OOO "SABE", г. Сырдарья, Сырдарьинская область, туманный центр Рахимов, улица Достлик, дом 20.</p>
          <b>Телефон:</b>
          <p>+99899 055 82 83</p>
        </div>
      </div>
     <div className="contact-form-container">
      <div className="container">
      <h2 data-aos="fade-right">Связаться с нами</h2>
      <form onSubmit={handleSubmit} className="form-contact">
        <div className="contact-form">
        <div className="form-group" data-aos="fade-up">
          <label>Ваше имя</label>
          <input
            type="text"
            name="name"
            placeholder="Укажите имя"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" data-aos="fade-up">
          <label>Номер телефона</label>
          <input
            type="tel"
            name="phone"
            placeholder="+998 90 999-99-99"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" data-aos="fade-up">
          <label>Электронная почта</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" data-aos="fade-up">
          <label>Тема сообщения</label>
          <input
            type="text"
            name="subject"
            placeholder="Укажите тему"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="form-groups" data-aos="fade-up">
          <label>Сообщение</label>
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button data-aos="zoom-in" type="submit" className="submit-button">
          Отправить
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Home;
