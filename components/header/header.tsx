import Image from "next/image";
import HeaderNav from "../ui/headerNav/headerNav";
import { getRandomPokemon } from "@/services/api";
import nameFirstLetterUp from "../utils/nameFirstLetterUp/nameFirstLetterUp";

export default async function Header({ page }: { page: string }) {
    const randomNumber = parseInt((Math.random() * 1025).toString());
    const randomPokemon = await getRandomPokemon(randomNumber);
    const pokemonName =  nameFirstLetterUp(randomPokemon)

    return (
        <>
            <header className="flex items-center justify-between px-6 py-2 bg-slate-800 text-white">
                <div className="flex flex-col items-center">
                    <Image
                        src={randomPokemon.sprites.front_default}
                        width={100}
                        height={100}
                        alt="imagem de um pokemon aleatório"
                        className="bg-slate-100 bg-opacity-50 rounded-full"
                    />
                    <h1>{pokemonName}</h1>
                </div>
                <h1 className="text-5xl">{page}</h1>
                <div>
                    <button>Tema</button>
                </div>
            </header>
            <HeaderNav />
        </>
    );
}
