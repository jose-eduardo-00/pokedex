import { getPokemon } from "@/services/api";
import PokemonImageHeader from "../ui/pokemonImageHeader/pokemonImageHeader";
import nameFirstLetterUp from "../utils/nameFirstLetterUp/nameFirstLetterUp";

export default async function HeaderPokemon({ name }: { name: string }) {
    const pokemon = await getPokemon(name);
    const pokemonName = nameFirstLetterUp(pokemon);
    // console.log(pokemon);
    return (
        <header className="sticky top-0 flex justify-center items-center gap-4 px-6 py-2 bg-slate-800 text-white">
            <PokemonImageHeader
                src={pokemon.sprites.other.home.front_default}
                name={pokemonName}
            />
            <div className="flex flex-col gap-4">
                {pokemon.types.map((e: any, index: number) => {
                    const typeUpperCase = e.type.name.toUpperCase();
                    return (
                        <div
                            className="text-white text-xs border rounded-lg w-20 py-1 text-center"
                            key={index}
                        >
                            {typeUpperCase}
                        </div>
                    );
                })}
            </div>
        </header>
    );
}
