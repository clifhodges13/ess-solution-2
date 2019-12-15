import React, { useState, useEffect } from 'react'
import { buttonsCopy, definitionsCopy } from '../data/copy'
import { StyledEmbed } from '../css/second'

export default function PageOne() {
  const [isOpen, setIsOpen] = useState(false)
  const [defs, setDefs] = useState()
  const [currentIndex, setCurrentIndex] = useState(null)

  const toggleIsOpen = (e, i) => {
    e.preventDefault()
    setIsOpen(!isOpen)
    setCurrentIndex(i)
  }

  useEffect(() => {
    setDefs([...definitionsCopy]) // spread and destructure the definitionsCopy array and store it in state
  }, [])
  
  return (
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

                          {buttonsCopy.map((btn, index) => (
                            <a href="#" target="_blank" key={index}>{btn}</a>
                          ))}

                        </div>
                    </div> 
                    <div className="ess-content">
                        <h1>KNOWLEDGE CHECK</h1>
                        <p>Click on each word to review its definition</p>

                        <ul className="definitions">

                          {defs && defs.map((def, index) => {
                            console.log(index)
                            return (
                            <div key={index}>

                              <li><button onClick={(e) => toggleIsOpen(e, index)} className="def_btn">{def.button}</button></li>

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