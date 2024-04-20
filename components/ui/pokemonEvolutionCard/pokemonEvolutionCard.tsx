import getColorByType from "@/components/utils/getColorByType/getColorByType";
import nameFirstLetterUp from "@/components/utils/nameFirstLetterUp/nameFirstLetterUp";
import { getPokemon } from "@/services/api";
import Image from "next/image";

export default async function PokemonEvolutionCard({
    pokemon,
}: {
    pokemon: string;
}) {
    const pokeInfos = await getPokemon(pokemon);
    const bgColor = getColorByType(pokeInfos.types[0].type.name);
    const newNum = pokeInfos.id.toFixed().padStart(3, "0");
    const namePokemon = nameFirstLetterUp(pokeInfos);

    return (
        <div
            className={`${bgColor} min-w-28 rounded-lg shadow-md shadow-slate-700 cursor-pointer flex flex-col items-center gap-2`}
        >
            <div className="min-h-24 bg-opacity-50 bg-slate-300 rounded-b-full flex justify-center items-center w-full">
                <Image
                    src={pokeInfos.sprites.other.home.front_default}
                    width={80}
                    height={80}
                    alt="Foto do pokemon"
                />
            </div>
            <div className="text-white">
                <span>#{newNum}</span>
                <h1>{namePokemon}</h1>
            </div>
            <div className="w-full mb-2 flex flex-col gap-2 items-center">
                {pokeInfos.types.map((e: any, index: number) => {
                    const typeUpperCase = e.type.name.toUpperCase();
                    return (
                        <div
                            className="text-white text-sm border-2 rounded-lg w-3/4 text-center"
                            key={index}
                        >
                            {typeUpperCase}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
