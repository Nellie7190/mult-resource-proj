import React, { useState } from 'react'

const ColorGenerator = () => {
    const [ bgColor, setBgColor ] = useState('white')
    const [ typeColor, setTypeColor ] = useState('Type of Color')
    const [ colorName, setColorName ] = useState('Specific Color')

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
        setTypeColor("RGB Color")
        // document.querySelector('h3').textContent = "RGB Color"
        setColorName(bgColor)
    }

    // function hexColor() {
    //     alert('hex clicked!')
    // }
    const hexColor = () => {
        const hColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + hColor;
        setTypeColor("HEX Color")
        setColorName(hColor)
      }

    function randomColor() {
        alert('random color clicked!')
    }

  return (
    <>
        <button onClick={rgbColor}>Create RGB Color</button>
        <button onClick={hexColor}> Create HEX Color</button>
        <button onClick={randomColor}>Generate Random Color</button>
        <h3>{typeColor}</h3>
        <h1>{colorName}</h1>
    </>
  )
}

export default ColorGenerator