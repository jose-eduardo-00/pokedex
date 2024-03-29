import getColorByType from "@/components/utils/getColorByType/getColorByType";
import nameFirstLetterUp from "@/components/utils/nameFirstLetterUp/nameFirstLetterUp";

export default function TypeOptions({ type }: { type: any }) {
    const bgColor = getColorByType(type.name);
    const typeName = nameFirstLetterUp(type)

    return (
        <div className="flex justify-center gap-2 w-full">
            <span
                className={`py-2 ${bgColor} rounded-lg w-full flex justify-center font-semibold`}
            >
                {typeName}
            </span>
        </div>
    );
}
