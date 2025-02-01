import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container footer__container">
      <div className="footer__left">
        <div className="footer-menu__wrap">
          <div className="footer-menu">
            <a href="/about" className="footer-menu__name">
              Xolding haqida
            </a>
            <ul className="footer-menu__list">
              <li className="footer-menu__item">Bizning missiya</li>
              <li className="footer-menu__item">Xolding tarixi</li>
              <li className="footer-menu__item">Bizning loyihalar</li>
            </ul>
            <a href="/about" className="footer-menu__name">
              Bog'lanish
            </a>
          </div>
          <div className="footer-menu">
            <a href="/about" className="footer-menu__name">
              Mahsulotlar ro'yhati
            </a>
            <ul className="footer-menu__list">
              <li className="footer-menu__item">Bizning missiya</li>
              <li className="footer-menu__item">Xolding tarixi</li>
              <li className="footer-menu__item">Bizning loyihalar</li>
            </ul>
            <a href="/about" className="footer-menu__name">
              Hamkorlik
            </a>
            <ul className="footer-menu__list">
              <li className="footer-menu__item">Xolding hamkorlari</li>
              <li className="footer-menu__item">Tenderlar</li>
              <li className="footer-menu__item">Sotuv shartlari</li>
            </ul>
          </div>
          <div className="footer-menu"></div>
        </div>
        <p className="footer-copyright">
          Sayt materiallaridan foydalanishga faqat manbani ko‘rsatgan holda
          ruxsat etiladi. © 2002 - 2025 Xolding «AKHMEDOV»
        </p>
      </div>
      <div className="footer__right">
        <section className="footer-feedback">
          <h2 className="title">Savollar bormi?</h2>
          <p>
            Qayta bog‘lanish formasini to‘ldiring, bizning menejer siz bilan
            aloqaga chiqadi.
          </p>
          <div className="footer-feedback__row">
            <a href="feedback" aria-label="Biz bilan bog‘lanish"><svg width="56" height="16" aria-hidden="true"><use xlink:href="#icon-arrow-right"></use></svg></a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
