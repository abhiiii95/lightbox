import React from 'react'

const JobBtn = ({job,currentIndex,setCurrentIndex}) => {
  return (
    <>
      {
        job.map((item,index)=>{
            return(
                <>
                <button style={{marginLeft:"50px"}} onClick={()=>setCurrentIndex(index)}>{item.title}</button>
                </>
            )
        })
      }
    </>
  )
}

export default JobBtn
