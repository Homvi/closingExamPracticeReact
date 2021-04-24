import React from 'react';
import { useState } from "react";

const Laptop = ({ name, brand, weigth }) => {
    const [isMoreInfoClicked, setMoreInfo] = useState(false)

    const clickHandler = () => {
        setMoreInfo(!isMoreInfoClicked)
    }

    return (
        <div className="laptop-container">
            <div className="name">{name}</div>
            <div className="brand">{brand}</div>
            {isMoreInfoClicked && <div className="weight">{weigth} kg</div>}
            {isMoreInfoClicked ? <button onClick={clickHandler} >less</button> : <button onClick={clickHandler} >more</button>}
        </div>
    )
}

export default Laptop
