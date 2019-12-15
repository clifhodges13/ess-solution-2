import React, { useState } from 'react'
import { buttonsCopy } from '../data/copy'
import { StyledEmbed } from '../css/second'

export default function PageTwo() {

  const [answer, setAnswer] = useState(null)

  
  const evaluteAnswer = () => {
    if(answer === 1) {
      return "Incorrect."
    } else if (answer === 2) {
      return "Congratulations."
    }
  }

  return (
    <StyledEmbed>
      <div id="iframeTwo" class="embed-responsive-item" >
        <div id="esscontainer" class="esscontainer_shadow">
            <link href="css/second.css" rel="stylesheet" type="text/css" />
            <div id="ess-wrapper">  
                <div id="ess-block">
                <div class="ess-toptitle"><h1>AS 17.37 Medical Uses of Marijuana</h1></div>
                <div class="dropdown">
                    <a class="dropbtn">Resources</a>
                    <div class="dropdown-content" style={{right: "0"}}>
                        
                    {buttonsCopy.map((btn, index) => (
                      <a href="#" target="_blank" key={index}>{btn}</a>
                    ))}

                    </div>
                </div>         
                <div class="ess-content">
                    <h3>Checking IDs Exercise</h3>
                    <p>Examine ID to determine whether or not you would sell to the customer.	</p>  
                    <div class="center"><img src="https://i.imgur.com/zE5tOlu.jpg" width="400" height="250" alt=""/>
                        <ul class="doit">
                          <span class="green">
                              <li><a onClick={() => setAnswer(1)}>SELL</a></li>
                          </span> 
                              <li><a onClick={() => setAnswer(2)}>DON'T SELL</a></li>
                        </ul>
                    </div>

                    <div class="expired" >
                      <strong>
                        {/* {answer === 1 ? "Incorrect." : "Congratulations."} */}
                        {evaluteAnswer()}
                      </strong>
                      
                      {answer && <><br />The correct answer is:<br /><span class="red"><strong>DON'T SELL</strong></span><br />This license has some bumps and scratches indicating that it may have been tampered with. It's expired. 
                      <div class="close"><a onClick={() => setAnswer(null)}><strong>X</strong></a></div></>}
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </StyledEmbed>
  )
}
