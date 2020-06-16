import React, {useState} from 'react';
import Parent from './Parent';
import ValueContext from './ValueContext'

function App() {
  //let [number, setnumber] = useState(45)
  return (
    <ValueContext.Provider value = {78}>
    <div>
      <Parent></Parent>
    
    </div>
    </ValueContext.Provider>
  )
}

export default App;
