import Header from "@/components/header/header";
import MoveFilter from "@/components/moveFilter/moveFilter";
import MovesList from "@/components/movesList/movesList";
import Loading from "@/components/pokemonList/loading";
import { Suspense } from "react";


export default async function MoveDex() {
    return (
        <>
            <Header page={"Move Dex"} />
            <MoveFilter />
            <Suspense fallback={ <Loading /> }>
                <MovesList />
            </Suspense>
        </>
    );
}
