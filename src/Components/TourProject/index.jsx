"use client";
import React, { useState } from 'react'
import styles from "./TourProject.module.css"
import {TourDetails} from "./TourProject"
import Image from 'next/image';

const Tour = () => {
    const[get,setGet]= useState(TourDetails)
    const [full,setFull] = useState(true)
    const remove =(id)=>{
        const newdata = get.filter(tour=>tour.id !== id)
        setGet(newdata)
        console.log(newdata)
    } 

  return (
    <>
      <div className={styles.mainContainer}>
        {
           get.length ? get?.map((value)=>{
            const {id,name,image,desc,price} = value;
            return(
                <div key={id}>
                    <div className={styles.mainImage}>
                    <Image src={image} alt="tourImages" width={100} height={100} />
                    </div>
                    <h4>{name}</h4>
                    <p><a onClick={()=>setFull(!full)}>{full ? `${desc.substring(0,20)} read full` : `${desc} read less` }</a> </p>
                    <h6>{price}</h6>

                    <button onClick={()=>remove(id)}>Remove Package</button>
                    </div>
            )
           }) 
           :"no Tour available"
        }
      </div>
    </>
  )
}

export default Tour
