import AbilityList from "@/components/abilityList/abilityList";
import AbilityFilter from "@/components/albilityFilter/abilityFilter";
import Header from "@/components/header/header";

export default function AbilityDex() {
    return (
        <>
            <Header page={"Ability Dex"} />
            <AbilityFilter />
            <AbilityList />
        </>
    );
}
