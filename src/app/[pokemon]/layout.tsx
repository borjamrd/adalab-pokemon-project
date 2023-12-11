import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon",
  description: "PokeApi created for Adalab's fullstack proccess",
};

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
