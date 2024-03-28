import { getItens } from "@/services/api";
import ItemCard from "../ui/itemCard/itemCard";
import { getList } from "../utils/getList/getList";


export default async function ItemList() {
    const getItem = await getItens(367, 0)
    const list = await getList(getItem)

    return (
        <main className="flex flex-wrap items-center justify-around gap-5 p-10 bg-slate-200">
            {list.map((e: any, index: number) => {
                return (
                    <div key={index}>
                        <ItemCard item={e} />
                    </div>
                );
            })}
        </main>
    )
}