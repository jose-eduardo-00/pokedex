import Header from "@/components/header/header";
import Loading from "@/components/pokemonList/loading";
import TypePage from "@/components/typePage/typePage";
import TypePageFilter from "@/components/typePageFilter/typePageFilter";
import { Suspense } from "react";

export default function TypeDex() {
    return (
        <>
            <Header page={"Type Dex"} />
            <TypePageFilter />
            <Suspense fallback={ <Loading /> }>
                <TypePage />
            </Suspense>
        </>
    )
}