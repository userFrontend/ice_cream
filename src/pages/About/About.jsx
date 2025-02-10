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
      {/* First page */}
      <section className="second">
        <div className="second-box">
          <div className="second-box__left">
            <h2 data-aos="fade-up">
              «Ахмедов» — это больше, чем просто десерты. Мы создаем мороженое и
              глазированные сырки с любовью к традициям и вниманием к деталям.
              Только качественные ингредиенты, современные технологии и
              неповторимый вкус, который запоминается с первой ложки.
              <br />
            </h2>
          </div>
          <div className="second-box__right" data-aos="fade-up">
            <img src="/images/choco.png" alt="" />
          </div>
        </div>
      </section>

      {/* Holding Haqida */}
      <section className="holding" data-aos="fade-up">
        <div className="box holding-box">
          <div className="holding-box__wrapper">
            <div className="holding-box__wrapper__item">
              <h2>Rojok</h2>
              <p>
                ESTELLO, VALENCIA, MORELIA, KARAVAN va boshqa shokolad
                konfetlarini ishlab chiqarish.
              </p>
            </div>
            <div className="holding-box__wrapper__item">
              <h2>Rojok</h2>
              <p>
                ESTELLO, VALENCIA, MORELIA, KARAVAN va boshqa shokolad
                konfetlarini ishlab chiqarish.
              </p>
            </div>
            <div className="holding-box__wrapper__item">
              <h2>Rojok</h2>
              <p>
                ESTELLO, VALENCIA, MORELIA, KARAVAN va boshqa shokolad
                konfetlarini ishlab chiqarish.
              </p>
            </div>
            <div className="holding-box__wrapper__item">
              <h2>Rojok</h2>
              <p>
                «ESTELLO», «VALENCIA», «MORELIA», «KARAVAN» va boshqa shokolad
                konfetlarini ishlab chiqarish.
              </p>
            </div>
          </div>
          <div className="holding-box__description">
            <h1>Xolding haqida</h1>
            <p>
              {`"Группа компаний «АХМЕДОВ» является одним из лидеров в своей сфере на территории Узбекистана.`}
            </p>
            {/* <a href="/">
              xolding tuzilmasi <Icons.rightArrow />
            </a> */}
          </div>
        </div>
      </section>

      {/* Brendlar */}
      <section className="third">
        <div className="box third-box">
          <div className="third-box__up">
            <h1 data-aos="fade-right">{">15"} </h1>
            <h3 data-aos="fade-left">
              O‘zbekistonda 15 dan ortiq yetakchi brendlar
            </h3> 
          </div>
          <div className="third-box__down">
            <Slider {...settings1}>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
            </Slider>
            <Slider {...settings2}>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/images/logo.png" alt="Slide 1" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Bizning Messiya */}
      <section className="box section section--bg_1 mission">
        <div className="section-top anim active">
          <h2 className="title title--size_s">Bizning missiya</h2>
        </div>
        <div className="mission-inner">
          <div className="mission-image anim anim--image active">
            <picture>
              <img
                className="lazyload"
                src="https://nmedov.uz/wp-content/uploads/2023/02/106-3-1-1-768x1152.jpg"
                width="628"
                height="780"
              />
            </picture>
          </div>
          <div className="mission-content">
            <ul className="mission-list anim-parent anim-parent--right">
              <li className="mission-list__item active">
                <span className="mission-list__count">01</span>
                <div className="mission-list__content">
                  Turli toifadagi sifatli va mazali oziq-ovqat mahsulotlarini
                  taqdim etish.
                </div>
              </li>
              <li className="mission-list__item active">
                <span className="mission-list__count">02</span>
                <div className="mission-list__content">
                  Jahon maydonida dong taratgan brendga aylanish{" "}
                </div>
              </li>
              <li className="mission-list__item active">
                <span className="mission-list__count">03</span>
                <div className="mission-list__content">
                  Dunyoni yanada lazzatli qilish
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* holding tarixidan */}

      {/* Stategiya */}
      <section className="st" data-aos="fade-up">
        <div className="box st-box">
          <div className="st-box__description">
            <h1>Strategiya, 2025</h1>
            <p>
              {`"Biz erishgan yutuqlarimizning eng katta tashkil etuvchisi to‘g‘ri qurilgan strategiya. Bugungi kunga kelib, mutaxassislarimiz tomonidan 5 yillik reja ishlab chiqilgan va u 2022 yilning oxiriga qadar amal qiladi.`}
            </p>
          </div>
          <div className="st-box__wrapper">
            <div className="st-box__wrapper__item">
              <i className="bx bx-lg bx-trending-up"></i>{" "}
              <p>
                Har yili oziq-ovqat mahsulotlarini ishlab chiqarishga oid ikkita
                yangi loyiha ishga tushiriladi
              </p>
            </div>
            <div className="st-box__wrapper__item">
              <i className="bx bx-lg bx-trending-up"></i>{" "}
              <p>
                MDH mamlakatlari o‘rtasida oziq-ovqat mahsulotlarining eng yirik
                va mashhur ta’minotchisi bo‘lishga intilish.
              </p>
            </div>
            <div className="st-box__wrapper__item">
              <i className="bx bx-lg bx-trending-up"></i>{" "}
              <p>
                Xorijiy ekspertlar va o‘zaro manfaatli munosabatlarni
                rivojlantirish muassasalari bilan ishlash tajribasi tufayli o‘z
                kasbiy mahoratini doimiy tarzda oshirib borish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Holding Hamkorlari */}
      <section className="fourth">
        <div className="container fourth-container">
          <div className="fourth-container__title">
            <h1 data-aos="fade-right">Hamkorlarimiz </h1>
            <a href="/" data-aos="fade-left">
              batafsil <Icons.rightArrow />
            </a>
          </div>
          <div data-aos="fade-up" className="fourth-container__wrapper">
            <a href="/">
              <img src="/images/logo.png" alt="Slide 1" />
              <p>www.akhmedov.uz</p>
            </a>
            <a href="/">
              <img src="/images/logo.png" alt="Slide 1" />
              <p>www.akhmedov.uz</p>
            </a>
            <a href="/">
              <img src="/images/logo.png" alt="Slide 1" />
              <p>www.akhmedov.uz</p>
            </a>
            <a href="/">
              <img src="/images/logo.png" alt="Slide 1" />
              <p>www.akhmedov.uz</p>
            </a>
            <a href="/">
              <img src="/images/logo.png" alt="Slide 1" />
              <p>www.akhmedov.uz</p>
            </a>
          </div>
        </div>
      </section>

      {/* Holding yangiliklari */}
    </div>
  );
};

export default About;
