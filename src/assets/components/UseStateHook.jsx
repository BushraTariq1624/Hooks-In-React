import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
    let [counter, setCounter] = useState(0)
    const addValue=()=>{
        setCounter(counter+1)
    }
    const removeValue=()=>{
        setCounter(counter-1)
    }
    const resetValue=()=>{
        setCounter((counter=0))
    }
    return (
        <>
            <div className='crd'> 
                <h1>Counter</h1> 
                <p>Count is {counter}</p>
                <button className='btn1' onClick={addValue}>add</button>
                <button className='btn2' onClick={removeValue}>remove</button>
                <button className='btn3' onClick={resetValue}>reset</button>
            </div>
        </>
    )
}

export default UseStateHook