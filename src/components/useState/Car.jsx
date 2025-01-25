import { useState } from "react";

const Car = () => {
    const[car, setCar] = useState({
        brand: "Ferrari",
        model: "Roma",
        year: "2020",
        color: "Red"
    })

    const changeColor = () => {
        setCar((prev) => {
            return {...prev, color: "blue"}
        })
    }
    return(
        <>
            <h1>My {car.brand}</h1>
            <h2>It's a {car.color} {car.model} from {car.year} </h2>
            <button onClick={changeColor}>Change</button>
        </>
    )
}

export default Car;