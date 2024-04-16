import { create } from "zustand";

type State = {
    type: string;
    setType: (name: string) => void;
};

const pokemonType = create<State>((set) => ({
    type: "",
    setType: (name: string) => set(() => ({ type: name })),
}));

export default pokemonType;


// pokemonList.tsx
// let add = pokemonType((state) => state.type);

// typeOptions.tsx
// const add = pokemonType(state => state.setType);
// const teste = () => {
//     add(type.name);
// };