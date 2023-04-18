import React from "react";
import {FiSmartphone,GrGamepad} from 'react-icons/all'
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Catalog =()=>{
    const slides =[
        {
          url:'./amunition.jpg'
        },
        {
          url:'./notepad.jpg'
        },
        {
          url:'./res-sell.jpg'
        },
      ]
      const [currentIndex,setCurentIdex] = useState(0)
      const preslide = () =>{
        const isfirstslide = currentIndex ===0;
        const newIdex = isfirstslide ? slides.length -1 :currentIndex-1;
        setCurentIdex(newIdex);
      }
      const nexslide = ()=>{
        const islastslide = currentIndex === slides.length -1;
        const newIndex = islastslide? 0 :currentIndex +1;
        setCurentIdex(newIndex);
      }
return(
<div className="swiper-slider-div">
    <div className="sliderbar">
        <main className="content-type-main">
            <div className="top-warp">
                <div className="simple-slier1">
                    <div className="simple-slider-holder" >
                    <div className="slider-img-simple">
                            <img src={slides[currentIndex].url} alt="" />
                        <BsChevronCompactLeft onClick={preslide} className= "btn-back"  size={35}></BsChevronCompactLeft>
                        <BsChevronCompactRight onClick={nexslide} className="btn-next" size={35}></BsChevronCompactRight>
                        
                    
                    </div>
                    </div>
                </div>
                <ul className="sell-btn">
                <li className="li-sell-btn">Всі Акції</li>
            </ul>
            </div>
            
        </main>
        <div className="main-menu">
            <div className="menu-wraper">
                 <ul className="menu-catigories">
                    <li className="menu-actigorise-item"><FiSmartphone/>Ноутбуки та комп’ютери</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Смартфони, ТВ і Електроніка</li>
                    <li className="menu-actigorise-item"><GrGamepad/>Товари для геймерів</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Побутова техніка</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Товари для дому</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Інструменти та автотовари</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Сантехніка та ремонт</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Дача, сад, город</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Спорт і захоплення</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Одяг, взуття та аксесуари</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Краса та здоров'я</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Товари для дітей</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Зоотовари</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Офіс, школа, книги</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Алкогольні напої та продукти</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Нашим захисникам</li>
                    <li className="menu-actigorise-item"><FiSmartphone/>Знижки до -50%</li>
                </ul>
            </div>
    
        </div> 
    </div>    
</div>
)
}
export default Catalog