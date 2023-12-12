export default function Evolution({ evolution }: any) {
  return (
    <div>
      <p>Evoluciona de:</p>
      <p>{evolution.chain.species.name}</p>
    </div>
  );
}
