import React from 'react'
import Duties from './Duties/Duties'

const JobList = ({job,currentIndex}) => {
    const {id,title,date,duties} = job[currentIndex]
  return (
    <>
    <div key={id}>
    <p>{title}</p>
    <span>{date}</span>
    <Duties duty={duties} />
    </div>
    </>
  )
}

export default JobList
