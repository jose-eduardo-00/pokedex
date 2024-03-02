import PokemonCard from "../ui/pokemonCard/pokemonCard"

let list: any = []

export default function PokemonList() {

    for (let i = 1; i < 152; i++) {
        const newNum = i.toFixed().padStart(3, "0")
        list.push(<PokemonCard num={newNum} />)
    }

    return (
        <main className="flex justify-around gap-4 p-10 bg-slate-300 flex-wrap">
            {list.map((e: any, index: number) => {
                return (
                    <div key={index}>{e}</div>
                )
            })}
        </main>
    )
}
