import React from 'react'
import Child from './Child'


function Parent(props) {
  console.log(props.num)
    return (
      <div>
        <Child num = {props.num}></Child>
      </div>
    );
  }
  
  export default Parent;






/*export const parent = (props) => {
    return (
        <div>
            <child numb = {props.num}>Hello parent</child>
        </div>
    )
}
*/