export function generationEditor(gen: string) {
    
    switch (gen) {
        case "generation-i":
            return "Gen 1";
        case "generation-ii":
            return "Gen 2";
        case "generation-iii":
            return "Gen 3";
        case "generation-iv":
            return "Gen 4";
        case "generation-v":
            return "Gen 5";
        case "generation-vi":
            return "Gen 6";
        case "generation-vii":
            return "Gen 7";
        case "generation-viii":
            return "Gen 8";
        case "generation-ix":
            return "Gen 9";
        default:
            return "Erro na generation";
    }
}
