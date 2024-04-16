import AbilityList from "@/components/abilityList/abilityList";
import AbilityFilter from "@/components/albilityFilter/abilityFilter";
import Header from "@/components/header/header";
import Loading from "@/components/pokemonList/loading";
import { Suspense } from "react";

export default function AbilityDex() {
    return (
        <>
            <Header page={"Ability Dex"} />
            <AbilityFilter />
            <Suspense fallback={ <Loading /> }>
                <AbilityList />
            </Suspense>
        </>
    );
}
