import React from "react";
import "./About.scss";
import Slider from "react-slick";


const Home = () => {
    const settings1 = {
        infinite: true, // Cheksiz aylanish
        slidesToShow: 8, // Bir vaqtning o'zida 1 slayd
        slidesToScroll: 1,
        autoplay: true, // Avtomatik aylanish
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
      const settings2 = {
        rtl:true,
        infinite: true, // Cheksiz aylanish
        slidesToShow: 8, // Bir vaqtning o'zida 1 slayd
        slidesToScroll: 1,
        autoplay: true, // Avtomatik aylanish
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };    
  return (
    <>
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
      <section className="messiya">
        <div className="container messiya-container">
          <div className="messiya-container__left">
            <h1 data-aos="fade-down">{">20"} </h1>
            <p data-aos="fade-up">
              bozorda 20 yildan ortiq tajriba <br />
            </p>
            <a href="/" data-aos="fade-up">
              batafsil
            </a>
          </div>
          <div className="messiya-container__right" data-aos="fade-up">
            <h3>
              Yuqori texnologik uskunalar va 20 yillik ish tajribasi bizga
              tansiq ta’m, Yevropa sifati va arzon narxlarni o‘zida mujassam
              etuvchi yuqori sifatli oziq-ovqat mahsulotlarini ishlab chiqarish
              imkoniyatini beradi.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
