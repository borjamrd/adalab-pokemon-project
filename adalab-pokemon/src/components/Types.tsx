export default function Types({ types }: any) {
  return types?.map((type: any, i: number) => <p key={i}> {type.type.name}</p>);
}
