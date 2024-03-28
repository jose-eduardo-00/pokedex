import { getAbilitys } from "@/services/api";
import AbilityCard from "../ui/abilityCard/abilityCard";

async function getAbilityList(getAbility: any) {
    const get = Promise.all(
        getAbility.results.map(async (e: any) => {
            const res = await fetch(`${e.url}`);
            const data = await res.json();
            return data;
        })
    );
    return get;
}

export default async function AbilityList() {
    
    const getAbility = await getAbilitys(367, 0);
    const list = await getAbilityList(getAbility);

    return (
        <main className="flex flex-wrap items-center justify-around gap-5 p-10 bg-slate-200">
            {list.map((e: any, index: number) => {
                return (
                    <div key={index}>
                        <AbilityCard ability={e} />
                    </div>
                );
            })}
        </main>
    );
}
