import { Pokemon } from '../models/pokemon.model';
export async function getpokemonscontroller(): Promise<Pokemon[]> {
    // SE LLAMA A LA API REST
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    const result = await response.json();
    const pokemons = result.results.map((pokemon: any) => ({ 
        name: pokemon.name,
        id: pokemon.national_number,
        imggif: pokemon.sprites['animated'],
        imgnormal: pokemon.sprites['animated'],
        imglarge: pokemon.sprites['large'],
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
    }));

    return pokemons;
}
