import {  useEffect, useRef, useState } from "react";

const UseRef = () => {
    const[value, setValue] = useState(0);
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current +1;
    })
    return (
        <>
            <button onClick={() => setValue(prev=>prev-1)}>-1</button>
            <h3>{value}</h3>
            <button onClick={() => setValue(prev=>prev+1)}>+1</button>

            <h3>Rednered count: {count.current}</h3>
        </>
    )
}
export default UseRef;