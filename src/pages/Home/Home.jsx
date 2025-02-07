import "./Home.scss";
import Icons from "../../utils/utils";
import Slider from "react-slick";

const Home = () => {
  const settings1 = {
    infinite: true, // Cheksiz aylanish
    slidesToShow: 8, // Bir vaqtning o'zida 1 slayd
    autoplay: true, // Avtomatik aylanish
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear", // Bir vaqtning o‘zida nechta slayd siljishini belgilash
  };
  const settings2 = {
    rtl: true,
    infinite: true, // Cheksiz aylanish
    slidesToShow: 8, // Bir vaqtning o'zida 1 slayd
    autoplay: true, // Avtomatik aylanish
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
      <section className="first">
        <div className="container first-container">
          <div className="first-container__left" data-aos="fade-right">
            <h1>Ajoyib g‘oya – g‘aroyib dunyo </h1>
            <p>
              «AKHMEDOV» yagona brendi ostidagi kompaniyalar guruhi O‘zbekiston
              oziq-ovqat sanoati sohasida peshqadamlardan biri hisoblanadi
            </p>
            <a href="/">
              Batafsil <Icons.rightArrow/>
            </a>
          </div>
          <div className="first-container__right" data-aos="fade-left">
            <img src="/images/hero.png" alt="Hero" />
          </div>
        </div>
      </section>
      <section className="second">
        <div className="container second-container">
          <div className="second-container__left">
            <h1 data-aos="fade-down">{">20"} </h1>
            <p data-aos="fade-up">
              bozorda 20 yildan ortiq tajriba <br />
            </p>
          </div>
          <div className="second-container__right" data-aos="fade-up">
            <h3>
              Yuqori texnologik uskunalar va 20 yillik ish tajribasi bizga
              tansiq ta’m, Yevropa sifati va arzon narxlarni o‘zida mujassam
              etuvchi yuqori sifatli oziq-ovqat mahsulotlarini ishlab chiqarish
              imkoniyatini beradi.
            </h3>
          </div>
        </div>
      </section>
      <section className="third">
        <div className="container third-container">
          <div className="third-container__up">
            <h1 data-aos="fade-right">{">15"} </h1>
            <h3 data-aos="fade-left">
              O‘zbekistonda 15 dan ortiq yetakchi brendlar
            </h3>
          </div>
        </div>
          <div data-aos="fade-up" className="third-container__down">
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
      </section>
      <section className="fourth">
        <div className="container fourth-container">
          <div className="fourth-container__title">
            <h1 data-aos="fade-right">Hamkorlarimiz </h1>
            <a href="/" data-aos="fade-left">
            Batafsil <Icons.rightArrow />

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
    </>
  );
};

export default Home;
