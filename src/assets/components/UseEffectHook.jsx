import React from 'react'
import { useState, useEffect } from 'react'
const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect");
    }, [count])
    //______Side Effects
    //  let num = 0
    // const funct=()=>{
    //  num+1
    // }
    return (
        <>
            <div className='crd1'>
                <h1>UseEffect</h1>
                <p>Count : {count}</p>
                <button onClick={() => { setCount(count + 1) }}>Increase</button>
            </div>
        </>
    )
}
export default UseEffectHook