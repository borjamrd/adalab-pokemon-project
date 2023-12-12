"use client";

import Link from "next/link";
import styles from "@/styles/page.module.scss";
import Image from "next/image";
import Types from "./Types";
export default function PokemonCard({ pokemon }: any) {
  return (
    <Link href={pokemon.name} className={styles.card}>
      <div>
        <Image
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
        />
        <p>#{pokemon.id}</p>
      </div>

      <h3>{pokemon.name}</h3>

      <Types types={pokemon.types} />
    </Link>
  );
}
