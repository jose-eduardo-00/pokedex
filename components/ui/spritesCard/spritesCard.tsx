import Image from "next/image";

export default function SpritesCard({
    sprites,
    nameCard,
}: {
    sprites: any;
    nameCard: string;
}) {
    return (
        <div className="w-1/4 flex flex-col items-center gap-2 mb-2">
            <h1
                className={`bg-slate-950 w-full h-20 flex justify-center items-center text-white ${
                    nameCard === "Standard" ? "rounded-tl-lg" : ""
                } ${nameCard === "Pokemon Showdown" ? "rounded-tr-lg" : ""}`}
            >
                {nameCard}
            </h1>
            {!sprites.front_default ? (
                <></>
            ) : (
                <div>
                    <h2>Normal</h2>
                    <div className="flex justify-center gap-2">
                        <Image
                            src={sprites.front_default}
                            width={100}
                            height={100}
                            alt="Foto do pokemon de frente"
                        />
                        {!sprites.back_default ? (
                            <></>
                        ) : (
                            <Image
                                src={sprites.back_default}
                                width={100}
                                height={100}
                                alt="Foto do pokemon de costas"
                            />
                        )}
                    </div>
                </div>
            )}
            {!sprites.front_shiny ? (
                <></>
            ) : (
                <div>
                    <h2>Shiny</h2>
                    <div className="flex justify-center gap-2">
                        <Image
                            src={sprites.front_shiny}
                            width={100}
                            height={100}
                            alt="Foto do pokemon shiny de frente"
                        />
                        {!sprites.back_shiny ? (
                            <></>
                        ) : (
                            <Image
                                src={sprites.back_shiny}
                                width={100}
                                height={100}
                                alt="Foto do pokemon shiny de costas"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
