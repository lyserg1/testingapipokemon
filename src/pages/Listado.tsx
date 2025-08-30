import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


import {getpokemonscontroller } from "../controllers/getpokemonscontroller";
import { Pokemon } from "../models/pokemon.model";



const Listado=()=>{

    const [pokemons,setPokemons] = useState<Pokemon[]>([]);

    useEffect(()=>{
      const obtenerPokemons = async()=>{
        const obpokemons = await getpokemonscontroller();
        setPokemons(obpokemons);
      }
      obtenerPokemons();
    });

    return(
        <>
        <h1>Listado de Pokemones</h1>
        <div className="content-wrapper">
           <div className="content"> 
              <div className="row gap-3">

                {pokemons?.slice(0,3).map((pokemon)=>(
      
      <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Header>Tipo: Fantasma</Card.Header>
      <Card.Img width="80" height="100" variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif" className="d-block mx-auto w-50"/>

      <Card.Body>
        <Card.Title className="text-center">Gengar</Card.Title>
     <ListGroup variant="flush">
        <ListGroup.Item>HP: </ListGroup.Item>
        <ListGroup.Item>Ataque: </ListGroup.Item>
        <ListGroup.Item>Defensa: </ListGroup.Item>
        <ListGroup.Item>Defensa especial: </ListGroup.Item>
        <ListGroup.Item>Ataque especial: </ListGroup.Item>
        <ListGroup.Item>Velocidad: </ListGroup.Item>
      </ListGroup>
      
      </Card.Body>
    </Card>

    
                ))}




              </div>

           </div>

        </div>

        

        </>
    )
}

export default Listado;