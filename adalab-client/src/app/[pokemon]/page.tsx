"use client";
import { PageTransitionLayout } from "@/components/PageTransitionsLayout";
import { useGlobalContext } from "@/context/Global";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import styles from "@/styles/pokemon.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Types from "@/components/Types";
import Loading from "@/components/Loading";
import Evolutions from "@/components/Evolutions";
import { firstLetterToUpperCase } from "@/utils/utils";
import Abilities from "@/components/Abilities";
import { Pokemon } from "@/models/models";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const {
    getPokemon,
    loading,
    pokemon: pokemonItem,
  }: {
    getPokemon: any;
    loading: boolean;
    pokemon: Pokemon;
  } = useGlobalContext();

  useEffect(() => {
    if (params.pokemon) {
      getPokemon(params.pokemon);
    }
  }, [params.pokemon]);

  return (
    <PageTransitionLayout>
      <main className={styles.main}>
        {!loading && pokemonItem ? (
          <div className={styles.pokemon_info}>
            <button className={styles.go_back} onClick={() => router.back()}>
              Volver al listado
            </button>
            <div className={styles.pokemon_sections}>
              <section className={styles.pokemon_section}>
                {pokemonItem.sprites?.other?.dream_world.front_default && (
                  <Image
                    src={pokemonItem.sprites?.other.dream_world.front_default}
                    width={250}
                    height={250}
                    alt={pokemonItem.name}
                  ></Image>
                )}
              </section>
              <section className={styles.pokemon_section}>
                <div>
                  <div>
                    <h1>{pokemonItem.name}</h1>
                    <Types types={pokemonItem.types} />
                    <div className={styles.pokemon_main_info}>
                      <ul>
                        <li>Height: {pokemonItem.height}</li>
                        <li>Weight: {pokemonItem.weight}</li>
                        <li>Base Experience: {pokemonItem.base_experience}</li>
                        <li>Capture rate: {pokemonItem.capture_rate}</li>
                      </ul>
                      <div>
                        {pokemonItem?.evolves_from_species && (
                          <Evolutions
                            evolutions={pokemonItem?.evolves_from_species}
                          />
                        )}
                      </div>
                      <div>
                        {pokemonItem.abilities && (
                          <Abilities abilities={pokemonItem.abilities} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={styles.pokemon_sections}>
              <div className={styles.pokemon_table}>
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
              </div>
              <div className={styles.pokemon_table}>
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
          </div>
        ) : (
          <Loading />
        )}
      </main>
    </PageTransitionLayout>
  );
}
