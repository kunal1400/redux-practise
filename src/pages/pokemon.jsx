import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPokemons } from "../redux/pokemonSlice";
import { Grid } from "../components/Grid/Grid";

export default function PokemonPage() {
    const {totalCount, next, previous, pokemons, status} = useAppSelector(state => state.pokemons);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(pokemons.length === 0) {
            dispatch(fetchPokemons());
        }
    }, []);

    return <div style={{maxWidth: "90%", margin: "auto"}}>
        <Navigation />
        {totalCount && <h4>Total pokemons: {totalCount}</h4>}
        {status === "pending" ? <p>Loading...</p> : <Grid items={pokemons} />}        
        <br/>
        <div>
            {previous && <button onClick={() => dispatch(fetchPokemons(previous))}>Previous</button>}
            {next && <button onClick={() => dispatch(fetchPokemons(next))}>Next</button>}
        </div>

    </div>
}