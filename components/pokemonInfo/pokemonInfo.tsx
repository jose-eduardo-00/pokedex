import { getPokemon } from "@/services/api";
import PokemonSpecie from "../pokemonSpecie/pokemonSpecie";
import PokemonAbilityCard from "../pokemonAbilityCard/pokemonAbilityCard";
import PokemonBaseStats from "../pokemonBaseStats/pokemonBaseStats";
import PokemonEvolutionChain from "../pokemonEvolutionChain/pokemonEvolutionChain";
import PokemonLocations from "../pokemonLocation/pokemonLocation";
import PokemonSprites from "../pokemonSprites/pokemonSprites";

export default async function PokemonInfo({ name }: { name: string }) {
    const pokemon = await getPokemon(name);

    return (
        <div className="flex flex-wrap items-center justify-around gap-2 pb-6">
            <PokemonSpecie pokemon={pokemon} />
            <PokemonAbilityCard pokemon={pokemon} />
            <PokemonBaseStats pokemon={pokemon} />
            <PokemonEvolutionChain pokemon={pokemon} />
            <PokemonLocations pokemon={pokemon} />
            <PokemonSprites pokemon={pokemon} />
        </div>
    );
}
