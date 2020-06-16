import React, {useReducer} from 'react'
import NumReducer from './NumReducer'

export const Child2 = () => {
    let [state, dispatch] = useReducer(NumReducer, 0)
    return (
        <div>
            child 2 age is {state}
            <button onClick= {()=>dispatch({type: 'increment'})}>Increment</button>
            <button onClick= {()=>dispatch({type: 'decrement'})}>decrement</button>
        </div>
    )
}

export default Child2