import React from 'react'

const Duties = ({duty}) => {
  return (
    <>
    <ul>

     {
         duty.map((value)=>{
             return(
                 <>
                    <li>{value.desc}</li>
                </>
            )
        })
    }   
    </ul>
    </>
  )
}

export default Duties
