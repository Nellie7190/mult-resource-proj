import React from 'react'
// using react-icons
import { FaStar } from 'react-icons/fa'

// default if starNum not passed through props
const StarRating = ({starNum = 5}) => {
    console.log(starNum)
  return (
<div> 
    {
        [...Array(starNum)].map((_, index) =>  
            <FaStar key={index}/>
        )
    }
</div>
  )
}

export default StarRating