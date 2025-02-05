import "./Footer.scss";
import { RiInstagramFill, RiTelegramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
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
            <h2 className="title">Biz bilan bog'lanish</h2>
            <p>
              Bog‘lanish formasini to‘ldiring, bizning menejer siz bilan
              aloqaga chiqadi.
            </p>
            <div className="footer-feedback__row">
              <a href="contact">
              Biz bilan bog‘lanish
              <i class='bx bx-right-arrow-alt'></i>
              </a>
            </div>
          </section>
          <div class="footer-row">
            <div class="social">
              <strong class="social__name">Biz ijtimoiy tarmoqlardamiz:</strong>
              <ul class="social__list">
                <li class="social__item">
                  <a
                    class="social-link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener nofollow"
                    aria-label="Our page in Instagram"
                  >
                    <RiInstagramFill />
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social-link"
                    href="https://www.t.me/"
                    target="_blank"
                    rel="noopener nofollow"
                    aria-label="Our page in Youtube"
                  >
                    <RiTelegramFill />
                  </a>
                </li>
              </ul>
            </div>

            <a class="footer-scrolling" href="#home">
            <i class='bx bx-lg bx-up-arrow-alt bx-fade-up' ></i>            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
