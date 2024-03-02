import GenOptions from "./genOptions/genOptions";

export default function GenFilter() {
    return (
        <div className="py-2 px-4 bg-slate-200 rounded-lg relative">
            <h1>Gerações</h1>
            <div className="hidden absolute -left-full bg-slate-100 w-80 p-4 flex flex-col items-center gap-4 rounded-xl">
                <h1>Selecione uma Geração</h1>
                <ul className="w-full overflow-y-auto max-h-96">
                    <li className="bg-slate-200 rounded-lg py-2 flex justify-center mb-2">Todas as Gens</li>
                    <GenOptions num={1} />
                    <GenOptions num={2} />
                    <GenOptions num={3} />
                    <GenOptions num={4} />
                    <GenOptions num={5} />
                    <GenOptions num={6} />
                    <GenOptions num={7} />
                </ul>
            </div>
        </div>
    )
}