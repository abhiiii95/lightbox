"use client";
import React, { useState } from 'react'
import Title from './Title/Title';
import menu from "./MenuList.json";
import MenuItem from './MenuItem/MenuItem';
import MenuButton from './MenuButton/MenuButton';

const category = new Set(["all",...menu.map((cat)=>cat.category)]);
const Gallary = () => {
    const[list,setList] = useState(menu)
    const[cat,setCat] = useState(category)
    const filter = (id) =>{
      if(id === "all"){

        setList(menu)
        return;
      }
      const newItems = menu.filter((item)=>item.category === id)
      setList(newItems)
    }
    // console.log(category,"category")
  return (
    <>
      <Title text="Gallary" />
      <MenuButton categories={cat} filter={filter} />
      <MenuItem list={list} />
    </>
  )
}

export default Gallary
