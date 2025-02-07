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
    <>
      {/*  */}
      <section className="second">
        <div className="container second-container">
          <div className="second-container__left">
            <img data-aos="fade-up" src="/images/logo.png" alt="" />
            <h2 data-aos="fade-up">
              logoni pastiga text bering <br />
            </h2>
            <p data-aos="fade-up">batafsil</p>
          </div>
          <div className="second-container__right" data-aos="fade-up">
            <img src="/images/choco.png" alt="" />
          </div>
        </div>
      </section>

      {/* Holding Haqida */}
      <section className="holding" data-aos="fade-up">
        <div className="container holding-container">
          <div className="holding-container__wrapper">
            <div className="holding-container__wrapper__item">
              <h2>Rojok</h2>
              <p>
                ESTELLO, VALENCIA, MORELIA, KARAVAN va boshqa shokolad
                konfetlarini ishlab chiqarish.
              </p>
            </div>
            <div className="holding-container__wrapper__item">
              <h2>Rojok</h2>
              <p>
                ESTELLO, VALENCIA, MORELIA, KARAVAN va boshqa shokolad
                konfetlarini ishlab chiqarish.
              </p>
            </div>
            <div className="holding-container__wrapper__item">
              <h2>Rojok</h2>
              <p>
                ESTELLO, VALENCIA, MORELIA, KARAVAN va boshqa shokolad
                konfetlarini ishlab chiqarish.
              </p>
            </div>
            <div className="holding-container__wrapper__item">
              <h2>Rojok</h2>
              <p>
                «ESTELLO», «VALENCIA», «MORELIA», «KARAVAN» va boshqa shokolad
                konfetlarini ishlab chiqarish.
              </p>
            </div>
          </div>
          <div className="holding-container__description">
            <h1>Xolding haqida</h1>
            <p>
              {`"AKHMEDOV" nomidagi yirik xolding kompaniyasi kompaniyalar
              guruhidan iborat va u O‘zbekiston oziq-ovqat sanoatida
              yetakchilardan biri hisoblanadi`}
            </p>
            <a href="/">
              xolding tuzilmasi <Icons.rightArrow />
            </a>
          </div>
        </div>
      </section>

      {/* Brendlar */}
      <section className="third">
        <div className="container third-container">
          <div className="third-container__up">
            <h1 data-aos="fade-right">{">15"} </h1>
            <h3 data-aos="fade-left">
              O‘zbekistonda 15 dan ortiq yetakchi brendlar
            </h3>
          </div>
          <div className="third-container__down">
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

      {/* Messiya */}
      <section class="container section section--bg_1 mission">
        <div class="section-top anim active">
          <h2 class="title title--size_s">Bizning missiya</h2>
        </div>
        <div class="mission-inner">
          <div class="mission-image anim anim--image active">
            <picture>
            <img class="lazyload" src="https://nmedov.uz/wp-content/uploads/2023/02/106-3-1-1-768x1152.jpg" width="628" height="780" />
            </picture>
          </div>
          <div class="mission-content">
            <ul class="mission-list anim-parent anim-parent--right">
              <li class="mission-list__item active">
                <span class="mission-list__count">01</span>
                <div class="mission-list__content">
                  Turli toifadagi sifatli va mazali oziq-ovqat mahsulotlarini
                  taqdim etish.
                </div>
              </li>
              <li class="mission-list__item active">
                <span class="mission-list__count">02</span>
                <div class="mission-list__content">
                  Jahon maydonida dong taratgan brendga aylanish{" "}
                </div>
              </li>
              <li class="mission-list__item active">
                <span class="mission-list__count">03</span>
                <div class="mission-list__content">
                  Dunyoni yanada lazzatli qilish
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
