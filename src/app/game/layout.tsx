import GameLayout from "@/layouts/game/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KU Trò chơi Casino",
  description: "KU Trò chơi Casino top 1 ",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GameLayout>{children}</GameLayout>;
}
