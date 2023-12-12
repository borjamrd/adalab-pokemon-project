"use client";

import Link from "next/link";
import styles from "@/styles/pokemon.module.scss";
import Image from "next/image";
export default function PokemonCard({ pokemon }: any) {
  return (
    <Link href="/:id" className={styles.card}>
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
      {pokemon.types?.map((type: any, i: number) => {
        return <p key={i}> {type.type.name}</p>;
      })}
    </Link>
  );
}
