import { getLocations } from "@/services/api";
import LocationCard from "../ui/locationCard/locationCard";

async function getLocationList(getLocation: any) {
    const get = Promise.all(
        getLocation.results.map(async (e: any) => {
            const res = await fetch(`${e.url}`);
            const data = await res.json();
            return data;
        })
    );
    return get;
}

async function pokemonEncountersList(e: any) {
    const get = Promise.all(
        e.areas.map(async (area: any) => {
            const getAreas = await fetch(`${area.url}`);
            const data = await getAreas.json();
            return data;
    }))
    return get
}

export default async function LocationList() {
    const getLocation = await getLocations(1036, 0);
    const list = await getLocationList(getLocation);

    return (
        <main className="flex flex-wrap items-center justify-around gap-5 p-10 bg-slate-200">
            {list.map(async (e: any, index: number) => {
                const area = await pokemonEncountersList(e);
                // console.log(teste);
                return (
                    <div key={index}>
                        <LocationCard
                            location={e}
                            areas={area}
                        />
                    </div>
                );
            })}
        </main>
    );
}
