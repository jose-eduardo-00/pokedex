import Image from "next/image";
import HeaderNav from "../ui/headerNav/headerNav";


export default function Header({ page }: { page: string }) {
    return (
        <>
            <header className="flex items-center justify-between px-6 py-2 border-b-2 border-black">
                <div>
                    <Image src={"https://placehold.co/80x80/png"} width={80} height={80} alt="imagem de um pokemon aleatório" />
                    <h1>Pokedex</h1>
                </div>
                <h1 className="text-5xl">{page}</h1>
                <div>
                    <button>Tema</button>
                </div>
            </header>
            <HeaderNav />
        </>
    );
}