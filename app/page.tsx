import Header from "@/components/header/header";
import HomeFilter from "@/components/homeFilter/homeFilter";
import Loading from "@/components/pokemonList/loading";
import PokemonList from "@/components/pokemonList/pokemonList";
import { Suspense } from "react";


export default function Home() {
    return (
        <>
            <Header page={"Pokédex"} />
            <HomeFilter />
            <Suspense fallback={ <Loading /> }>
                <PokemonList />
            </Suspense>
        </>
    );
}
