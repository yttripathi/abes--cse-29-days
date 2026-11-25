import React, { useState } from 'react'

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yePTLMcBwESvXnS6qkwlewQKDZkcuaIV8L7YHe8MRA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlzNVb0nhc_FiO_0F4eHcIP6oQDa8OaqVrfSJr6jqdg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9VnBuSyHFjrLR1qAwTxQgBji0Ih8gnFoXIkcV08ZEA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vFGhADxcpmphT_kw0ExLPDswGYRRDrrgq8dF5E9Ccg&s=10"
    ]
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ backgroundColor: "black", color: "white" }}>
                ImageSlider
            </h1>
            <br></br>
            <img src={images[index]} alt="img-here"
                style={{ height: "200px", width: "200px" }}></img>
            <br></br>
            <button onClick={() =>
                setIndex((index - 1 + images.length) % images.length)}>
                Left
            </button>
            <button onClick={() =>
                setIndex((index + 1) % images.length)}>
                Right
            </button>
        </div>
    )
}

export default ImageSlider