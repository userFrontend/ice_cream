import { Link } from "react-router-dom";
import "./Catalog.scss";

const Catalog = () => {
  return (
    <>
      <section className="catalog">
        <div className="container catalog-container">
          <h1 data-aos="fade-left" className="catalog-container__title">
            {`Список продуктов`}{" "}
            <a
              href="/images/ahmedov_katalog.pdf"
              download="ahmedov_katalog.pdf"
            >
              Загрузка каталога <i className="bx bx-down-arrow-alt"></i>
            </a>
          </h1>
          <div data-aos="fade-up" className="catalog-container__wrapper">
            <h1 className="catalog-container__wrapper__title">Мороженое</h1>
            <div
              data-aos="fade-up"
              className="catalog-container__wrapper__box maxs"
            >
              <h2 className="catalog-container__wrapper__box__subtitle">
                Крези Макс
              </h2>
              <div
                data-aos="fade-up"
                className="catalog-container__wrapper__box__row"
              >
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/Kreasy.png" alt="iceCream" />
                  <p>Крези Макс лесные ягоды </p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/Kreasy2.png" alt="iceCream" />
                  <p>Крези Макс киви ананас</p>
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" className="catalog-container__wrapper__box">
              <h2 className="catalog-container__wrapper__box__subtitle">
                Вафельные Рожки
              </h2>
              <div className="catalog-container__wrapper__box__row">
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/1.png" alt="iceCream" />
                  <p>Вафельный рожок с карамельным топпингом</p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/2.png" alt="iceCream" />
                  <p>Вафельный рожок с вишней </p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/3.png" alt="iceCream" />
                  <p>Сытый Дом рожок с вишней</p>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="catalog-container__wrapper">
            <h2 className="catalog-container__wrapper__title">
              {" "}
              Творожные Сырки{" "}
            </h2>
            <div data-aos="fade-up" className="catalog-container__wrapper__box">
              <h3 className="catalog-container__wrapper__box__subtitle">
              Творожные палочки
              </h3>
              <div className="catalog-container__wrapper__box__row maxs">
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/Сыробушки.png" alt="iceCream" />
                  <p>Творожные палочки в апельсиновой глазури </p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/Сыробушки1.png" alt="iceCream" />
                  <p>Творожные палочки в клубничной глазури</p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/Сыробушки2.png" alt="iceCream" />
                  <p>Творожные палочки в темной глазури</p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/Сыробушки3.png" alt="iceCream" />
                  <p>Творожные палочки в молочной глазури</p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/Сыробушки4.png" alt="iceCream" />
                  <p>Творожные палочки в карамельной глазури</p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/Сыробушки5.png" alt="iceCream" />
                  <p>Творожные палочки в шоколадной глазури</p>
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" className="catalog-container__wrapper__box">
              <h2 className="catalog-container__wrapper__box__subtitle">
                Творожные сырки
              </h2>
              <div
                data-aos="fade-up"
                className="catalog-container__wrapper__box__row"
              >
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/SirokM.png" alt="iceCream" />
                  <p>Сырок творожный пломбир в молочной глазури </p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/SirokM1.png" alt="iceCream" />
                  <p>Сырок творожный кофейный в молочной глазури </p>
                </Link>
                <Link className="catalog-container__wrapper__box__row__item">
                  <img src="images/SirokM2.png" alt="iceCream" />
                  <p>Сырок творожный пломбир в темной глазури</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
