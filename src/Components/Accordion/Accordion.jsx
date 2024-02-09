import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState([]);
  // const [multSel, setMultSel] = useState([])
  const [multButton, setMultButton] = useState(false)
  

  function handleSingleSel(id) {
    setSelected(id === selected ? null : id);
  }

  function handleButtonChange() {
    let oppBtn  = multButton
    // multButton ? setSelected([]) : null
    if (multButton) {
      setSelected([])
    }
    return setMultButton(!oppBtn)
  }

  function handleMultSel(id) {
    let selCopy = selected
    setSelected(id === selected ? null : [...selCopy, id]);
  }

  return (
    <div className="wrapper">
      <button onClick={() => handleButtonChange()}>
        {
          multButton ? `Disable MultiSelection` : `Enable MultiSelection`
        }
      </button>
      <div className="accordion">
        {
          // Just in case there is no data
          data && data.length > 0 ? (
            data.map((item) => (
              <div className="item" key={item.id}>
                {/* anon funct so it doesn't invoke on pageload */}
                <div 
                className="title" 
                onClick={
                  multButton ?
                  () => handleMultSel(item.id)
                  :
                  () => handleSingleSel(item.id)}>
                  <h3>
                    {item.question}
                  </h3>
                  { selected !== null && selected.includes(item.id) ? (
                    <>
                    <span>-</span>
                    <div className="content">{item.answer}</div>
                    </>
                  ) : <span>+</span>}
                </div>
              </div>
            ))
          ) : (
            <div> No data found </div>
          )
        }
      </div>
    </div>
  );
};

export default Accordion;
