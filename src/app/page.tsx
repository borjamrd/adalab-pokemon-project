"use client";

import PokemonCard from "@/components/PokemonCard";
import { useGlobalContext } from "@/context/Global";
import styles from "@/styles/page.module.scss";
import Image from "next/image";

export default function Home() {
  const { allPokemonData } = useGlobalContext();
  console.log(allPokemonData);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {allPokemonData.map((pokemon: any) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </main>
  );
}
