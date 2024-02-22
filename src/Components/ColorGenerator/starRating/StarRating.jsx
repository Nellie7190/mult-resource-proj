import React, { useState } from 'react'
// using react-icons
import { FaStar } from 'react-icons/fa'
import HomeButton from '../../HomeButton'
import './styles.css'

// default if starNum not passed through props
const StarRating = ({starTotal = 5}) => {
    const [ rating, setRating ] = useState([])

    function handleClick (index) {
        console.log(index + 1, 'clicked!')
        //if the star selected and less than, make className active
        let newRating = []
        for(let i=0; i<=index; i++){
            console.log('this is included in new rating', newRating.push(i))
        }
        setRating(newRating)
    }
    console.log(`THIS IS THE CURRENT RATING ${rating}`)

    /////// Future Hover functions for next step
    // function handleMouseMove(index) {
    //     return
    // }

    // function handleMouseLeave(index) {
    //     return
    // }
  return (
    <>
        <HomeButton />
        <div> 
            
            {
                [...Array(starTotal)].map((_, index) =>  
                    <FaStar 
                        key={index}
                        onClick={() => handleClick(index)}
                        // Want to add mouse hover in this app next
                        // onMouseMove={() => handleMouseMove(index)}
                        // onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                        className={rating.includes(index) ? 'active' : 'inactive'}
                    />
                )
            }
            <h1>{rating.length} stars</h1>
        </div>
    </>
  )
}

export default StarRating