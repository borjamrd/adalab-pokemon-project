//_______________________models: export to another file
export interface InitialStateInterface {
  allPokemon: any[];
  pokemon: any;
  pokemonDatabase: any[];
  searchResults: any[];
  next: string;
  loading: boolean;
}

export type PokemonActions =
  | "LOADING"
  | "GET_POKEMON"
  | "GET_ALL_POKEMON"
  | "GET_ALL_POKEMON_DATA"
  | "GET_SEARCH"
  | "GET_POKEMON_DATABASE"
  | "NEXT";

//_______________________

export const initialState: InitialStateInterface = {
  allPokemon: [],
  pokemon: {},
  pokemonDatabase: [],
  searchResults: [],
  next: "",
  loading: false,
};
