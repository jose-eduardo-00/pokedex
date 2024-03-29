export default function GenOptions({ gen }: { gen: any }) {
    // console.log(gen.name, gen.version_groups);
    return (
        <div className="flex flex-col mb-2 cursor-pointer">
            <h4 className="">{gen.name}</h4>
            <div>
                {gen.version_groups.map((e: any, index: number) => {
                    return <span key={index}>{e.name}</span>;
                })}
            </div>
        </div>
    );
}
