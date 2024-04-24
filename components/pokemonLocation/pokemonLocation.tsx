import { getPokemonLocation } from "@/services/api";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function PokemonLocations({ pokemon }: { pokemon: any }) {
    const pokeLocation = await getPokemonLocation(
        pokemon.location_area_encounters
    );
    // pokeLocation.map((e: any) => {
    //     console.log(e);
    // });
    if (!pokeLocation[0]) {
        return (
            <section className="text-center w-1/4">
                <h1 className="text-white mb-2">Locations</h1>
                <div className="bg-slate-200 p-4 rounded-lg flex flex-col items-center gap-2">
                    <h2>Não pode ser encontrado</h2>
                </div>
            </section>
        );
    } else {
        return (
            <section className="text-center w-1/4">
                <h1 className="text-white mb-2">Locations</h1>
                <div className="bg-slate-200 p-4 rounded-lg flex flex-col items-center gap-2 max-h-96 overflow-y-auto">
                    {pokeLocation.map((e: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col gap-1 mb-2"
                            >
                                <div className="border border-slate-400 rounded-lg py-1 flex cursor-pointer">
                                    <h2 className="w-11/12 flex items-center justify-center">
                                        {e.location_area.name}
                                    </h2>
                                    <span className="w-1/12 flex justify-center items-center">
                                        <FontAwesomeIcon
                                            icon={faCircleExclamation}
                                            className="w-3/5 opacity-80"
                                        />
                                    </span>
                                </div>
                                <h4 className="text-sm text-slate-700">
                                    Location in Pokémon{" "}
                                    {e.version_details[0].version.name}
                                </h4>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
