import React from 'react'

const Title = ({text}) => {
  return (
    <>
      <h1>{text || "Default"}</h1>
    </>
  )
}

export default Title
