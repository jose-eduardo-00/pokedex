import Image from "next/image";

export default function PokemonCard({ num }: { num: any }) {
    return (
        <div className="flex justify-between min-w-80 bg-white">
            <div className="flex flex-col gap-2 justify-center w-4/5">
                <div className="flex justify-around">
                    <span>#{num}</span>
                    <h1>Nome</h1>
                </div>
                <div className="flex justify-around">
                    <div>Tipo 1</div>
                    <div>Tipo 2</div>
                </div>
            </div>
            <Image src={"https://placehold.co/60x40/png"} width={60} height={40} alt="Foto do pokemon" className="w-2/5" />
        </div >
    )
}