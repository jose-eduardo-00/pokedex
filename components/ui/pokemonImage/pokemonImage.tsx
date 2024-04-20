import Image from "next/image";

export default function PokemonImage({
    src,
    name,
}: {
    src: string;
    name: string;
}) {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={src}
                width={100}
                height={100}
                alt="imagem de um pokemon aleatório"
                className="bg-slate-100 bg-opacity-50 rounded-full"
            />
            <h1>{name}</h1>
        </div>
    );
}
