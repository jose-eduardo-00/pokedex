import CategoryOptions from "./categoryOptions/categoryOptions";


export default function CategoryFilter() {
    return (
        <div className="py-2 px-4 bg-slate-400 rounded-lg relative cursor-pointer flex justify-center group">
            <h1 className="text-white">Categorias</h1>
            <div className="invisible absolute top-8 bg-slate-100 w-80 p-4 flex flex-col items-center gap-4 rounded-xl group-hover:visible cursor-default">
                <h1>Selecione uma Categoria</h1>
                <ul className="w-full overflow-y-auto max-h-96">
                    <li className="bg-slate-200 rounded-lg py-2 flex justify-center mb-2 cursor-pointer">Todas as Categorias</li>
                    <CategoryOptions />
                    <CategoryOptions />
                    <CategoryOptions />
                </ul>
            </div>
        </div>
    )
}