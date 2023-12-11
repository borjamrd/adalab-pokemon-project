"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
interface Props {
  children: ReactNode;
}

//TODO add interface
const initialState = {
  allPokemon: [],
  pokemon: {},
  pokemonDatabase: [],
  searchResults: [],
  next: "",
  loading: false,
};

const GlobalContext = createContext<any>(initialState);

// actions
const LOADING = "LOADING";
const GET_POKEMON = "GET_POKEMON";
const GET_ALL_POKEMON = "GET_ALL_POKEMON";
const GET_ALL_POKEMON_DATA = "GET_ALL_POKEMON_DATA";
const GET_SEARCH = "GET_SEARCH";
const GET_POKEMON_DATABASE = "GET_POKEMON_DATABASE";
const NEXT = "NEXT";
// reducer
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_ALL_POKEMON:
      return { ...state, allPokemon: action.payload, loading: false };
  }
  return state;
};

export const GlobalProvider = ({ children }: Props) => {
  const baseUrl = "https://pokeapi.co/api/v2";
  const limit = 20;

  const [state, dispatch] = useReducer(reducer, initialState);
  const [allPokemonData, setAllPokemonData] = useState([]);

  const allPokemon = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(`${baseUrl}/pokemon?limit=${limit}`);
    const data = await response.json();
    dispatch({ type: "GET_ALL_POKEMON", payload: data.results });

    //fetch temporary data
    const allPokemonData: any = [];

    for (const pokemon of data.results) {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      allPokemonData.push(pokemonData);
    }

    console.log(allPokemonData);

    setAllPokemonData(allPokemonData);
  };

  useEffect(() => {
    allPokemon();
  }, []);
  return (
    <GlobalContext.Provider value={{ ...state, allPokemonData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
