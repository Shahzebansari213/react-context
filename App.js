import React, {useState} from 'react';
import Parent from './Parent';

function App() {
  let [number, setnumber] = useState(45)
  return (
    <div>
      <Parent num = {number}></Parent>
      <button onClick={()=>{setnumber(++number)}}> Increase Age </button>
    </div>
  );
}

export default App;
