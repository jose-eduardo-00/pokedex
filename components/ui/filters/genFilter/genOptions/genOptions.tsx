export default function GenOptions({ num }: { num: number }) {
    return (
        <li className="flex items-center mb-2 cursor-pointer">
            <h4 className="py-2 px-4 bg-slate-200 rounded-lg w-full flex justify-center">Gen {num}</h4>
        </li>
    )
}