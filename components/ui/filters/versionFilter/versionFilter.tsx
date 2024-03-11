import VersionOptions from "./versionOptions/versionOptions";

export default function VersionFilter() {
    return (
        <div className="py-2 px-4 bg-slate-400 rounded-lg relative cursor-pointer flex justify-center group">
            <h1 className="text-white">Versões</h1>
            <div className="invisible absolute top-8 bg-slate-100 w-80 p-4 flex flex-col items-center gap-4 rounded-xl group-hover:visible cursor-default">
                <h1>Selecione uma Versão</h1>
                <ul className="w-full overflow-y-auto max-h-96">
                    <li className="bg-slate-200 rounded-lg py-2 flex justify-center mb-2 cursor-pointer">
                        Todas as versões
                    </li>
                    <VersionOptions num={1} />
                    <VersionOptions num={2} />
                    <VersionOptions num={3} />
                    <VersionOptions num={4} />
                    <VersionOptions num={5} />
                    <VersionOptions num={6} />
                    <VersionOptions num={7} />
                </ul>
            </div>
        </div>
    );
}
