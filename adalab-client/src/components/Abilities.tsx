import { firstLetterToUpperCase } from "@/utils/utils";
import styles from "@/styles/pokemon.module.scss";
import { Pokemon } from "@/models/models";
export default function Abilities({
  abilities,
}: {
  abilities: Pokemon["abilities"];
}) {
  return (
    <div className={styles.evolution_section}>
      <p>Abilidades:</p>
      {abilities?.map((ability: any) => {
        return <h4 key={ability.ability.name}>{ability.ability.name}</h4>;
      })}
    </div>
  );
}
