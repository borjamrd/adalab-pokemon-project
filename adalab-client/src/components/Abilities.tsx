import { firstLetterToUpperCase } from "@/utils/utils";
import styles from "@/styles/pokemon.module.scss";
export default function Abilities({ abilities }: any) {
  return (
    <div className={styles.evolution_section}>
      <p>Abilidades:</p>
      {abilities?.map((ability: any) => {
        return <h4 key={ability.ability.name}>{ability.ability.name}</h4>;
      })}
    </div>
  );
}
