import React,{useState} from 'react'

const Pokemon = () => {
    const [pokemons,setPokemons]=useState([])
    const fun1 = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response =>{
            return response.json();
        })
        .then(response =>{
            setPokemons(response.results);
        }
            )
        .catch(err => {
            console.log(err);
        })
}


  return (
    <>
    <button onClick={fun1}>Fetch Pokemon</button>
    <ul>
        {pokemons.map((pokemon,idx)=> <li key={idx}>{pokemon.name}</li>)}
    </ul>
    </>
  )
}

export default Pokemon