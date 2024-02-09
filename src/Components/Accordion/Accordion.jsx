import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState([]);
  const [enMultSel, setEnMultSel] = useState([])
  const [multButton, setMultButton] = useState(false)
  

  function handleSingleSel(id) {
    // console.log(item.answer)
    setSelected(id === selected ? null : id);
  }

  function handleButtonChange() {
    let oppBtn  = multButton
    console.log(!oppBtn)
    return setMultButton(!oppBtn)
  }

  // function()

  function handleMultSel(id) {
    console.log(id)
    let selCopy = selected
    setSelected(id === selected ? null : [...selCopy, id]);
    console.log(selected)
    //  let multSels = selected
    //  console.log(`This is ${multSels}`)
    //  multSels.push(id)
    //  console.log(`This is ${multSels}`)
    // setEnMultSel(multSels)
  }
  return (
    <div className="wrapper">
      <button onClick={() => handleButtonChange()}>Enable MultiSelection</button>
      <div className="accordion">
        {
          // Just in case there is no data
          data && data.length > 0 ? (
            data.map((item) => (
              <div className="item" key={item.id}>
                {/* anon funct so it doesn't invoke on pageload */}
                <div className="title" onClick={() => handleMultSel(item.id)}>
                  <h3>
                    {item.question}
                    {/* want to change below to be expandable and collapsible */}
                  </h3>
                  <span>+</span>
                  {selected.includes(item.id) ? (
                    <div className="content">{item.answer}</div>
                  ) : null}
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
