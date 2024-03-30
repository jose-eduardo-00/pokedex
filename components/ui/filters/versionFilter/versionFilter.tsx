import VersionOptions from "./versionOptions/versionOptions";
import { getGenerations } from "@/services/api";
import { getList } from "@/components/utils/getList/getList";

export default async function VersionFilter() {
    const getGeneration = await getGenerations(9, 0);
    const list = await getList(getGeneration)

    return (
        <div className="py-2 px-4 bg-slate-400 rounded-lg relative cursor-pointer flex justify-center group">
            <h1 className="text-white">Versão</h1>
            <div className="invisible absolute top-8 bg-slate-100 w-80 p-4 flex flex-col items-center gap-4 rounded-xl group-hover:visible cursor-default">
                <h1>Selecione uma Versão</h1>
                <ul className="w-full overflow-y-auto max-h-96">
                    <li className="bg-slate-200 rounded-lg py-2 flex justify-center mb-2 cursor-pointer font-semibold">
                        Todas as Versões
                    </li>
                    {list.map((e: any, index: number) => {
                        return (
                            <li key={index}>
                                <VersionOptions gen={e} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
