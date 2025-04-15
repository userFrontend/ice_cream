import "./About.scss";
import Slider from "react-slick";
import React, { useState } from "react";
const About = () => {
  const settings1 = {
    infinite: true, // Бесконечное вращение
    slidesToShow: 8, // Одновременно показывать 8 слайдов
    autoplay: true, // Автоматическое вращение
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear", // Линейная анимация
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const settings2 = {
    rtl: true,
    infinite: true, // Бесконечное вращение
    slidesToShow: 8, // Одновременно показывать 8 слайдов
    autoplay: true, // Автоматическое вращение
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const historyData = [
    {
      year: "2002",
      text: "Первое частное предприятие 'Ахмедов'. Началось производство мороженого «ЕЩЁ» в пластиковых стаканчиках.",
    },
    {
      year: "2007",
      text: "Основана компания 'ООО САБЕ'. Запущено производство мороженого 'Kreasy Max', ставшего хитом.",
    },
    {
      year: "2014",
      text: "Представлено эскимо 'Бомбей' – классическое мороженое на палочке.",
    },
    {
      year: "2017",
      text: "Создан бренд 'Сытый Дом', начато производство полуфабрикатов.",
    },
    {
      year: "2020",
      text: "Расширен ассортимент 'Сытый Дом' – теперь бренд выпускает и мороженое.",
    },
    {
      year: "2023",
      text: "Провели ребрендинг и объединили всё производство под новым, сильным именем — Akhmedov. Это не просто новое название, а символ качества, вкуса и доверия, которое мы заслуживали годами.",
    },
  ];
  const [visibleIndex, setVisibleIndex] = useState(0);
  const interval = setInterval(() => {
    setVisibleIndex((prevIndex) => (prevIndex + 1) % historyData.length);
  }, 3000); // Har 3 sekundda almashadi

  // return () => clearInterval(interval);
  return (
    <div className="container">
      {/* Первая страница */}
      <section className="second">
        <div className="second-box">
          <div className="second-box__left">
            <h2 data-aos="fade-up">
              Компания Ахмедов не просто про мороженое - это история. Это путь.
              Вкус за которым стоит забота, честный труд и вера в доброе. Бренд
              Akhmedov был основан семьей из Ташкента, но наше сердце - в
              Сырдарье. Именно там находится наше производство, где живут и
              трудятся невероятные, теплые люди.
              <br />
            </h2>
            <h2 data-aos="fade-up">
              Покупая Akhmedov, вы не только наслаждайтесь вкусом, но и
              становитесь частью большего. Вы поддерживаете семьи, создаете
              рабочие места и вместе с нами развиваете регион, в который мы
              вложили душу. Каждое ваше прикосновение к нашему бренду - это
              вклад в теплую и искреннюю историю, которую мы пишем вместе.
              <br />
            </h2>
            <h2 data-aos="fade-up">
              «Akhmedov» — это больше, чем просто десерты. Мы создаем мороженое
              и глазированные сырки с любовью к традициям и вниманием к деталям.
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
        <h1 className="abouth1">НАШИ БРЕНДЫ</h1>
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
            <h1>наши бренды</h1>
            <p>
              {`Компания предлагает широкий ассортимент мороженого и глазированных сырков под четырьмя популярными брендами. Каждый бренд создан с любовью к качеству и уникальному вкусу`}
            </p>
            {/* <a href="/">
        структура холдинга <Icons.rightArrow />
      </a> */}
          </div>
        </div>
      </section>

      {/* Бренды */}
      <section className="third">
        <div className="container third-container">
          <div className="third-container__up">
            <h1 data-aos="fade-right">{""} </h1>
            <h3 data-aos="fade-left"></h3>
          </div>
        </div>
        <div data-aos="fade-up" className="third-container__down">
          <Slider {...settings1}>
            {/* Слайды */}
            {Array.from({ length: 16 }).map((_, index) => (
              <div className="img-box" key={index}>
                <img src="/images/logo.png" alt={`Слайд ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <Slider {...settings2}>
            {/* Слайды */}
            {Array.from({ length: 16 }).map((_, index) => (
              <div className="img-box" key={index}>
                <img src="/images/logo.png" alt={`Слайд ${index + 1}`} />
              </div>
            ))}
          </Slider>
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
              <img className="lazyload" src="images/krizymaxabout.jpg" />
            </picture>
          </div>
          <div className="mission-content">
            <ul className="mission-list anim-parent anim-parent--right">
              <li className="mission-list__item active">
                <span className="mission-list__count">01</span>
                <div className="mission-list__content">
                  Создавать натуральное и качественное мороженое, даря людям
                  радость в каждом вкусе.
                </div>
              </li>
              <li className="mission-list__item active">
                <span className="mission-list__count">02</span>
                <div className="mission-list__content">
                  Мы используем только отборное сырье и разрабатываем
                  эксклюзивный ассортимент, чтобы каждый мог найти свое
                  идеальное лакомство.
                </div>
              </li>
              <li className="mission-list__item active">
                <span className="mission-list__count">03</span>
                <div className="mission-list__content">
                  Наша цель – сочетать традиции и инновации, предлагая продукт,
                  который радует и вдохновляет.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Istoriya holding */}
      <section className="history">
        <h2 className="history-title">История компании</h2>
        <div className="timeline">
          {historyData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="circle">{item.year}</div>
              <div className="content">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
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
