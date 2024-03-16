const baseUrl = "https://pokeapi.co/api/v2/";

export async function getPokemons(limit: number, offset: number) {
    const res = await fetch(
        `${baseUrl}pokemon/?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data;
}

export async function getRandomPokemon(id: number) {
    const res = await fetch(`${baseUrl}pokemon/${id}/`);
    const data = await res.json();
    return data;
}

export async function getMoves(limit: number, offset: number) {
    const res = await fetch(`${baseUrl}move/?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    return data;
}
