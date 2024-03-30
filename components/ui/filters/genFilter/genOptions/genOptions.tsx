import { generationEditor } from "@/components/utils/generationEditor/generationEditor";

export default function GenOptions({ gen }: { gen: any }) {
    const generation = generationEditor(gen.name)

    return (
        <div className="bg-slate-200 rounded-lg py-2 flex justify-center mb-2 cursor-pointer font-semibold">
            <h4 className="">{generation}</h4>
        </div>
    );
}
