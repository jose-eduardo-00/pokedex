import { generationEditor } from "@/components/utils/generationEditor/generationEditor";

export default function VersionOptions({ gen }: { gen: any }) {
    const generation = generationEditor(gen.name);
    return (
        <div className="flex flex-col items-center mb-4 border shadow-md rounded-lg gap-2 p-1">
            <h4>{generation}</h4>
            <div className="w-full flex flex-col gap-2 text-center font-semibold">
                {gen.version_groups.map((e: any, index: number) => {
                    return (
                        <p
                            key={index}
                            className="w-full rounded-lg cursor-pointer bg-cyan-300"
                        >
                            {e.name}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
