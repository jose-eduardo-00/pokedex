import { getPokemonSpecie } from "@/services/api";
import nameFirstLetterUp from "../utils/nameFirstLetterUp/nameFirstLetterUp";
import { formatWeight, weightToPounds } from "./utils";

export default async function PokemonSpecie({ pokemon }: { pokemon: any }) {
    const pokemonSpecie = await getPokemonSpecie(pokemon.name)

    const speciesText = pokemonSpecie.flavor_text_entries.map((e: any) => {
        if (
            e.language.name == "en" &&
            e.version.name ==
                pokemonSpecie.flavor_text_entries[pokemonSpecie.flavor_text_entries.length - 1]
                    .version.name
        ) {
            return e.flavor_text;
        }
    });

    const gameVersion = nameFirstLetterUp(
        pokemonSpecie.flavor_text_entries[pokemonSpecie.flavor_text_entries.length - 1].version
    );
    const pokemonWeight = formatWeight(pokemon.weight);
    const pokemonWeightToPounds = weightToPounds(pokemonWeight);

    return (
        <section className="text-center w-1/4">
            <h1 className="text-white mb-2">Species</h1>
            <div className="bg-slate-200 p-4 rounded-lg">
                <div className="mb-3">
                    <p className="p-2 border border-slate-400 rounded-lg">
                        {speciesText}
                    </p>
                    <h3 className="text-sm text-slate-700">
                        Pokédex entry (from Pókemon {gameVersion})
                    </h3>
                </div>
                <div className="flex w-full gap-1 mb-3">
                    <div className="w-1/2">
                        <p className="border border-slate-400 rounded-lg">
                            {pokemon.height + "0 cm"}
                        </p>
                        <h3 className="text-sm text-slate-700">Height</h3>
                    </div>
                    <div className="w-1/2">
                        <p className="border border-slate-400 rounded-lg">
                            {pokemonWeightToPounds} lbs ({pokemonWeight + " Kg"}
                            )
                        </p>
                        <h3 className="text-sm text-slate-700">Weight</h3>
                    </div>
                </div>
                <div className="flex justify-center w-full gap-1">
                    <div className="w-1/2">
                        <p className="border border-slate-400 rounded-lg">
                            {pokemon.base_experience}
                        </p>
                        <h3 className="text-sm text-slate-700">
                            Base experience
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
