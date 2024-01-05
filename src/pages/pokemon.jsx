import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPokemons } from "../redux/pokemonSlice";
import { Grid } from "../components/Grid/Grid";
import { useGetPokemonsQuery } from "../redux/api";

export default function PokemonPage() {
    const [offset, setOffset] = useState(0);
    const {data, isError, isLoading, isFetching, isSuccess} = useGetPokemonsQuery(offset);

    if(isLoading || isFetching) return <p>Loading...</p>;

    const {count: totalCount, results: pokemons, previous, next} = data;

    const handlePagination = (url) => {
        console.log(url);
        const offset = new URL(url).searchParams.get("offset");
        setOffset(offset);
    }

    return <div style={{maxWidth: "90%", margin: "auto"}}>
        <Navigation />
        {isSuccess && totalCount && <h4>Total pokemons: {totalCount}</h4>}
        {isLoading ? <p>Loading...</p> : <Grid items={pokemons} />}        
        <br/>
        <div>
            {previous && <button onClick={() => handlePagination(previous)}>Previous</button>}
            {next && <button onClick={() => handlePagination(next)}>Next</button>}
        </div>
    </div>
}