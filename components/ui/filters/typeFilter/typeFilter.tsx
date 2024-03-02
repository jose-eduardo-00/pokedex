import TypeOptions from "./typeOptions/typeOptions";

export default function TypeFilter() {
    return (
        <div className="py-2 px-4 bg-slate-200 rounded-lg relative">
            <h1>Tipos</h1>
            <div className="hidden absolute z-10 -left-28 bg-slate-100 w-80 p-4 flex flex-col items-center gap-4 rounded-xl">
                <h1>Selecione um Tipo</h1>
                <ul className="w-full overflow-y-auto max-h-96">
                    <li className="bg-slate-200 rounded-lg py-2 flex justify-center mb-2">Todos os Tipos</li>
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
    )
}