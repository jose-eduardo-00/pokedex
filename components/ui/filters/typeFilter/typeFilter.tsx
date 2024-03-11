import TypeOptions from "./typeOptions/typeOptions";

export default function TypeFilter() {
    return (
        <div className="py-2 px-4 bg-slate-400 rounded-lg relative cursor-pointer flex justify-center group">
            <h1 className="text-white">Tipos</h1>
            <div className="invisible absolute top-8 bg-slate-100 w-80 p-4 flex flex-col items-center gap-4 rounded-xl group-hover:visible cursor-default">
                <h1>Selecione um Tipo</h1>
                <ul className="w-full overflow-y-auto max-h-96">
                    <li className="bg-slate-200 rounded-lg py-2 flex justify-center mb-2 cursor-pointer">
                        Todos os Tipos
                    </li>
                    <TypeOptions />
                    <TypeOptions />
                    <TypeOptions />
                    <TypeOptions />
                    <TypeOptions />
                    <TypeOptions />
                    <TypeOptions />
                    <TypeOptions />
                    <TypeOptions />
                    <TypeOptions />
                </ul>
            </div>
        </div>
    );
}
