"use client";

import { PageTransitionLayout } from "@/components/PageTransitionsLayout";
import PokemonCard from "@/components/PokemonCard";
import { useGlobalContext } from "@/context/Global";
import styles from "@/styles/page.module.scss";
import Image from "next/image";

export default function Home() {
  const { allPokemonData } = useGlobalContext();
  console.log(allPokemonData);

  return (
    <PageTransitionLayout>
      {" "}
      <main className={styles.main}>
        <div className={styles.grid}>
          {allPokemonData.map((pokemon: any) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      </main>
    </PageTransitionLayout>
  );
}
