export async function getList(list: any) {
    return Promise.all(
        list.results.map(async (e: any) => {
            const res = await fetch(`${e.url}`)
            const data = await res.json()
            return data
        })
    )
}

export async function pokemonEncountersList(e: any) {
    return Promise.all(
        e.areas.map(async (area: any) => {
            const getAreas = await fetch(`${area.url}`);
            const data = await getAreas.json();
            return data;
    }))
}