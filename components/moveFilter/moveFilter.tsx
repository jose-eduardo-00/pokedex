import CategoryFilter from "../ui/filters/categoryFilter/categoryFilter";
import GenFilter from "../ui/filters/genFilter/genFilter";
import TypeFilter from "../ui/filters/typeFilter/typeFilter";

export default function MoveFilter() {
    return (
        <div className="flex items-center p-4 justify-evenly bg-slate-600">
            <GenFilter />
            <TypeFilter />
            <CategoryFilter />
        </div>
    )
}