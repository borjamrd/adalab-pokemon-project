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
                <div>
                  <div>
                    <h1>{pokemonItem.name}</h1>
                    <div>#{pokemonItem.id}</div>
                  </div>
                  <div>
                    <div>Height: {pokemonItem.height}</div>
                    <div>Weight: {pokemonItem.weight}</div>
                  </div>
                  <div>
                    <div>Base Experience: {pokemonItem.base_experience}</div>
                    <div>Capture rate: {pokemonItem.capture_rate}</div>
                  </div>
                </div>
                <Types types={pokemonItem.types} />
                {pokemonItem?.evolves_from_species && (
                  <Evolutions evolutions={pokemonItem?.evolves_from_species} />
                )}

                {pokemonItem.abilities?.map((ability: any) => {
                  return (
                    <div key={ability.ability.name}>{ability.ability.name}</div>
                  );
                })}
              </section>
            </div>
            <div className={styles.pokemon_sections}>
              <table>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemonItem.stats?.map((stat: any) => {
                    return (
                      <tr key={stat.stat.name}>
                        <td>{stat.stat.name}</td>
                        <td>{stat.base_stat}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>Move</th>
                    <th>Level</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemonItem.moves?.map((move: any) => {
                    return (
                      <tr key={move.move.name}>
                        <td>{move.move.name}</td>
                        <td>
                          {move.version_group_details[0].level_learned_at}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </main>
    </PageTransitionLayout>
  );
}
