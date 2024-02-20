import React, { useState } from 'react'
// using react-icons
import { FaStar } from 'react-icons/fa'
import HomeButton from '../../HomeButton'

// default if starNum not passed through props
const StarRating = ({starTotal = 5}) => {
    const [ rating, setRating ] = useState(0)

    function handleClick (index) {
        console.log(index + 1, 'clicked!')
        //if the star selected and less than, make className active
        for(let i=0; i<=index; i++){
            console.log(this)
            // className='active'
        }
    }

    function handleMouseMove(index) {
        return
    }

    function handleMouseLeave(index) {
        return
    }
  return (
    <>
        <HomeButton />
        <div> 
            
            {
                [...Array(starTotal)].map((_, index) =>  
                    <FaStar 
                        key={index}
                        className='inactive'
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                )
            }
        </div>
    </>
  )
}

export default StarRating