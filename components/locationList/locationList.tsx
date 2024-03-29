import LocationCard from "../ui/locationCard/locationCard";
import { getLocations } from "@/services/api";
import { getList, pokemonEncountersList } from "../utils/getList/getList";


export default async function LocationList() {
    const getLocation = await getLocations(1036, 0);
    const list = await getList(getLocation);

    return (
        <main className="flex flex-wrap items-center justify-around gap-5 p-10 bg-slate-200">
            {list.map(async (e: any, index: number) => {
                const area = await pokemonEncountersList(e);
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
