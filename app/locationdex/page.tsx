import Header from "@/components/header/header";
import LocationFilter from "@/components/locationFilter/locationFilter";
import LocationList from "@/components/locationList/locationList";

export default function LocationDex() {
    return (
        <>
            <Header page={"Location Dex"} />
            <LocationFilter />
            <LocationList />
        </>
    )
}