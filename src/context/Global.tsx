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

type PokemonActions =
  | "LOADING"
  | "GET_POKEMON"
  | "GET_ALL_POKEMON"
  | "GET_ALL_POKEMON_DATA"
  | "GET_SEARCH"
  | "GET_POKEMON_DATABASE"
  | "NEXT";

const LOADING: PokemonActions = "LOADING";
const GET_POKEMON: PokemonActions = "GET_POKEMON";
const GET_ALL_POKEMON: PokemonActions = "GET_ALL_POKEMON";
const GET_ALL_POKEMON_DATA: PokemonActions = "GET_ALL_POKEMON_DATA";
const GET_SEARCH: PokemonActions = "GET_SEARCH";
const GET_POKEMON_DATABASE: PokemonActions = "GET_POKEMON_DATABASE";
const NEXT: PokemonActions = "NEXT";

// reducer
const reducer = (
  state: any,
  action: { type: PokemonActions; payload?: any }
) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_ALL_POKEMON:
      return {
        ...state,
        allPokemon: action.payload.results,
        next: action.payload.next,
        loading: false,
      };
    case GET_POKEMON:
      return { ...state, pokemon: action.payload, loading: false };
    case GET_POKEMON_DATABASE:
      return { ...state, pokemonDatabase: action.payload, loading: false };
    case GET_SEARCH:
      return { ...state, searchResults: action.payload, loading: false };
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

    setAllPokemonData(allPokemonData);
  };

  //get Pokemon info

  const getPokemon = async (name: any) => {
    dispatch({ type: "LOADING" });
    const res = await fetch(`${baseUrl}/pokemon/${name}`);
    const data = await res.json();

    dispatch({ type: "GET_POKEMON", payload: data });
  };

  //get all pokemons from database for search

  const getPokemonDatabase = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(`${baseUrl}/pokemon?limit=100000&offset=0`);
    const data = await res.json();

    dispatch({ type: "GET_POKEMON_DATABASE", payload: data.results });
  };

  //search pokemon without third library party as lodash

  const debounce = (func: any, delay: any) => {
    let timeoutId: any;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const realTimeSearch = debounce(async (search: string) => {
    dispatch({ type: "LOADING" });
    const res = state.pokemonDatabase.filter((pokemon: any) => {
      return pokemon.name.includes(search.toLowerCase());
    });
    dispatch({ type: "GET_SEARCH", payload: res });
  }, 500);

  //next page or load more pokemons

  const next = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(state.next);
    const data = await res.json();
    dispatch({ type: "NEXT", payload: data.results });
  };

  useEffect(() => {
    allPokemon();
    realTimeSearch();
    getPokemonDatabase();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ ...state, allPokemonData, getPokemon, realTimeSearch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
