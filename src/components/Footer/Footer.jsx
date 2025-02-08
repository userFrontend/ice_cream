import "./Footer.scss";
import { useInfoContext } from "../../context/infoContext";
import { RiInstagramFill, RiTelegramFill } from "react-icons/ri";
const Footer = () => {
  const { update, setUpdate } = useInfoContext();
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer-menu__wrap">
            <div className="footer-menu">
              <a href="/about" className="footer-menu__name">
                О холдинге
              </a>
              <ul className="footer-menu__list">
                <li className="footer-menu__item">Наша миссия</li>
                <li className="footer-menu__item">История холдинга</li>
                <li className="footer-menu__item">Наши проекты</li>
              </ul>
              <a href="/about" className="footer-menu__name">
                Контакты
              </a>
            </div>
            <div className="footer-menu">
              <a href="/about" className="footer-menu__name">
                Список продуктов
              </a>
              <ul className="footer-menu__list">
                <li className="footer-menu__item">Наша миссия</li>
                <li className="footer-menu__item">История холдинга</li>
                <li className="footer-menu__item">Наши проекты</li>
              </ul>
              <a href="/about" className="footer-menu__name">
                Партнерство
              </a>
              <ul className="footer-menu__list">
                <li className="footer-menu__item">Партнеры холдинга</li>
                <li className="footer-menu__item">Тендеры</li>
                <li className="footer-menu__item">Условия продаж</li>
              </ul>
            </div>
            <div className="footer-menu"></div>
          </div>
          <p className="footer-copyright">
            Использование материалов сайта разрешается только при указании
            источника. © 2002 - 2025 Холдинг «AKHMEDOV»
          </p>
        </div>
        <div className="footer__right">
          <section className="footer-feedback">
            <h2 className="title">Свяжитесь с нами</h2>
            <p>Заполните форму, и наш менеджер свяжется с вами.</p>
            <div className="footer-feedback__row">
              <a href="contact">
                Связаться с нами
                <i class="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </section>
          <div className="footer-row">
            <div className="social">
              <strong className="social__name">Мы в социальных сетях:</strong>
              <ul className="social__list">
                <li className="social__item">
                  <a
                    className="social-link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener nofollow"
                    aria-label="Наша страница в Instagram"
                  >
                    <RiInstagramFill />
                  </a>
                </li>
                <li className="social__item">
                  <a
                    className="social-link"
                    href="https://www.t.me/"
                    target="_blank"
                    rel="noopener nofollow"
                    aria-label="Наша страница в Telegram"
                  >
                    <RiTelegramFill />
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="footer-scrolling"
              onClick={() => setUpdate(!update)}
            >
              <i className="bx bx-lg bx-up-arrow-alt bx-fade-up"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
