"use client";

import PokemonCard from "@/components/PokemonCard";
import { GlobalProvider, useGlobalContext } from "@/context/Global";
import styles from "@/styles/page.module.scss";

export default function Home() {
  const { allPokemonData } = useGlobalContext();
  console.log(allPokemonData);
  return (
    <GlobalProvider>
      <main className={styles.main}>
        <div className={styles.grid}>pokemn</div>
      </main>
    </GlobalProvider>
  );
}
