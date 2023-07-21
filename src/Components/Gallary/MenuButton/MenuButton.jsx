import React from 'react'
import styles from "./MenuButton.module.css"

const MenuButton = ({categories,filter}) => {
  // Convert set to an array
  const myArray = Array.from(categories);
  return (
    <>
      {myArray.map((value)=>{
        return(
          <>
          <button key={value} 
          className={styles.btn}
          onClick={()=>filter(value)}>{value}</button>
          </>
        )
      })

      }
    </>
  )
}

export default MenuButton
