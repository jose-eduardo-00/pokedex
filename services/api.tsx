const baseUrl = "https://pokeapi.co/api/v2/pokemon/"


export async function getPokemons(limit: number, offset:number) {
    const res = await fetch(`${baseUrl}?limit=${limit}&offset=${offset}`)
    const data = await res.json()
    return data
}

export async function getRandomPokemon(id: number) {
    const res = await fetch(`${baseUrl}${id}/`)
    const data = await res.json()
    return data
}


