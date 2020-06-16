import React, {useContext} from 'react';
import ValueContext from './ValueContext'
function Child() {
  let value = useContext(ValueContext);
    return (
      <div>
        child age is {value}
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