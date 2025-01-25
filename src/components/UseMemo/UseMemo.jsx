import { useMemo, useState } from "react";

const UseMemo = () => {
    const[number, setNumber] = useState(0);
    const[counter, setCounter] = useState(0);

    function cubeNum(num){
        console.log("Calculation done");
        return Math.pow(num, 3)
    }

    const result = useMemo(()=> {return cubeNum(number)}, [number])
    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <h3>Cube of {number} is : {result}</h3>

            <button onClick={()=> setCounter(prev=>prev+1)}>Counter++</button>
            <h3>Counter is : {counter}</h3>
        </>
    )
}

export default UseMemo;