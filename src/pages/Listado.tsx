import Figure from 'react-bootstrap/Figure';
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';



import {getpokemonscontroller } from "../controllers/getpokemonscontroller";
import { Pokemon } from "../models/pokemon.model";



const Listado=()=>{

    const [pokemons,setPokemons] = useState<Pokemon[]>([]);
    const [query,setQuery] = useState("")

    useEffect(()=>{
      const obtenerPokemons = async()=>{
        const obpokemons = await getpokemonscontroller();
        setPokemons(obpokemons);
      }
      obtenerPokemons();
    });


    const filtrarpokemons = pokemons?.slice(0.151).filter((pokemon)=>{
      return pokemon.name.toLowerCase().match(query.toLowerCase());
    })

    return(
        <>
        <h1>Listado de Pokemones</h1>

       <center>
        <header>
         <input
            value={query}
            placeholder="Buscar un Pokemon"
            onChange={(event) => setQuery(event.target.value.trim())}
            type="text"

         />

        </header>

        </center>

        <br>
        </br>

        <div className="content-wrapper">
           <div className="content"> 
              <div className="row gap-3">

                {filtrarpokemons?.slice(0,151).map((pokemon)=>(
      
      <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Header><b>Tipo: Fantasma</b> {pokemon.type}</Card.Header>
      <Card.Img width="80" height="100" variant="top" src={pokemon.imggif} className="d-block mx-auto w-50"/>

      <Card.Body>
        <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
     <ListGroup variant="flush">
        <ListGroup.Item>

            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/18897/18897938.png"
            /><b> HP :</b>{pokemon.hp}

      </ListGroup.Item>

        <ListGroup.Item>
          
          <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/297/297837.png"
            />
          
          <b> Ataque :</b> {pokemon.attack} </ListGroup.Item>
        <ListGroup.Item>
          
          <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/8193/8193190.png"
            />


          <b> Defensa :</b> {pokemon.defense}          
          </ListGroup.Item>


        <ListGroup.Item>

            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/3311/3311830.png"
            />

          <b> Ataque especial :</b> {pokemon.sp_atk} 
          
          </ListGroup.Item>
        <ListGroup.Item>
          
          
          <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/9371/9371412.png"
            />
          
          <b> Defensa especial :</b> {pokemon.sp_def} 

          </ListGroup.Item>


        <ListGroup.Item>

            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/13350/13350711.png"
            />


          <b> Velocidad : </b> {pokemon.speed} </ListGroup.Item>
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