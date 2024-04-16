import Header from "@/components/header/header";
import ItemList from "@/components/itemList/itemsList";
import Loading from "@/components/pokemonList/loading";
import { Suspense } from "react";

export default function ItemDex() {
    return (
        <>
            <Header page={"Item Dex"} />
            <Suspense fallback={ <Loading /> }>
                <ItemList />
            </Suspense>
        </>
    )
}