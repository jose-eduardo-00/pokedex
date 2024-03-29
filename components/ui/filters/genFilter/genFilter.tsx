import GenOptions from "./genOptions/genOptions";
import { getGenerations } from "@/services/api";
import { getList } from "@/components/utils/getList/getList";

export default async function GenFilter() {
    const getGeneration = await getGenerations(9, 0);
    const list = await getList(getGeneration)

    return (
        <div className="py-2 px-4 bg-slate-400 rounded-lg relative cursor-pointer flex justify-center group">
            <h1 className="text-white">Gerações</h1>
            <div className="invisible absolute top-8 bg-slate-100 w-80 p-4 flex flex-col items-center gap-4 rounded-xl group-hover:visible cursor-default">
                <h1>Selecione uma Geração</h1>
                <ul className="w-full overflow-y-auto max-h-96">
                    <li className="bg-slate-200 rounded-lg py-2 flex justify-center mb-2 cursor-pointer font-semibold">
                        Todas as Gens
                    </li>
                    {list.map((e: any, index: number) => {
                        return (
                            <li key={index}>
                                <GenOptions gen={e} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}
