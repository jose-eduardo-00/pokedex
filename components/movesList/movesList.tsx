import MoveCard from "../ui/moveCard/moveCard";
import { getMoves } from "@/services/api";
import { getList } from "../utils/getList/getList";


export default async function MovesList() {
    const moves = await getMoves(937, 0);
    const list = await getList(moves);

    return (
        <main className="flex flex-wrap items-center justify-around gap-5 p-10 bg-slate-200">
            {list.map((e: any, index: number) => {
                return (
                    <div key={index}>
                        <MoveCard move={e} />
                    </div>
                );
            })}
        </main>
    );
}
