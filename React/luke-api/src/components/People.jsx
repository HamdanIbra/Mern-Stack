import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
const People = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then(response => { setData(response.data) })
    },);

    return (
        <div>
            {data ? (
                <>
                    <h1 style={{ color: "red" }}>{data.name}</h1>
                    <h3>Height : {data.height}</h3>
                    <h3>Mass : {data.mass}</h3>
                    <h3>Hair Color : {data.hair_color}</h3>
                    <h3>Skin Color : {data.skin_color}</h3>
                </>
            ) : (
                <p style={{ color: "red" }}>Loading...</p>
            )}
        </div>
    );

}

export default People