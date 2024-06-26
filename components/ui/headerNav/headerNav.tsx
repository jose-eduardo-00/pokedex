import Link from "next/link";

export default function HeaderNav() {
    return (
        <nav>
            <ul className="flex align-middle justify-evenly p-4 bg-slate-700 text-white">
                <li><Link href={"/"}>Pokédex</Link></li>
                <li><Link href={"/movedex"}>Move Dex</Link></li>
                <li><Link href={"/abilitydex"}>Ability Dex</Link></li>
                <li><Link href={"/itemdex"}>Item Dex</Link></li>
                <li><Link href={"/locationdex"}>Location Dex</Link></li>
                <li><Link href={"/typedex"}>Type Dex</Link></li>
                <li><Link href={"/naturedex"}>Nature Dex</Link></li>
            </ul>
        </nav>
    )
}