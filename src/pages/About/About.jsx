import Icons from "../../utils/utils";
import "./About.scss";
import Slider from "react-slick";

const About = () => {
  const settings1 = {
    infinite: true, // Cheksiz aylanish
    slidesToShow: 8, // Bir vaqtning o'zida 1 slayd
    slidesToScroll: 1,
    autoplay: true, // Avtomatik aylanish
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  const settings2 = {
    rtl: true,
    infinite: true, // Cheksiz aylanish
    slidesToShow: 8, // Bir vaqtning o'zida 1 slayd
    slidesToScroll: 1,
    autoplay: true, // Avtomatik aylanish
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="container">
      {/* Первая страница */}
      <section className="second">
        <div className="second-box">
          <div className="second-box__left">
            <h1></h1>
            <h2 data-aos="fade-up">
              «Ахмедов» — это больше, чем просто десерты. Мы создаем мороженое и
              глазированные сырки с любовью к традициям и вниманием к деталям.
              Только качественные ингредиенты, современные технологии и
              неповторимый вкус, который запоминается с первой ложки.
              <br />
            </h2>
          </div>
          <div className="second-box__right" data-aos="fade-up">
            <img src="/images/abouthed.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* О компании */}
      <section className="holding" data-aos="fade-up">
        <div className="box holding-box">
          <div className="holding-box__wrapper">
            <div className="holding-box__wrapper__item">
                <img src="images/logo.png" alt="" />
            </div>
            <div className="holding-box__wrapper__item">
              <img src="images/kreasymaxabout.jpg" alt="" />
            </div>
            <div className="holding-box__wrapper__item">
              <img src="images/СЫТЫЙ_ДОМ.jpg" alt="" />
            </div>
            <div className="holding-box__wrapper__item">
                <img src="images/Bombey.jpg" alt="" />
            </div>
          </div>
          <div className="holding-box__description">
            <h1>О компании</h1>
            <p>
              {`Группа компаний «АХМЕДОВ» является одним из лидеров в своей сфере на территории Узбекистана.`}
            </p>
            {/* <a href="/">
        структура холдинга <Icons.rightArrow />
      </a> */}
          </div>
        </div>
      </section>

      {/* Бренды */}
      <section className="third">
        <div className="box third-box">
          <div className="third-box__up">
            <h1 data-aos="fade-right">{""} </h1>
            <h3 data-aos="fade-left"></h3>
          </div>
          <div className="third-box__down">
            <Slider {...settings1}>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
            </Slider>
            <Slider {...settings2}>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Слайд 1" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Наша миссия */}
      <section className="box section section--bg_1 mission">
        <div className="section-top anim active">
          <h2 className="title title--size_s">Наша миссия</h2>
        </div>
        <div className="mission-inner">
          <div className="mission-image anim anim--image active">
            <picture>
              <img
                className="lazyload"
                src="images/krizymaxabout.jpg"
              />
            </picture>
          </div>
          <div className="mission-content">
            <ul className="mission-list anim-parent anim-parent--right">
              <li className="mission-list__item active">
                <span className="mission-list__count">01</span>
                <div className="mission-list__content">
                 Создавать натуральное и качественное мороженое, даря людям радость в каждом вкусе. 
                </div>
              </li>
              <li className="mission-list__item active">
                <span className="mission-list__count">02</span>
                <div className="mission-list__content">
                Мы используем только отборное сырье и разрабатываем эксклюзивный ассортимент, чтобы каждый мог найти свое идеальное лакомство. 
                </div>
              </li>
              <li className="mission-list__item active">
                <span className="mission-list__count">03</span>
                <div className="mission-list__content">
                  Наша цель – сочетать традиции и инновации, предлагая продукт, который радует и вдохновляет.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Стратегия */}
      {/* <section className="st" data-aos="fade-up">
        <div className="box st-box">
          <div className="st-box__description">
            <h1>Стратегия, 2025</h1>
            <p>
              {`"Самым важным фактором наших достижений является правильно выстроенная стратегия. На сегодняшний день нашими специалистами разработан 5-летний план, который будет действовать до конца 2022 года.`}
            </p>
          </div>
          <div className="st-box__wrapper">
            <div className="st-box__wrapper__item">
              <i className="bx bx-lg bx-trending-up"></i>{" "}
              <p>
                Ежегодно запускаются два новых проекта по производству пищевых
                продуктов.
              </p>
            </div>
            <div className="st-box__wrapper__item">
              <i className="bx bx-lg bx-trending-up"></i>{" "}
              <p>
                Стремление стать крупнейшим и самым известным поставщиком
                пищевых продуктов среди стран СНГ.
              </p>
            </div>
            <div className="st-box__wrapper__item">
              <i className="bx bx-lg bx-trending-up"></i>{" "}
              <p>
                Постоянное повышение профессионального мастерства за счет опыта
                работы с зарубежными экспертами и институтами, развивающими
                взаимовыгодные отношения.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Партнеры Холдинга */}
      <section className="fourth">
        <div className="container fourth-container">
          <div className="fourth-container__title">
            <h1 data-aos="fade-right">Наши партнеры </h1>
            {/* <a href="/" data-aos="fade-left">
            Подробнее <Icons.rightArrow />
            </a> */}
          </div>
          <div data-aos="fade-up" className="fourth-container__wrapper">
            <a>
              <img src="/images/part.png" alt="Slide 1" />
            </a>
            <a>
              <img src="/images/part1.png" alt="Slide 1" />
            </a>
            <a>
              <img src="/images/part2.png" alt="Slide 1" />
            </a>
            <a>
              <img src="/images/part3.png" alt="Slide 1" />
            </a>
            <a>
              <img src="/images/part.jpg" alt="Slide 1" />
            </a>
          </div>
        </div>
      </section>

      {/* Holding yangiliklari */}
    </div>
  );
};

export default About;
