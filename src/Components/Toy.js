import React from "react";
import '../Styles/Toy.css'


const Toy = (props) => {
    return (
        <div className="Toy">
            <img className="Toy__img" src={props.img}/>
            <h2>{props.name}</h2>
            <p>{props.type}</p>
            <p>{props.description}</p>
            <p>{`Ages: ${props.ages[0]} to ${props.ages[1]}`}</p>
        </div>
    )
}

export default Toy