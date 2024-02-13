import React, { useState } from 'react'

const ColorGenerator = () => {
    const [ bgColor, setBgColor ] = useState(null)

    function getrandomColor() {
        return
    }
    
    function rgbColor() {
        let x = Math.floor(Math.random() * 256)
        let y = Math.floor(Math.random() * 256)
        let z = Math.floor(Math.random() * 256)
        let bgColor = `rgb(${x}, ${y}, ${z})`
        console.log(bgColor)
        document.body.style.backgroundColor = bgColor;
        document.querySelector('h3').textContent = "RGB Color"
        document.querySelector('h1').textContent = bgColor
    }

    // function hexColor() {
    //     alert('hex clicked!')
    // }
    const hexColor = () => {
        const hColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + hColor;
        document.querySelector('h3').textContent = "HEX Color"
        document.querySelector('h1').textContent = hColor
      }

    function randomColor() {
        alert('random color clicked!')
    }

  return (
    <>
        <button onClick={rgbColor}>Create RGB Color</button>
        <button onClick={hexColor}> Create HEX Color</button>
        <button onClick={randomColor}>Generate Random Color</button>
        <h3>Type of Color</h3>
        <h1>Specific Color</h1>
    </>
  )
}

export default ColorGenerator