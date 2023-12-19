import Providers from "@/context/Providers";
import "@/styles/globals.scss";
import styles from "@/styles/page.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon",
  description: "PokeApi created for Adalab's fullstack proccess",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.dots}>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
