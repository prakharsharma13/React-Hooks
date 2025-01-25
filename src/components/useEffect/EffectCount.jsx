import { useEffect, useState } from "react";

const EffectCount = () => {
    const[count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(prev=>prev+1)
        },2000)
    },[])
    return (
        <>
            <h2>I've rendered {count} times</h2>
        </>
    )
}

export default EffectCount;