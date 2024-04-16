import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faCircleExclamation,
    faEllipsis,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function FooterPokemonDetails({ name }: { name: string }) {
    return (
        <footer className="fixed bottom-0 w-full flex flex-col items-center bg-slate-800 py-5">
            <nav className="w-4/5">
                <ul className="flex justify-evenly items-center text-white">
                    <Link href={`/${name}/pokemondetails/info`} className="flex flex-col items-center justify-center h-12">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <li>info</li>
                    </Link>
                    <Link href={`/${name}/pokemondetails/moves`} className="flex flex-col items-center justify-center h-12">
                        <FontAwesomeIcon icon={faBolt} className="bg-transparent" />
                        <li>moves</li>
                    </Link>
                    <Link href={`/${name}/pokemondetails/more`} className="flex flex-col items-center justify-center h-12">
                        <FontAwesomeIcon icon={faPlus} />
                        <li>more</li>
                    </Link>
                    <Link href={`/`} className="flex flex-col items-center justify-center h-12">
                        <FontAwesomeIcon icon={faEllipsis} />
                        <li>menu</li>
                    </Link>
                </ul>
            </nav>
        </footer>
    );
}
