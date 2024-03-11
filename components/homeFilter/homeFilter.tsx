import GenFilter from "../ui/filters/genFilter/genFilter";
import TypeFilter from "../ui/filters/typeFilter/typeFilter";
import VersionFilter from "../ui/filters/versionFilter/versionFilter";

export default function HomeFilter() {
    return (
        <div className="flex items-center p-4 justify-evenly bg-slate-600">
            <VersionFilter />
            <GenFilter />
            <TypeFilter />
        </div>
    )
}