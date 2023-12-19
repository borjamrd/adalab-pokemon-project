import styles from "@/styles/pokemon.module.scss";

export default function Types({ types }: any) {
  return (
    <div className={styles.types_section}>
      {types?.map((type: any, i: number) => (
        <p className={styles.types} key={i}>
          {" "}
          {type.type?.name?.toUpperCase()}
        </p>
      ))}
    </div>
  );
}
