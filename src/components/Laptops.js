import React from 'react'
import Laptop from "./Laptop"

const Laptops = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => (
                <div className="laptops-container">
                    <Laptop name={item.name} brand={item.brand} weigth={item.weigth}/>
                </div>
            ))}
        </div>
    )
}

export default Laptops
