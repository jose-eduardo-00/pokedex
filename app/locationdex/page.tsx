import Header from "@/components/header/header";
import LocationFilter from "@/components/locationFilter/locationFilter";
import LocationList from "@/components/locationList/locationList";
import Loading from "@/components/pokemonList/loading";
import { Suspense } from "react";

export default function LocationDex() {
    return (
        <>
            <Header page={"Location Dex"} />
            <LocationFilter />
            <Suspense fallback={ <Loading /> }>
                <LocationList />
            </Suspense>
        </>
    )
}