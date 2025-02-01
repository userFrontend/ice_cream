import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header class="header">
      <div class="header-left">
        <a class="header-logo" href="https://nmedov.uz/ru" aria-label="Вернуться на главную">
          <img src="/images/logo.png" width="96" height="71" alt="Логотип N`Medov"/>
        </a>
 
        <ul class="header-menu"> 
           <li class="header-menu__item">
									<a class="header-menu__link" href="https://nmedov.uz/ru/about/" data-section="about">О холдинге</a>
								</li><li class="header-menu__item">
									<a class="header-menu__link" href="https://nmedov.uz/ru/catalog-2/" data-section="category">Продукция</a>
								</li><li class="header-menu__item">
									<a class="header-menu__link" href="https://nmedov.uz/ru/contacts/" data-section="contacts">Контакты</a>
								</li>        </ul>
      </div>
      <div class="header-right">
        <div class="header-right__inner">
          <a class="header-search" href="https://nmedov.uz/ru/search/" aria-label="Поиск по сайту">
            <svg width="20" height="20" aria-hidden="true"><use xlink:href="#icon-search"></use></svg>
          </a>
          <div class="lang-wrapper">
                                 <button class="lang-opener" type="button" data-opener="nav-lang" aria-label="Открыть языковое меню">
                      Ру                        
                    </button>
                         
          <div class="lang" data-opener="nav-lang">
            <ul class="lang-menu" aria-label="Языковое меню">
                            <li class="lang-menu__item">
                <a class="lang-menu__link" href="https://nmedov.uz/uz/">Uz</a>
              </li>
                           <li class="lang-menu__item">
                <a class="lang-menu__link" href="https://nmedov.uz/en/">En</a>
              </li>
                         </ul>

          </div>
          </div>
                    <a class="header-phone" href="tel:712280088">71 228 00 88</a>
                  </div>
        <button class="header-nav-opener nav-opener" type="button" data-opener="nav" aria-label="Открыть меню">
          <svg class="nav-opener__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 105.9">
            <path d="M288,0c-6.6,1.6-13.3,3-19.7,5c-28.6,8.7-51.6,24.5-64.7,52.4c-3.6,7.7-5.7,16-10.5,23.1c-12.3,18-29.5,26.5-51.2,25.3 c-24.3-1.4-42.2-13.4-50.5-36.1C76.2,27.8,44.9,8.1,3.4,0.8C2.2,0.6,1.1,0.3,0,0C96,0,192,0,288,0z"></path>
          </svg>
          <svg class="nav-opener__icon" width="20" height="20" aria-hidden="true"><use xlink:href="#icon-menu"></use></svg>
        </button>
      </div>
    </header>
  );
}
