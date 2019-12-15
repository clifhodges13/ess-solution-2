import React, { useState, useEffect } from 'react'
import { buttonsCopy, definitionsCopy } from '../data/copy'
import { StyledEmbed } from '../css/second'

export default function PageOne() {
  const [isOpen, setIsOpen] = useState(false)
  const [defs, setDefs] = useState()
  const [currentIndex, setCurrentIndex] = useState(null)

  // create event handler that switches our toggled stated and stores the index of the event target into state.
  const toggleIsOpen = (e, i) => {
    e.preventDefault()
    setIsOpen(!isOpen)
    setCurrentIndex(i)
  }

  // run this function when the component mounts
  useEffect(() => {
    setDefs([...definitionsCopy]) // spread and destructure the definitionsCopy array and store it in state
  }, [])
  
  return (
    // Wrap our component JSX in our styled embed higher order component which passes along styling through to the component
    <StyledEmbed> 
      <div id="iframeOne" className="embed-responsive-item">
        <div id="esscontainer" className="esscontainer_shadow">
            <div id="ess-wrapper">
                <div id="ess-block">       
                    <div className="ess-toptitle">
                        <h1>Knowledge Check: Exercise</h1>
                    </div>
                    <div className="dropdown">
                        <a className="dropbtn">Resources</a>

                        <div className="dropdown-content" style={{right: "0"}}>

                          {/* Loop over our buttonsCopy array and create an anchor tag for each with it's corresponding text content */}
                          {buttonsCopy.map((btn, index) => (
                            <a href="#" target="_blank" key={index}>{btn}</a>
                          ))}

                        </div>
                    </div> 
                    <div className="ess-content">
                        <h1>KNOWLEDGE CHECK</h1>
                        <p>Click on each word to review its definition</p>

                        <ul className="definitions">

                          {/* Check that defs is truthy and then map over defs array to create a div for each one */}
                          {defs && defs.map((def, index) => {
                            return (
                            <div key={index}>

                              <li><button onClick={(e) => toggleIsOpen(e, index)} className="def_btn">{def.button}</button></li>

                              {/* if the state is open, render the definition for the corresponding button, otherwise show nothing */}
                              {isOpen ? (
                                <div id={def.id} className="answerbtns">
                                  {defs[currentIndex].definition}
                                  <div className="close" >
                                    <button key={def.id} onClick={(e) => toggleIsOpen(e)}>X</button>
                                  </div>
                                </div>
                              ) : null }

                            </div>
                          )})}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </StyledEmbed>
  )
}