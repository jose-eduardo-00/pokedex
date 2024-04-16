import FooterPokemonDetails from "@/components/footerPokemonDetails/footerPokemonDetails";
import HeaderPokemon from "@/components/headerPokemon/headerPokemon";

export default function PokemonDetailsLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { pokemon: string };
}>) {
    return (
        <>
            <HeaderPokemon name={params.pokemon} />
            {children}
            <FooterPokemonDetails name={params.pokemon} />
        </>
    );
}
