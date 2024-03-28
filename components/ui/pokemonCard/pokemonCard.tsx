import getColorByType from "@/components/utils/getColorByType/getColorByType";
import Image from "next/image";

export default async function PokemonCard({ pokemon }: { pokemon: any }) {
    const bgColor = getColorByType(pokemon.types[0].type.name);
    const newNum = pokemon.id.toFixed().padStart(3, "0");
    const nameFirstLetterUp =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);

    return (
        <div
            className={`flex min-w-80 ${bgColor} rounded-lg shadow-md shadow-slate-700 cursor-pointer`}
        >
            <div className="flex flex-col gap-2 justify-center items-center w-4/5">
                <div className="flex justify-evenly w-full text-white">
                    <span>#{newNum}</span>
                    <h1>{nameFirstLetterUp}</h1>
                </div>
                <div className="flex justify-center w-4/5 gap-1 ml-2">
                    {pokemon.types.map((e: any, index: number) => {
                        const typeUpperCase = e.type.name.toUpperCase();
                        return (
                            <div
                                className="text-white text-sm border-2 rounded-lg w-full text-center"
                                key={index}
                            >
                                {typeUpperCase}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-2/5 bg-opacity-50 bg-slate-300 rounded-l-full flex justify-end">
                <Image
                    src={pokemon.sprites.front_default}
                    width={100}
                    height={100}
                    alt="Foto do pokemon"
                />
            </div>
        </div>
    );
}
