import React, { useState} from "react";
import data from "./data";
import "./styles.css";
import HomeButton from "../HomeButton";

const Accordion = () => {
  const [selected, setSelected] = useState([]);
  // const [multSel, setMultSel] = useState([])
  const [multButton, setMultButton] = useState(false)
  

  function handleSingleSel(id) {
    // setSelected(id === selected ? [] : [id]);
    setSelected(selected.includes(id) ? [] : [id]);
  }
  console.log('this is how many is selected', selected.length)

  function handleButtonChange() {
    let oppBtn  = multButton
    // multButton ? setSelected([]) : null
    if (multButton) {
      setSelected([])
    }
    return setMultButton(!oppBtn)
  }

  function handleMultSel(id) {
    console.log(selected)
    // if selected id is not already expanded, do so
    if (!selected.includes(id)) {
      return setSelected([...selected, id]);
    } else {
      console.log(selected, selected.indexOf(id))
      let copiedArray = selected
      copiedArray.splice(selected.indexOf(id), 1)
      return setSelected([...copiedArray])
    }
  }
  console.log(selected)

  return (
    <div className="wrapper">
      < HomeButton />
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
                </div>
                  { selected === item.id || selected.includes(item.id) ? (
                    <>
                    <span>-</span>
                    <div className="content">{item.answer}</div>
                    </>
                  ) : <span>+</span>}
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
