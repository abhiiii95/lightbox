"use client";
import React, { useState } from 'react';
import job from "./TabData.json"
import JobList from './JobList/JobList';
import JobBtn from './JobBtn/JobBtn';

const Tabs = () => {
    const[currentIndex,setCurrentIndex] = useState(0)
  return (
    <>
        <JobBtn job={job} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      <JobList job={job} currentIndex={currentIndex} />
    </>
  )
}

export default Tabs
