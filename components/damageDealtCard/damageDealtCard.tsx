import TypeCard from "../ui/typeCard/typeCard";

export default function DamageDealtCard() {
    return (
        <section className="flex flex-col items-center gap-3">
            <h1 className="font-semibold">Damage Daelt: Type</h1>
            <div className="flex flex-col items-center justify-around bg-slate-50 shadow-md shadow-black rounded-lg w-80 min-h-96">
                <div className="flex flex-col items-center gap-2 w-11/12">
                    <h3>Strong Against...</h3>
                    <div className="flex justify-center gap-2 w-full">
                        <TypeCard />
                        <TypeCard />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 w-11/12">
                    <h3>Ineffective Against...</h3>
                    <div className="flex justify-center gap-2 w-full">
                        <TypeCard />
                        <TypeCard />
                    </div>
                </div>
                <div className="flex flex-col items-center w-11/12 gap-2">
                    <h3>Normal damage to...</h3>
                    <div className="flex  justify-center gap-2 w-full">
                        <TypeCard />
                        <TypeCard />
                    </div>
                    <div className="flex justify-center gap-2 w-full">
                        <TypeCard />
                        <TypeCard />
                    </div>
                    <div className="flex justify-center gap-2 w-full">
                        <TypeCard />
                        <TypeCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
