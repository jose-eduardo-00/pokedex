import { getPokemon } from "@/services/api";
import PokemonSpecie from "../pokemonSpecie/pokemonSpecie";
import PokemonAbilityCard from "../pokemonAbilityCard/pokemonAbilityCard";
import PokemonBaseStats from "../pokemonBaseStats/pokemonBaseStats";

export default async function PokemonInfo({ name }: { name: string }) {
    const pokemon = await getPokemon(name);

    return (
        <div className="flex flex-wrap justify-around gap-2">
            <PokemonSpecie pokemon={pokemon} />
            <PokemonAbilityCard pokemon={pokemon} />
            <PokemonBaseStats />
            {/* <div>Evolution Chain</div>
            <div>Location</div>
            <div>Sprites</div> */}
        </div>
    );
}
