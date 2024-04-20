import { getPokemonLocation } from "@/services/api";

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
                <div className="bg-slate-200 p-4 rounded-lg flex flex-col items-center gap-2">
                    {pokeLocation.map((e: any, index: number) => {
                        return (
                            <div key={index}>
                                <h2>{e.location_area.name}</h2>
                                <h4>
                                    Location in{" "}
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
