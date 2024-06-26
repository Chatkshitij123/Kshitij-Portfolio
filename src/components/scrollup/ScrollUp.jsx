import React from 'react'
import "../../css/ScrollUp.css"
export default function ScrollUp() {
    window.addEventListener("scroll",function (){
        const ScrollUp = document.querySelector(".scrollup");
        //when the scroll is higher than 560 viewport height, add the show-scroll
        //class to a tag with the scroll-top class
        if(this.scrollY >=560) ScrollUp.classList.add("show-scroll");
        else ScrollUp.classList.remove("show-scroll");
    });
  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}
