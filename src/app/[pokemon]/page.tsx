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

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { getPokemon, loading, pokemon: pokemonItem } = useGlobalContext();

  useEffect(() => {
    if (params.pokemon) {
      getPokemon(params.pokemon);
    }
  }, [params.pokemon]);

  return (
    <PageTransitionLayout>
      {!loading && pokemonItem ? (
        <main className={styles.main}>
          <button onClick={() => router.back()}>Go Back</button>
          {pokemonItem.sprites?.other.dream_world.front_default && (
            <Image
              src={pokemonItem.sprites?.other.dream_world.front_default}
              width={400}
              height={400}
              alt={pokemonItem.name}
            ></Image>
          )}

          <Types types={pokemonItem.types} />
        </main>
      ) : (
        <Loading />
      )}
    </PageTransitionLayout>
  );
}
