import React from 'react';
import PokemonCard, { Pokemon } from './components/pokemon_card';

// import { Container } from './styles';

const wobbuffet: Pokemon = {
    id: 202,
    weight: 285,
    base_experience: 142,
    name: "wobbuffet",
    types: [
        {
            slot: 1,
            type: {
                name: "psychic",
            }
        },
        {
            slot: 2,
            type: {
                name: "iron",
            }
        }
    ]
}

const App: React.FC = () => {
    return (
        <>
            <h1>Pokedex</h1>
            <PokemonCard pokemon={wobbuffet}/>
        </>
    );
}

export default App;