import React, { useState } from "react";
import '../Styles/Toy.css'


const Toy = (props) => {
    const [zoom, setZoom] = useState(false)
    let ages;
    typeof props.ages === 'object' ? ages = `Ages: ${props.ages[0]} to ${props.ages[1]}` : ages = `Ages: ${props.ages}`
    return (
        <>
        {zoom && 
        <div className="modal" onClick={() => setZoom(false)}>
            <div>
                <img className="Toy__img-zoom" src={props.img} onClick={() => setZoom(false)}/>
            </div>
            </div>}
        <div className="Toy">
            <div className="Toy__img-box">
                <img className="Toy__img" src={props.img} onClick={() => setZoom(true)}/>
            </div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{ages}</p>
        </div>
        </>
    )
}

export default Toy