export default function AbilityCard({ ability }: { ability: any }) {
    const nameFirstLetterUp =
        ability.name.charAt(0).toUpperCase() + ability.name.substring(1);

    return (
        <div className="flex flex-col justify-evenly items-center text-center rounded-lg shadow-md shadow-slate-700 w-96 h-28">
            <h1 className="text-xl">{nameFirstLetterUp}</h1>
            <p className="text-opacity-90 text-base pb-1 mx-1">
                {!ability.effect_entries[1]
                    ? "--"
                    : ability.effect_entries[1].short_effect}
            </p>
        </div>
    );
}
