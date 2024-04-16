import PokemonInfo from "@/components/pokemonInfo/pokemonInfo";

export default function PokemonDetailsInfo({
    params,
}: {
    params: { pokemon: string };
}) {
    return (
        <main className="bg-slate-800">
            <PokemonInfo name={params.pokemon} />
        </main>
    );
}
