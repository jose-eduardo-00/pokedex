import Header from "@/components/header/header";
import MoveFilter from "@/components/moveFilter/moveFilter";
import MovesList from "@/components/movesList/movesList";


export default async function MoveDex() {
    return (
        <>
            <Header page={"Move Dex"} />
            <MoveFilter />
            <MovesList />
        </>
    );
}
