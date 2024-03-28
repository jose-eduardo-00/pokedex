import DamageDealtCard from "../damageDealtCard/damageDealtCard";
import DamageTakenCard from "../damageTakenCard/damageTakenCard";

export default function TypePage() {
    return (
        <main className="flex flex-wrap items-center justify-evenly p-10 bg-slate-200">
            <DamageTakenCard />
            <DamageDealtCard />
        </main>
    )
}
