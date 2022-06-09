import React, { useEffect, useState } from "react";
import Toy from "./Toy";
import '../Styles/ToyContainer.css'

const ToyContainer = () => {
    const [toys, setToys] = useState([])

    const fetchToys = async () => {
        let response = await fetch('http://localhost:3001/toys')
        response = await response.json()
        setToys(response.map(toy => {
            return (
                <Toy 
                key={toy.id}
                name={toy.name}
                description={toy.description}
                ages={toy.ages}
                img={toy.img}/>
            )
        }))
    }

    useEffect(() => {
        fetchToys()
    }
    , [])

    return (
        <div className="ToyContainer">
            {toys}
        </div>
    )
}

export default ToyContainer