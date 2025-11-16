import Vector_D from "../assets/img/Vector_D.png";
import Vector_G from "../assets/img/Vector_G.png";
import React, { useState } from 'react';

export const Slider = ({slides}) =>{
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return (<><div className="image-section">
                {slides.length>1 ? <img  src={Vector_G} className="left-arrow" onClick={prevSlide} alt="left arrow"/>: null}
                {slides.length>1 ?<span className="bulletPoint">{current+1}/{length}</span>: null}
                {slides.map((picture,index)=>{
                    return (<div key={index} className="carroussel-box">{index === current && <img src={picture} className="property-image" alt="image"/>} </div>)
                })}
                {/* <img
                src={carroussel}
                alt="Cozy Loft"
                className="property-image"
                /> */}
                {slides.length>1 ?<img src={Vector_D} className="right-arrow" onClick={nextSlide} alt="right-arrow" />: null}
            </div></>)
}