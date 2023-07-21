"use client"
import React, { useEffect, useState } from 'react';
import sliderData from "../Carousel.json";
import styles from "./carousel.module.css";
import Image from 'next/image';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = () => {
    const[slider,setSlider] = useState(sliderData)
    const [current,setCurrent] = useState(0)
    const nextBtn = () =>{
      setCurrent((oldPerson)=>{
        const result = (oldPerson + 1) % slider.length;
        return result
      })
    }
      const prevBtn = () =>{
      setCurrent((oldPerson)=>{
        const result = (oldPerson - 1 + slider.length) % slider.length;
        return result
      })
    }
    useEffect(()=>{
      let sliderId = setInterval(()=>{
        nextBtn();
      },2000)
      return ()=>{
        clearInterval(sliderId);
      }
    },[current])
  return (
    <>
    <div className={styles.mainContainer}>

      {
          sliderData.map((value,personIndex)=>{
              return(
                  <>
                  <div className={styles?.slide} key={value?.id} 
                  style={{transform:`translateX(${100 * (personIndex - current )}%)`}}>
                    <div className={styles?.mainImage}>
                    <Image src={value.image} alt='image' width={80} height={80} />
                    </div>
                    <h4>{value.name}</h4>
                    <p>{value.post}</p>
                    <p>{value?.desc}</p>
                  </div>
                </>
            )
        })
      }
      <button className={styles?.leftBtn} onClick={prevBtn} >
        <BsArrowLeftCircleFill />
      </button>
       <button className={styles?.rightBtn} onClick={nextBtn}>
        <BsArrowRightCircleFill />
      </button>
    </div>
    </>
  )
}

export default Carousel
