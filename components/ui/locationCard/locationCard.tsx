export default function LocationCard({
    location,
    areas,
}: {
    location: any;
    areas: any;
}) {
    let pokemonEncounters: any = [];
    areas.map((e: any) => {
        pokemonEncounters.push(e.pokemon_encounters.length);
    });

    const numberOfPokemonFound = pokemonEncounters.reduce(
        (acc: number, e: number) => acc + e,
        0
    );

    const nameFirstLetterUp =
        location.name.charAt(0).toUpperCase() + location.name.substring(1);

    let regionFirstLetterUp;
    if (!location.region == false) {
        regionFirstLetterUp =
            location.region.name.charAt(0).toUpperCase() +
            location.region.name.substring(1);
    }

    return (
        <div className="flex flex-col items-center justify-evenly gap-2 rounded-lg shadow-md shadow-slate-700 w-96 h-28">
            <div className="flex items-baseline gap-2">
                <h1 className="text-lg">{nameFirstLetterUp}</h1>
                <span className="text-sm">in</span>
                <h2 className="text-base">{regionFirstLetterUp}</h2>
            </div>
            <div className="w-4/5 py-1 border border-slate-600 rounded-lg text-center text-slate-600">
                {numberOfPokemonFound} Pokémon
            </div>
        </div>
    );
}
