export default function VersionOptions({ num }: { num: number }) {
    return (
        <li className="flex flex-col items-center gap-2 mb-4">
            <h4>Gen {num}</h4>
            <div className="flex justify-center gap-2 w-full">
                <span className="py-2 bg-slate-200 rounded-lg w-full flex justify-center">Exemplo</span>
                <span className="py-2 bg-slate-200 rounded-lg w-full flex justify-center">Exemplo</span>
            </div>
        </li>
    )
}