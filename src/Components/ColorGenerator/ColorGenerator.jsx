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
        document.body.style.backgroundColor = bgColor;
        setTypeColor("RGB Color")
        setColorName(bgColor)
    }

    // function hexColor() {
    //     alert('hex clicked!')
    // }

    function hexColorGenerator(options) {
        return Math.floor(Math.random()*options.length)
    }

    const hexColor = () => {
        const options = ['A', 'B', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let hColor = '#'
        for (let i = 0; i < 6; i++) {
            console.log(hColor += options[hexColorGenerator(options)])
        }
        setTypeColor("HEX Color")
        document.body.style.backgroundColor = hColor;
        setColorName(hColor)


        //////////////// FORMER CODE BEFORE UPDATED
        // const hC1 = Math.floor(Math.random()*options.length)
        // const hC2 = Math.floor(Math.random()*options.length)
        // const hC3 = Math.floor(Math.random()*options.length)
        // const hC4 = Math.floor(Math.random()*options.length)
        // const hC5 = Math.floor(Math.random()*options.length)
        // const hC6 = Math.floor(Math.random()*options.length)
        // const hColor = `${options[hC1]}${options[hC2]}${options[hC3]}${options[hC4]}${options[hC5]}${options[hC6]}`
      }

    function randomColor() {
        const options = [rgbColor, hexColor]
        let randomChosen = Math.floor(Math.random()*options.length)
        return options[randomChosen]()
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