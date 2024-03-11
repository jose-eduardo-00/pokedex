import PokemonCard from "../ui/pokemonCard/pokemonCard"
import { getPokemons } from "@/services/api";


async function getPokemonList(getPoke: any) {

    const get = Promise.all(
        getPoke.results.map(async (e: any) => {
            const res = await fetch(`${e.url}`)
            const data = await res.json()
            return data
        })
    )
    return get
}

export default async function PokemonList() {

    const getPokeGen1 = await getPokemons(151, 0)

    const list = await getPokemonList(getPokeGen1)

    return (
        <main className="flex justify-around gap-4 p-10 bg-slate-200 flex-wrap">
            {list.map((e: any, index: number) => {
                return (
                    <div key={index}>
                        <PokemonCard pokemon={e} />
                    </div>
                )
            })}
        </main>
    )
}
