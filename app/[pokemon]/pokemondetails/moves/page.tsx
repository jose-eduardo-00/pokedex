export default function PokemonDetails({ params }: { params: { pokemon: string }}) {

    return (
        <>
          <h1>Moves do Pokemon: {params.pokemon}</h1>
        </>
    )
}