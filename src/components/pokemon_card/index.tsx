import React from 'react';

const pokemon_front_img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
import './styles.scss';

type PokemonType = {
    slot: number;
    type: {
        name: string;
    }
}

export type Pokemon = {
    id: number;
    name: string;
    weight: number;
    base_experience: number;
    types: PokemonType[];
}

type PokemonCardProps = {
    pokemon: Pokemon;
}

function PokemonCard({pokemon}: PokemonCardProps) {
  return (
    <div className="pokemon-card">
        <img src={`${pokemon_front_img}${pokemon.id}.svg`} />

        <div className="info">
            <ul>
                {pokemon.types.map((type) => ( <li><span>{type.type.name}</span></li>))}
                
            </ul>
            
            <strong className="name">{pokemon.name}</strong>

            <div className="footer">
                <span>Tamanho: {pokemon.weight}</span>
                <span>Exp: {pokemon.base_experience}</span>
            </div>
        </div>
    </div>
  );
}

export default PokemonCard;