import { getNatures } from "@/services/api";
import NatureCard from "../ui/natureCard/natureCard";

async function getNaturesList(getNature: any) {
    const get = Promise.all(
        getNature.results.map(async (e: any) => {
            const res = await fetch(`${e.url}`);
            const data = await res.json();
            return data;
        })
    );
    return get;
}

export default async function NatureList() {
    const getNature = await getNatures(25, 0);
    const list = await getNaturesList(getNature);

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
