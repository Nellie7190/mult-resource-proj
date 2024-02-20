import React from 'react'
import { Link } from 'react-router-dom'


const HomeButton = () => {
    function handleClick () {
        document.body.style.backgroundColor = 'white'
    }
  return (
    <>
        <Link to='/' onClick={handleClick}>Back to Home</Link> 
    </>
  )
}

export default HomeButton