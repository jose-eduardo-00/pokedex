import SpritesCard from "../ui/spritesCard/spritesCard";

export default function PokemonSprites({ pokemon }: { pokemon: any }) {
    return (
        <section className="text-center w-3/4">
            <h1 className="text-white mb-2">Sprites</h1>
            <div className="bg-slate-200 rounded-lg flex w-full">
                <SpritesCard nameCard="Standard" sprites={pokemon.sprites} />
                <SpritesCard
                    nameCard="Pokemon Dream World"
                    sprites={pokemon.sprites.other.dream_world}
                />
                <SpritesCard
                    nameCard="Pokemon Home"
                    sprites={pokemon.sprites.other.home}
                />
                <SpritesCard
                    nameCard="Pokemon Showdown"
                    sprites={pokemon.sprites.other.showdown}
                />
            </div>
        </section>
    );
}
