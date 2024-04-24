import { getEvolutionChain, getPokemonSpecie } from "@/services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import PokemonEvolutionCard from "../ui/pokemonEvolutionCard/pokemonEvolutionCard";

export default async function PokemonEvolutionChain({
    pokemon,
}: {
    pokemon: any;
}) {
    const eeveeEvolution = [
        "eevee",
        "vaporeon",
        "flareon",
        "umbreon",
        "jolteon",
        "glaceon",
        "espeon",
        "leafeon",
        "sylveon",
    ];
    const evolutionChain = await getPokemonSpecie(pokemon.name).then(
        async (e) => await getEvolutionChain(e.evolution_chain.url)
    );

    if (!evolutionChain.chain.evolves_to[0]) {
        return (
            <section className="text-center w-1/4 max-h-128">
                <h1 className="text-white mb-2">Evolution Chain</h1>
                <div className="bg-slate-200 p-4 rounded-lg flex flex-col items-center gap-2">
                    <h2 className="py-2 px-6 border border-slate-400 rounded-lg">
                        this pokemon doesn`t evolve
                    </h2>
                </div>
            </section>
        );
    } else if (evolutionChain.chain.species.name === "eevee") {
        return (
            <section className="text-center w-7/12">
                <h1 className="text-white mb-2">Evolution Chain</h1>
                <div className="bg-slate-200 rounded-lg flex p-4 gap-2 max-h-128">
                    <div className="flex flex-col justify-center pl-8">
                        <PokemonEvolutionCard pokemon={evolutionChain.chain.species.name} />
                    </div>
                    <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="w-12 mx-8"
                    />
                    <div className="flex flex-col max-h-200 flex-wrap justify-center gap-4">
                        {evolutionChain.chain.evolves_to.map(
                            (stageTwo: any, index: number) => {
                                return (
                                    <PokemonEvolutionCard
                                        pokemon={stageTwo.species.name}
                                        key={index}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className="text-center w-2/4">
                <h1 className="text-white mb-2">Evolution Chain</h1>
                <div className="bg-slate-200 rounded-lg items-center justify-center flex p-4 gap-2">
                    <div className="flex flex-col justify-center">
                        <PokemonEvolutionCard pokemon={pokemon.name} />
                    </div>
                    <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="w-12 mx-8"
                    />
                    <div className="flex flex-col flex-wrap justify-center gap-4">
                        {evolutionChain.chain.evolves_to.map(
                            (stageTwo: any, index: number) => {
                                return (
                                    <PokemonEvolutionCard
                                        pokemon={stageTwo.species.name}
                                        key={index}
                                    />
                                );
                            }
                        )}
                    </div>
                    {evolutionChain.chain.evolves_to[0].evolves_to[0] ? (
                        <>
                            <FontAwesomeIcon
                                icon={faArrowRightLong}
                                className="w-12 mx-8"
                            />
                            <div className="flex flex-col flex-wrap justify-center gap-4">
                                {evolutionChain.chain.evolves_to[0].evolves_to.map(
                                    (stageThree: any, index: number) => {
                                        return (
                                            <PokemonEvolutionCard
                                                pokemon={
                                                    stageThree.species.name
                                                }
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </section>
        );
    }
}
