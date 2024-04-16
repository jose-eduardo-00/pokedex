import Header from "@/components/header/header";
import NatureList from "@/components/natureList/natureList";
import Loading from "@/components/pokemonList/loading";
import { Suspense } from "react";

export default function NatureDex() {
    return (
        <>
            <Header page={"Nature Dex"} />
            <Suspense fallback={ <Loading /> }>
                <NatureList />
            </Suspense>
        </>
    )
}