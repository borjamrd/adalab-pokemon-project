import { firstLetterToUpperCase } from "@/utils/utils";
import styles from "@/styles/pokemon.module.scss";
export default function Evolutions({
  evolutions,
}: {
  evolutions: { name: string; url: string };
}) {
  return (
    <div className={styles.evolution_section}>
      <p>Evoluciona de:</p>
      <h4>{firstLetterToUpperCase(evolutions.name)}</h4>
    </div>
  );
}
