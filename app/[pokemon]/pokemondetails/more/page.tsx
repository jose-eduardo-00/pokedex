export default function PokemonDetailsMore({ params }: { params: { pokemon: string }}) {

    return (
        <>
          <h1>More do Pokemon: {params.pokemon}</h1>  
        </>
    )
}