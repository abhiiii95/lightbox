"use client";
import React, { useState } from 'react';
import review from "./review.json"
import Image from 'next/image';

const Review = () => {
    const[index,setIndex] = useState(0)
    const{name,image,desc,price} = review[index]
    // for next data
    const nextData = () =>{
        setIndex((currentIndex)=>{
            const newIndex = currentIndex + 1
            if(newIndex > review.length -1){
                return 0
            }
            return newIndex
        })
    } 
      const prevData = () =>{
        setIndex((currentIndex)=>{
            const newIndex = currentIndex - 1
            if(newIndex < 0){
                return review.length -1
            }
            return newIndex
        })
    } 
  return (
    <>
      {
        <div>
            <Image src={image} alt="images"  width={100} height={100} />
            <p>{name}</p>
            <p>{desc}</p>
            <p>{price}</p>
            <br/>
            <button onClick={nextData}>next</button>
            <button className='ml-[10px]' onClick={prevData}>prev</button>
        </div>
      }
    </>
  )
}

export default Review
