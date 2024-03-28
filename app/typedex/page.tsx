import Header from "@/components/header/header";
import TypePage from "@/components/typePage/typePage";
import TypePageFilter from "@/components/typePageFilter/typePageFilter";

export default function TypeDex() {
    return (
        <>
            <Header page={"Type Dex"} />
            <TypePageFilter />
            <TypePage />
        </>
    )
}