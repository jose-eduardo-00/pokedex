import { getNatures } from "@/services/api";
import NatureCard from "../ui/natureCard/natureCard";
import { getList } from "../utils/getList/getList";


export default async function NatureList() {
    const getNature = await getNatures(25, 0);
    const list = await getList(getNature);

    return (
        <main className="flex flex-wrap items-center justify-around gap-5 p-10 bg-slate-200">
            {list.map((e: any, index: number) => {
                return (
                    <div key={index}>
                        <NatureCard nature={e} />
                    </div>
                );
            })}
        </main>
    );
}
