import getColorByType from "@/components/utils/getColorByType/getColorByType";

export default function CategoryOptions({ category }: { category: any }) {
    const bgColor = getColorByType(category.name);

    return (
        <div className="flex justify-center gap-2 w-full">
            <p
                className={`py-2 ${bgColor} rounded-lg w-full flex justify-center text-slate-200 font-semibold`}
            >
                {category.name}
            </p>
        </div>
    );
}
