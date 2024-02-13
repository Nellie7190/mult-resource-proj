import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../Components/Accordion/Accordion'

const Directory = () => {

    

  return (
    <>
        <h1>Welcome! This site contains multiple resources. What would you like to check out?</h1>
        <ul>
            <li>
                <Link to="/accordion">Accordion</Link>
            </li>
      </ul>
    </>
  )
}

export default Directory