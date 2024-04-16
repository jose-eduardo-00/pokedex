import Image from "next/image";
import HeaderNav from "../ui/headerNav/headerNav";
import { getRandomPokemon } from "@/services/api";
import nameFirstLetterUp from "../utils/nameFirstLetterUp/nameFirstLetterUp";
import PokemonImageHeader from "../ui/pokemonImageHeader/pokemonImageHeader";

export default async function Header({ page }: { page: string }) {
    const randomNumber = parseInt((Math.random() * 1025).toString());
    const randomPokemon = await getRandomPokemon(randomNumber);
    const pokemonName =  nameFirstLetterUp(randomPokemon)

    return (
        <>
            <header className="flex items-center justify-between px-6 py-2 bg-slate-800 text-white">
                <PokemonImageHeader src={randomPokemon.sprites.other.home.front_default} name={pokemonName} />
                <h1 className="text-5xl">{page}</h1>
                <div>
                    <button>Tema</button>
                </div>
            </header>
            <HeaderNav />
        </>
    );
}
