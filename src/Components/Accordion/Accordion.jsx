import React, { useState } from 'react'
import data from './data'

const Accordion = () => {
  const [ selected, setSelected ] = useState(null)

  function handleSingleSel(id, item) {
    // console.log(item.answer)
    setSelected(id === selected ? null : id)
  }

  return (
    <div className='wrapper'>
      <div className='accordion'>
      {
        // Just in case there is no data
        data && data.length > 0 ? 
        data.map(item => (
        <div className='item' key={item.id} >
          {/* anon funct so it doesn't invoke on pageload */}
          <div className='title' onClick={()=>handleSingleSel(item.id, item)}>
            <h3>
              {item.question}
              {/* want to change below to be expandable and collapsible */}
            </h3>
            <span>+</span> 
            {
              selected === item.id && selected ? <div>{item.answer}</div> : null
            }
          </div>
        </div>
        ))
        : <div> No data found </div>
      }

      </div>
    </div>
  )
}

export default Accordion