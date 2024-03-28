import AbilityCard from "../ui/abilityCard/abilityCard";
import { getAbilitys } from "@/services/api";
import { getList } from "../utils/getList/getList";


export default async function AbilityList() {
    
    const getAbility = await getAbilitys(367, 0);
    const list = await getList(getAbility);

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
