import PokemonCard from "../ui/pokemonCard/pokemonCard";
import { getPokemons } from "@/services/api";
import { getList } from "../utils/getList/getList";
import Link from "next/link";

export default async function PokemonList() {
    const getPokeGen1 = await getPokemons(1025, 0);
    const list = await getList(getPokeGen1);

    return (
        <main className="flex justify-around gap-4 p-10 bg-slate-200 flex-wrap">
            {list.map((e: any, index: number) => {
                return (
                    <Link href={`/${e.name}/pokemondetails/info`} key={index}>
                        <PokemonCard pokemon={e} />
                    </Link>
                );
            })}
        </main>
    );
}
