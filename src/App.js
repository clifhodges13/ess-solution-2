import React, { useState } from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Instructions from './components/Instructions';

function App() {

  const [isToggled, setIsToggled] = useState(false)

  const handleClick = () => {
    setIsToggled(!isToggled)
  }

  return (
    <div>
    <h1 id="title"><strong>Page</strong> <small>Knowledge Check: Exercise</small>
      <hr />
    </h1>

    {!isToggled ? <PageOne /> : <PageTwo />}
    
    <button onClick={handleClick}>{!isToggled ? 'Next' : 'Back'}</button>

    <Instructions />
    </div>
  );
}

export default App;
