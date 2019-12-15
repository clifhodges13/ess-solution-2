import React, { useState } from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Instructions from './components/Instructions';

function App() {

  const [isToggled, setIsToggled] = useState(false)

  // click handler that switches our toggled state
  const handleClick = () => {
    setIsToggled(!isToggled)
  }

  return (
    <div>
    <h1 id="title"><strong>Page</strong> <small>Knowledge Check: Exercise</small>
      <hr />
    </h1>

    {/* If our toggled state is false, show Page One, otherwise, show Page Two */}
    {!isToggled ? <PageOne /> : <PageTwo />}
    
    {/* If our toggled state is false, display the text "Next", otherwise, show the text "Back" */}
    <button onClick={handleClick}>{!isToggled ? 'Next' : 'Back'}</button>

    <Instructions />
    </div>
  );
}

export default App;
