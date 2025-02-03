import "./Home.scss";
import Icons from "../../utils/utils";

const Home = () => {
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
              batafsil <Icons.rightArrow />
            </a>
          </div>
          <div className="first-container__right" data-aos="fade-left">
            <img src="/images/hero-img.png" alt="Hero" />
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
            <a href="/" data-aos="fade-up">
              batafsil <Icons.rightArrow />
            </a>
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
            <h3 data-aos="fade-left" > 
              O‘zbekistonda 15 dan ortiq yetakchi brendlar
            </h3>
          </div>
          <div className="third-container__down" >
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
