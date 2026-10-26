import React, { useState } from 'react'
const ImageRotation = () => {
    const [degree, setDegree] = useState(0);
    const helper = () => { setDegree(degree+90);}
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ backgroundColor: "black", color: "white" }}>Image Roatation</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlzNVb0nhc_FiO_0F4eHcIP6oQDa8OaqVrfSJr6jqdg&s=10"
                style={{
                    height: "200px",
                    width: "200px",
                    transform: `rotate(${degree}deg)`
                }}>
            </img>
            <br></br>
            <button onClick={helper}>Rotate</button>
        </div>
    )
}
export default ImageRotation