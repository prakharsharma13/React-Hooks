import { useState } from "react";

const Count = () => {
    const[count, setCount] = useState(0);

    const increaseCount = () => {
        setCount((prev) => prev +1);
        
    }
    const decreaseCount = () => {
        {count > 0 ? setCount(prev=>prev-1) : setCount(0)}
        
    }
    return (
        <>
        <h1>Count: {count} </h1>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        </>
    )
}

export default Count;