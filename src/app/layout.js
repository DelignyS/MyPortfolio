import { Inter } from "next/font/google";
import "./globals.css";

import Transition from "@/components/transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sylvain Deligny - Portfolio",
  description: "A quiet good animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Transition> {children} </Transition>
      </body>
    </html>
  );
}
