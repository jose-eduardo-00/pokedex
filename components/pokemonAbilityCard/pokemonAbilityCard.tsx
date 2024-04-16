import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PokemonAbilityCard({ pokemon }: { pokemon: any }) {
    return (
        <section className="text-center w-1/4">
            <h1 className="text-white mb-2">Abilities</h1>
            <div className="bg-slate-200 p-4 rounded-lg flex flex-col gap-2">
                {pokemon.abilities.map((e: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="p-1 border border-slate-400 rounded-lg flex items-center cursor-pointer relative"
                        >
                            {e.is_hidden ? (
                                <span className="absolute left-0 top-0 bottom-0 px-2 bg-slate-400 border-r border-slate-400 rounded-l-lg text-sm flex items-center justify-center">
                                    Hidden
                                </span>
                            ) : (
                                <></>
                            )}
                            <div className="w-11/12">{e.ability.name}</div>
                            <span className="w-1/12 flex justify-center items-center">
                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    className="w-3/5 opacity-80"
                                />
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
