import Image from "next/image";

export default function ItemCard({ item }: { item: any }) {
    const nameFirstLetterUp =
        item.name.charAt(0).toUpperCase() + item.name.substring(1);

    return (
        <div className="flex items-center justify-around gap-2 rounded-lg shadow-md shadow-slate-700 w-96 h-28">
            <div className="flex flex-col text-center w-4/5 gap-1">
                <h1 className="text-xl">{nameFirstLetterUp}</h1>
                <p className="text-opacity-90 text-sm pb-1 mx-2">
                    {!item.effect_entries[0]
                        ? "--"
                        : item.effect_entries[0].short_effect}
                </p>
            </div>
            <div className="flex justify-center w-1/5">
                <Image
                    src={item.sprites.default}
                    width={40}
                    height={40}
                    alt="Foto do item"
                />
            </div>
        </div>
    );
}
