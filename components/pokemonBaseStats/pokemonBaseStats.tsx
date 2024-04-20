export default function PokemonBaseStats({pokemon}: {pokemon: any}) {
    let baseStatsTotal = 0
    return (
        <section className="text-center w-1/4">
            <h1 className="text-white mb-2">Base Stats</h1>
            <div className="bg-slate-200 p-4 rounded-lg flex flex-col items-center gap-2">
                <h2 className="w-1/3 border-2 border-slate-400 rounded-lg mb-2">Stats</h2>
                <div className="w-full mb-2">
                    {pokemon.stats.map((e: any, index: number) => {
                        baseStatsTotal += e.base_stat
                        return (
                            <div key={index} className="flex w-full gap-2 mb-1">
                                <h2 className="w-1/2 border border-slate-400 rounded-lg">{e.stat.name}</h2>
                                <span className="w-1/2 border border-slate-400 rounded-lg">{e.base_stat}</span>
                            </div>
                        )
                    })}
                </div>
                <h2 className="w-1/3 border-2 border-slate-400 rounded-lg">Total {baseStatsTotal}</h2>
            </div>
        </section>
    )
}