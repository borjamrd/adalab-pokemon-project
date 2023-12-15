export default function Evolutions({
  evolutions,
}: {
  evolutions: { name: string; url: string };
}) {
  return (
    <div>
      <p>Evoluciona de:</p>

      {evolutions.name}
    </div>
  );
}
