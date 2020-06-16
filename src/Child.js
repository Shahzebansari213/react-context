import React, {useContext} from 'react';
import ValueContext from './ValueContext'
import Child2 from './Child2'
function Child() {
  let value = useContext(ValueContext);
    return (
      <div>
        child age is {value}
        <button onClick = {()=>{value[1](++value[0])}}>Increase age</button>
        <Child2></Child2>
      </div>
    );
  }
  
  export default Child;


/*
export const child = (props) => {
    return (
        <div>
            child age is {props.num}
        </div>
    )
}
*/