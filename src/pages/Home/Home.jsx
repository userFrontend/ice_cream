import "./Home.scss";
import Icons from "../../utils/utils";
import Slider from "react-slick";

const Home = () => {
  const settings1 = {
    infinite: true, // Бесконечное вращение
    slidesToShow: 8, // Одновременно показывать 8 слайдов
    autoplay: true, // Автоматическое вращение
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear", // Линейная анимация
  };
  const settings2 = {
    rtl: true,
    infinite: true, // Бесконечное вращение
    slidesToShow: 8, // Одновременно показывать 8 слайдов
    autoplay: true, // Автоматическое вращение
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
      <section className="first">
        <div className="container first-container">
          <div className="first-container__left" data-aos="fade-right">
            <h1>Удивительная идея – удивительный мир</h1>
            <p>
              Группа компаний под единым брендом «AKHMEDOV» является одним из
              лидеров в пищевой промышленности Узбекистана.
            </p>
            <a href="/">
              Подробнее <Icons.rightArrow />
            </a>
          </div>
          <div className="first-container__right" data-aos="fade-left">
            <img src="/images/hero.png" alt="Герой" />
          </div>
        </div>
      </section>
      <section className="second">
        <div className="container second-container">
          <div className="second-container__left">
            <h1 data-aos="fade-down">{"+20"} </h1>
            <p data-aos="fade-up">
              более 20 лет опыта на рынке <br />
            </p>
          </div>
          <div className="second-container__right" data-aos="fade-up">
            <h3>
              Высокотехнологичное оборудование и 20-летний опыт работы
              позволяют нам производить высококачественные продукты питания,
              сочетающие изысканный вкус, европейское качество и доступные
              цены.
            </h3>
          </div>
        </div>
      </section>
      <section className="third">
        <div className="container third-container">
          <div className="third-container__up">
            <h1 data-aos="fade-right">{">15"} </h1>
            <h3 data-aos="fade-left">
              Более 15 ведущих брендов в Узбекистане
            </h3>
          </div>
        </div>
        <div data-aos="fade-up" className="third-container__down">
          <Slider {...settings1}>
            {/* Слайды */}
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index}>
                <img src="/images/logo.png" alt={`Слайд ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <Slider {...settings2}>
            {/* Слайды */}
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index}>
                <img src="/images/logo.png" alt={`Слайд ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="fourth">
        <div className="container fourth-container">
          <div className="fourth-container__title">
            <h1 data-aos="fade-right">Наши партнеры</h1>
            <a href="/" data-aos="fade-left">
              Подробнее <Icons.rightArrow />
            </a>
          </div>
          <div data-aos="fade-up" className="fourth-container__wrapper">
            {Array.from({ length: 5 }).map((_, index) => (
              <a href="/" key={index}>
                <img src="/images/logo.png" alt={`Партнер ${index + 1}`} />
                <p>www.akhmedov.uz</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
