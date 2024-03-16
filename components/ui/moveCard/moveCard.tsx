import getColorByType from "@/components/utils/getColorByType/getColorByType";

export default async function MoveCard({ move }: { move: any }) {
    const bgColorType = getColorByType(move.type.name);
    const bgColorCategory = getColorByType(move.damage_class.name);

    return (
        <div className="flex flex-col gap-2 rounded-lg shadow-md shadow-slate-700 w-96 text-md pb-2">
            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-5 text-center px-2 py-1 bg-slate-800 rounded-t-lg text-slate-100">
                    <h1 className="col-span-2">Name</h1>
                    <h1>Power</h1>
                    <h1>PP</h1>
                    <h1>Accuracy</h1>
                </div>
                <div className="grid grid-cols-5 text-center px-2">
                    <h1 className="col-span-2">{move.name}</h1>
                    <h1>{!move.power ? "--" : move.power}</h1>
                    <h1>{!move.pp ? "--" : move.pp}</h1>
                    <h1>{!move.accuracy ? "--" : move.accuracy}</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mx-2 text-center">
                <h1
                    className={`col-span-2 ${bgColorType} rounded-lg shadow-md`}
                >
                    {move.type.name}
                </h1>
                <h1
                    className={`${bgColorCategory} text-slate-200 rounded-lg shadow-md`}
                >
                    {move.damage_class.name}
                </h1>
            </div>
        </div>
    );
}
