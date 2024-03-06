const baseUrl = "https://pokeapi.co/api/v2/pokemon/"


export default async function getPokemons(limit: number, offset:number) {
    const res = await fetch(`${baseUrl}?limit=${limit}&offset=${offset}`)
    const data = await res.json()
    return data
}


