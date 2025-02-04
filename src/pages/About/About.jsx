import React from "react";

const Home = () => {
  return (
    <section className="section section__bg_2 section__not_off home">
      <div className="section-row">
        <div className="section-col">
          <div className="section-logo">
            <picture>
              <img
                src="https://nmedov.uz/wp-content/uploads/2022/11/logo-full-3.svg"
                width="566"
                alt="Logo"
              />
            </picture>
          </div>
          <p>
            Sifat barqarorligi, o‘z vaqtida yetkazib berish, ta’minotchilar va
            hamkorlar bilan uzoq muddatli va ishonchli munosabatlar
          </p>
        </div>
        <div className="section-col">
          <div className="section-image">
            <picture>
              <img
                className="lazyload"
                src="https://nmedov.uz/wp-content/uploads/2023/03/choco.png"
                width="628"
                height="780"
                alt="Chocolate"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
