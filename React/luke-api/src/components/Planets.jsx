import {React,useState,useEffect} from 'react'
import { useParams } from "react-router-dom"; 
import axios from 'axios';
const Planets = () => {
    const { id } = useParams();
    const[data,setData]=useState({});
    useEffect(() => {
  axios.get('https://swapi.dev/api/planets/' + id)
    .then(response => setData(response.data))
});

  return (
    <div>
        <h1 style={{color:"red"}}>{data.name}</h1>
        <h3>Climate : {data.climate}</h3>
        <h3>Terrain : {data.terrain}</h3>
        <h3>Surface Water : {data.surface_water}</h3>
        <h3>Population : {data.population}</h3>
    </div>
  )
}

export default Planets