import React from 'react';
import style from "./MenuItem.module.css"
import MenuItemCard from './MenuItemCard/MenuItemCard';

const MenuItem = ({list}) => {
  return (
    <>
      <div className={style.menuItem}>
        {
            list.map((value)=>{
                return(
                    <>
                        <MenuItemCard {...value} />
                    </>
                )
            })
        }
      </div>
    </>
  )
}

export default MenuItem
