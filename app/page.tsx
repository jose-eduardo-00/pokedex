import Header from "@/components/header/header";
import HomeFilter from "@/components/homeFilter/homeFilter";
import PokemonList from "@/components/pokemonList/pokemonList";


export default function Home() {
    return (
        <>
            <Header page={"Pokédex"} />
            <HomeFilter />
            <PokemonList />
        </>
    );
}
