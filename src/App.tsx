import { useEffect, useState } from 'react';
import axios from 'axios';

import PokemonCard, { Pokemon } from './components/pokemon_card';
import Paginator, { Pagination } from './components/paginator';

type PokemonList = {
    name: string;
    url: string;
}

function App()  {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pagination, setPagination] = useState<Pagination>({} as Pagination);

    async function fetchList(url: string){
        setLoading(true);
        const result = await axios.get(`${url}`);
        setPagination(result.data)
        const list = result.data.results;
        const promise = list.map(async (item: PokemonList) => await fetchPokemonInfo(item.url) );
        const pokemons: Pokemon[] = await Promise.all(promise)
        setPokemons(pokemons);
        setLoading(false);
    }

    async function fetchPokemonInfo(url: string){
        const pokemon = await axios.get(`${url}`);
        return pokemon.data;
    }
    
    function handlePreviusPage(){
        if(pagination.previous){
            fetchList(pagination.previous)
        }
    }

    function handleNextPage(){
        if(pagination.next){
            fetchList(pagination.next)
        }
    }

    useEffect(() => {
        fetchList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    },[])

    return (
        <>
            <div className="content"><h1>Pokeact</h1></div>
            <div className="content">
                {pokemons.map((pokemon, index) => {
                    return  <PokemonCard key={index} pokemon={pokemon}/>
                })}
            </div>
            <Paginator pagination={pagination} handlePrevius={handlePreviusPage} handleNext={handleNextPage}/>
            {
                isLoading && (
                    <div className="preloader">
                        <div className="loader"></div>
                        <p>Carregando...</p>
                    </div>
                )
            }
        </>
    );
}

export default App;