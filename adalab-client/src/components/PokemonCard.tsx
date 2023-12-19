"use client";

import Link from "next/link";
import styles from "@/styles/pokemon.module.scss";
import Image from "next/image";
import Types from "./Types";
import Evolutions from "./Evolutions";
import { firstLetterToUpperCase } from "@/utils/utils";
export default function PokemonCard({ pokemon }: any) {
  return (
    <Link href={pokemon.name} className={styles.card}>
      <div className={styles.img_section}>
        <Image
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
        />
        <p className={styles.pokemon_id}>#{pokemon.id}</p>
      </div>
      <div className={styles.card_info}>
        <h3>{firstLetterToUpperCase(pokemon.name)}</h3>

        <Types types={pokemon.types} />
        {pokemon?.evolves_from_species && (
          <Evolutions evolutions={pokemon?.evolves_from_species} />
        )}
      </div>
    </Link>
  );
}
