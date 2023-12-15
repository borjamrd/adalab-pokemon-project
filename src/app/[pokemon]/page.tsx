"use client";
import { PageTransitionLayout } from "@/components/PageTransitionsLayout";
import { useGlobalContext } from "@/context/Global";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import styles from "@/styles/page.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Types from "@/components/Types";
import Loading from "@/components/Loading";
import Evolutions from "@/components/Evolutions";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { getPokemon, loading, pokemon: pokemonItem } = useGlobalContext();

  useEffect(() => {
    if (params.pokemon) {
      getPokemon(params.pokemon);
    }
  }, [params.pokemon]);

  console.log(pokemonItem);
  return (
    <PageTransitionLayout>
      <main className={styles.main}>
        {!loading && pokemonItem ? (
          <div className={styles.pokemon_info}>
            <button onClick={() => router.back()}>Go Back</button>
            <div className={styles.pokemon_sections}>
              <section className={styles.pokemon_section}>
                {pokemonItem.sprites?.other.dream_world.front_default && (
                  <Image
                    src={pokemonItem.sprites?.other.dream_world.front_default}
                    width={300}
                    height={300}
                    alt={pokemonItem.name}
                  ></Image>
                )}
              </section>
              <section className={styles.pokemon_section}>
                <Types types={pokemonItem.types} />
                {pokemonItem?.evolves_from_species && (
                  <Evolutions evolutions={pokemonItem?.evolves_from_species} />
                )}
              </section>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </main>
    </PageTransitionLayout>
  );
}
