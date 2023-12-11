"use client";

import Link from "next/link";
import styles from "@/styles/pokemon.module.scss";
export default function PokemonCard() {
  return (
    <Link href="/:id" className={styles.card}>
      <h2>
        Pokemon <span>-&gt;</span>
      </h2>
      <p>Inof </p>
    </Link>
  );
}
