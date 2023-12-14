"use client";

import { PageTransitionLayout } from "@/components/PageTransitionsLayout";
import PokemonCard from "@/components/PokemonCard";
import { useGlobalContext } from "@/context/Global";
import styles from "@/styles/page.module.scss";
import Link from "next/link";

import { ReactNode, useState } from "react";

export default function Home() {
  const { allPokemonData, realTimeSearch, searchResults } = useGlobalContext();

  const [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    realTimeSearch(search);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    realTimeSearch(search);
  };

  const displaySearchedPokemon = (): ReactNode => {
    return searchResults.map((pokemon: any, i: number) => {
      return (
        <Link href={pokemon.name} key={i} onClick={() => {}}>
          {pokemon.name}
        </Link>
      );
    });
  };
  return (
    <PageTransitionLayout>
      {" "}
      <main className={styles.main}>
        <form className={styles.search_form} onSubmit={handleSearch}>
          <div>
            <input
              className={styles.input_control}
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Search Pokemon"
            />
          </div>
        </form>
        {search && searchResults?.length > 0 && (
          <div className={styles.search_results}>
            {displaySearchedPokemon()}
          </div>
        )}
        <div className={styles.grid}>
          {allPokemonData.map((pokemon: any) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      </main>
    </PageTransitionLayout>
  );
}
