import { useState } from "react";

const UseState = () => {
    const[color, setColor] = useState("Red");
    const[change, setChange] = useState(null);

    const changeColor = ()=>{
        setColor("Blue");
        setChange(true);
    }
    return (
        
        <>
            <h1>My favourite color is {color}</h1>
            <button onClick={changeColor}>Blue</button>

            {change && (
                <h1>{color}</h1>
            )}
        </>
    )
}

export default UseState;