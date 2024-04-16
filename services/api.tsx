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

export async function getAbilitys(limit: number, offset: number) {
    const res = await fetch(
        `${baseUrl}ability/?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data;
}

export async function getItens(limit: number, offset: number) {
    const res = await fetch(`${baseUrl}item/?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    return data;
}

export async function getLocations(limit: number, offset: number) {
    const res = await fetch(
        `${baseUrl}location/?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data;
}

export async function getNatures(limit: number, offset: number) {
    const res = await fetch(
        `${baseUrl}nature/?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data;
}

export async function getTypes(limit: number, offset: number) {
    const res = await fetch(`${baseUrl}type/?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    return data;
}

export async function getGenerations(limit: number, offset: number) {
    const res = await fetch(
        `${baseUrl}generation/?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data;
}

export async function getCategories(limit: number, offset: number) {
    const res = await fetch(
        `${baseUrl}move-damage-class/?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data;
}

export async function getPokemon(name: string) {
    const res = await fetch(
        `${baseUrl}pokemon/${name}`
    );
    const data = await res.json();
    return data;
}
