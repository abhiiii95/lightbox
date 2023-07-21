import Image from 'next/image'
import React from 'react'
import style from "./MenuItemCard.module.css"

const MenuItemCard = ({category,image,desc}) => {
  return (
    <>
      <div key={category}>
        <div className={style.mainImage}>

        <Image src={image} alt="" width={100} height={100}/>
        </div>
        <br/>
        <p>{category}</p>
        <br/>
        <p>{desc.length > 80 ?`${desc.slice(0,80)}...` :desc}</p>
      </div>
    </>
  )
}

export default MenuItemCard
